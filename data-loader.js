(function(global){
'use strict';
const DEFAULT_MANIFEST='manifest.json';
const BUILD_TOKEN='json-b370';
const ESSENTIAL_PATHS=new Set(['core.json','cast.json','credits.json','sources.json']);
function cuePath(path){return String(path||'').split('?')[0].split('#')[0];}
function isJsonFile(file){const path=String(file.path||'');return file.kind==='data'||file.kind==='sources'||/\.json(?:$|[?#])/i.test(path);}
function isSourceFile(file,data){const path=cuePath(file.path);return file.kind==='sources'||path==='sources.json'||(Array.isArray(file.collections)&&file.collections.includes('values')&&Array.isArray(data&&data.values));}
async function cueFetchJson(path,cache,timeoutMs){
  const join=path.includes('?')?'&':'?';
  const url=path+join+'v='+BUILD_TOKEN;
  const timeout=Number(timeoutMs||45000);
  const controller=(typeof AbortController!=='undefined')?new AbortController():null;
  const timer=controller?setTimeout(()=>controller.abort(),timeout):null;
  try{
    const res=await fetch(url,{cache:cache||'default',signal:controller?controller.signal:undefined});
    if(!res.ok)throw new Error(`HTTP ${res.status} loading ${path}`);
    return await res.json();
  }catch(err){
    if(err&&err.name==='AbortError')throw new Error(`Timed out loading ${path}`);
    throw err;
  }finally{if(timer)clearTimeout(timer);}
}
function reviveSources(node,sources){
  if(Array.isArray(node)){node.forEach(v=>reviveSources(v,sources));return node;}
  if(!node||typeof node!=='object')return node;
  if(Object.prototype.hasOwnProperty.call(node,'sourceRef')){
    const ref=node.sourceRef;
    if(ref>=0&&ref<sources.length){node.source=sources[ref];}
    delete node.sourceRef;
  }
  Object.values(node).forEach(v=>reviveSources(v,sources));
  return node;
}
function restoreCompanions(db){
  const links=Array.isArray(db.companionLinks)?db.companionLinks:[];
  links.forEach(link=>{
    const perf=db.performances&&db.performances[String(link.performanceId)];
    const person=db.people&&db.people[String(link.personId)];
    if(!perf||!person)return;
    if(!Array.isArray(perf.attendedWith))perf.attendedWith=[];
    const name=link.displayName||person.name||person.displayName||`Person ${link.personId}`;
    if(!perf.attendedWith.includes(name))perf.attendedWith.push(name);
  });
}

function mergeOptionalPart(db,data,file){
  const path=cuePath(file&&file.path||'');
  if(/pruned-records/i.test(path)){
    if(!Array.isArray(db.prunedRecords))db.prunedRecords=[];
    db.prunedRecords.push({path,data});
    return db;
  }
  const safe={...(data||{})};
  // Optional sidecar files must never replace canonical core dictionaries.
  ['people','roles','performances','shows','venues','organizations','appearances','meta','entities','entityCreditLinks','creativeCredits','companionLinks'].forEach(k=>{delete safe[k];});
  Object.assign(db,safe);
  return db;
}
async function loadFiles(files,base,cache,onProgress,phase,totalOffset,totalCount){
  let done=0;
  return Promise.all(files.map(async file=>{
    const data=await cueFetchJson(base+file.path,cache,file.timeoutMs||60000);
    done++;
    if(typeof onProgress==='function')onProgress({phase,file:file.path,loaded:totalOffset+done,total:totalCount});
    return {file,data};
  }));
}
async function loadCuebookData(options={}){
  const cache=options.cache||'default';
  const onProgress=options.onProgress;
  const manifestPath=options.manifest||DEFAULT_MANIFEST;
  if(typeof onProgress==='function')onProgress({phase:'manifest',file:manifestPath,loaded:0,total:1});
  const manifest=await cueFetchJson(manifestPath,cache,30000);
  if(manifest.schemaVersion!==13)throw new Error(`Unsupported Cuebook schema ${manifest.schemaVersion}`);
  const base=manifestPath.slice(0,manifestPath.lastIndexOf('/')+1);
  const jsonFiles=(manifest.files||[]).filter(isJsonFile);
  const sourceMeta=jsonFiles.find(f=>f.kind==='sources'||cuePath(f.path)==='sources.json');
  if(!sourceMeta)throw new Error('Cuebook manifest is missing sources.json');
  const essential=jsonFiles.filter(f=>ESSENTIAL_PATHS.has(cuePath(f.path))||f===sourceMeta);
  const optional=jsonFiles.filter(f=>!essential.includes(f));
  const loaded=await loadFiles(essential,base,cache,onProgress,'essential',0,essential.length);
  const sourcePart=loaded.find(x=>isSourceFile(x.file,x.data));
  if(!sourcePart)throw new Error('Cuebook manifest is missing the source dictionary');
  const sources=Array.isArray(sourcePart.data)?sourcePart.data:(sourcePart.data.values||sourcePart.data.sources||[]);
  if(!Array.isArray(sources))throw new Error('Cuebook source dictionary has an invalid format');
  const db={};
  loaded.filter(x=>x!==sourcePart).forEach(({data})=>Object.assign(db,reviveSources(data,sources)));
  restoreCompanions(db);
  if(!db.entities)db.entities={};
  if(db.meta){db.meta.loadedFromManifest=manifestPath;db.meta.splitFileCount=manifest.files.length;db.meta.optionalFilesPending=optional.length;}
  // Do not block first paint on large archive/program JSON files. They are merged in the background.
  if(optional.length&&options.loadOptional!==false){
    db.__optionalLoadPromise=Promise.allSettled(optional.map(async file=>{
      const data=await cueFetchJson(base+file.path,cache,file.timeoutMs||90000);
      if(typeof onProgress==='function')onProgress({phase:'optional',file:file.path,loaded:null,total:optional.length});
      return {file,data:reviveSources(data,sources)};
    })).then(results=>{
      const failed=[];
      results.forEach(r=>{if(r.status==='fulfilled')mergeOptionalPart(db,r.value.data,r.value.file);else failed.push(String(r.reason&&r.reason.message||r.reason));});
      if(db.meta){db.meta.optionalFilesPending=0;db.meta.optionalFilesFailed=failed;}
      return {failed};
    });
  }
  return db;
}
global.loadCuebookData=loadCuebookData;
global.CuebookDataLoader={load:loadCuebookData,reviveSources,restoreCompanions,mergeOptionalPart};
try{globalThis.loadCuebookData=loadCuebookData;globalThis.CuebookDataLoader=global.CuebookDataLoader;}catch(_){}
})(window);

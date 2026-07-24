(function(global){
'use strict';
const DEFAULT_MANIFEST='manifest.json';
async function cueFetchJson(path,cache){
  const join=path.includes('?')?'&':'?';
  const res=await fetch(path+join+'v=json-b171',{cache:cache||'no-store'});
  if(!res.ok)throw new Error(`HTTP ${res.status} loading ${path}`);
  return res.json();
}
function reviveSources(node,sources){
  if(Array.isArray(node)){node.forEach(v=>reviveSources(v,sources));return node;}
  if(!node||typeof node!=='object')return node;
  if(Object.prototype.hasOwnProperty.call(node,'sourceRef')){
    const ref=node.sourceRef;
    if(ref<0||ref>=sources.length)throw new Error(`Invalid sourceRef ${ref}`);
    node.source=sources[ref];
    delete node.sourceRef;
  }
  Object.values(node).forEach(v=>reviveSources(v,sources));
  return node;
}
function restoreCompanions(db){
  const links=Array.isArray(db.companionLinks)?db.companionLinks:[];
  links.forEach(link=>{
    const perf=db.performances?.[String(link.performanceId)];
    const person=db.people?.[String(link.personId)];
    if(!perf||!person)return;
    if(!Array.isArray(perf.attendedWith))perf.attendedWith=[];
    perf.attendedWith.push(link.displayName||person.name||person.displayName||`Person ${link.personId}`);
  });
}
async function loadCuebookData(options={}){
  const cache=options.cache||'no-store';
  const manifestPath=options.manifest||DEFAULT_MANIFEST;
  const manifest=await cueFetchJson(manifestPath,cache);
  if(manifest.schemaVersion!==13)throw new Error(`Unsupported Cuebook schema ${manifest.schemaVersion}`);
  const base=manifestPath.slice(0,manifestPath.lastIndexOf('/')+1);
  const loaded=await Promise.all(manifest.files.map(async file=>({file,data:await cueFetchJson(base+file.path,cache)})));
  const sourcePart=loaded.find(x=>
    x.file.kind==='sources' ||
    x.file.path==='sources.json' ||
    (Array.isArray(x.file.collections) && x.file.collections.includes('values') && Array.isArray(x.data?.values))
  );
  if(!sourcePart)throw new Error('Cuebook manifest is missing the source dictionary');
  const sources=Array.isArray(sourcePart.data)?sourcePart.data:(sourcePart.data.values||sourcePart.data.sources||[]);
  if(!Array.isArray(sources))throw new Error('Cuebook source dictionary has an invalid format');
  const db={};
  loaded.filter(x=>x!==sourcePart).forEach(({data})=>Object.assign(db,data));
  reviveSources(db,sources);
  restoreCompanions(db);
  if(!db.entities)db.entities={};
  if(db.meta){db.meta.loadedFromManifest=manifestPath;db.meta.splitFileCount=manifest.files.length;}
  return db;
}
global.loadCuebookData=loadCuebookData;
global.CuebookDataLoader={load:loadCuebookData,reviveSources,restoreCompanions};
})(window);

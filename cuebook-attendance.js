(function(global){
'use strict';
const KEY='cuebook-attendance-drafts-v1';
const FIELDS=['date','time','seatLocation','ticketPrice','ticketCurrency','ticketType','attendedWith','companionStatus','seatNote'];
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
function validate(patch){
 if(!patch||typeof patch!=='object'||Array.isArray(patch))throw Error('Invalid correction');
 const out={};
 for(const k of Object.keys(patch)){
  if(!FIELDS.includes(k))throw Error('Unsupported field: '+k);
  const v=patch[k];
  if(k==='date'){if(!/^\d{4}-\d{2}-\d{2}$/.test(v)||new Date(v+'T12:00:00Z').toISOString().slice(0,10)!==v)throw Error('Enter a real date');}
  else if(k==='ticketPrice'){if(v!==null&&(typeof v!=='number'||!Number.isFinite(v)||v<0))throw Error('Price must be zero or more, or blank');}
  else if(k==='attendedWith'){if(!Array.isArray(v)||v.some(s=>typeof s!=='string'||s.length>150))throw Error('Invalid companions');}
  else if(k==='seatLocation'){if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).some(s=>!['section','row','seat','display'].includes(s))||Object.values(v).some(s=>typeof s!=='string'||s.length>200))throw Error('Invalid seat');}
  else if(typeof v!=='string'||v.length>2000)throw Error('Invalid '+k);
  out[k]=v;
 }
 return out;
}
function drafts(){try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(_){return {};}}
function save(id,patch){const d=drafts();d[String(id)]=validate(patch);localStorage.setItem(KEY,JSON.stringify(d));}
function clear(id){const d=drafts();delete d[String(id)];localStorage.setItem(KEY,JSON.stringify(d));}
function merged(db){const out={...(db.attendanceOverrides||{})};for(const [id,patch] of Object.entries(drafts()))out[id]={...(out[id]||{}),...patch};return out;}
function apply(db){
 const published=db.attendanceOverrides||{},local=drafts();
 for(const [id,patch] of Object.entries(merged(db))){
  const perf=db.performances?.[id];if(!perf)continue;
  let safe;try{safe=validate(patch);}catch(e){console.warn('Skipped invalid attendance correction',id,e.message);continue;}
  const previousType=String(perf.ticketType||'').toLowerCase(),previousSource=String(perf.ticketSource||'').toLowerCase();
  Object.assign(perf,safe);
  if(own(safe,'ticketType')&&(previousSource===previousType||['rush','lottery','comp','paid','free'].includes(previousSource)))perf.ticketSource=safe.ticketType;
  perf.attendanceCorrectedFields=Object.keys(safe);
  if(own(safe,'ticketPrice')&&safe.ticketPrice===null){delete perf.price;delete perf.ticketNote;}
  if(own(safe,'attendedWith')){
   perf.companions=[...safe.attendedWith];
   const names=new Map();for(const p of Object.values(db.people||{}))for(const name of [p.name||p.displayName,...(p.aliases||[])])if(name)names.set(String(name).toLowerCase(),p);
   db.companionLinks=(db.companionLinks||[]).filter(l=>String(l.performanceId)!==id);
   for(const name of safe.attendedWith){const p=names.get(name.toLowerCase());db.companionLinks.push({performanceId:Number(id),personId:p?.id||null,displayName:name});}
   perf.performanceMetadata={...(perf.performanceMetadata||{}),attendedSolo:safe.companionStatus==='alone',solo:safe.companionStatus==='alone'};
   if(perf.performanceMetadata.companion==='Solo')delete perf.performanceMetadata.companion;
  }
  if(own(safe,'date')||own(safe,'time')||own(safe,'seatLocation')||own(safe,'ticketPrice')||own(safe,'ticketCurrency')||own(safe,'ticketType')||own(safe,'attendedWith'))perf.attendanceCorrectionApplied=true;
  if(own(local,id))perf.attendanceDraft=true;
 }
 return db;
}
global.CueAttendance={validate,drafts,save,clear,merged,apply,fields:FIELDS};
})(window);

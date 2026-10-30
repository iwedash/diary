'use strict';
const CACHE='cuebook-json-b428';
const base=new URL('./',self.location.href);
let saving;
function key(url){const u=new URL(url,base);u.search='';u.hash='';return u.href;}
async function saveApp(){
 if(saving)return saving;
 saving=(async()=>{
  const response=await fetch(new URL('manifest.json',base),{cache:'no-store'});if(!response.ok)throw Error('Manifest unavailable');const manifest=await response.json();
  if(manifest.build!=='json-b428')throw Error('App files are still updating. Try again shortly.');
  const entries=[{path:'manifest.json'},...(manifest.files||[])],cache=await caches.open(CACHE);
  for(let i=0;i<entries.length;i+=4)await Promise.all(entries.slice(i,i+4).map(async file=>{const u=new URL(file.path,base),controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);try{const r=await fetch(u,{cache:'reload',signal:controller.signal});if(!r.ok)throw Error('Could not save '+file.path);if(file.sha256&&file.path!=='attendance-overrides.json'){const digest=await crypto.subtle.digest('SHA-256',await r.clone().arrayBuffer()),hash=[...new Uint8Array(digest)].map(n=>n.toString(16).padStart(2,'0')).join('');if(hash!==file.sha256)throw Error('File is still updating: '+file.path);}await cache.put(key(u),r);}finally{clearTimeout(timer);}}));
  await cache.put(new URL('offline-ready',base),new Response(new Date().toISOString()));
  for(const name of await caches.keys())if(name.startsWith('cuebook-json-')&&name!==CACHE)await caches.delete(name);
 })();try{return await saving;}finally{saving=null;}
}
self.addEventListener('install',event=>event.waitUntil(saveApp().then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('message',event=>{if(event.data?.type==='CACHE_APP')event.waitUntil(saveApp().then(()=>event.ports[0]?.postMessage({ok:true})).catch(e=>event.ports[0]?.postMessage({ok:false,error:e.message})));});
self.addEventListener('fetch',event=>{
 const u=new URL(event.request.url);if(event.request.method!=='GET'||u.origin!==base.origin||!u.pathname.startsWith(base.pathname)||u.pathname.endsWith('/sw.js'))return;
 event.respondWith((async()=>{const cache=await caches.open(CACHE);let target=u.pathname===base.pathname?new URL('index.html',base).href:key(u);const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4000);
  try{const r=await fetch(event.request,{signal:controller.signal});if(r.ok){await cache.put(target,r.clone());return r;}const stored=await cache.match(target);return stored||r;}
  catch(error){const stored=await cache.match(target);if(stored)return stored;throw error;}
  finally{clearTimeout(timer);}
 })());
});

// Bump the cache when publishing a new app version. Saved user data lives in localStorage.
const CACHE='leantrack-v6';
const FILES=['./','./index.html','./dashboard.css','./visuals.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png',"./photos/calf.jpg","./photos/chest.jpg","./photos/chickenpotato.jpg","./photos/chickenrice.jpg","./photos/chili.jpg","./photos/core.jpg","./photos/cottage.jpg","./photos/curl.jpg","./photos/deadlift.jpg","./photos/eggs.jpg","./photos/incline.jpg","./photos/legcurl.jpg","./photos/legpress.jpg","./photos/mobility.jpg","./photos/oats.jpg","./photos/pasta.jpg","./photos/pull.jpg","./photos/row.jpg","./photos/shake.jpg","./photos/shoulder.jpg","./photos/squat.jpg","./photos/taco.jpg","./photos/toast.jpg","./photos/treadmill.jpg","./photos/triceps.jpg","./photos/wrap.jpg","./photos/yogurt.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('leantrack-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(async response=>{
      // Keep the offline page in step with successful online navigations.
      if(response.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',response.clone())}
      return response;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

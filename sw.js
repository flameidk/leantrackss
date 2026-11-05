// Bump the cache when publishing a new app version. Saved user data lives in localStorage.
const CACHE='leantrack-v12';
const FILES=["./","./index.html","./dashboard.css?v=12","./backup.js?v=12","./nutrition.js?v=12","./visuals.js?v=12","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./photos/cable-crunch-0.jpg","./photos/cable-crunch-1.jpg","./photos/verified-chest-0.jpg","./photos/verified-chest-1.jpg","./photos/verified-incline-0.jpg","./photos/verified-incline-1.jpg","./photos/verified-triceps-0.jpg","./photos/verified-triceps-1.jpg","./photos/verified-pull-0.jpg","./photos/verified-pull-1.jpg","./photos/verified-row-0.jpg","./photos/verified-row-1.jpg","./photos/verified-curl-0.jpg","./photos/verified-curl-1.jpg","./photos/verified-legpress-0.jpg","./photos/verified-legpress-1.jpg","./photos/verified-legcurl-0.jpg","./photos/verified-legcurl-1.jpg","./photos/verified-calf-0.jpg","./photos/verified-calf-1.jpg","./photos/verified-shoulder-0.jpg","./photos/verified-shoulder-1.jpg","./photos/verified-squat-0.jpg","./photos/verified-squat-1.jpg","./photos/verified-deadlift-0.jpg","./photos/verified-deadlift-1.jpg","./photos/verified-walk-0.jpg","./photos/verified-walk-1.jpg","./photos/verified-mobility-1.jpg","./photos/verified-child-0.jpg","./photos/oats.jpg","./photos/yogurt.jpg","./photos/eggs.jpg","./photos/chickenrice.jpg","./photos/chickenpotato.jpg","./photos/wrap.jpg","./photos/pasta.jpg","./photos/chili.jpg","./photos/shake.jpg","./photos/cottage.jpg","./photos/meal-taco-bowl.jpg","./photos/meal-toast.jpg","./photos/meal-yogurt-nutbutter.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('leantrack-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    // The installed cache contains one complete app version. Do not replace only its HTML.
    e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

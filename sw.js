// Bump the cache when publishing a new app version. Saved user data lives in localStorage.
const CACHE='leantrack-v10';
const FILES=["./","./index.html","./dashboard.css?v=10","./visuals.js?v=10","./nutrition.js?v=10","./backup.js?v=10","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./photos/cable-crunch-0.jpg","./photos/cable-crunch-1.jpg","./photos/verified-chest-0.jpg","./photos/verified-chest-1.jpg","./photos/verified-incline-0.jpg","./photos/verified-incline-1.jpg","./photos/verified-triceps-0.jpg","./photos/verified-triceps-1.jpg","./photos/verified-pull-0.jpg","./photos/verified-pull-1.jpg","./photos/verified-row-0.jpg","./photos/verified-row-1.jpg","./photos/verified-curl-0.jpg","./photos/verified-curl-1.jpg","./photos/verified-legpress-0.jpg","./photos/verified-legpress-1.jpg","./photos/verified-legcurl-0.jpg","./photos/verified-legcurl-1.jpg","./photos/verified-calf-0.jpg","./photos/verified-calf-1.jpg","./photos/verified-shoulder-0.jpg","./photos/verified-shoulder-1.jpg","./photos/verified-squat-0.jpg","./photos/verified-squat-1.jpg","./photos/verified-deadlift-0.jpg","./photos/verified-deadlift-1.jpg","./photos/verified-walk-0.jpg","./photos/verified-walk-1.jpg","./photos/verified-mobility-1.jpg","./photos/verified-child-0.jpg","./photos/ingredient-eggs.jpg","./photos/ingredient-oats.jpg","./photos/ingredient-strawberries.jpg","./photos/ingredient-yogurt.jpg","./photos/ingredient-chicken.jpg","./photos/ingredient-rice.jpg","./photos/ingredient-broccoli.jpg","./photos/ingredient-potatoes.jpg","./photos/ingredient-beans.jpg","./photos/ingredient-spinach.jpg","./photos/ingredient-banana.jpg","./photos/ingredient-apple.jpg","./photos/ingredient-almonds.jpg","./photos/ingredient-cottage.jpg","./photos/ingredient-bread.jpg","./photos/ingredient-peanutbutter.jpg","./photos/ingredient-pasta.jpg","./photos/ingredient-lettuce.jpg"];
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

const CACHE_NAME = "notesphere-cache-v1";
const ASSETS = [
  "index.html",
  "manifest.json",
  "92.png",
  "12.png",
  "https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
];

// Install SW + Cache basic shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((r) => r || fetch(event.request))
  );
});

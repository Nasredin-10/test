const CACHE_NAME = 'prayer-times-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  'https://img.icons8.com/ios/512/islamic/prayer.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

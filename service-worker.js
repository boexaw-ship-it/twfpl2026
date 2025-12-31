const cacheName = 'twfpl-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/news.html',
  '/highlights.html',
  '/css/style.css',
  '/js/script.js',
  '/images/banner.jpg',
  '/images/news1.jpg',
  '/images/player1.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assetsToCache)));
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(res => res || fetch(evt.request)));
});
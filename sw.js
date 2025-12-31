// TW FPL Service Worker

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Basic fetch (no cache – safe)
self.addEventListener("fetch", (event) => {
  // default browser fetch
});
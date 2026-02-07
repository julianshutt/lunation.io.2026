// Empty service worker to prevent 404 errors
// This can be extended in the future for offline caching if needed

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

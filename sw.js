/* Minimal service worker for the Hermes WebUI front door.
 * It caches NOTHING and only exists so the page is installable as an app
 * (Chrome offers "Install app" only for pages with a manifest plus a service
 * worker that has a fetch handler). Every request goes straight to the network.
 */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});

// Self-retiring service worker.
// An earlier version cached this tracker cache-first, which could serve a stale or blank copy
// on the phone. This version installs, clears every cache, unregisters itself, and reloads open
// tabs so the page is always fetched fresh from the network. No fetch handler = no interception.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((c) => c.navigate(c.url));
    } catch (err) {}
  })());
});

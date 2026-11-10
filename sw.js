/* Everyday English service worker: makes the site installable and usable
   offline.

   Strategy: NETWORK-FIRST for everything, falling back to the cache only
   when the network fails. Online users always get the latest pages (no
   "stuck on an old version" problem); offline users get the last copy.

   On install it reads index.html and pre-caches every <script src> it loads,
   so all 38 topics work offline even if they were never opened. New data
   files are picked up automatically; bump CACHE only if this file's logic
   or the fixed SHELL list changes. */
const CACHE = 'ee-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-48.png',
];

async function precache() {
  const cache = await caches.open(CACHE);
  let scripts = [];
  try {
    const res = await fetch('./index.html', { cache: 'no-store' });
    const html = await res.clone().text();
    await cache.put('./index.html', res);
    scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)]
      .map(m => m[1])
      .filter(src => !/^(https?:)?\/\//.test(src))
      .map(src => './' + src.replace(/^\.?\//, ''));
  } catch (e) { /* offline during install: cache what we can */ }
  // One failed file shouldn't block installation.
  await Promise.all([...SHELL, ...scripts].map(u => cache.add(u).catch(() => {})));
}

self.addEventListener('install', event => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true }).then(hit => {
          if (hit) return hit;
          // Offline navigation to an uncached URL: fall back to the app.
          if (req.mode === 'navigate') return caches.match('./index.html');
          return Response.error();
        })
      )
  );
});

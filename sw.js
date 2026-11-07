// Web sürümü için çevrimdışı önbellek. Uygulama dosyaları önbellekten, görseller ağdan gelir.
const SURUM = 'cevir-pisir-v2';
const DOSYALAR = ['./', 'index.html', 'css/stil.css', 'js/uygulama.js', 'js/hesap.js',
  'js/veri/besinler.js', 'js/veri/tarifler.js', 'js/veri/tarifler-ek.js', 'js/veri/tarifler-ek2.js', 'manifest.webmanifest', 'ikon/ikon.svg'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(SURUM).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((k) => Promise.all(k.filter((x) => x !== SURUM).map((x) => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((r) => {
    const kopya = r.clone(); caches.open(SURUM).then((c) => c.put(e.request, kopya)); return r;
  }).catch(() => caches.match(e.request)));
});

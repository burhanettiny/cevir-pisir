// Web sürümü için çevrimdışı önbellek. Uygulama dosyaları önbellekten, görseller ağdan gelir.
const SURUM = 'cevir-pisir-v4';
const DOSYALAR = ['./', 'index.html', 'css/stil.css', 'js/uygulama.js', 'js/hesap.js',
  'js/veri/besinler.js', 'js/veri/tarifler.js', 'js/veri/tarifler-ek.js', 'js/veri/tarifler-ek2.js', 'js/veri/gorseller.js', 'js/ikonlar.js',
  'js/veri/bolge/akdeniz-marmara.js', 'js/veri/bolge/ek-turk.js', 'js/veri/bolge/genel-1.js', 'js/veri/bolge/genel-2.js', 'js/veri/bolge/guneydogu-osmanli.js', 'js/veri/bolge/icanadolu-dogu.js', 'js/veri/bolge/karadeniz-ege.js', 'js/veri/dunya/avrupa.js', 'js/veri/dunya/diger.js', 'js/veri/dunya/uzakdogu.js', 'js/veri/tarifler-bolge.js', 'js/veri/tarifler-dunya.js', 'manifest.webmanifest', 'ikon/ikon.svg'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(SURUM).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((k) => Promise.all(k.filter((x) => x !== SURUM).map((x) => caches.delete(x)))).then(() => self.clients.claim())));
// Fotoğraflar ve yazı tipi ilk kullanımda önbelleğe alınır (aşağıdaki fetch işleyicisi).
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((r) => {
    const kopya = r.clone(); caches.open(SURUM).then((c) => c.put(e.request, kopya)); return r;
  }).catch(() => caches.match(e.request)));
});

import {
  TARIFLER, KATEGORILER, SOFRALAR, REYONLAR, MARKETLER, BESINLER, HEDEF,
  tarifBul, kategoriBul, kategoriTarifleri, besinDegeri, dengeYorumu, olcekle, gramYaz,
  alisverisListesi, rastgeleSec, sofraOlustur, yuvaYenile, menuToplami, aramaAdi,
  youtubeUrl, vikipediUrl, aramaUrl, listeMetni, hazimOnerisi,
  diyabetDurumu, menuAnalizi, diyabetAlternatifi, SIPARIS_ONERILERI, SIPARIS_SITELERI,
  tarifEslesmesi, elimdekilerle, dolapMalzemeleri,
} from './hesap.js';
import { GORSELLER } from './veri/gorseller.js';
import { ikon } from './ikonlar.js';

// ───────── Kalıcı durum (yalnızca bu cihazda) ─────────
const oku = (k, v) => { try { const x = localStorage.getItem(k); return x ? JSON.parse(x) : v; } catch { return v; } };
const yaz = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* yok say */ } };

const D = {
  liste: oku('cp_liste', []),             // [{ tarifId, kisi }]
  evde: new Set(oku('cp_evde', null) ?? Object.keys(BESINLER).filter((k) => BESINLER[k].d)),
  alindi: new Set(oku('cp_alindi', [])),
  fav: oku('cp_fav', []),
  kisi: oku('cp_kisi', {}),
  sofra: oku('cp_sofra', {}),             // sofraId → { menu, kisi, diyabet, evde }
};
const kaydet = () => {
  yaz('cp_liste', D.liste); yaz('cp_evde', [...D.evde]); yaz('cp_alindi', [...D.alindi]);
  yaz('cp_fav', D.fav); yaz('cp_kisi', D.kisi); yaz('cp_sofra', D.sofra);
};

// ───────── Yardımcılar ─────────
const $ = (s, el = document) => el.querySelector(s);
const ekran = $('#ekran');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const yerli = window.Capacitor?.isNativePlatform?.() ?? false;
const eklenti = (ad) => window.Capacitor?.Plugins?.[ad];
const emojisiz = (s) => s.replace(/^[\p{Extended_Pictographic}\u{FE0F}\u{200D}\s]+/u, '');

const KAT_IKON = { corba: 'soup', et: 'beef', tavuk: 'drumstick', sebze: 'leafy-green', garnitur: 'wheat', meze: 'salad', tatli: 'cake-slice' };
const SOFRA_IKON = { davet: 'party-popper', iftar: 'moon', 'hafta-ici': 'house' };

function bildir(metin) {
  const b = $('#bildirim');
  b.textContent = metin; b.classList.add('acik');
  clearTimeout(bildir.z); bildir.z = setTimeout(() => b.classList.remove('acik'), 2200);
}
function titret(ms = 15) { try { navigator.vibrate?.(ms); } catch { /* yok */ } }

async function kopyala(metin) {
  try {
    const c = eklenti('Clipboard');
    if (c) await c.write({ string: metin }); else await navigator.clipboard.writeText(metin);
    return true;
  } catch { return false; }
}
async function paylas(baslik, metin) {
  try {
    const s = eklenti('Share');
    if (s) { await s.share({ title: baslik, text: metin, dialogTitle: baslik }); return; }
    if (navigator.share) { await navigator.share({ title: baslik, text: metin }); return; }
  } catch (e) { if (e?.name === 'AbortError' || /cancel/i.test(e?.message ?? '')) return; }
  if (await kopyala(metin)) bildir('Panoya kopyalandı');
}
function disAc(url) {
  if (yerli) location.href = url; else window.open(url, '_blank', 'noopener');
}
async function marketAc(marketId, aranan) {
  const m = MARKETLER.find((x) => x.id === marketId);
  await kopyala(aranan);
  bildir(`"${aranan}" kopyalandı — ${m.ad} açılıyor`);
  setTimeout(() => disAc(m.url(aranan)), 350);
}

/** Uygulama içi onay penceresi. Promise<boolean> döner. */
function onayla({ baslik, metin = '', evet = 'Tamam', hayir = 'Vazgeç', tehlike = false }) {
  const o = $('#onay');
  o.innerHTML = `<div class="onay-kutu">
      <h3>${esc(baslik)}</h3>${metin ? `<p>${esc(metin)}</p>` : ''}
      <div class="onay-dugmeler">
        <button class="dugme ikincil" data-c="0">${esc(hayir)}</button>
        <button class="dugme ${tehlike ? 'tehlike-dolu' : 'ana'}" data-c="1">${esc(evet)}</button>
      </div></div>`;
  o.hidden = false;
  requestAnimationFrame(() => o.classList.add('acik'));
  return new Promise((coz) => {
    const kapat = (sonuc) => { o.classList.remove('acik'); o.hidden = true; o.onclick = null; onayla.acik = null; coz(sonuc); };
    onayla.acik = () => kapat(false);
    o.onclick = (e) => {
      const b = e.target.closest('[data-c]');
      if (b) kapat(b.dataset.c === '1'); else if (e.target === o) kapat(false);
    };
    o.querySelector('[data-c="1"]').focus();
  });
}

// ───────── Görseller ─────────
function gorselHtml(t, sinif = '') {
  const g = GORSELLER[t.id];
  const kat = kategoriBul(t.kat);
  return g
    ? `<div class="gorsel ${sinif}" style="--renk:${kat.renk}"><img src="gorseller/yemek/${t.id}.webp" alt="${esc(t.ad)}" loading="lazy" decoding="async"></div>`
    : `<div class="gorsel yer-tutucu ${sinif}" style="--renk:${kat.renk}">${ikon(KAT_IKON[t.kat], 44)}</div>`;
}
/** Kategoriyi temsil eden ilk fotoğraflı tarif (ana ekran kartları için). */
function kategoriGorseli(katId) {
  const tercih = { corba: 'mercimek-corbasi', et: 'karniyarik', tavuk: 'tavuk-sis', sebze: 'imam-bayildi', garnitur: 'pirinc-pilavi', meze: 'humus', tatli: 'firin-sutlac' };
  const l = [tarifBul(tercih[katId]), ...kategoriTarifleri(katId)].filter(Boolean);
  return l.find((t) => GORSELLER[t.id]) ?? null;
}

const listeSayisi = () => {
  const n = D.liste.length;
  const b = $('#listeSayi'); b.hidden = !n; b.textContent = n;
};
const kucukSayi = (n) => n.toLocaleString('tr-TR');

// ───────── Yönlendirme ─────────
const rotalar = [
  [/^#?\/?$/, anaEkran, 'ana'],
  [/^#\/cevir\/([\w-]+)$/, cevirEkrani, 'ana'],
  [/^#\/tarif\/([\w-]+)$/, tarifEkrani, null],
  [/^#\/dolabim$/, dolabimEkrani, 'dolabim'],
  [/^#\/elimdekiler$/, elimdekilerEkrani, 'dolabim'],
  [/^#\/sofralar$/, sofralarEkrani, 'sofralar'],
  [/^#\/sofra\/([\w-]+)$/, sofraEkrani, 'sofralar'],
  [/^#\/favoriler$/, favorilerEkrani, 'favoriler'],
  [/^#\/liste$/, listeEkrani, 'liste'],
  [/^#\/hakkinda$/, hakkindaEkrani, null],
];
let temizle = null;
const anaSayfada = () => ['', '#', '#/'].includes(location.hash);
function yonlendir() {
  temizle?.(); temizle = null;
  kapatCekmece();
  onayla.acik?.();
  const h = location.hash || '#/';
  for (const [re, fn, sekme] of rotalar) {
    const m = h.match(re);
    if (!m) continue;
    document.querySelectorAll('nav.alt a').forEach((a) => a.classList.toggle('secili', a.dataset.sekme === sekme));
    $('#geri').hidden = anaSayfada();
    $('#ustSag').innerHTML = '';
    document.body.dataset.ekran = fn.name;
    ekran.innerHTML = '';
    window.scrollTo(0, 0);
    fn(...m.slice(1));
    listeSayisi();
    return;
  }
  location.hash = '#/';
}
$('#geri').innerHTML = ikon('chevron-left', 26);
$('#geri').onclick = () => geriGit();
document.querySelectorAll('[data-ikon]').forEach((el) => { el.innerHTML = ikon(el.dataset.ikon, 22); });
window.addEventListener('hashchange', yonlendir);
const baslik = (metin) => { $('#baslik').textContent = metin; };

function geriGit() {
  if (history.length > 1 && !anaSayfada()) history.back(); else location.hash = '#/';
}

// Android geri tuşu / geri kaydırma hareketi
async function cikisSor() {
  if (onayla.acik) return onayla.acik();
  if (!$('#cekmece').hidden) return kapatCekmece();
  if (!anaSayfada()) return geriGit();
  const cik = await onayla({ baslik: 'Çıkmak istiyor musunuz?', metin: 'Listeleriniz ve favorileriniz kaydedildi.', evet: 'Çık', hayir: 'Kal' });
  if (cik) eklenti('App')?.exitApp();
}
if (yerli) eklenti('App')?.addListener('backButton', cikisSor);

// ───────── Ana ekran ─────────
function anaEkran() {
  baslik('Çevir Pişir');
  const hazir = elimdekilerle(D.evde, 0).length;
  const birEksik = elimdekilerle(D.evde, 1).length - hazir;
  ekran.innerHTML = `
    <section class="kahraman">
      <p class="ust-yazi">${selam()}</p>
      <h2>Bugün ne yiyoruz?</h2>
      <p>Bir kategori seç, çark dönsün, ekrana dokun. Tarif, kalori ve alışveriş listesi hazır.</p>
      <a class="dugme ana buyuk" href="#/cevir/hepsi">${ikon('dices', 22)} Şansıma çevir</a>
    </section>

    <a class="dolap-kart" href="#/elimdekiler">
      <span class="dolap-ikon">${ikon('refrigerator', 26)}</span>
      <span class="dolap-yazi"><b>Elimdekilerle ne pişirsem?</b>
        <small>${hazir ? `${hazir} tarif hemen hazır` : 'Dolabını işaretle, yapabileceklerini görelim'}${birEksik > 0 ? ` · ${birEksik} tarifte 1 eksik` : ''}</small></span>
      ${ikon('chevron-right', 20, 'soluk-ikon')}
    </a>

    <div class="bolum-baslik"><h3>Kategoriler</h3><span>${TARIFLER.length} tarif</span></div>
    <section class="kategoriler">
      ${KATEGORILER.map((k) => {
        const g = kategoriGorseli(k.id);
        return `<a class="kat ${g ? 'fotolu' : ''}" href="#/cevir/${k.id}" style="--renk:${k.renk}">
          ${g ? `<img src="gorseller/yemek/${g.id}.webp" alt="" loading="lazy" decoding="async">` : ''}
          <span class="kat-ikon">${ikon(KAT_IKON[k.id], 20)}</span>
          <span class="kat-alt"><b>${k.ad}</b><small>${kategoriTarifleri(k.id).length} tarif</small></span>
        </a>`;
      }).join('')}
    </section>

    <div class="bolum-baslik"><h3>Sofra kur</h3><a href="#/sofralar">Tümü</a></div>
    <section class="sofra-kartlar">${SOFRALAR.map(sofraKarti).join('')}</section>
    <p class="dipnot"><a href="#/hakkinda">${ikon('info', 16)} Kaynaklar ve hesaplama yöntemi</a></p>`;
}
function selam() {
  const s = new Date().getHours();
  return s < 11 ? 'Günaydın' : s < 17 ? 'İyi günler' : 'İyi akşamlar';
}
function sofraKarti(s) {
  return `<a class="sofra-kart" href="#/sofra/${s.id}">
    <span class="yuvarlak-ikon">${ikon(SOFRA_IKON[s.id] ?? 'utensils', 22)}</span>
    <span class="sofra-yazi"><b>${s.ad}</b><small>${s.aciklama}</small></span>
    ${ikon('chevron-right', 20, 'soluk-ikon')}
  </a>`;
}

// ───────── Çark ─────────
function cevirEkrani(katId) {
  const kat = katId === 'hepsi' ? { id: 'hepsi', ad: 'Şansıma', renk: '#d9480f' } : kategoriBul(katId);
  if (!kat) return (location.hash = '#/');
  const JOKER = { id: 'joker', ad: 'Dışarıdan sipariş!' };
  const liste = [...(katId === 'hepsi' ? TARIFLER : kategoriTarifleri(katId)), JOKER];
  baslik(kat.ad);

  ekran.innerHTML = `
    <section class="cark" style="--renk:${kat.renk}">
      <div class="makara" id="makara">
        <div class="makara-pencere">
          ${[0, 1, 2, 3, 4].map((k) => `<div class="satir ${k === 2 ? 'orta' : ''}" id="s${k}"></div>`).join('')}
        </div>
        <span class="isaret sol"></span><span class="isaret sag"></span>
      </div>
      <p class="ipucu" id="ipucu">Durdurmak için ekrana dokun</p>
      <div id="sonuc" class="sonuc" aria-live="polite"></div>
    </section>`;

  let i = Math.floor(Math.random() * liste.length);
  let durum = 'donuyor';
  let zaman = null;
  let sonId = null;
  const ciz = () => {
    for (let k = 0; k < 5; k++) $(`#s${k}`).textContent = liste[(i + k - 2 + liste.length * 3) % liste.length].ad;
  };
  const adim = () => { i = (i + 1) % liste.length; ciz(); };
  const baslat = () => {
    durum = 'donuyor';
    $('#sonuc').innerHTML = '';
    $('#ipucu').textContent = 'Durdurmak için ekrana dokun';
    $('#ipucu').hidden = false;
    $('#makara').classList.add('donuyor');
    clearInterval(zaman);
    zaman = setInterval(adim, 70);
  };
  const durdur = () => {
    if (durum !== 'donuyor') return;
    durum = 'duruyor';
    clearInterval(zaman);
    const yemekler = liste.filter((x) => x !== JOKER);
    const hedef = Math.random() < 1 / 12 && sonId !== 'joker' ? JOKER : rastgeleSec(yemekler, sonId ? [sonId] : []);
    // Liste uzunluğundan bağımsız ~3 sn'lik yavaşlama: hedefin 14 adım gerisinden başlayıp yavaşlayarak durur.
    let kalan = 14;
    i = ((liste.indexOf(hedef) - kalan) % liste.length + liste.length) % liste.length;
    let gecikme = 60;
    const yavasla = () => {
      adim(); titret(5);
      if (--kalan <= 0) return bitti(hedef);
      gecikme *= 1.18;
      zaman = setTimeout(yavasla, gecikme);
    };
    yavasla();
  };
  const bitti = (t) => {
    durum = 'durdu'; sonId = t.id;
    $('#makara').classList.remove('donuyor');
    titret([30, 40, 60]);
    $('#ipucu').hidden = true;
    if (t === JOKER) return jokerSonuc();
    const d = besinDegeri(t);
    const dy = diyabetDurumu(t);
    $('#sonuc').innerHTML = `
      <a class="sonuc-kart" href="#/tarif/${t.id}">
        ${gorselHtml(t, 'sonuc-gorsel')}
        <div class="sonuc-bilgi">
          <h2>${esc(t.ad)}</h2>
          <div class="cipler">
            <span class="cip">${ikon('flame', 15)} ${d.kcal} kcal</span>
            <span class="cip">${ikon('clock', 15)} ${t.sure} dk</span>
            <span class="cip dy-${dy.durum}">${ikon('heart-pulse', 15)} ${dy.ad}</span>
          </div>
        </div>
      </a>
      <div class="dugme-satir">
        <button class="dugme ikincil" id="tekrar">${ikon('rotate-cw', 18)} Tekrar çevir</button>
        <a class="dugme ana" href="#/tarif/${t.id}">Tarife git ${ikon('chevron-right', 18)}</a>
      </div>`;
    $('#tekrar').onclick = (e) => { e.stopPropagation(); baslat(); };
  };
  const jokerSonuc = () => {
    const o = SIPARIS_ONERILERI[Math.floor(Math.random() * SIPARIS_ONERILERI.length)];
    $('#sonuc').innerHTML = `
      <div class="sonuc-kart joker">
        <div class="joker-ust">${ikon('bike', 52)}<h2>Bugün senin günün!</h2><p>Mutfak kapalı, önlüğü as, dışarıdan sipariş ver.</p></div>
        <div class="sonuc-bilgi">
          <p class="joker-oneri">Çarkın önerisi: <b>${esc(o.ad)}</b></p>
          <div class="siparis-dugmeler">
            ${SIPARIS_SITELERI.map((x) => `<button class="dugme marka" data-sip="${x.id}" style="--marka:${x.renk}">${x.ad} ${ikon('external-link', 16)}</button>`).join('')}
          </div>
          <p class="kucuk">"${esc(o.ad)}" panoya kopyalanır; uygulamada arama kutusuna yapıştırman yeterli.</p>
        </div>
      </div>
      <button class="dugme ikincil tam" id="tekrar">${ikon('rotate-cw', 18)} Yemek yapacağım, tekrar çevir</button>`;
    $('#sonuc').querySelectorAll('[data-sip]').forEach((b) => (b.onclick = async (e) => {
      e.stopPropagation();
      const x = SIPARIS_SITELERI.find((y) => y.id === b.dataset.sip);
      await kopyala(o.ad); bildir(`"${o.ad}" kopyalandı — ${x.ad} açılıyor`);
      setTimeout(() => disAc(x.url), 350);
    }));
    $('#tekrar').onclick = (e) => { e.stopPropagation(); baslat(); };
  };

  ciz(); baslat();
  const dokun = (e) => { if (!e.target.closest('a, button') && durum === 'donuyor') durdur(); };
  ekran.addEventListener('click', dokun);
  temizle = () => { clearInterval(zaman); clearTimeout(zaman); ekran.removeEventListener('click', dokun); };
}

// ───────── Tarif ─────────
function tarifEkrani(id) {
  const t = tarifBul(id);
  if (!t) return (location.hash = '#/');
  const kat = kategoriBul(t.kat);
  baslik(kat.ad);
  const d = besinDegeri(t);
  const dy = diyabetDurumu(t);
  let kisi = D.kisi[t.id] ?? t.porsiyon;
  const fav = () => D.fav.includes(t.id);
  const favDugme = () => `<button class="ust-dugme ${fav() ? 'fav-acik' : ''}" id="fav" aria-label="${fav() ? 'Favorilerden çıkar' : 'Favorilere ekle'}">${ikon('heart', 22)}</button>`;
  $('#ustSag').innerHTML = favDugme();
  const g = GORSELLER[t.id];

  ekran.innerHTML = `
    <article class="tarif">
      <div class="kapak">
        ${gorselHtml(t, 'kapak-gorsel')}
        <div class="kapak-yazi"><span class="kat-etiket">${ikon(KAT_IKON[t.kat], 14)} ${kat.ad}</span><h2>${esc(t.ad)}</h2></div>
      </div>
      <div class="istatistik">
        <div>${ikon('flame', 18)}<b>${d.kcal}</b><small>kcal / porsiyon</small></div>
        <div>${ikon('clock', 18)}<b>${t.sure}</b><small>dakika</small></div>
        <div>${ikon('utensils', 18)}<b>${t.porsiyon}</b><small>porsiyon</small></div>
      </div>

      <section class="kart">
        <div class="kart-baslik"><h3>Besin dengesi</h3><span class="cip dy-${dy.durum}">${ikon('heart-pulse', 14)} ${dy.ad}</span></div>
        <div class="makro-cubuk" role="img" aria-label="Enerjinin yüzde ${d.oran.p}'i proteinden, yüzde ${d.oran.k}'i karbonhidrattan, yüzde ${d.oran.y}'i yağdan">
          <span class="p" style="flex:${d.oran.p || 1}"></span><span class="k" style="flex:${d.oran.k || 1}"></span><span class="y" style="flex:${d.oran.y || 1}"></span>
        </div>
        <div class="makrolar">
          <div><i class="p"></i><span>Protein</span><b>${d.p} g</b><small>%${d.oran.p}</small></div>
          <div><i class="k"></i><span>Karbonhidrat</span><b>${d.k} g</b><small>%${d.oran.k}</small></div>
          <div><i class="y"></i><span>Yağ</span><b>${d.y} g</b><small>%${d.oran.y}</small></div>
        </div>
        <p class="yorum">${dengeYorumu(d)}</p>
        <p class="kucuk">${esc(dy.ad)}: ${esc(dy.neden)}.
          ${dy.durum === 'dikkat' ? 'Diyabetli biri için yarım porsiyon ya da şekersiz bir alternatif daha uygun olur.' : dy.durum === 'olculu' ? 'Porsiyonu küçük tutup yanına salata ya da yoğurt eklemek iyi olur.' : ''}
          Değerler malzeme gramlarından hesaplanan yaklaşık değerlerdir.</p>
      </section>

      <section class="kart">
        <div class="kart-baslik">
          <h3>Malzemeler</h3>
          <div class="sayac" aria-label="Kişi sayısı">
            <button id="eksi" aria-label="Azalt">${ikon('minus', 18)}</button><span id="kisi"></span><button id="arti" aria-label="Artır">${ikon('plus', 18)}</button>
          </div>
        </div>
        <p class="kucuk">Evde olanları işaretle. İşaretlerin <a href="#/dolabim">Dolabım</a>'a kaydedilir.</p>
        <ul class="malzemeler" id="malzemeler"></ul>
        <div class="eksikler" id="eksikler"></div>
      </section>

      ${t.not ? `<p class="not">${ikon('info', 18)}<span>${esc(t.not)}</span></p>` : ''}

      <section class="kart">
        <h3>Hazırlanışı</h3>
        <ol class="adimlar">${t.adim.map((a) => `<li>${esc(a)}</li>`).join('')}</ol>
      </section>

      <section class="kart">
        <h3>Videolu anlatım</h3>
        <a class="dugme video tam" href="${youtubeUrl(t)}" data-dis>${ikon('play', 18)} YouTube'da yapılışını izle</a>
        <button class="dugme ikincil tam" id="siparis">${ikon('bike', 18)} Pişirmek istemiyorum: Yemeksepeti'nde ara</button>
      </section>

      ${hazimHtml(t)}

      <section class="kart kaynak">
        <h3>Kaynaklar</h3>
        <ul>
          <li>Yemek hakkında: <a href="${vikipediUrl(t)}" data-dis>Vikipedi: ${esc(t.wiki || t.ad)}</a></li>
          <li>Tarif: Türk mutfağının bilinen geleneksel hazırlanışı; ölçüler uygulama için standartlaştırıldı. <a href="${aramaUrl(t)}" data-dis>Diğer tariflerle karşılaştır</a></li>
          <li>Besin değerleri: USDA FoodData Central ve TÜRKOMP ile uyumlu malzeme değerlerinden hesaplandı. <a href="#/hakkinda">Ayrıntı</a></li>
          ${g ? `<li>Fotoğraf: ${esc(g.yazar)}, <a href="${esc(g.sayfa)}" data-dis>Wikimedia Commons</a> (${esc(g.lisans)})</li>` : ''}
        </ul>
      </section>
    </article>`;

  $('#ustSag').onclick = (e) => {
    if (!e.target.closest('#fav')) return;
    D.fav = fav() ? D.fav.filter((x) => x !== t.id) : [...D.fav, t.id];
    kaydet(); $('#ustSag').innerHTML = favDugme(); titret();
    bildir(fav() ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı');
  };
  $('#siparis').onclick = () => marketAc('yemeksepeti', t.ad);

  const ciz = () => {
    $('#kisi').textContent = `${kisi} kişi`;
    const malz = olcekle(t, kisi);
    const asil = kisi === t.porsiyon;
    $('#malzemeler').innerHTML = malz.map((m, j) => {
      const sivi = m.r === 'su';
      const var_ = sivi || D.evde.has(m.k);
      return `<li class="${var_ ? 'var' : ''}">
        <label>
          <input type="checkbox" data-k="${m.k}" ${var_ ? 'checked' : ''} ${sivi ? 'disabled' : ''}>
          <span class="kutucuk">${ikon('check', 14)}</span>
          <span class="m-ad">${esc(m.ad)}</span>
          <span class="m-miktar">${asil && t.malz[j][2] ? `${esc(t.malz[j][2])}<small>${gramYaz(m.g)}</small>` : gramYaz(m.g)}</span>
        </label>
      </li>`;
    }).join('');
    const eksik = [...new Map(malz.filter((m) => m.r !== 'su' && !D.evde.has(m.k)).map((m) => [m.k, m])).values()];
    $('#eksikler').innerHTML = eksik.length ? `
      <h4>${eksik.length} malzeme eksik</h4>
      <p class="eksik-liste">${eksik.map((m) => esc(m.ad)).join(', ')}</p>
      <div class="dugme-satir">
        <button class="dugme ana" id="listeyeEkle">${ikon('shopping-basket', 18)} Listeye ekle</button>
        <button class="dugme ikincil" id="marketteAra">${ikon('store', 18)} Markette ara</button>
      </div>` : `<p class="tamam">${ikon('circle-check', 18)} Bütün malzemeler evde var. Afiyet olsun!</p>`;
    $('#listeyeEkle')?.addEventListener('click', () => {
      const v = D.liste.find((x) => x.tarifId === t.id);
      if (v) v.kisi = kisi; else D.liste.push({ tarifId: t.id, kisi });
      kaydet(); listeSayisi(); titret();
      bildir(`${t.ad} listeye eklendi (${kisi} kişi)`);
    });
    $('#marketteAra')?.addEventListener('click', () => marketCekmecesi(eksik.map((m) => ({ ad: m.ad, g: m.g }))));
  };
  $('#malzemeler').addEventListener('change', (e) => {
    const k = e.target.dataset.k; if (!k) return;
    if (e.target.checked) D.evde.add(k); else D.evde.delete(k);
    kaydet(); ciz();
  });
  const kisiAyarla = (n) => { kisi = Math.min(20, Math.max(1, n)); D.kisi[t.id] = kisi; kaydet(); ciz(); };
  $('#eksi').onclick = () => kisiAyarla(kisi - 1);
  $('#arti').onclick = () => kisiAyarla(kisi + 1);
  ciz();
}

// Yemekten sonra: hazım önerileri
function hazimHtml(tarifler, baslikEk = '1 porsiyon') {
  const o = hazimOnerisi(tarifler);
  const madde = (l, ik) => `<ul class="oneri">${l.map((x) => `<li>${ikon(ik, 16)}<span>${esc(emojisiz(x))}</span></li>`).join('')}</ul>`;
  return `<section class="kart hazim">
    <h3>Yemekten sonra</h3>
    <div class="yak">
      <span class="yak-sayi">${o.dakika}<small>dk</small></span>
      <span>tempolu yürüyüş, ${baslikEk} için alınan <b>${o.kcal} kcal</b>'yi yakar<small>70 kg'lık biri için, yaklaşık 5 km/sa</small></span>
    </div>
    <h4>Ne içsem?</h4>${madde(o.icecek, 'cup-soda')}
    <h4>Hareket</h4>${madde(o.hareket, 'footprints')}
    <h4>Dikkat</h4>${madde(o.dikkat, 'circle-alert')}
    <p class="kucuk">Genel önerilerdir. Bir sağlık sorunun, gebeliğin ya da düzenli kullandığın bir ilaç varsa (ör. bitki çayları için) doktoruna danış.</p>
  </section>`;
}

// Market seçenekleri (alttan açılan panel)
function marketCekmecesi(ogeler) {
  const metin = ogeler.map((o) => `• ${o.ad} — ${gramYaz(o.g)}`).join('\n');
  acCekmece(`
    <h3>Markette ara</h3>
    <p class="kucuk">Dokunduğun ürünün adı panoya kopyalanır ve marketin arama sayfası açılır. Arama kutusu boş gelirse adı yapıştırman yeterli.</p>
    <ul class="market-liste">
      ${ogeler.map((o, i) => `
        <li><span>${esc(o.ad)} <small>${gramYaz(o.g)}</small></span>
          <span class="market-dugmeler">
            ${MARKETLER.filter((m) => m.id !== 'yemeksepeti').map((m) => `<button data-m="${m.id}" data-i="${i}" style="--marka:${m.renk}">${m.ad}</button>`).join('')}
          </span>
        </li>`).join('')}
    </ul>
    <div class="dugme-satir">
      <button class="dugme ikincil" id="cKopyala">${ikon('copy', 18)} Hepsini kopyala</button>
      <button class="dugme ikincil" id="cPaylas">${ikon('share-2', 18)} Paylaş</button>
    </div>
    <button class="dugme duz tam" id="cKapat">Kapat</button>`);
  const c = $('#cekmece');
  c.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => marketAc(b.dataset.m, aramaAdi(ogeler[+b.dataset.i].ad))));
  $('#cKopyala').onclick = async () => bildir((await kopyala(metin)) ? 'Liste kopyalandı' : 'Kopyalanamadı');
  $('#cPaylas').onclick = () => paylas('Eksik malzemeler', metin);
  $('#cKapat').onclick = kapatCekmece;
}
function acCekmece(html) {
  const c = $('#cekmece');
  c.innerHTML = `<div class="tutamac"></div>${html}`;
  c.hidden = false; $('#perde').hidden = false;
  requestAnimationFrame(() => c.classList.add('acik'));
}
function kapatCekmece() {
  const c = $('#cekmece');
  c.classList.remove('acik'); c.hidden = true; $('#perde').hidden = true;
}
$('#perde').onclick = kapatCekmece;

// ───────── Dolabım ─────────
function dolabimEkrani() {
  baslik('Dolabım');
  const gruplar = dolapMalzemeleri();
  const toplam = gruplar.reduce((a, g) => a + g.malzemeler.length, 0);
  let arama = '';
  ekran.innerHTML = `
    <section class="kahraman kucuk-kahraman">
      <h2>Evde neler var?</h2>
      <p>Dolabındaki malzemelere dokun. Tariflerde ve alışveriş listesinde bunlar "evde var" sayılır.</p>
    </section>
    <a class="dugme ana tam buyuk" href="#/elimdekiler">${ikon('chef-hat', 20)} Elimdekilerle ne pişirsem?</a>
    <div class="arama">${ikon('search', 18)}<input id="ara" type="search" placeholder="Malzeme ara (ör. patlıcan)" autocomplete="off"></div>
    <div class="dolap-ozet" id="ozet"></div>
    <div id="gruplar"></div>
    <div class="dugme-satir">
      <button class="dugme ikincil" id="temel">${ikon('sparkles', 18)} Temel malzemeleri seç</button>
      <button class="dugme duz tehlike" id="bosalt">${ikon('trash-2', 18)} Hepsini kaldır</button>
    </div>`;
  const ciz = () => {
    $('#ozet').innerHTML = `<b>${D.evde.size}</b> / ${toplam} malzeme evde`;
    const q = arama.toLocaleLowerCase('tr');
    $('#gruplar').innerHTML = gruplar.map((g) => {
      const l = g.malzemeler.filter((m) => !q || m.ad.toLocaleLowerCase('tr').includes(q));
      if (!l.length) return '';
      const var_ = l.filter((m) => D.evde.has(m.k)).length;
      return `<section class="kart dolap-grup">
        <div class="kart-baslik"><h3>${g.ad}</h3><small>${var_} / ${l.length}</small></div>
        <div class="hap-liste">${l.map((m) => `<button class="hap ${D.evde.has(m.k) ? 'secili' : ''}" data-k="${m.k}" aria-pressed="${D.evde.has(m.k)}">${D.evde.has(m.k) ? ikon('check', 14) : ''}${esc(m.ad)}</button>`).join('')}</div>
      </section>`;
    }).join('') || '<p class="bos-yazi">Bu adla bir malzeme yok.</p>';
  };
  $('#ara').oninput = (e) => { arama = e.target.value.trim(); ciz(); };
  $('#gruplar').onclick = (e) => {
    const b = e.target.closest('[data-k]'); if (!b) return;
    const k = b.dataset.k;
    if (D.evde.has(k)) D.evde.delete(k); else D.evde.add(k);
    titret(8); kaydet(); ciz();
  };
  $('#temel').onclick = () => {
    Object.keys(BESINLER).filter((k) => BESINLER[k].d).forEach((k) => D.evde.add(k));
    kaydet(); ciz(); bildir('Tuz, yağ, salça gibi temel malzemeler işaretlendi');
  };
  $('#bosalt').onclick = async () => {
    if (!await onayla({ baslik: 'Dolabı boşalt?', metin: 'Bütün "evde var" işaretleri kaldırılacak.', evet: 'Boşalt', tehlike: true })) return;
    D.evde.clear(); kaydet(); ciz();
  };
  ciz();
}

// ───────── Elimdekilerle ─────────
function elimdekilerEkrani() {
  baslik('Elimdekilerle');
  let kat = null;
  ekran.innerHTML = `
    <section class="kahraman kucuk-kahraman">
      <h2>Elimdekilerle ne pişirsem?</h2>
      <p>Dolabında <b>${D.evde.size}</b> malzeme işaretli. Tuz, baharat ve su eksik sayılmaz. <a href="#/dolabim">Dolabı düzenle</a></p>
    </section>
    <div class="filtre" id="filtre">
      <button class="hap secili" data-kat="">Tümü</button>
      ${KATEGORILER.map((k) => `<button class="hap" data-kat="${k.id}">${k.ad}</button>`).join('')}
    </div>
    <div id="sonuclar"></div>
    <div class="bolum-baslik"><h3>Elimdekilerle sofra kur</h3></div>
    <section class="sofra-kartlar">${SOFRALAR.map((s) => sofraKarti(s).replace(`href="#/sofra/${s.id}"`, `href="#/sofra/${s.id}" data-evde-sofra="${s.id}"`)).join('')}</section>`;
  const ciz = () => {
    const l = elimdekilerle(D.evde, 2, kat);
    const grup = (n) => l.filter((x) => x.eksik.length === n);
    const blok = (baslikY, ogeler, aciklama) => ogeler.length ? `
      <div class="bolum-baslik"><h3>${baslikY}</h3><span>${ogeler.length}</span></div>
      ${aciklama ? `<p class="kucuk">${aciklama}</p>` : ''}
      <ul class="tarif-liste">${ogeler.map((x) => tarifSatiri(x.t, x.eksik.length
        ? `<em class="eksik-not">Eksik: ${x.eksik.map((k) => esc(BESINLER[k].ad)).join(', ')}</em>` : '')).join('')}</ul>` : '';
    $('#sonuclar').innerHTML = (blok('Hemen yapabilirsin', grup(0)) + blok('1 malzeme eksik', grup(1)) + blok('2 malzeme eksik', grup(2)))
      || `<div class="bos">${ikon('refrigerator', 40)}<p>Bu malzemelerle henüz bir tarif çıkmıyor.<br>Dolabına birkaç malzeme daha ekle.</p><a class="dugme ana" href="#/dolabim">Dolabı düzenle</a></div>`;
  };
  $('#filtre').onclick = (e) => {
    const b = e.target.closest('[data-kat]'); if (!b) return;
    kat = b.dataset.kat || null;
    $('#filtre').querySelectorAll('.hap').forEach((x) => x.classList.toggle('secili', x === b));
    ciz();
  };
  ekran.querySelectorAll('[data-evde-sofra]').forEach((a) => (a.onclick = () => {
    const id = a.dataset.evdeSofra;
    const s = SOFRALAR.find((x) => x.id === id);
    const k = D.sofra[id] ?? { kisi: id === 'davet' ? 6 : 4, diyabet: 'yok' };
    k.evde = true; k.menu = sofraOlustur(s, { diyabet: k.diyabet ?? 'yok', evde: [...D.evde] });
    D.sofra[id] = k; kaydet();
  }));
  ciz();
}

// ───────── Sofralar ─────────
function sofralarEkrani() {
  baslik('Sofralar');
  ekran.innerHTML = `
    <section class="kahraman kucuk-kahraman"><h2>Sofra kur</h2><p>Menü tek dokunuşla hazır. Beğenmediğin yemeği tek başına yeniden çevirebilirsin.</p></section>
    <section class="sofra-kartlar">${SOFRALAR.map(sofraKarti).join('')}</section>`;
}

function sofraEkrani(id) {
  const s = SOFRALAR.find((x) => x.id === id);
  if (!s) return (location.hash = '#/sofralar');
  baslik(s.ad);
  const kayit = D.sofra[s.id] ?? { kisi: s.id === 'davet' ? 6 : 4, diyabet: 'yok' };
  kayit.diyabet ??= 'yok';
  kayit.evde ??= false;
  const sec = () => ({ diyabet: kayit.diyabet, ...(kayit.evde ? { evde: [...D.evde] } : {}) });
  if (!kayit.menu || kayit.menu.length !== s.yuvalar.length || kayit.menu.some((x) => !tarifBul(x))) kayit.menu = sofraOlustur(s, sec());
  D.sofra[s.id] = kayit; kaydet();

  ekran.innerHTML = `
    <section class="kahraman kucuk-kahraman sofra-kahraman">
      <span class="yuvarlak-ikon buyuk-ikon">${ikon(SOFRA_IKON[s.id] ?? 'utensils', 26)}</span>
      <h2>${s.ad}</h2><p>${s.aciklama}</p>${s.ek ? `<p class="kucuk">${esc(s.ek)}</p>` : ''}
    </section>
    <section class="kart ayarlar">
      <div class="ayar-satir">
        <span>${ikon('utensils', 18)} Misafir sayısı</span>
        <div class="sayac"><button id="eksi" aria-label="Azalt">${ikon('minus', 18)}</button><span id="kisi"></span><button id="arti" aria-label="Artır">${ikon('plus', 18)}</button></div>
      </div>
      <label class="ayar-satir anahtar-satir">
        <span>${ikon('refrigerator', 18)} Dolabımdakilerle kur<small>Evdeki malzemelerle yapılabilen yemekler öne çıkar</small></span>
        <input type="checkbox" id="evdeMod" class="anahtar" ${kayit.evde ? 'checked' : ''}>
      </label>
      <div class="ayar-blok">
        <span>${ikon('heart-pulse', 18)} Misafirler arasında diyabetli var mı?</span>
        <div class="bolumlu" role="radiogroup">
          <label><input type="radio" name="dy" value="yok"><span>Yok</span></label>
          <label><input type="radio" name="dy" value="uyarla"><span>Menüyü uyarla</span></label>
          <label><input type="radio" name="dy" value="secenek"><span>Seçenek sun</span></label>
        </div>
      </div>
    </section>
    <ul class="menu" id="menu"></ul>
    <section class="kart" id="analiz"></section>
    <div class="dugme-yigin">
      <button class="dugme ana tam" id="listeye">${ikon('shopping-basket', 18)} Menünün malzemelerini listeye ekle</button>
      <div class="dugme-satir">
        <button class="dugme ikincil" id="hepsi">${ikon('rotate-cw', 18)} Yeniden çevir</button>
        <button class="dugme ikincil" id="menuPaylas">${ikon('share-2', 18)} Paylaş</button>
      </div>
    </div>
    <div id="hazim"></div>`;
  ekran.querySelector(`input[name="dy"][value="${kayit.diyabet}"]`).checked = true;

  const alternatifler = () => (kayit.diyabet === 'secenek' ? kayit.menu.map((_, i) => diyabetAlternatifi(s, kayit.menu, i)) : []);

  const ciz = (donen = []) => {
    $('#kisi').textContent = `${kayit.kisi} kişi`;
    const alt = alternatifler();
    $('#menu').innerHTML = kayit.menu.map((tid, i) => {
      const t = tarifBul(tid); const d = besinDegeri(t); const dy = diyabetDurumu(t);
      const eksik = kayit.evde ? tarifEslesmesi(t, D.evde).eksik : [];
      return `<li class="${donen.includes(i) ? 'donuyor' : ''}">
        <div class="menu-satir">
          <a href="#/tarif/${t.id}">
            ${gorselHtml(t, 'kucuk')}
            <span class="menu-bilgi"><small>${s.yuvalar[i].ad}</small><b>${esc(t.ad)}</b>
              <em>${d.kcal} kcal · P ${d.p} · K ${d.k} · Y ${d.y} g</em>
              ${kayit.diyabet !== 'yok' ? `<span class="cip mini dy-${dy.durum}">${dy.ad}</span>` : ''}
              ${kayit.evde ? `<span class="cip mini ${eksik.length ? '' : 'dy-uygun'}">${eksik.length ? `${eksik.length} eksik` : 'Malzemeler evde'}</span>` : ''}
            </span>
          </a>
          <button class="yenile" data-i="${i}" aria-label="${s.yuvalar[i].ad} yeniden çevir">${ikon('rotate-cw', 18)}</button>
        </div>
        ${alt[i] ? `<a class="alternatif" href="#/tarif/${alt[i].id}">${ikon('heart-pulse', 16)}<span>Diyabetli misafir için: <b>${esc(alt[i].ad)}</b> <small>${besinDegeri(alt[i]).kcal} kcal, ${diyabetDurumu(alt[i]).kh} g karbonhidrat</small></span></a>` : ''}
      </li>`;
    }).join('');

    const a = menuAnalizi(kayit.menu, sec());
    const aralik = (x, [lo, hi]) => (x < lo ? 'dusuk' : x > hi ? 'yuksek' : 'iyi');
    $('#analiz').innerHTML = `
      <div class="kart-baslik"><h3>Menü dengesi</h3><span class="puan p${a.puan >= 85 ? 'iyi' : a.puan >= 65 ? 'orta' : 'zayif'}">${a.puan}<small>/100</small></span></div>
      <p class="kucuk">Kişi başı, her yemekten bir porsiyon: <b>${kucukSayi(a.toplam.kcal)} kcal</b></p>
      <div class="makro-cubuk"><span class="p" style="flex:${a.oran.p}"></span><span class="k" style="flex:${a.oran.k}"></span><span class="y" style="flex:${a.oran.y}"></span></div>
      <div class="makrolar">
        <div class="${aralik(a.oran.p, HEDEF.p)}"><i class="p"></i><span>Protein</span><b>%${a.oran.p}</b><small>hedef %${HEDEF.p.join('–')}</small></div>
        <div class="${aralik(a.oran.k, HEDEF.k)}"><i class="k"></i><span>Karbonhidrat</span><b>%${a.oran.k}</b><small>hedef %${HEDEF.k.join('–')}</small></div>
        <div class="${aralik(a.oran.y, HEDEF.y)}"><i class="y"></i><span>Yağ</span><b>%${a.oran.y}</b><small>hedef %${HEDEF.y.join('–')}</small></div>
      </div>
      <ul class="notlar">${a.notlar.map((n) => `<li class="${n.iyi ? 'iyi' : 'uyari'}">${ikon(n.iyi ? 'circle-check' : 'circle-alert', 16)}<span>${esc(n.metin)}</span></li>`).join('')}</ul>
      ${kayit.diyabet === 'secenek' ? '<p class="kucuk">Menü herkes için aynı kaldı; diyabete uygun olmayan yemeklerin altında diyabetli misafir için alternatif önerildi.</p>' : ''}
      <p class="kucuk">Hedefler: Türkiye Beslenme Rehberi (TÜBER 2022) yetişkin enerji dağılımı. <a href="#/hakkinda">Yöntem</a></p>`;
    $('#hazim').innerHTML = hazimHtml(kayit.menu.map(tarifBul), 'menünün tamamı (kişi başı)');
  };

  const animasyon = (yuvalar, sonuc) => {
    let n = 0;
    const z = setInterval(() => {
      const gecici = [...kayit.menu];
      for (const i of yuvalar) {
        const l = TARIFLER.filter((t) => s.yuvalar[i].kat.includes(t.kat));
        gecici[i] = l[Math.floor(Math.random() * l.length)].id;
      }
      const asil = kayit.menu; kayit.menu = gecici; ciz(yuvalar); kayit.menu = asil; titret(4);
      if (++n >= 8) { clearInterval(z); kayit.menu = sonuc(); D.sofra[s.id] = kayit; kaydet(); ciz(); }
    }, 90);
  };
  $('#menu').addEventListener('click', (e) => {
    const b = e.target.closest('.yenile'); if (!b) return;
    const i = +b.dataset.i;
    animasyon([i], () => yuvaYenile(s, kayit.menu, i, sec()));
  });
  const hepsiniCevir = () => animasyon(s.yuvalar.map((_, i) => i), () => sofraOlustur(s, sec()));
  $('#hepsi').onclick = hepsiniCevir;
  ekran.querySelectorAll('input[name="dy"]').forEach((r) => (r.onchange = () => {
    kayit.diyabet = r.value; kaydet();
    if (r.value === 'uyarla') { hepsiniCevir(); bildir('Menü diyabete göre yeniden kuruldu'); } else ciz();
  }));
  $('#evdeMod').onchange = (e) => {
    kayit.evde = e.target.checked; kaydet(); hepsiniCevir();
    bildir(kayit.evde ? 'Menü dolabındakilere göre kuruluyor' : 'Menü tüm tariflerden kuruluyor');
  };
  $('#eksi').onclick = () => { kayit.kisi = Math.max(1, kayit.kisi - 1); kaydet(); ciz(); };
  $('#arti').onclick = () => { kayit.kisi = Math.min(30, kayit.kisi + 1); kaydet(); ciz(); };
  $('#listeye').onclick = () => {
    const ekle = (tid, kisi) => {
      const v = D.liste.find((x) => x.tarifId === tid);
      if (v) v.kisi = kisi; else D.liste.push({ tarifId: tid, kisi });
    };
    for (const tid of kayit.menu) ekle(tid, kayit.kisi);
    alternatifler().forEach((t) => t && ekle(t.id, 1));
    kaydet(); listeSayisi(); titret();
    bildir(`Menü ${kayit.kisi} kişilik olarak listeye eklendi`);
  };
  $('#menuPaylas').onclick = () => {
    const alt = alternatifler();
    paylas(s.ad, `${s.ad} (${kayit.kisi} kişi)\n\n` +
      kayit.menu.map((tid, i) => `${s.yuvalar[i].ad}: ${tarifBul(tid).ad}${alt[i] ? ` (diyabetli misafir için: ${alt[i].ad})` : ''}`).join('\n') +
      '\n\nÇevir Pişir ile hazırlandı');
  };
  ciz();
}

// ───────── Favoriler ve tüm tarifler ─────────
function favorilerEkrani() {
  baslik('Favoriler');
  const favler = D.fav.map(tarifBul).filter(Boolean);
  let arama = '';
  ekran.innerHTML = `
    ${favler.length ? `<div class="bolum-baslik ilk"><h3>Favorilerin</h3><span>${favler.length}</span></div>
      <ul class="tarif-liste">${favler.map((t) => tarifSatiri(t)).join('')}</ul>` : `
      <div class="bos">${ikon('heart', 40)}<p>Henüz favorin yok.<br>Tarif sayfasının üstündeki kalbe dokunarak ekleyebilirsin.</p></div>`}
    <div class="bolum-baslik"><h3>Tüm tarifler</h3><span>${TARIFLER.length}</span></div>
    <div class="arama">${ikon('search', 18)}<input id="ara" type="search" placeholder="Tarif ya da malzeme ara" autocomplete="off"></div>
    <div id="tumu"></div>`;
  const ciz = () => {
    const q = arama.toLocaleLowerCase('tr');
    if (q) {
      const l = TARIFLER.filter((t) => t.ad.toLocaleLowerCase('tr').includes(q)
        || t.malz.some(([k]) => BESINLER[k].ad.toLocaleLowerCase('tr').includes(q)));
      $('#tumu').innerHTML = l.length ? `<ul class="tarif-liste">${l.map((t) => tarifSatiri(t)).join('')}</ul>` : '<p class="bos-yazi">Sonuç bulunamadı.</p>';
      return;
    }
    $('#tumu').innerHTML = KATEGORILER.map((k) => `<details class="kat-detay"><summary>${ikon(KAT_IKON[k.id], 18)} ${k.ad} <small>${kategoriTarifleri(k.id).length}</small>${ikon('chevron-right', 18, 'ac-ikon')}</summary>
      <ul class="tarif-liste">${kategoriTarifleri(k.id).map((t) => tarifSatiri(t)).join('')}</ul></details>`).join('');
  };
  $('#ara').oninput = (e) => { arama = e.target.value.trim(); ciz(); };
  ciz();
}
function tarifSatiri(t, ek = '') {
  const d = besinDegeri(t);
  return `<li><a href="#/tarif/${t.id}">${gorselHtml(t, 'kucuk')}
    <span class="menu-bilgi"><b>${esc(t.ad)}</b><em>${d.kcal} kcal · ${t.sure} dk</em>${ek}</span>${ikon('chevron-right', 18, 'soluk-ikon')}</a></li>`;
}

// ───────── Alışveriş listesi ─────────
function listeEkrani() {
  baslik('Alışveriş listesi');
  if (!D.liste.length) {
    ekran.innerHTML = `<div class="bos">${ikon('shopping-cart', 44)}<p>Liste boş.<br>Bir tarifte <b>Listeye ekle</b>'ye ya da bir sofrada <b>Menünün malzemelerini listeye ekle</b>'ye dokun.</p>
      <a class="dugme ana" href="#/">${ikon('ferris-wheel', 18)} Çarkı çevir</a></div>`;
    return;
  }
  const ciz = () => {
    const tum = alisverisListesi(D.liste);
    const alinacak = tum.filter((m) => !D.evde.has(m.k));
    const evde = tum.filter((m) => D.evde.has(m.k));
    const kalan = alinacak.filter((m) => !D.alindi.has(m.k)).length;
    let reyon = null;
    ekran.innerHTML = `
      <section class="kart">
        <h3>Listedeki yemekler</h3>
        <ul class="liste-yemek">
          ${D.liste.map((x) => { const t = tarifBul(x.tarifId); return t ? `<li>${gorselHtml(t, 'mini')}<a href="#/tarif/${t.id}">${esc(t.ad)}</a>
            <span class="sayac kucuk"><button data-az="${t.id}" aria-label="Azalt">${ikon('minus', 16)}</button><span>${x.kisi} kişi</span><button data-co="${t.id}" aria-label="Artır">${ikon('plus', 16)}</button></span>
            <button class="sil" data-sil="${t.id}" aria-label="${esc(t.ad)} listeden çıkar">${ikon('x', 18)}</button></li>` : ''; }).join('')}
        </ul>
      </section>
      <section class="kart">
        <div class="kart-baslik"><h3>Alınacaklar</h3><span class="ilerleme"><b>${alinacak.length - kalan}</b> / ${alinacak.length}</span></div>
        <div class="ilerleme-cubuk"><span style="width:${alinacak.length ? ((alinacak.length - kalan) / alinacak.length) * 100 : 100}%"></span></div>
        <ul class="alinacaklar">
          ${alinacak.map((m) => {
            const bas = m.r !== reyon ? `<li class="reyon">${REYONLAR[m.r] ?? 'Diğer'}</li>` : '';
            reyon = m.r;
            return `${bas}<li class="${D.alindi.has(m.k) ? 'alindi' : ''}">
              <label><input type="checkbox" data-al="${m.k}" ${D.alindi.has(m.k) ? 'checked' : ''}><span class="kutucuk">${ikon('check', 14)}</span>
                <span class="m-ad">${esc(m.ad)}<small>${m.kaynak.map(esc).join(', ')}</small></span>
                <span class="m-miktar">${gramYaz(m.g)}</span></label>
              <button class="evde-dugme" data-evde="${m.k}" aria-label="${esc(m.ad)}: evde var">${ikon('house', 16)}</button>
            </li>`;
          }).join('') || `<li class="tamam">${ikon('circle-check', 18)} Alınacak bir şey kalmadı.</li>`}
        </ul>
        <div class="dugme-satir">
          <button class="dugme ana" id="lPaylas">${ikon('share-2', 18)} Paylaş</button>
          <button class="dugme ikincil" id="lMarket">${ikon('store', 18)} Markette ara</button>
        </div>
      </section>
      ${evde.length ? `<details class="kart evde-var"><summary>${ikon('house', 18)} Evde var (${evde.length}) <small>listeden çıkarıldı</small></summary>
        <ul class="alinacaklar">${evde.map((m) => `<li><span class="m-ad">${esc(m.ad)}</span><span class="m-miktar">${gramYaz(m.g)}</span>
          <button class="evde-dugme yazili" data-yok="${m.k}">Listeye geri al</button></li>`).join('')}</ul></details>` : ''}
      <button class="dugme duz tehlike tam" id="lTemizle">${ikon('trash-2', 18)} Listeyi temizle</button>`;

    ekran.onclick = async (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const bul = (id) => D.liste.find((x) => x.tarifId === id);
      if (b.dataset.sil) D.liste = D.liste.filter((x) => x.tarifId !== b.dataset.sil);
      else if (b.dataset.az) bul(b.dataset.az).kisi = Math.max(1, bul(b.dataset.az).kisi - 1);
      else if (b.dataset.co) bul(b.dataset.co).kisi = Math.min(30, bul(b.dataset.co).kisi + 1);
      else if (b.dataset.evde) { D.evde.add(b.dataset.evde); bildir('Dolabına eklendi; listeden çıkarıldı'); }
      else if (b.dataset.yok) D.evde.delete(b.dataset.yok);
      else if (b.id === 'lPaylas') return paylas('Alışveriş listesi', listeMetni(alinacak.filter((m) => !D.alindi.has(m.k))));
      else if (b.id === 'lMarket') return marketCekmecesi(alinacak.filter((m) => !D.alindi.has(m.k)));
      else if (b.id === 'lTemizle') {
        if (!await onayla({ baslik: 'Liste temizlensin mi?', metin: 'Listedeki bütün yemekler ve işaretler silinecek.', evet: 'Temizle', tehlike: true })) return;
        D.liste = []; D.alindi.clear(); kaydet(); listeSayisi(); return listeEkrani();
      } else return;
      kaydet(); listeSayisi();
      if (!D.liste.length) return listeEkrani();
      ciz();
    };
    ekran.onchange = (e) => {
      const k = e.target.dataset.al; if (!k) return;
      if (e.target.checked) D.alindi.add(k); else D.alindi.delete(k);
      titret(); kaydet(); ciz();
    };
  };
  ciz();
  temizle = () => { ekran.onclick = null; ekran.onchange = null; };
}

// ───────── Hakkında / kaynaklar ─────────
function hakkindaEkrani() {
  baslik('Kaynaklar');
  const fotolu = TARIFLER.filter((t) => GORSELLER[t.id]);
  ekran.innerHTML = `
    <article class="kart metin">
      <h3>Kalori ve besin dengesi nasıl hesaplanıyor?</h3>
      <p>Her tarifteki malzemenin gramı bellidir. Uygulama bu gramları malzemenin 100 g'daki enerji, protein, karbonhidrat ve yağ değerleriyle çarpar, toplar ve porsiyon sayısına böler. Kızartmalarda tavada kalan yağ değil, yaklaşık olarak yemeğe geçen yağ sayılır.</p>
      <p>Protein–karbonhidrat–yağ yüzdeleri <b>enerjiye katkıyı</b> gösterir (Atwater katsayıları: protein ve karbonhidrat 4 kcal/g, yağ 9 kcal/g).</p>
      <p>Değerler yaklaşıktır: ürün markası, sebzenin boyu, pişirme süresi ve porsiyonun büyüklüğü sonucu değiştirir. Sağlık ya da diyet kararları için diyetisyene danışın.</p>
      <h3>Veri kaynakları</h3>
      <ul>
        <li><a href="https://fdc.nal.usda.gov/" data-dis>USDA FoodData Central</a>: ABD Tarım Bakanlığı besin veri tabanı</li>
        <li><a href="https://www.turkomp.tarimorman.gov.tr/" data-dis>TÜRKOMP</a>: Ulusal Gıda Kompozisyon Veri Tabanı (Tarım ve Orman Bakanlığı)</li>
        <li>Yemek bilgisi: <a href="https://tr.wikipedia.org/" data-dis>Vikipedi</a> · Videolar: YouTube araması</li>
      </ul>
      <h3>Menü nasıl kuruluyor?</h3>
      <p>Sofra menüsü rastgele değil: uygulama yüzlerce olası kombinasyonu üretir ve her birini puanlar.</p>
      <ul>
        <li><b>Enerji dağılımı:</b> Türkiye Beslenme Rehberi (TÜBER 2022) yetişkinler için karbonhidrat %45–60, protein %10–20, yağ %20–35 önerir.</li>
        <li><b>Çeşitlilik:</b> aynı ana malzeme (patlıcan, kıyma, tavuk, yoğurt, pirinç, baklagil…) birden fazla yemekte baskınsa puan düşer.</li>
        <li><b>Hafiflik:</b> sofrada birden fazla yağlı/ağır yemek olmasından kaçınılır.</li>
        <li><b>Türk damak tadı:</b> kuru fasulye–pilav, karnıyarık–cacık, köfte–piyaz gibi bilinen ikililere artı puan verilir.</li>
        <li><b>Dolabım:</b> "Dolabımdakilerle kur" açıksa evde olmayan her malzeme puanı düşürür; önce malzemesi evde olan yemekler seçilir.</li>
      </ul>
      <h3>Diyabet etiketleri</h3>
      <p><b>Uygun:</b> porsiyonda en fazla ~35 g karbonhidrat ve eklenmiş şeker yok denecek kadar az. <b>Ölçülü:</b> 35–60 g karbonhidrat ya da biraz eklenmiş şeker. <b>Dikkat:</b> 60 g'ı aşan karbonhidrat ya da porsiyonda 10 g'dan fazla eklenmiş şeker. Mercimek, bulgur, kuru fasulye gibi glisemik indeksi düşük kaynaklarda sınırlar 15 g daha esnektir; karbonhidratın çoğu pirinç, patates, makarna gibi rafine nişastadan geliyorsa yemek en az "ölçülü" sayılır. Pekmez de eklenmiş şeker gibi değerlendirilir.</p>
      <p>Tabak yöntemi (Amerikan Diyabet Derneği): tabağın yarısı nişastasız sebze/salata, çeyreği protein, çeyreği pilav/ekmek/patates. Etiketler genel yol göstericidir; kişisel karbonhidrat hedefi ve ilaç kullanımı için hekim ya da diyetisyen önerisi esastır.</p>
      <h3>Tarifler</h3>
      <p>Tarifler Türk mutfağının yaygın, geleneksel hazırlanışını izler; ölçüler hesap yapılabilmesi için grama çevrilip standartlaştırılmıştır.</p>
      <h3>Market bağlantıları ve gizlilik</h3>
      <p>Market düğmeleri ürün adını panoya kopyalar ve marketin arama sayfasını açar. Uygulama hiçbir siparişi senin adına vermez. Hesap yok, reklam yok, veri toplama yok; listelerin yalnızca bu cihazda saklanır. <a href="https://github.com/burhanettiny/cevir-pisir/blob/main/play-store/gizlilik-politikasi.md" data-dis>Gizlilik politikası</a></p>
      <h3>Fotoğraflar ve tasarım</h3>
      <p>Yemek fotoğrafları <a href="https://commons.wikimedia.org/" data-dis>Wikimedia Commons</a>'tan, belirtilen özgür lisanslarla kullanılmıştır; bazıları kırpılıp küçültülmüştür. İkonlar: <a href="https://lucide.dev/" data-dis>Lucide</a> (ISC lisansı). Yazı tipi: Manrope (SIL Open Font License).</p>
      ${fotolu.length ? `<details class="fotograf-kaynaklari"><summary>Fotoğraf kaynakları (${fotolu.length})</summary><ul>
        ${fotolu.map((t) => { const g = GORSELLER[t.id]; return `<li><b>${esc(t.ad)}</b>: ${esc(g.yazar)}, <a href="${esc(g.sayfa)}" data-dis>kaynak</a>, ${g.lisansUrl ? `<a href="${esc(g.lisansUrl)}" data-dis>${esc(g.lisans)}</a>` : esc(g.lisans)}</li>`; }).join('')}
      </ul></details>` : ''}
      <p class="kucuk">Çevir Pişir · ${TARIFLER.length} tarif · <a href="https://github.com/burhanettiny/cevir-pisir" data-dis>Kaynak kod</a></p>
    </article>`;
}

// Dış bağlantılar
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-dis]');
  if (!a) return;
  e.preventDefault(); disAc(a.href);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (onayla.acik) onayla.acik(); else if (!$('#cekmece').hidden) kapatCekmece();
});

// Web sürümünde çevrimdışı çalışma
if (!yerli && 'serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

yonlendir();

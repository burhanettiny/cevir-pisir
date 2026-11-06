import {
  TARIFLER, KATEGORILER, SOFRALAR, REYONLAR, MARKETLER,
  tarifBul, kategoriBul, kategoriTarifleri, besinDegeri, dengeYorumu, olcekle, gramYaz,
  alisverisListesi, rastgeleSec, sofraOlustur, yuvaYenile, menuToplami, aramaAdi,
  youtubeUrl, vikipediUrl, aramaUrl, gorselApiUrl, listeMetni, BESINLER, hazimOnerisi,
  diyabetDurumu, menuAnalizi, diyabetAlternatifi, SIPARIS_ONERILERI, SIPARIS_SITELERI, HEDEF,
} from './hesap.js';

// ───────── Kalıcı durum (cihazda saklanır) ─────────
const oku = (k, v) => { try { const x = localStorage.getItem(k); return x ? JSON.parse(x) : v; } catch { return v; } };
const yaz = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* yok say */ } };

const D = {
  liste: oku('cp_liste', []),            // [{ tarifId, kisi }]
  evde: new Set(oku('cp_evde', null) ?? Object.keys(BESINLER).filter((k) => BESINLER[k].d)),
  alindi: new Set(oku('cp_alindi', [])),  // alışveriş listesinde işaretlenenler
  fav: oku('cp_fav', []),
  kisi: oku('cp_kisi', {}),               // tarif başına son seçilen kişi sayısı
  sofra: oku('cp_sofra', {}),             // sofraId → { menu: [...], kisi }
  gorsel: oku('cp_gorsel', {}),           // tarifId → resim adresi ('' = yok)
};
const kaydet = () => {
  yaz('cp_liste', D.liste); yaz('cp_evde', [...D.evde]); yaz('cp_alindi', [...D.alindi]);
  yaz('cp_fav', D.fav); yaz('cp_kisi', D.kisi); yaz('cp_sofra', D.sofra); yaz('cp_gorsel', D.gorsel);
};

// ───────── Yardımcılar ─────────
const $ = (s, el = document) => el.querySelector(s);
const ekran = $('#ekran');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const yerli = window.Capacitor?.isNativePlatform?.() ?? false;
const eklenti = (ad) => window.Capacitor?.Plugins?.[ad];

function bildir(metin) {
  const b = $('#bildirim');
  b.textContent = metin; b.classList.add('acik');
  clearTimeout(bildir.z); bildir.z = setTimeout(() => b.classList.remove('acik'), 2200);
}
function titret(ms = 20) { try { navigator.vibrate?.(ms); } catch { /* yok */ } }

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
  // Uygulamada dış bağlantılar sistem tarayıcısında (ya da ilgili uygulamada) açılır.
  if (yerli) location.href = url; else window.open(url, '_blank', 'noopener');
}
async function marketAc(marketId, aranan) {
  const m = MARKETLER.find((x) => x.id === marketId);
  await kopyala(aranan);
  bildir(`"${aranan}" kopyalandı — ${m.ad} açılıyor`);
  setTimeout(() => disAc(m.url(aranan)), 350);
}

// Vikipedi'den yemek görseli (internet yoksa ya da madde görseli yoksa çizim gösterilir).
async function gorselGetir(t) {
  if (t.id in D.gorsel) return D.gorsel[t.id];
  try {
    const r = await fetch(gorselApiUrl(t));
    const j = await r.json();
    const sayfa = Object.values(j?.query?.pages ?? {})[0];
    const url = sayfa?.thumbnail?.source ?? '';
    D.gorsel[t.id] = url; kaydet();
    return url;
  } catch { return null; }
}
function gorselHtml(t, sinif = 'gorsel') {
  const kat = kategoriBul(t.kat);
  const url = D.gorsel[t.id];
  return `<div class="${sinif}" data-gorsel="${t.id}" style="--renk:${kat.renk}">
    ${url ? `<img src="${esc(url)}" alt="${esc(t.ad)}" loading="lazy">` : `<span class="cizim">${t.emoji}</span>`}
  </div>`;
}
function gorselleriDoldur(kok = ekran) {
  kok.querySelectorAll('[data-gorsel]').forEach(async (el) => {
    if (el.querySelector('img')) return;
    const t = tarifBul(el.dataset.gorsel);
    const url = await gorselGetir(t);
    if (!url || !el.isConnected || el.querySelector('img')) return;
    const img = new Image();
    img.alt = t.ad; img.src = url;
    img.onload = () => { el.innerHTML = ''; el.append(img); };
  });
}

const listeSayisi = () => {
  const n = D.liste.length;
  const b = $('#listeSayi'); b.hidden = !n; b.textContent = n;
};

// ───────── Yönlendirme ─────────
const rotalar = [
  [/^#?\/?$/, anaEkran, 'ana'],
  [/^#\/cevir\/([\w-]+)$/, cevirEkrani, 'ana'],
  [/^#\/tarif\/([\w-]+)$/, tarifEkrani, null],
  [/^#\/sofralar$/, sofralarEkrani, 'sofralar'],
  [/^#\/sofra\/([\w-]+)$/, sofraEkrani, 'sofralar'],
  [/^#\/favoriler$/, favorilerEkrani, 'favoriler'],
  [/^#\/liste$/, listeEkrani, 'liste'],
  [/^#\/hakkinda$/, hakkindaEkrani, null],
];
let temizle = null;
function yonlendir() {
  temizle?.(); temizle = null;
  kapatCekmece();
  const h = location.hash || '#/';
  for (const [re, fn, sekme] of rotalar) {
    const m = h.match(re);
    if (!m) continue;
    document.querySelectorAll('nav.alt a').forEach((a) => a.classList.toggle('secili', a.dataset.sekme === sekme));
    $('#geri').hidden = h === '#/' || h === '' || h === '#';
    ekran.innerHTML = '';
    ekran.scrollTop = 0; window.scrollTo(0, 0);
    fn(...m.slice(1));
    gorselleriDoldur();
    listeSayisi();
    return;
  }
  location.hash = '#/';
}
$('#geri').onclick = () => (history.length > 1 ? history.back() : (location.hash = '#/'));
window.addEventListener('hashchange', yonlendir);
const baslik = (metin) => { $('#baslik').innerHTML = metin; };

// ───────── Ana ekran ─────────
function anaEkran() {
  baslik('<span class="logo">🎡</span> Çevir Pişir');
  ekran.innerHTML = `
    <section class="karsilama">
      <h2>Bugün ne yiyoruz?</h2>
      <p>Bir kategori seç, çark dönsün, ekrana dokun — gerisi tarifte.</p>
    </section>
    <section class="kategoriler">
      ${KATEGORILER.map((k) => `
        <a class="kat" href="#/cevir/${k.id}" style="--renk:${k.renk}">
          <span class="kat-emoji">${k.emoji}</span>
          <span class="kat-ad">${k.ad}</span>
          <span class="kat-say">${kategoriTarifleri(k.id).length} tarif</span>
        </a>`).join('')}
      <a class="kat genis" href="#/cevir/hepsi" style="--renk:#e4572e">
        <span class="kat-emoji">🎲</span><span class="kat-ad">Şansıma ne çıkarsa</span>
        <span class="kat-say">Tüm kategorilerden</span>
      </a>
    </section>
    <h3 class="ara-baslik">Sofra kur</h3>
    <section class="sofra-kartlar">
      ${SOFRALAR.map((s) => `
        <a class="sofra-kart" href="#/sofra/${s.id}">
          <span class="sofra-emoji">${s.emoji}</span>
          <span><b>${s.ad}</b><small>${s.aciklama}</small></span>
        </a>`).join('')}
    </section>
    <p class="dipnot"><a href="#/hakkinda">Kaynaklar ve hesaplama yöntemi</a></p>`;
}

// ───────── Çark ekranı ─────────
function cevirEkrani(katId) {
  const kat = katId === 'hepsi' ? { id: 'hepsi', ad: 'Şansıma', emoji: '🎲', renk: '#e4572e' } : kategoriBul(katId);
  if (!kat) return (location.hash = '#/');
  const JOKER = { id: 'joker', ad: 'Dışarıdan sipariş!', emoji: '🛵' };
  const liste = [...(katId === 'hepsi' ? TARIFLER : kategoriTarifleri(katId)), JOKER];
  baslik(`${kat.emoji} ${kat.ad}`);

  ekran.innerHTML = `
    <section class="cark" style="--renk:${kat.renk}">
      <div class="makara" id="makara" aria-live="off">
        <div class="makara-pencere">
          <div class="satir ust2" id="s0"></div>
          <div class="satir ust1" id="s1"></div>
          <div class="satir orta" id="s2"></div>
          <div class="satir alt1" id="s3"></div>
          <div class="satir alt2" id="s4"></div>
        </div>
        <div class="ok sol">▶</div><div class="ok sag">◀</div>
      </div>
      <p class="ipucu" id="ipucu">Durdurmak için ekrana dokun</p>
      <div id="sonuc" class="sonuc" aria-live="polite"></div>
    </section>`;

  let i = Math.floor(Math.random() * liste.length);
  let durum = 'donuyor'; // donuyor | duruyor | durdu
  let zaman = null;
  let sonId = null;
  const ciz = () => {
    for (let k = 0; k < 5; k++) {
      const t = liste[(i + k - 2 + liste.length * 3) % liste.length];
      $(`#s${k}`).textContent = `${t.emoji} ${t.ad}`;
    }
  };
  const adim = () => { i = (i + 1) % liste.length; ciz(); };
  const baslat = () => {
    durum = 'donuyor';
    $('#sonuc').innerHTML = '';
    $('#ipucu').textContent = 'Durdurmak için ekrana dokun';
    $('#makara').classList.add('donuyor');
    clearInterval(zaman);
    zaman = setInterval(adim, 70);
  };
  const durdur = () => {
    if (durum !== 'donuyor') return;
    durum = 'duruyor';
    clearInterval(zaman);
    // Joker yaklaşık 12 çevirişte bir çıkar.
    const yemekler = liste.filter((x) => x !== JOKER);
    const hedef = Math.random() < 1 / 12 && sonId !== 'joker' ? JOKER : rastgeleSec(yemekler, sonId ? [sonId] : []);
    const hedefI = liste.indexOf(hedef);
    // Yavaşlayarak hedefe varır: en az 8 adım, sonra hedefe kadar.
    let kalan = 8 + ((hedefI - (i + 8)) % liste.length + liste.length) % liste.length;
    let gecikme = 70;
    const yavasla = () => {
      adim(); titret(6);
      kalan--;
      if (kalan <= 0) return bitti(hedef);
      gecikme *= kalan < 4 ? 1.35 : 1.12;
      zaman = setTimeout(yavasla, gecikme);
    };
    yavasla();
  };
  const bitti = (t) => {
    durum = 'durdu'; sonId = t.id;
    $('#makara').classList.remove('donuyor');
    titret([30, 40, 60]);
    if (t === JOKER) return jokerSonuc();
    const d = besinDegeri(t);
    $('#ipucu').textContent = 'Beğenmediysen tekrar çevir';
    $('#sonuc').innerHTML = `
      <a class="sonuc-kart" href="#/tarif/${t.id}">
        ${gorselHtml(t, 'gorsel buyuk')}
        <div class="sonuc-bilgi">
          <h2>${esc(t.ad)}</h2>
          <p><span class="rozet">🔥 ${d.kcal} kcal / porsiyon</span><span class="rozet">⏱ ${t.sure} dk</span>${t.sekersiz ? '<span class="rozet">🚫 Şekersiz</span>' : ''}</p>
          <span class="dugme ana">Tarifi gör ›</span>
        </div>
      </a>
      <button class="dugme ikincil" id="tekrar">🎡 Tekrar çevir</button>`;
    gorselleriDoldur($('#sonuc'));
    $('#tekrar').onclick = (e) => { e.stopPropagation(); baslat(); };
  };

  const jokerSonuc = () => {
    const o = SIPARIS_ONERILERI[Math.floor(Math.random() * SIPARIS_ONERILERI.length)];
    $('#ipucu').textContent = 'Mutfak bugün kapalı 😎';
    $('#sonuc').innerHTML = `
      <div class="sonuc-kart joker">
        <div class="joker-ust"><span>🛵</span><h2>Bugün senin günün!</h2><p>Önlüğü as, dışarıdan sipariş ver.</p></div>
        <div class="sonuc-bilgi">
          <p class="joker-oneri">Çarkın önerisi: <b>${o.emoji} ${esc(o.ad)}</b></p>
          <div class="siparis-dugmeler">
            ${SIPARIS_SITELERI.map((x) => `<button class="dugme" data-sip="${x.id}" style="background:${x.renk};color:#fff">${x.ad}</button>`).join('')}
          </div>
          <p class="kucuk">Dokununca "${esc(o.ad)}" panoya kopyalanır; uygulamada arama kutusuna yapıştırman yeterli.</p>
        </div>
      </div>
      <button class="dugme ikincil" id="tekrar">🎡 Yok, yemek yapacağım — tekrar çevir</button>`;
    $('#sonuc').querySelectorAll('[data-sip]').forEach((b) => (b.onclick = async (e) => {
      e.stopPropagation();
      const x = SIPARIS_SITELERI.find((y) => y.id === b.dataset.sip);
      await kopyala(o.ad); bildir(`"${o.ad}" kopyalandı — ${x.ad} açılıyor`);
      setTimeout(() => disAc(x.url), 350);
    }));
    $('#tekrar').onclick = (e) => { e.stopPropagation(); baslat(); };
  };

  ciz(); baslat();
  const dokun = (e) => {
    if (e.target.closest('a, button')) return;
    if (durum === 'donuyor') durdur();
  };
  ekran.addEventListener('click', dokun);
  temizle = () => { clearInterval(zaman); clearTimeout(zaman); ekran.removeEventListener('click', dokun); };
}

// ───────── Tarif ekranı ─────────
function tarifEkrani(id) {
  const t = tarifBul(id);
  if (!t) return (location.hash = '#/');
  const kat = kategoriBul(t.kat);
  baslik(`${kat.emoji} ${kat.ad}`);
  const d = besinDegeri(t);
  const dy = diyabetDurumu(t);
  let kisi = D.kisi[t.id] ?? t.porsiyon;
  const fav = () => D.fav.includes(t.id);

  ekran.innerHTML = `
    <article class="tarif">
      ${gorselHtml(t, 'gorsel kapak')}
      <div class="tarif-ust">
        <h2>${esc(t.ad)}</h2>
        <button class="fav ${fav() ? 'acik' : ''}" id="fav" aria-label="Favorilere ekle">♥</button>
      </div>
      <p class="rozetler">
        <span class="rozet sicak">🔥 ${d.kcal} kcal</span>
        <span class="rozet">1 porsiyon (ortalama)</span>
        <span class="rozet">⏱ ${t.sure} dk</span>
        <span class="rozet" style="background:${dy.renk};color:#fff">${dy.emoji} ${dy.ad}</span>
      </p>

      <section class="kutu">
        <h3>Besin dengesi <small>1 porsiyon</small></h3>
        <div class="makro-cubuk" role="img" aria-label="Enerjinin yüzde ${d.oran.p}'i proteinden, yüzde ${d.oran.k}'i karbonhidrattan, yüzde ${d.oran.y}'i yağdan">
          <span class="p" style="flex:${d.oran.p}"></span><span class="k" style="flex:${d.oran.k}"></span><span class="y" style="flex:${d.oran.y}"></span>
        </div>
        <div class="makrolar">
          <div><i class="p"></i><b>${d.p} g</b>Protein <small>%${d.oran.p}</small></div>
          <div><i class="k"></i><b>${d.k} g</b>Karbonhidrat <small>%${d.oran.k}</small></div>
          <div><i class="y"></i><b>${d.y} g</b>Yağ <small>%${d.oran.y}</small></div>
        </div>
        <p class="yorum">${dengeYorumu(d)}</p>
        <p class="diyabet-not"><b style="color:${dy.renk}">${dy.emoji} ${dy.ad}:</b> ${esc(dy.neden)}.
          ${dy.durum === 'dikkat' ? 'Diyabetik biri için yarım porsiyon ya da şekersiz bir alternatif daha uygun olur.' : dy.durum === 'olculu' ? 'Porsiyonu küçük tutup yanına salata/yoğurt eklemek iyi olur.' : ''}</p>
        <p class="kucuk">Yüzdeler enerjiye katkıyı gösterir. Değerler malzeme gramlarından hesaplanmış yaklaşık değerlerdir.</p>
      </section>

      <section class="kutu">
        <div class="kutu-baslik">
          <h3>Malzemeler</h3>
          <div class="sayac" aria-label="Kişi sayısı">
            <button id="eksi" aria-label="Azalt">−</button><span id="kisi"></span><button id="arti" aria-label="Artır">+</button>
          </div>
        </div>
        <p class="kucuk">Evde olanları işaretle; eksikler aşağıda listelenir.</p>
        <ul class="malzemeler" id="malzemeler"></ul>
        <div class="eksikler" id="eksikler"></div>
      </section>

      ${t.not ? `<p class="not">💡 ${esc(t.not)}</p>` : ''}

      <section class="kutu">
        <h3>Tarif</h3>
        <ol class="adimlar">${t.adim.map((a) => `<li>${esc(a)}</li>`).join('')}</ol>
      </section>

      <section class="kutu">
        <h3>Videolu anlatım</h3>
        <a class="dugme youtube" href="${youtubeUrl(t)}" data-dis>▶ YouTube'da "${esc(t.ad)} tarifi" videoları</a>
        <h3 class="mt">Hazır sipariş</h3>
        <a class="dugme ikincil" href="#" id="siparis">🛵 Yemeksepeti'nde "${esc(t.ad)}" ara</a>
      </section>

      ${hazimHtml(t)}

      <section class="kutu kaynak">
        <h3>Kaynaklar</h3>
        <ul>
          <li>Yemek hakkında: <a href="${vikipediUrl(t)}" data-dis>Vikipedi — ${esc(t.wiki || t.ad)}</a></li>
          <li>Tarif: Türk mutfağının bilinen geleneksel hazırlanışı; malzeme oranları uygulama için standartlaştırıldı.
            <a href="${aramaUrl(t)}" data-dis>Diğer tariflerle karşılaştır</a></li>
          <li>Besin değerleri: USDA FoodData Central ve TÜRKOMP verileriyle uyumlu malzeme değerlerinden hesaplandı. <a href="#/hakkinda">Ayrıntı</a></li>
        </ul>
      </section>
    </article>`;

  $('#fav').onclick = () => {
    D.fav = fav() ? D.fav.filter((x) => x !== t.id) : [...D.fav, t.id];
    kaydet(); $('#fav').classList.toggle('acik', fav()); titret();
    bildir(fav() ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı');
  };
  $('#siparis').onclick = async (e) => { e.preventDefault(); await marketAc('yemeksepeti', t.ad); };

  const ciz = () => {
    $('#kisi').textContent = `${kisi} kişilik`;
    const malz = olcekle(t, kisi);
    const asil = kisi === t.porsiyon;
    $('#malzemeler').innerHTML = malz.map((m, j) => {
      const sivi = m.r === 'su';
      const var_ = sivi || D.evde.has(m.k);
      return `<li class="${var_ ? 'var' : ''}">
        <label>
          <input type="checkbox" data-k="${m.k}" ${var_ ? 'checked' : ''} ${sivi ? 'disabled' : ''}>
          <span class="m-ad">${esc(m.ad)}</span>
          <span class="m-miktar">${asil && t.malz[j][2] ? esc(t.malz[j][2]) + ' · ' : ''}${gramYaz(m.g)}</span>
        </label>
      </li>`;
    }).join('');
    const eksik = [...new Map(malz.filter((m) => m.r !== 'su' && !D.evde.has(m.k)).map((m) => [m.k, m])).values()];
    $('#eksikler').innerHTML = eksik.length ? `
      <h4>Eksik malzemeler (${eksik.length})</h4>
      <p class="eksik-liste">${eksik.map((m) => esc(m.ad)).join(', ')}</p>
      <div class="dugmeler">
        <button class="dugme ana" id="listeyeEkle">🛒 Alışveriş listesine ekle</button>
        <button class="dugme ikincil" id="marketteAra">Markette ara</button>
      </div>` : '<p class="tamam">✓ Bütün malzemeler evde var. Afiyet olsun!</p>';
    $('#listeyeEkle')?.addEventListener('click', () => {
      const v = D.liste.find((x) => x.tarifId === t.id);
      if (v) v.kisi = kisi; else D.liste.push({ tarifId: t.id, kisi });
      kaydet(); listeSayisi(); titret();
      bildir(`${t.ad} listeye eklendi (${kisi} kişilik)`);
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

// Yemekten sonra: hazım önerileri bölümü
function hazimHtml(tarifler, baslikEk = '1 porsiyon') {
  const o = hazimOnerisi(tarifler);
  const madde = (l) => `<ul class="oneri">${l.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  return `<section class="kutu hazim">
    <h3>Yemekten sonra 😌</h3>
    <div class="yak">
      <span class="yak-sayi">${o.dakika}<small>dk</small></span>
      <span>tempolu yürüyüş, ${baslikEk} için alınan <b>${o.kcal} kcal</b>'yi yakar <small>(70 kg'lık biri için, ~5 km/sa)</small></span>
    </div>
    <h4>Ne içsem?</h4>${madde(o.icecek)}
    <h4>Hareket</h4>${madde(o.hareket)}
    <h4>Dikkat</h4>${madde(o.dikkat)}
    <p class="kucuk">Genel önerilerdir. Bir sağlık sorunun, gebeliğin ya da düzenli kullandığın bir ilaç varsa (ör. bitki çayları için) doktoruna danış.</p>
  </section>`;
}

// Eksik malzemeler için market seçenekleri (alttan açılan panel).
function marketCekmecesi(ogeler) {
  const metin = ogeler.map((o) => `• ${o.ad} — ${gramYaz(o.g)}`).join('\n');
  acCekmece(`
    <h3>Markette ara</h3>
    <p class="kucuk">Dokunduğun ürünün adı panoya kopyalanır ve marketin arama sayfası açılır. Arama kutusu boş gelirse adı yapıştırman yeterli.</p>
    <ul class="market-liste">
      ${ogeler.map((o, i) => `
        <li><span>${esc(o.ad)} <small>${gramYaz(o.g)}</small></span>
          <span class="market-dugmeler">
            ${MARKETLER.filter((m) => m.id !== 'yemeksepeti').map((m) => `<button data-m="${m.id}" data-i="${i}" style="--renk:${m.renk}">${m.ad}</button>`).join('')}
          </span>
        </li>`).join('')}
    </ul>
    <div class="dugmeler">
      <button class="dugme ikincil" id="cKopyala">📋 Hepsini kopyala</button>
      <button class="dugme ikincil" id="cPaylas">↗ Paylaş</button>
    </div>
    <button class="dugme duz" id="cKapat">Kapat</button>`);
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

// ───────── Sofralar ─────────
function sofralarEkrani() {
  baslik('🍽️ Sofralar');
  ekran.innerHTML = `
    <section class="karsilama"><h2>Sofra kur</h2><p>Menü tek dokunuşla hazır; beğenmediğin yemeği tek başına yeniden çevir.</p></section>
    <section class="sofra-kartlar">
      ${SOFRALAR.map((s) => `<a class="sofra-kart" href="#/sofra/${s.id}"><span class="sofra-emoji">${s.emoji}</span>
        <span><b>${s.ad}</b><small>${s.aciklama}</small></span></a>`).join('')}
    </section>`;
}

function sofraEkrani(id) {
  const s = SOFRALAR.find((x) => x.id === id);
  if (!s) return (location.hash = '#/sofralar');
  baslik(`${s.emoji} ${s.ad}`);
  const kayit = D.sofra[s.id] ?? { kisi: s.id === 'davet' ? 6 : 4, diyabet: 'yok' };
  kayit.diyabet ??= 'yok';
  const sec = () => ({ diyabet: kayit.diyabet });
  if (!kayit.menu || kayit.menu.length !== s.yuvalar.length || kayit.menu.some((x) => !tarifBul(x))) kayit.menu = sofraOlustur(s, sec());
  D.sofra[s.id] = kayit; kaydet();

  ekran.innerHTML = `
    <section class="karsilama"><h2>${s.ad}</h2><p>${s.aciklama}</p>${s.ek ? `<p class="kucuk">🌙 ${s.ek}</p>` : ''}</section>
    <div class="kutu-baslik sofra-ayar">
      <span>Misafir sayısı</span>
      <div class="sayac"><button id="eksi">−</button><span id="kisi"></span><button id="arti">+</button></div>
    </div>
    <div class="kutu diyabet-ayar">
      <b>🩺 Misafirler arasında diyabetli var mı?</b>
      <div class="secim" role="radiogroup">
        <label><input type="radio" name="dy" value="yok"> Yok</label>
        <label><input type="radio" name="dy" value="uyarla"> Var — menüyü ona göre kur</label>
        <label><input type="radio" name="dy" value="secenek"> Var — ona ayrıca seçenek sun</label>
      </div>
    </div>
    <ul class="menu" id="menu"></ul>
    <section class="kutu" id="analiz"></section>
    <div class="dugmeler dikey">
      <button class="dugme ikincil" id="hepsi">🎡 Bütün menüyü yeniden çevir</button>
      <button class="dugme ana" id="listeye">🛒 Menünün malzemelerini listeye ekle</button>
      <button class="dugme duz" id="menuPaylas">↗ Menüyü paylaş</button>
    </div>
    <div id="hazim"></div>`;
  ekran.querySelector(`input[name="dy"][value="${kayit.diyabet}"]`).checked = true;

  const alternatifler = () => (kayit.diyabet === 'secenek'
    ? kayit.menu.map((_, i) => diyabetAlternatifi(s, kayit.menu, i)) : []);

  const ciz = (donen = []) => {
    $('#kisi').textContent = `${kayit.kisi} kişi`;
    const alt = alternatifler();
    $('#menu').innerHTML = kayit.menu.map((tid, i) => {
      const t = tarifBul(tid); const d = besinDegeri(t); const dy = diyabetDurumu(t);
      const dyRozet = kayit.diyabet !== 'yok' ? `<span class="dy-nokta" title="${dy.ad}">${dy.emoji}</span>` : '';
      return `<li class="${donen.includes(i) ? 'donuyor' : ''}">
        <div class="menu-satir">
          <a href="#/tarif/${t.id}">
            ${gorselHtml(t, 'gorsel kucuk')}
            <span class="menu-bilgi"><small>${s.yuvalar[i].ad}</small><b>${esc(t.ad)} ${dyRozet}</b><em>${d.kcal} kcal · P ${d.p} g · K ${d.k} g · Y ${d.y} g</em></span>
          </a>
          <button class="yenile" data-i="${i}" aria-label="${s.yuvalar[i].ad} yeniden çevir">↻</button>
        </div>
        ${alt[i] ? `<a class="alternatif" href="#/tarif/${alt[i].id}">🩺 Diyabetli misafir için: <b>${alt[i].emoji} ${esc(alt[i].ad)}</b> <small>(${besinDegeri(alt[i]).kcal} kcal, ${diyabetDurumu(alt[i]).kh} g karb.)</small></a>` : ''}
      </li>`;
    }).join('');

    const a = menuAnalizi(kayit.menu, sec());
    const aralik = (x, [lo, hi]) => (x < lo ? 'dusuk' : x > hi ? 'yuksek' : 'iyi');
    $('#analiz').innerHTML = `
      <div class="kutu-baslik"><h3>Menü dengesi</h3><span class="puan p${a.puan >= 85 ? 'iyi' : a.puan >= 65 ? 'orta' : 'zayif'}">${a.puan}<small>/100</small></span></div>
      <p class="kucuk">Kişi başı (her yemekten 1 porsiyon): <b>${a.toplam.kcal} kcal</b></p>
      <div class="makro-cubuk"><span class="p" style="flex:${a.oran.p}"></span><span class="k" style="flex:${a.oran.k}"></span><span class="y" style="flex:${a.oran.y}"></span></div>
      <div class="makrolar">
        <div class="${aralik(a.oran.p, HEDEF.p)}"><i class="p"></i><b>%${a.oran.p}</b>Protein <small>hedef %${HEDEF.p.join('–')}</small></div>
        <div class="${aralik(a.oran.k, HEDEF.k)}"><i class="k"></i><b>%${a.oran.k}</b>Karbonhidrat <small>hedef %${HEDEF.k.join('–')}</small></div>
        <div class="${aralik(a.oran.y, HEDEF.y)}"><i class="y"></i><b>%${a.oran.y}</b>Yağ <small>hedef %${HEDEF.y.join('–')}</small></div>
      </div>
      <ul class="notlar">${a.notlar.map((n) => `<li class="${n.iyi ? 'iyi' : 'uyari'}">${n.iyi ? '✓' : '!'} ${esc(n.metin)}</li>`).join('')}</ul>
      ${kayit.diyabet === 'secenek' ? '<p class="kucuk">🩺 Menü herkes için aynı kaldı; diyabete uygun olmayan yemeklerin altında diyabetli misafir için alternatif önerildi.</p>' : ''}
      <p class="kucuk">Hedefler: Türkiye Beslenme Rehberi (TÜBER 2022) yetişkin enerji dağılımı. Menü, yüzlerce olası kombinasyon bu ölçütlerle puanlanarak seçilir. <a href="#/hakkinda">Yöntem</a></p>`;
    $('#hazim').innerHTML = hazimHtml(kayit.menu.map(tarifBul), 'menünün tamamı (kişi başı)');
    gorselleriDoldur($('#menu'));
  };

  // Çevirme animasyonu: yuvalar kısa süre rastgele döner, sonra puanlı seçim yerleşir.
  const animasyon = (yuvalar, sonuc) => {
    let n = 0;
    const z = setInterval(() => {
      const gecici = [...kayit.menu];
      for (const i of yuvalar) {
        const l = TARIFLER.filter((t) => s.yuvalar[i].kat.includes(t.kat));
        gecici[i] = l[Math.floor(Math.random() * l.length)].id;
      }
      const asil = kayit.menu; kayit.menu = gecici; ciz(yuvalar); kayit.menu = asil; titret(5);
      if (++n >= 8) { clearInterval(z); kayit.menu = sonuc(); D.sofra[s.id] = kayit; kaydet(); ciz(); }
    }, 90);
  };
  $('#menu').addEventListener('click', (e) => {
    const b = e.target.closest('.yenile'); if (!b) return;
    const i = +b.dataset.i;
    animasyon([i], () => yuvaYenile(s, kayit.menu, i, sec()));
  });
  $('#hepsi').onclick = () => animasyon(s.yuvalar.map((_, i) => i), () => sofraOlustur(s, sec()));
  ekran.querySelectorAll('input[name="dy"]').forEach((r) => (r.onchange = () => {
    kayit.diyabet = r.value; kaydet();
    if (r.value === 'uyarla') { animasyon(s.yuvalar.map((_, i) => i), () => sofraOlustur(s, sec())); bildir('Menü diyabete göre yeniden kuruldu'); }
    else ciz();
  }));
  $('#eksi').onclick = () => { kayit.kisi = Math.max(1, kayit.kisi - 1); kaydet(); ciz(); };
  $('#arti').onclick = () => { kayit.kisi = Math.min(30, kayit.kisi + 1); kaydet(); ciz(); };
  $('#listeye').onclick = () => {
    const ekle = (tid, kisi) => {
      const v = D.liste.find((x) => x.tarifId === tid);
      if (v) v.kisi = kisi; else D.liste.push({ tarifId: tid, kisi });
    };
    for (const tid of kayit.menu) ekle(tid, kayit.kisi);
    // Seçenek modunda alternatif yemekler 1 kişilik olarak eklenir.
    alternatifler().forEach((t) => t && ekle(t.id, 1));
    kaydet(); listeSayisi(); titret();
    bildir(`Menü ${kayit.kisi} kişilik olarak listeye eklendi`);
  };
  $('#menuPaylas').onclick = () => {
    const alt = alternatifler();
    paylas(s.ad, `${s.emoji} ${s.ad} (${kayit.kisi} kişi)\n\n` +
      kayit.menu.map((tid, i) => `${s.yuvalar[i].ad}: ${tarifBul(tid).ad}${alt[i] ? ` (diyabetli misafir için: ${alt[i].ad})` : ''}`).join('\n') +
      '\n\nÇevir Pişir ile hazırlandı');
  };
  ciz();
}

// ───────── Favoriler ─────────
function favorilerEkrani() {
  baslik('♥ Favoriler');
  const liste = D.fav.map(tarifBul).filter(Boolean);
  ekran.innerHTML = liste.length ? `
    <ul class="tarif-liste">${liste.map(tarifSatiri).join('')}</ul>` : `
    <div class="bos"><span>♥</span><p>Henüz favorin yok.<br>Tarif sayfasındaki kalbe dokunarak ekleyebilirsin.</p>
    <a class="dugme ana" href="#/">🎡 Çarkı çevir</a></div>`;
  ekran.insertAdjacentHTML('beforeend', `
    <h3 class="ara-baslik">Tüm tarifler</h3>
    ${KATEGORILER.map((k) => `<details class="kat-detay"><summary>${k.emoji} ${k.ad} <small>${kategoriTarifleri(k.id).length}</small></summary>
      <ul class="tarif-liste">${kategoriTarifleri(k.id).map(tarifSatiri).join('')}</ul></details>`).join('')}`);
  ekran.querySelectorAll('details').forEach((d) => d.addEventListener('toggle', () => d.open && gorselleriDoldur(d)));
}
function tarifSatiri(t) {
  const d = besinDegeri(t);
  return `<li><a href="#/tarif/${t.id}">${gorselHtml(t, 'gorsel kucuk')}
    <span class="menu-bilgi"><b>${esc(t.ad)}</b><em>${d.kcal} kcal · ${t.sure} dk</em></span><span class="ok-sag">›</span></a></li>`;
}

// ───────── Alışveriş listesi ─────────
function listeEkrani() {
  baslik('🛒 Alışveriş listesi');
  if (!D.liste.length) {
    ekran.innerHTML = `<div class="bos"><span>🛒</span><p>Liste boş.<br>Bir tarifte <b>“Alışveriş listesine ekle”</b>ye ya da bir sofrada <b>“Menünün malzemelerini listeye ekle”</b>ye dokun.</p>
      <a class="dugme ana" href="#/">🎡 Çarkı çevir</a></div>`;
    return;
  }
  const ciz = () => {
    const tum = alisverisListesi(D.liste);
    const alinacak = tum.filter((m) => !D.evde.has(m.k));
    const evde = tum.filter((m) => D.evde.has(m.k));
    const kalan = alinacak.filter((m) => !D.alindi.has(m.k)).length;
    let reyon = null;
    ekran.innerHTML = `
      <section class="kutu">
        <h3>Listedeki yemekler</h3>
        <ul class="liste-yemek">
          ${D.liste.map((x) => { const t = tarifBul(x.tarifId); return t ? `<li><a href="#/tarif/${t.id}">${t.emoji} ${esc(t.ad)}</a>
            <span class="sayac kucuk"><button data-az="${t.id}">−</button><span>${x.kisi} kişi</span><button data-co="${t.id}">+</button></span>
            <button class="sil" data-sil="${t.id}" aria-label="${esc(t.ad)} listeden çıkar">✕</button></li>` : ''; }).join('')}
        </ul>
      </section>
      <section class="kutu">
        <div class="kutu-baslik"><h3>Alınacaklar</h3><span class="kucuk">${kalan} / ${alinacak.length} kaldı</span></div>
        <ul class="alinacaklar">
          ${alinacak.map((m) => {
            const bas = m.r !== reyon ? `<li class="reyon">${REYONLAR[m.r] ?? 'Diğer'}</li>` : '';
            reyon = m.r;
            return `${bas}<li class="${D.alindi.has(m.k) ? 'alindi' : ''}">
              <label><input type="checkbox" data-al="${m.k}" ${D.alindi.has(m.k) ? 'checked' : ''}>
                <span class="m-ad">${esc(m.ad)}<small>${m.kaynak.map(esc).join(', ')}</small></span>
                <span class="m-miktar">${gramYaz(m.g)}</span></label>
              <button class="evde-dugme" data-evde="${m.k}" title="Evde var">🏠</button>
            </li>`;
          }).join('') || '<li class="tamam">✓ Alınacak bir şey kalmadı.</li>'}
        </ul>
        <div class="dugmeler">
          <button class="dugme ana" id="lPaylas">↗ Listeyi paylaş</button>
          <button class="dugme ikincil" id="lMarket">Markette ara</button>
        </div>
      </section>
      ${evde.length ? `<details class="kutu evde-var"><summary>🏠 Evde var (${evde.length}) <small>listeden çıkarıldı</small></summary>
        <ul class="alinacaklar">${evde.map((m) => `<li><span class="m-ad">${esc(m.ad)}</span><span class="m-miktar">${gramYaz(m.g)}</span>
          <button class="evde-dugme" data-yok="${m.k}">Listeye geri al</button></li>`).join('')}</ul></details>` : ''}
      <button class="dugme duz tehlike" id="lTemizle">Listeyi temizle</button>`;

    ekran.onclick = (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const bul = (id) => D.liste.find((x) => x.tarifId === id);
      if (b.dataset.sil) D.liste = D.liste.filter((x) => x.tarifId !== b.dataset.sil);
      else if (b.dataset.az) bul(b.dataset.az).kisi = Math.max(1, bul(b.dataset.az).kisi - 1);
      else if (b.dataset.co) bul(b.dataset.co).kisi = Math.min(30, bul(b.dataset.co).kisi + 1);
      else if (b.dataset.evde) { D.evde.add(b.dataset.evde); bildir('Evde var olarak işaretlendi'); }
      else if (b.dataset.yok) D.evde.delete(b.dataset.yok);
      else if (b.id === 'lPaylas') return paylas('Alışveriş listesi', listeMetni(alinacak.filter((m) => !D.alindi.has(m.k))));
      else if (b.id === 'lMarket') return marketCekmecesi(alinacak.filter((m) => !D.alindi.has(m.k)));
      else if (b.id === 'lTemizle') {
        if (!confirm('Alışveriş listesi temizlensin mi?')) return;
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
  ekran.innerHTML = `
    <article class="kutu metin">
      <h3>Kalori ve besin dengesi nasıl hesaplanıyor?</h3>
      <p>Her tarifteki malzemenin gramı bellidir. Uygulama bu gramları malzemenin 100 g'daki enerji, protein, karbonhidrat ve yağ değerleriyle çarpar, toplar ve porsiyon sayısına böler. Kızartmalarda tavada kalan yağ değil, yaklaşık olarak yemeğe geçen yağ sayılır.</p>
      <p>Protein–karbonhidrat–yağ yüzdeleri <b>enerjiye katkıyı</b> gösterir (Atwater katsayıları: protein ve karbonhidrat 4 kcal/g, yağ 9 kcal/g).</p>
      <p>Değerler yaklaşıktır: ürün markası, sebzenin boyu, pişirme süresi ve porsiyonun büyüklüğü sonucu değiştirir. Sağlık ya da diyet kararları için diyetisyene danışın.</p>
      <h3>Veri kaynakları</h3>
      <ul>
        <li><a href="https://fdc.nal.usda.gov/" data-dis>USDA FoodData Central</a> — ABD Tarım Bakanlığı besin veri tabanı</li>
        <li><a href="https://www.turkomp.tarimorman.gov.tr/" data-dis>TÜRKOMP</a> — Ulusal Gıda Kompozisyon Veri Tabanı (Tarım ve Orman Bakanlığı)</li>
        <li>Yemek görselleri ve yemek bilgisi: <a href="https://tr.wikipedia.org/" data-dis>Vikipedi</a> (madde görseli; internet yoksa çizim gösterilir)</li>
        <li>Videolar: YouTube araması — en güncel ve en çok izlenen anlatımlar listelenir</li>
      </ul>
      <h3>Menü nasıl kuruluyor?</h3>
      <p>Sofra menüsü rastgele değil: uygulama yüzlerce olası kombinasyonu üretir ve her birini puanlar. Ölçütler:</p>
      <ul>
        <li><b>Enerji dağılımı:</b> Türkiye Beslenme Rehberi (TÜBER 2022) yetişkinler için karbonhidrat %45–60, protein %10–20, yağ %20–35 önerir. Menünün toplamı bu aralıklara ne kadar yakınsa puanı o kadar yüksek olur.</li>
        <li><b>Çeşitlilik:</b> aynı ana malzeme (patlıcan, kıyma, tavuk, yoğurt, pirinç, baklagil…) birden fazla yemekte baskınsa puan düşer.</li>
        <li><b>Hafiflik:</b> sofrada birden fazla yağlı/ağır yemek olmasından kaçınılır; yanına zeytinyağlı ya da salata gelir.</li>
        <li><b>Türk damak tadı:</b> kuru fasulye–pilav, karnıyarık–cacık, köfte–çoban salata gibi bilinen ikililere artı puan verilir.</li>
      </ul>
      <p>En iyi birkaç menüden biri seçilir; böylece her çevirişte farklı ama dengeli bir sofra çıkar.</p>
      <h3>Diyabet etiketleri</h3>
      <p>🟢 <b>Uygun</b>: porsiyonda en fazla ~35 g karbonhidrat ve eklenmiş şeker yok denecek kadar az. 🟡 <b>Ölçülü</b>: 35–60 g karbonhidrat ya da biraz eklenmiş şeker. 🔴 <b>Dikkat</b>: 60 g'ı aşan karbonhidrat ya da porsiyonda 10 g'dan fazla eklenmiş şeker. Mercimek, bulgur, kuru fasulye gibi glisemik indeksi düşük kaynaklarda sınırlar 15 g daha esnektir.</p>
      <p>Diyabetli misafir için tabak yöntemi (Amerikan Diyabet Derneği): tabağın yarısı nişastasız sebze/salata, çeyreği protein, çeyreği pilav/ekmek/patates. Etiketler genel yol göstericidir; kişisel karbonhidrat hedefi ve ilaç kullanımı için hekim ya da diyetisyen önerisi esastır.</p>
      <h3>Tarifler</h3>
      <p>Tarifler Türk mutfağının yaygın, geleneksel hazırlanışını izler; ölçüler uygulamada hesap yapılabilmesi için grama çevrilip standartlaştırılmıştır. Her tarifte farklı yorumları karşılaştırabileceğin bir arama bağlantısı vardır.</p>
      <h3>Market bağlantıları</h3>
      <p>Market düğmeleri ürün adını panoya kopyalar ve marketin arama sayfasını açar. Uygulama hiçbir siparişi senin adına vermez ve hiçbir veri göndermez; listelerin yalnızca bu cihazda saklanır.</p>
      <p class="kucuk">Çevir Pişir · ${TARIFLER.length} tarif</p>
    </article>`;
}

// Dış bağlantılar
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-dis]');
  if (!a) return;
  e.preventDefault(); disAc(a.href);
});

// Web sürümünde çevrimdışı çalışma
if (!yerli && 'serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

yonlendir();

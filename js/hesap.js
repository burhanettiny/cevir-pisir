// Saf hesaplama işlevleri (DOM'a bağlı değil; test edilir).
import { BESINLER, REYONLAR } from './veri/besinler.js';
import { TARIFLER, KATEGORILER, SOFRALAR } from './veri/tarifler.js';

export { BESINLER, REYONLAR, TARIFLER, KATEGORILER, SOFRALAR };

export const tarifBul = (id) => TARIFLER.find((t) => t.id === id);
export const kategoriBul = (id) => KATEGORILER.find((k) => k.id === id);
export const kategoriTarifleri = (kat) => TARIFLER.filter((t) => t.kat === kat);

/** Malzeme satırını nesneye çevirir. */
export function malzeme([k, g, olcu = '', yenen]) {
  const b = BESINLER[k];
  if (!b) throw new Error(`Bilinmeyen malzeme: ${k}`);
  return { ...b, k, g, olcu, yenen: yenen ?? g };
}

/**
 * 1 porsiyonun besin değeri: malzemelerin (yenen) gramlarından hesaplanır.
 * Dönen: { kcal, p, k, y, oran: { p, k, y } }  (oran = enerjiye katkı yüzdesi)
 */
export function besinDegeri(tarif) {
  let kcal = 0, p = 0, k = 0, y = 0;
  for (const satir of tarif.malz) {
    const m = malzeme(satir);
    const c = m.yenen / 100;
    kcal += m.kcal * c; p += m.p * c; k += m.kh * c; y += m.y * c;
  }
  const n = tarif.porsiyon;
  kcal /= n; p /= n; k /= n; y /= n;
  // Enerji oranları Atwater katsayılarıyla (4/4/9) hesaplanır.
  const ep = p * 4, ek = k * 4, ey = y * 9, top = ep + ek + ey || 1;
  return {
    kcal: Math.round(kcal),
    p: Math.round(p), k: Math.round(k), y: Math.round(y),
    oran: { p: Math.round((ep / top) * 100), k: Math.round((ek / top) * 100), y: Math.round((ey / top) * 100) },
  };
}

/** Makro dengesine göre kısa, kural tabanlı yorum. */
export function dengeYorumu(d) {
  const { p, k, y } = d.oran;
  if (p >= 30) return 'Protein ağırlıklı, doyurucu bir tabak.';
  if (y >= 55) return 'Yağ oranı yüksek; yanına hafif bir salata ya da yoğurt iyi gider.';
  if (k >= 60) return 'Karbonhidrat ağırlıklı; yanına protein (yoğurt, et, baklagil) ekleyerek dengeleyebilirsiniz.';
  if (p >= 15 && k >= 30 && y <= 45) return 'Protein, karbonhidrat ve yağ dengeli.';
  return 'Hafif bir tabak; ana öğün için protein ve karbonhidratlı bir yemekle tamamlayın.';
}

// ── Yemekten sonra: hazım önerileri ──
const BAKLAGIL = ['kirmizi_mercimek', 'kuru_fasulye', 'nohut_haslanmis', 'kuru_bakla'];
const ACI = ['pul_biber', 'isot', 'biber_salcasi'];

/**
 * Yürüyüşle harcanan enerji (dakika). Tempolu yürüyüş (~5 km/sa) ≈ 3,5 MET;
 * kcal/dk = MET × 3,5 × kg / 200 (ACSM formülü). Varsayılan 70 kg.
 */
export function yuruyusDakikasi(kcal, kg = 70, met = 3.5) {
  return Math.max(1, Math.round(kcal / ((met * 3.5 * kg) / 200)));
}

/**
 * Bir ya da birkaç yemek için yemek sonrası öneriler.
 * Dönen: { icecek: [..], hareket: [..], dikkat: [..], kcal, dakika }
 */
export function hazimOnerisi(tarifler) {
  const liste = [].concat(tarifler);
  const anahtarlar = new Set(liste.flatMap((t) => t.malz.map((m) => m[0])));
  const kcal = liste.reduce((a, t) => a + besinDegeri(t).kcal, 0);
  const yagli = liste.some((t) => besinDegeri(t).oran.y >= 55);
  const agir = kcal >= 650 || yagli;
  const baklagil = BAKLAGIL.some((k) => anahtarlar.has(k));
  const aci = liste.some((t) => t.malz.some(([k, g]) => ACI.includes(k) && g >= 2));

  const icecek = [];
  if (baklagil) icecek.push('🌿 Rezene ya da kimyon çayı: baklagillerin yaptığı şişkinliğe karşı geleneksel bir seçenek.');
  if (aci) icecek.push('🥛 Bir bardak ayran: acının yakıcılığını yatıştırır.');
  if (agir) icecek.push('🍋 Ilık nane-limon ya da ıhlamur: ağır bir yemekten sonra hafifletici.');
  icecek.push('💧 Yudum yudum ılık su; bir anda çok sıvı içmekten kaçın.');
  icecek.push('☕ Demli çayı yemekten yaklaşık 1 saat sonra iç: yemekle birlikte içilen çay, besinlerdeki demirin emilimini azaltır.');

  const hareket = [
    `🚶 ${agir ? '15–20' : '10–15'} dakika rahat tempoda yürüyüş: yemek sonrası kısa yürüyüş kan şekerindeki yükselmeyi yumuşatır ve hazmı kolaylaştırır.`,
    '🧍 Yürüyemiyorsan ayakta kal: bulaşık, toparlanma gibi hafif işler de sayılır.',
    '🙆 Omuz çevirme (10 kez öne, 10 kez geriye) ve boyun esnetme (her yöne 15 saniye).',
    '🪑 Oturarak gövde çevirme: sırtın dik, her yöne yavaşça 5’er kez dön.',
    '🧘 Diz üstü oturuş (vajrasana): rahat edebiliyorsan 5 dakika, sırtın dik.',
  ];

  const dikkat = [
    '🛋️ Yemekten sonra 2–3 saat uzanma; reflü ve hazımsızlığı artırır.',
    '🏋️ Koşu, ağırlık gibi yoğun sporu 2 saat sonraya bırak.',
  ];
  if (agir) dikkat.push('🍰 Tatlıyı bir süre sonraya bırakmak midene nefes aldırır.');

  return { icecek, hareket, dikkat, kcal, dakika: yuruyusDakikasi(kcal) };
}

/** Porsiyon sayısına göre ölçeklenmiş malzeme listesi. */
export function olcekle(tarif, kisi) {
  const f = kisi / tarif.porsiyon;
  return tarif.malz.map((s) => {
    const m = malzeme(s);
    return { ...m, g: yuvarla(m.g * f), ham: m.g * f, carpan: f };
  });
}

/** Gramı okunur hale getirir: 1250 → "1,25 kg", 37 → "35 g". */
export function gramYaz(g) {
  if (g >= 1000) return `${(Math.round(g / 50) * 50 / 1000).toLocaleString('tr-TR')} kg`;
  return `${yuvarla(g)} g`;
}

export function yuvarla(g) {
  if (g < 10) return Math.max(1, Math.round(g));
  if (g < 100) return Math.round(g / 5) * 5;
  return Math.round(g / 10) * 10;
}

/**
 * Alışveriş listesi: [{ tarifId, kisi }] girdisinden malzemeleri birleştirir.
 * Su ve "dolapta genelde olur" işaretli malzemeler `temel` olarak ayrılır (varsayılan: evde var).
 * Dönen: [{ k, ad, g, r, d, kaynak: ['Mercimek Çorbası', ...] }] — reyona ve ada göre sıralı.
 */
export function alisverisListesi(secimler) {
  const harita = new Map();
  for (const { tarifId, kisi } of secimler) {
    const t = tarifBul(tarifId);
    if (!t) continue;
    for (const m of olcekle(t, kisi ?? t.porsiyon)) {
      if (m.r === 'su') continue;
      const v = harita.get(m.k) ?? { k: m.k, ad: m.ad, g: 0, r: m.r, d: m.d, kaynak: [] };
      v.g += m.ham;
      if (!v.kaynak.includes(t.ad)) v.kaynak.push(t.ad);
      harita.set(m.k, v);
    }
  }
  const sira = Object.keys(REYONLAR);
  return [...harita.values()]
    .map((v) => ({ ...v, g: yuvarla(v.g) }))
    .sort((a, b) => sira.indexOf(a.r) - sira.indexOf(b.r) || a.ad.localeCompare(b.ad, 'tr'));
}

/** Rastgele seçim; `haric` listesindekileri mümkünse atlar. `rnd` test için değiştirilebilir. */
export function rastgeleSec(liste, haric = [], rnd = Math.random) {
  const aday = liste.filter((x) => !haric.includes(x.id));
  const havuz = aday.length ? aday : liste;
  return havuz[Math.floor(rnd() * havuz.length)];
}

// ── Diyabet uygunluğu ──
// Porsiyon başı karbonhidrat ve eklenen şekere göre basit bir sınıflama. Tabak yöntemi (ADA) ve
// Türkiye Beslenme Rehberi (TÜBER) ilkelerinden türetilmiş genel bir yol göstericidir, tıbbi öneri değildir.
const DUSUK_GI = ['bulgur', 'koftelik_bulgur', 'kirmizi_mercimek', 'kuru_fasulye', 'nohut_haslanmis', 'kuru_bakla'];
export const DIYABET_ETIKET = {
  uygun: { ad: 'Diyabete uygun', renk: '#2e7d32', emoji: '🟢' },
  olculu: { ad: 'Ölçülü porsiyon', renk: '#b7791f', emoji: '🟡' },
  dikkat: { ad: 'Diyabette dikkat', renk: '#c0392b', emoji: '🔴' },
};
export function diyabetDurumu(t) {
  const d = besinDegeri(t);
  const seker = t.malz.filter(([k]) => k === 'seker').reduce((a, m) => a + (m[3] ?? m[1]), 0) / t.porsiyon;
  const dusukGiKh = t.malz.filter(([k]) => DUSUK_GI.includes(k))
    .reduce((a, m) => a + (BESINLER[m[0]].kh * (m[3] ?? m[1])) / 100, 0) / t.porsiyon;
  const pay = d.k ? dusukGiKh / d.k : 0;
  const esik = pay >= 0.5 ? 15 : 0; // düşük glisemik indeksli kaynaklar biraz daha esnek
  let durum = 'uygun';
  const neden = [];
  if (seker >= 10) { durum = 'dikkat'; neden.push(`porsiyonda ~${Math.round(seker)} g eklenmiş şeker`); }
  else if (seker >= 3) { durum = 'olculu'; neden.push(`porsiyonda ~${Math.round(seker)} g eklenmiş şeker`); }
  if (d.k > 60 + esik) { durum = 'dikkat'; neden.push(`porsiyonda ${d.k} g karbonhidrat`); }
  else if (d.k > 35 + esik) { if (durum === 'uygun') durum = 'olculu'; neden.push(`porsiyonda ${d.k} g karbonhidrat`); }
  if (!neden.length) neden.push(`porsiyonda ${d.k} g karbonhidrat${t.sekersiz ? ', şeker eklenmemiş' : ''}`);
  return { durum, neden: neden.join(', '), seker: Math.round(seker), kh: d.k, ...DIYABET_ETIKET[durum] };
}

// ── Menü planlama ──
// Hedef enerji dağılımı (Türkiye Beslenme Rehberi 2022, yetişkin): karbonhidrat %45–60, protein %10–20, yağ %20–35.
export const HEDEF = { k: [45, 60], p: [10, 20], y: [20, 35] };

// Aynı sofrada tekrar etmemesi gereken baskın malzemeler.
const BASKIN = {
  patlican: 'patlıcan', dana_kiyma: 'kıyma', tavuk_gogus: 'tavuk', tavuk_but: 'tavuk', patates: 'patates',
  pirinc: 'pirinç', kirmizi_mercimek: 'baklagil', kuru_fasulye: 'baklagil', nohut_haslanmis: 'baklagil', kuru_bakla: 'baklagil',
  yogurt: 'yoğurt', suzme_yogurt: 'yoğurt', ceviz: 'ceviz', bulgur: 'bulgur', kabak: 'kabak', sut: 'süt',
};
function baskinlar(t) {
  // Tarifin toplam gramajının %15'inden fazlasını oluşturan (ya da tarifin adını veren) malzemeler.
  const top = t.malz.filter(([k]) => BESINLER[k].r !== 'su').reduce((a, m) => a + m[1], 0);
  const s = new Set();
  for (const [k, g] of t.malz) if (BASKIN[k] && (g / top >= 0.15 || (k === 'ceviz' && g >= 60))) s.add(BASKIN[k]);
  return s;
}

// Türk mutfağının bilinen ikilileri (birlikte sunulunca artı puan).
const IKILILER = [
  ['etli-kuru-fasulye', 'pirinc-pilavi'], ['etli-kuru-fasulye', 'acili-ezme'], ['karniyarik', 'pirinc-pilavi'],
  ['karniyarik', 'cacik'], ['izmir-kofte', 'coban-salata'], ['kadinbudu-kofte', 'patates-puresi'],
  ['musakka', 'pirinc-pilavi'], ['musakka', 'cacik'], ['tas-kebabi', 'pirinc-pilavi'], ['hunkar-begendi', 'coban-salata'],
  ['tavuk-sis', 'bulgur-pilavi'], ['tavuk-sis', 'acili-ezme'], ['orman-kebabi', 'pirinc-pilavi'],
  ['tavuk-sote', 'bulgur-pilavi'], ['tavuk-sinitzel', 'patates-puresi'], ['tavuk-sinitzel', 'mevsim-salata'],
  ['mercimek-corbasi', 'izmir-kofte'], ['ezogelin-corbasi', 'tavuk-sis'], ['tavuklu-pilav', 'cacik'],
  ['tavuklu-pilav', 'coban-salata'], ['ispanak-yemegi', 'cacik'], ['etli-kuru-fasulye', 'kabak-tatlisi'],
  ['tavuk-guvec', 'bulgur-pilavi'], ['kremali-mantarli-tavuk', 'pirinc-pilavi'],
];
const ikili = (a, b) => IKILILER.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

/**
 * Menüyü puanlar (0–100) ve gerekçeleri döndürür.
 * secenek: { diyabet: 'yok' | 'uyarla' | 'secenek' }
 */
export function menuAnalizi(menu, secenek = {}) {
  const tarifler = menu.map(tarifBul).filter(Boolean);
  const notlar = [];
  let puan = 100;

  // 1) Enerji dağılımı hedefe uzaklık
  const top = menuToplami(menu);
  const ep = top.p * 4, ek = top.k * 4, ey = top.y * 9, e = ep + ek + ey || 1;
  const oran = { p: Math.round((ep / e) * 100), k: Math.round((ek / e) * 100), y: Math.round((ey / e) * 100) };
  const sapma = (x, [a, b]) => (x < a ? a - x : x > b ? x - b : 0);
  const toplamSapma = sapma(oran.k, HEDEF.k) + sapma(oran.p, HEDEF.p) + sapma(oran.y, HEDEF.y);
  puan -= toplamSapma * 0.8;
  if (toplamSapma <= 6) notlar.push({ iyi: true, metin: 'Enerji dağılımı önerilen aralığa yakın.' });
  else {
    if (oran.y > HEDEF.y[1]) notlar.push({ iyi: false, metin: `Yağ oranı yüksek (%${oran.y}); zeytinyağlıyı azaltmak ya da salata eklemek dengeler.` });
    if (oran.k > HEDEF.k[1]) notlar.push({ iyi: false, metin: `Karbonhidrat oranı yüksek (%${oran.k}); pilav ya da tatlıyı hafifletin.` });
    if (oran.k < HEDEF.k[0]) notlar.push({ iyi: false, metin: `Karbonhidrat düşük (%${oran.k}); pilav ya da bulgur eklenebilir.` });
    if (oran.p < HEDEF.p[0]) notlar.push({ iyi: false, metin: `Protein düşük (%${oran.p}); et, tavuk, baklagil ya da yoğurt ekleyin.` });
  }

  // 2) Baskın malzeme tekrarı
  const sayac = {};
  for (const t of tarifler) for (const b of baskinlar(t)) sayac[b] = (sayac[b] ?? 0) + 1;
  const tekrar = Object.entries(sayac).filter(([, n]) => n > 1);
  for (const [ad, n] of tekrar) puan -= 12 * (n - 1);
  if (tekrar.length) notlar.push({ iyi: false, metin: `Tekrar eden ana malzeme: ${tekrar.map(([a, n]) => `${a} (${n} yemekte)`).join(', ')}.` });
  else notlar.push({ iyi: true, metin: 'Yemekler birbirini tekrar etmiyor; çeşit zengin.' });

  // 3) Ağır yemek sayısı
  const agir = tarifler.filter((t) => t.kat !== 'tatli' && besinDegeri(t).oran.y >= 55 && besinDegeri(t).kcal >= 250).length;
  if (agir >= 2) { puan -= 8 * (agir - 1); notlar.push({ iyi: false, metin: `${agir} yağlı/ağır yemek var; biri zeytinyağlı ya da salata olabilir.` }); }

  // 4) Geleneksel ikililer
  let ikiliSay = 0;
  for (let i = 0; i < tarifler.length; i++) for (let j = i + 1; j < tarifler.length; j++) {
    if (ikili(tarifler[i].id, tarifler[j].id)) { ikiliSay++; notlar.push({ iyi: true, metin: `${tarifler[i].ad} + ${tarifler[j].ad}: klasik bir ikili.` }); }
  }
  puan += Math.min(ikiliSay, 2) * 6;

  // 5) Diyabet
  if (secenek.diyabet === 'uyarla') {
    let khKisi = 0;
    for (const t of tarifler) {
      const d = diyabetDurumu(t);
      khKisi += d.kh;
      if (d.durum === 'dikkat') puan -= 25; else if (d.durum === 'olculu') puan -= 7;
    }
    const sorunlu = tarifler.filter((t) => diyabetDurumu(t).durum === 'dikkat');
    notlar.push(sorunlu.length
      ? { iyi: false, metin: `Diyabet açısından dikkat: ${sorunlu.map((t) => t.ad).join(', ')}.` }
      : { iyi: true, metin: 'Menüde diyabet açısından "dikkat" etiketli yemek yok.' });
    notlar.push({ iyi: khKisi <= 110, metin: `Her yemekten bir porsiyonla kişi başı ~${khKisi} g karbonhidrat. Diyabetik misafir için tabağın yarısını sebze/salata, çeyreğini protein, çeyreğini pilav/ekmek yapmak (tabak yöntemi) iyi bir ölçüdür.` });
  }

  return { puan: Math.max(0, Math.min(100, Math.round(puan))), oran, toplam: top, notlar };
}

function yuvaAdaylari(sofra, i, secenek = {}) {
  const l = TARIFLER.filter((t) => sofra.yuvalar[i].kat.includes(t.kat));
  if (secenek.diyabet !== 'uyarla') return l;
  // Diyabete göre kurulan menüde "dikkat" etiketli yemek hiç aday olmaz.
  const uygun = l.filter((t) => diyabetDurumu(t).durum !== 'dikkat');
  return uygun.length ? uygun : l;
}

/**
 * Sofra menüsü: rastgele çok sayıda aday menü üretip puanlar, en iyilerden birini seçer
 * (her çevirişte farklı ama dengeli bir menü çıkar).
 */
export function sofraOlustur(sofra, secenek = {}, rnd = Math.random) {
  if (typeof secenek === 'function') { rnd = secenek; secenek = {}; }
  const adaylar = [];
  for (let n = 0; n < 250; n++) {
    const secilen = [];
    for (let i = 0; i < sofra.yuvalar.length; i++) secilen.push(rastgeleSec(yuvaAdaylari(sofra, i, secenek), secilen, rnd).id);
    if (new Set(secilen).size !== secilen.length) continue;
    adaylar.push({ menu: secilen, puan: menuAnalizi(secilen, secenek).puan });
  }
  adaylar.sort((a, b) => b.puan - a.puan);
  const enIyi = adaylar.slice(0, 6);
  return enIyi[Math.floor(rnd() * enIyi.length)].menu;
}

/** Bir yuvayı yeniden çevirir: diğer yemeklerle en uyumlu adaylardan biri gelir. */
export function yuvaYenile(sofra, menu, i, secenek = {}, rnd = Math.random) {
  if (typeof secenek === 'function') { rnd = secenek; secenek = {}; }
  const adaylar = yuvaAdaylari(sofra, i, secenek)
    .filter((t) => !menu.includes(t.id))
    .map((t) => { const m = menu.map((id, j) => (j === i ? t.id : id)); return { m, puan: menuAnalizi(m, secenek).puan }; })
    .sort((a, b) => b.puan - a.puan);
  if (!adaylar.length) return menu;
  const ust = adaylar.slice(0, Math.min(4, adaylar.length));
  return ust[Math.floor(rnd() * ust.length)].m;
}

/** "Seçenek sun" modunda: diyabete uygun olmayan yemek için aynı yuvadan uygun bir alternatif. */
export function diyabetAlternatifi(sofra, menu, i) {
  const t = tarifBul(menu[i]);
  if (diyabetDurumu(t).durum === 'uygun') return null;
  const adaylar = yuvaAdaylari(sofra, i)
    .filter((x) => !menu.includes(x.id) && diyabetDurumu(x).durum === 'uygun')
    .map((x) => ({ x, puan: menuAnalizi(menu.map((id, j) => (j === i ? x.id : id))).puan }))
    .sort((a, b) => b.puan - a.puan);
  return adaylar[0]?.x ?? null;
}

// ── Joker: dışarıdan sipariş ──
export const SIPARIS_ONERILERI = [
  { ad: 'Lahmacun', emoji: '🫓' }, { ad: 'Kıymalı pide', emoji: '🥖' }, { ad: 'Döner', emoji: '🥙' },
  { ad: 'Mantı', emoji: '🥟' }, { ad: 'Çiğ köfte dürüm', emoji: '🌯' }, { ad: 'Adana kebap', emoji: '🍢' },
  { ad: 'İskender', emoji: '🍖' }, { ad: 'Pizza', emoji: '🍕' }, { ad: 'Hamburger', emoji: '🍔' },
  { ad: 'Balık ekmek', emoji: '🐟' }, { ad: 'Tantuni', emoji: '🌯' }, { ad: 'Kokoreç', emoji: '🥖' },
  { ad: 'Etli ekmek', emoji: '🫓' }, { ad: 'Kumpir', emoji: '🥔' }, { ad: 'Sushi', emoji: '🍣' }, { ad: 'Islak hamburger', emoji: '🍔' },
];
export const SIPARIS_SITELERI = [
  { id: 'yemeksepeti', ad: 'Yemeksepeti', renk: '#ea004b', url: 'https://www.yemeksepeti.com/' },
  { id: 'getiryemek', ad: 'Getir Yemek', renk: '#5d3ebc', url: 'https://getir.com/yemek/' },
  { id: 'trendyolyemek', ad: 'Trendyol Yemek', renk: '#f27a1a', url: 'https://www.trendyol.com/yemek' },
];

/** Menünün kişi başı toplam enerjisi ve makroları. */
export function menuToplami(menu) {
  return menu.map(tarifBul).filter(Boolean).reduce((a, t) => {
    const d = besinDegeri(t);
    return { kcal: a.kcal + d.kcal, p: a.p + d.p, k: a.k + d.k, y: a.y + d.y };
  }, { kcal: 0, p: 0, k: 0, y: 0 });
}

// ── Bağlantılar ──
const q = (s) => encodeURIComponent(s);

/** Market arama bağlantıları. Adresler tek yerde; değişirse buradan güncellenir. */
export const MARKETLER = [
  { id: 'getir', ad: 'Getir', renk: '#5d3ebc', url: (s) => `https://getir.com/arama/?q=${q(s)}` },
  { id: 'migros', ad: 'Migros Hemen', renk: '#ff7f00', url: (s) => `https://www.migros.com.tr/arama?q=${q(s)}` },
  { id: 'yemeksepeti', ad: 'Yemeksepeti', renk: '#ea004b', url: () => 'https://www.yemeksepeti.com/' },
];

/** Market araması için malzeme adını sadeleştirir: "Sivri / çarliston biber" → "Sivri biber". */
export function aramaAdi(ad) {
  return ad.replace(/\s*\(.*?\)/g, '').replace(/\s*\/\s*\S+/g, '').trim();
}

export const youtubeUrl = (t) => `https://www.youtube.com/results?search_query=${q(t.ad + ' tarifi')}`;
export const vikipediUrl = (t) => `https://tr.wikipedia.org/wiki/${q((t.wiki || t.ad).replace(/ /g, '_'))}`;
export const aramaUrl = (t) => `https://www.google.com/search?q=${q(t.ad + ' tarifi')}`;
/** Vikipedi madde görseli için API adresi (CORS için origin=*). */
export const gorselApiUrl = (t) =>
  `https://tr.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=800&titles=${q(t.wiki || t.ad)}`;

/** Alışveriş listesini paylaşılabilir düz metne çevirir. */
export function listeMetni(liste, baslik = 'Çevir Pişir — Alışveriş listesi') {
  const satirlar = [baslik, ''];
  let reyon = null;
  for (const m of liste) {
    if (m.r !== reyon) { reyon = m.r; satirlar.push(`— ${REYONLAR[m.r] ?? 'Diğer'}`); }
    satirlar.push(`☐ ${m.ad} — ${gramYaz(m.g)}`);
  }
  return satirlar.join('\n');
}

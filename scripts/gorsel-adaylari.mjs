// Her tarif için Wikimedia'dan aday fotoğraflar toplar (GitHub Actions'ta çalışır; internet gerekir).
// Çıktı: aday/<tarifId>/<n>.jpg ve aday/bilgi.json (kaynak, yazar, lisans).
// Kullanım: node scripts/gorsel-adaylari.mjs
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { TARIFLER } from '../js/veri/tarifler.js';
import { GORSELLER } from '../js/veri/gorseller.js';

const UA = 'CevirPisirBuild/1.0 (https://github.com/burhanettiny/cevir-pisir)';
const GENISLIK = 800;
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(host, params) {
  const u = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', origin: '*', ...params });
  for (let deneme = 0; deneme < 3; deneme++) {
    try {
      const r = await fetch(u, { headers: { 'User-Agent': UA } });
      if (r.ok) return await r.json();
    } catch { /* tekrar dene */ }
    await bekle(1000 * (deneme + 1));
  }
  return null;
}

// Bir dosya adı için küçük resim adresi ve lisans bilgisi
async function dosyaBilgisi(dosya) {
  const j = await api('commons.wikimedia.org', {
    action: 'query', titles: dosya, prop: 'imageinfo', iiprop: 'url|extmetadata|size|mime', iiurlwidth: String(GENISLIK),
  });
  const ii = j?.query?.pages?.[0]?.imageinfo?.[0];
  if (!ii || !/jpeg|png|webp/.test(ii.mime)) return null;
  const m = ii.extmetadata ?? {};
  const temiz = (s) => (s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return {
    dosya, kucuk: ii.thumburl, sayfa: ii.descriptionurl, en: ii.width, boy: ii.height,
    yazar: temiz(m.Artist?.value) || 'Bilinmiyor', lisans: temiz(m.LicenseShortName?.value), lisansUrl: m.LicenseUrl?.value ?? '',
  };
}

async function sayfaGorseli(host, baslik) {
  const j = await api(host, { action: 'query', titles: baslik, redirects: '1', prop: 'pageimages|langlinks', piprop: 'name', lllang: 'en' });
  const p = j?.query?.pages?.[0];
  return { dosya: p?.pageimage ? 'File:' + p.pageimage : null, en: p?.langlinks?.[0]?.title ?? null };
}

async function commonsAra(sorgu, adet = 2) {
  const j = await api('commons.wikimedia.org', {
    action: 'query', list: 'search', srnamespace: '6', srlimit: String(adet + 2), srsearch: `${sorgu} filetype:bitmap`,
  });
  return (j?.query?.search ?? []).map((s) => s.title).filter((t) => /\.(jpe?g|png|webp)$/i.test(t)).slice(0, adet);
}

// EK_SORGULAR=dosya.json verilirse yalnızca o tarifler, verilen arama terimleriyle taranır (ikinci tur).
const EK = process.env.EK_SORGULAR && existsSync(process.env.EK_SORGULAR) ? JSON.parse(readFileSync(process.env.EK_SORGULAR, 'utf8')) : null;
const bilgi = {};
mkdirSync('aday', { recursive: true });
// EKSIK=1 ise yalnızca henüz fotoğrafı olmayan tarifler taranır.
const SADECE_EKSIK = process.env.EKSIK === '1';
for (const t of TARIFLER) {
  if (EK && !EK[t.id]) continue;
  if (SADECE_EKSIK && GORSELLER[t.id]) continue;
  const dosyalar = [];
  if (EK) {
    for (const sorgu of EK[t.id]) for (const d of await commonsAra(sorgu, 4)) dosyalar.push(['commons-arama', d]);
  } else {
    const tr = await sayfaGorseli('tr.wikipedia.org', t.wiki || t.ad);
    if (tr.dosya) dosyalar.push(['tr-vikipedi', tr.dosya]);
    if (tr.en) {
      const en = await sayfaGorseli('en.wikipedia.org', tr.en);
      if (en.dosya) dosyalar.push(['en-wikipedia', en.dosya]);
    }
    for (const d of await commonsAra(t.ad, 3)) dosyalar.push(['commons-arama', d]);
  }
  const tekil = [...new Map(dosyalar.map(([k, d]) => [d, k])).entries()].slice(0, EK ? 8 : 5);
  mkdirSync(`aday/${t.id}`, { recursive: true });
  bilgi[t.id] = [];
  let n = 0;
  for (const [dosya, kaynak] of tekil) {
    const b = await dosyaBilgisi(dosya);
    if (!b?.kucuk) continue;
    try {
      const r = await fetch(b.kucuk, { headers: { 'User-Agent': UA } });
      if (!r.ok) continue;
      n++;
      writeFileSync(`aday/${t.id}/${n}.jpg`, Buffer.from(await r.arrayBuffer()));
      bilgi[t.id].push({ n, kaynak, ...b });
    } catch { /* atla */ }
    await bekle(150);
  }
  console.log(`${t.id}: ${n} aday`);
}
writeFileSync('aday/bilgi.json', JSON.stringify(bilgi, null, 1));
const bos = Object.entries(bilgi).filter(([, v]) => !v.length).map(([k]) => k);
console.log(`Bitti. Adaysız tarif: ${bos.length}${bos.length ? ' — ' + bos.join(', ') : ''}`);

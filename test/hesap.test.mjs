import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  TARIFLER, KATEGORILER, SOFRALAR, BESINLER, besinDegeri, olcekle, alisverisListesi, sofraOlustur,
  yuvaYenile, rastgeleSec, gramYaz, aramaAdi, listeMetni, dengeYorumu,
} from '../js/hesap.js';

test('her tarif geçerli: kategori, malzeme anahtarları, adımlar', () => {
  const katlar = new Set(KATEGORILER.map((k) => k.id));
  const idler = new Set();
  for (const t of TARIFLER) {
    assert.ok(!idler.has(t.id), `yinelenen id: ${t.id}`); idler.add(t.id);
    assert.ok(katlar.has(t.kat), `${t.id}: bilinmeyen kategori`);
    assert.ok(t.adim.length >= 3, `${t.id}: en az 3 adım`);
    assert.ok(t.porsiyon > 0 && t.sure > 0);
    for (const [k, g] of t.malz) {
      assert.ok(BESINLER[k], `${t.id}: bilinmeyen malzeme ${k}`);
      assert.ok(g > 0, `${t.id}: ${k} gramı pozitif olmalı`);
    }
  }
});

test('her kategoride en az 6 tarif var', () => {
  for (const k of KATEGORILER) assert.ok(TARIFLER.filter((t) => t.kat === k.id).length >= 6, k.id);
});

test('besin değeri elle hesaplanan değerle tutar', () => {
  const t = { porsiyon: 2, malz: [['pirinc', 100], ['tereyagi', 10]] };
  const d = besinDegeri(t);
  // (360 + 71.7) / 2 = 215.85
  assert.equal(d.kcal, 216);
  assert.equal(d.p, 3); // (6.7 + 0.09)/2
  assert.equal(d.oran.p + d.oran.k + d.oran.y >= 99, true);
});

test('kızartmada yenen yağ miktarı kullanılır', () => {
  const tam = besinDegeri({ porsiyon: 1, malz: [['sivi_yag', 100]] });
  const yenen = besinDegeri({ porsiyon: 1, malz: [['sivi_yag', 100, 'kızartmak için', 20]] });
  assert.equal(tam.kcal, 884);
  assert.equal(yenen.kcal, 177);
});

test('porsiyon başı kaloriler makul aralıkta', () => {
  for (const t of TARIFLER) {
    const { kcal } = besinDegeri(t);
    assert.ok(kcal >= 60 && kcal <= 800, `${t.ad}: ${kcal} kcal`);
  }
});

test('ölçekleme kişi sayısıyla orantılı', () => {
  const t = TARIFLER.find((x) => x.id === 'mercimek-corbasi');
  const iki = olcekle(t, 8).find((m) => m.k === 'kirmizi_mercimek');
  assert.equal(iki.g, 400);
});

test('alışveriş listesi aynı malzemeyi birleştirir, suyu atlar', () => {
  const l = alisverisListesi([{ tarifId: 'mercimek-corbasi', kisi: 4 }, { tarifId: 'ezogelin-corbasi', kisi: 4 }]);
  const mercimek = l.find((m) => m.k === 'kirmizi_mercimek');
  assert.equal(mercimek.g, 350);
  assert.deepEqual(mercimek.kaynak, ['Mercimek Çorbası', 'Ezogelin Çorbası']);
  assert.ok(!l.some((m) => m.k === 'su'));
  // Bir tarifte iki satırda geçen malzeme de birleşir (Hünkâr Beğendi: tereyağı 14 + 28)
  const hb = alisverisListesi([{ tarifId: 'hunkar-begendi', kisi: 4 }]);
  assert.equal(hb.filter((m) => m.k === 'tereyagi').length, 1);
  assert.equal(hb.find((m) => m.k === 'tereyagi').g, 40);
});

test('sofra menüsü her yuvaya uygun ve farklı yemek koyar', () => {
  for (const s of SOFRALAR) {
    for (let n = 0; n < 50; n++) {
      const menu = sofraOlustur(s);
      assert.equal(menu.length, s.yuvalar.length);
      assert.equal(new Set(menu).size, menu.length, `${s.id}: tekrar eden yemek`);
      menu.forEach((id, i) => assert.ok(s.yuvalar[i].kat.includes(TARIFLER.find((t) => t.id === id).kat)));
    }
  }
});

test('yuva yenileme yalnızca o yuvayı değiştirir', () => {
  const s = SOFRALAR[0];
  const menu = sofraOlustur(s);
  const yeni = yuvaYenile(s, menu, 1);
  yeni.forEach((id, i) => { if (i !== 1) assert.equal(id, menu[i]); });
  assert.notEqual(yeni[1], menu[1]);
});

test('rastgele seçim hariç tutulanı atlar', () => {
  const l = [{ id: 'a' }, { id: 'b' }];
  for (let i = 0; i < 20; i++) assert.equal(rastgeleSec(l, ['a']).id, 'b');
  assert.equal(rastgeleSec([{ id: 'a' }], ['a']).id, 'a');
});

test('biçimlendirme yardımcıları', () => {
  assert.equal(gramYaz(1250), '1,25 kg');
  assert.equal(gramYaz(37), '35 g');
  assert.equal(aramaAdi('Sivri / çarliston biber'), 'Sivri biber');
  assert.equal(aramaAdi('Kuru bakla (fava)'), 'Kuru bakla');
  const metin = listeMetni(alisverisListesi([{ tarifId: 'cacik', kisi: 6 }]));
  assert.match(metin, /☐ Yoğurt — 500 g/);
  assert.equal(typeof dengeYorumu(besinDegeri(TARIFLER[0])), 'string');
});

test('hazım önerisi yemeğe göre değişir', async () => {
  const { hazimOnerisi, yuruyusDakikasi, tarifBul } = await import('../js/hesap.js');
  // 70 kg, 3,5 MET → 4,29 kcal/dk
  assert.equal(yuruyusDakikasi(300), 70);
  const fasulye = hazimOnerisi(tarifBul('etli-kuru-fasulye'));
  assert.ok(fasulye.icecek.some((x) => /Rezene/.test(x)));
  const ezme = hazimOnerisi(tarifBul('acili-ezme'));
  assert.ok(ezme.icecek.some((x) => /ayran/.test(x)));
  assert.ok(!ezme.icecek.some((x) => /Rezene/.test(x)));
  const menu = hazimOnerisi([tarifBul('mercimek-corbasi'), tarifBul('izmir-kofte')]);
  assert.equal(menu.kcal, 292 + 587);
  assert.ok(menu.hareket[0].includes('15–20'));
});

test('diyabet etiketleri: şekerli tatlı dikkat, şekersiz tatlı uygun', async () => {
  const { diyabetDurumu, tarifBul } = await import('../js/hesap.js');
  assert.equal(diyabetDurumu(tarifBul('revani')).durum, 'dikkat');
  assert.equal(diyabetDurumu(tarifBul('firinda-tarcinli-elma')).durum, 'uygun');
  assert.equal(diyabetDurumu(tarifBul('coban-salata')).durum, 'uygun');
  assert.equal(diyabetDurumu(tarifBul('pirinc-pilavi')).durum, 'dikkat');
});

test('diyabete uyarlanan menüde "dikkat" etiketli yemek olmaz', async () => {
  const { sofraOlustur, diyabetDurumu, tarifBul, SOFRALAR } = await import('../js/hesap.js');
  for (const s of SOFRALAR) for (let n = 0; n < 10; n++) {
    const m = sofraOlustur(s, { diyabet: 'uyarla' });
    for (const id of m) assert.notEqual(diyabetDurumu(tarifBul(id)).durum, 'dikkat', `${s.id}: ${id}`);
  }
});

test('seçenek modunda şekerli tatlıya şekersiz alternatif önerilir', async () => {
  const { diyabetAlternatifi, diyabetDurumu, SOFRALAR } = await import('../js/hesap.js');
  const davet = SOFRALAR.find((s) => s.id === 'davet');
  const menu = ['mercimek-corbasi', 'izmir-kofte', 'turlu', 'pirinc-pilavi', 'humus', 'cacik', 'revani'];
  const alt = diyabetAlternatifi(davet, menu, 6);
  assert.equal(diyabetDurumu(alt).durum, 'uygun');
  assert.equal(alt.kat, 'tatli');
});

test('puanlı menü, tekrarlı menüden yüksek puan alır', async () => {
  const { menuAnalizi } = await import('../js/hesap.js');
  const kotu = menuAnalizi(['mercimek-corbasi', 'karniyarik', 'imam-bayildi', 'firin-patates', 'saksuka', 'babagannus', 'revani']);
  const iyi = menuAnalizi(['ezogelin-corbasi', 'tavuk-sis', 'zeytinyagli-taze-fasulye', 'bulgur-pilavi', 'haydari', 'acili-ezme', 'firin-sutlac']);
  assert.ok(iyi.puan > kotu.puan, `${iyi.puan} > ${kotu.puan}`);
  assert.ok(kotu.notlar.some((n) => /patlıcan/.test(n.metin)));
});

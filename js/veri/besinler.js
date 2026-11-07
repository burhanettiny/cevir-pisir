// Malzeme besin değerleri — 100 g için yaklaşık değerler.
// Dayanak: USDA FoodData Central (SR Legacy / Foundation Foods) ve TÜRKOMP (Ulusal Gıda Kompozisyon
// Veri Tabanı) ile uyumlu, yuvarlanmış ortalama değerler. Markaya, çeşide ve pişirmeye göre değişir.
//
// Alanlar: ad, kcal, p (protein g), kh (karbonhidrat g), y (yağ g), r (market reyonu), d (dolapta genelde olur)
// r: 'sebze' | 'et' | 'sut' | 'bakliyat' | 'temel' | 'baharat' | 'su'
// 'su' reyonu alışveriş listesine hiç girmez.

const B = (ad, kcal, p, kh, y, r, d = false) => ({ ad, kcal, p, kh, y, r, d });

export const BESINLER = {
  // — Et, tavuk, yumurta
  dana_kiyma: B('Dana kıyma (orta yağlı)', 250, 17, 0, 20, 'et'),
  dana_kusbasi: B('Dana kuşbaşı', 160, 21, 0, 8, 'et'),
  kuzu_kusbasi: B('Kuzu kuşbaşı', 230, 18, 0, 17, 'et'),
  tavuk_gogus: B('Tavuk göğsü', 120, 22.5, 0, 2.6, 'et'),
  tavuk_but: B('Tavuk but / baget', 175, 18.5, 0, 11, 'et'),
  yumurta: B('Yumurta', 143, 12.6, 0.7, 9.5, 'sut'),

  // — Süt ürünleri
  sut: B('Süt', 61, 3.2, 4.8, 3.3, 'sut'),
  yogurt: B('Yoğurt', 61, 3.5, 4.7, 3.3, 'sut'),
  suzme_yogurt: B('Süzme yoğurt', 97, 9, 4, 5, 'sut'),
  beyaz_peynir: B('Beyaz peynir', 264, 14, 4, 21, 'sut'),
  kasar: B('Kaşar peyniri', 350, 25, 2, 27, 'sut'),
  tereyagi: B('Tereyağı', 717, 0.9, 0.1, 81, 'sut'),
  krema: B('Sıvı krema', 340, 2.1, 2.8, 36, 'sut'),

  // — Bakliyat, tahıl
  kirmizi_mercimek: B('Kırmızı mercimek', 358, 24, 63, 2.2, 'bakliyat'),
  pirinc: B('Pirinç', 360, 6.7, 79, 0.6, 'bakliyat'),
  bulgur: B('Pilavlık bulgur', 342, 12.3, 76, 1.3, 'bakliyat'),
  koftelik_bulgur: B('Köftelik (ince) bulgur', 342, 12.3, 76, 1.3, 'bakliyat'),
  kuru_fasulye: B('Kuru fasulye', 333, 23.6, 60, 0.8, 'bakliyat'),
  nohut_haslanmis: B('Haşlanmış nohut', 164, 8.9, 27, 2.6, 'bakliyat'),
  kuru_bakla: B('Kuru bakla (fava)', 341, 26, 58, 1.5, 'bakliyat'),
  tarhana: B('Tarhana', 340, 13, 65, 3, 'bakliyat'),
  sehriye: B('Arpa / tel şehriye', 371, 13, 75, 1.5, 'bakliyat'),
  eriste: B('Erişte', 371, 13, 75, 1.5, 'bakliyat'),
  un: B('Un', 364, 10, 76, 1, 'temel', true),
  galeta_unu: B('Galeta unu', 395, 13, 72, 5, 'temel'),

  // — Sebze, meyve, yeşillik
  patates: B('Patates', 77, 2, 17.5, 0.1, 'sebze'),
  sogan: B('Kuru soğan', 40, 1.1, 9.3, 0.1, 'sebze'),
  sarimsak: B('Sarımsak', 149, 6.4, 33, 0.5, 'sebze'),
  domates: B('Domates', 18, 0.9, 3.9, 0.2, 'sebze'),
  sivri_biber: B('Sivri / çarliston biber', 20, 0.9, 4.6, 0.2, 'sebze'),
  kapya_biber: B('Kapya biber', 31, 1, 6, 0.3, 'sebze'),
  havuc: B('Havuç', 41, 0.9, 9.6, 0.2, 'sebze'),
  patlican: B('Patlıcan', 25, 1, 5.9, 0.2, 'sebze'),
  kabak: B('Kabak', 17, 1.2, 3.1, 0.3, 'sebze'),
  ispanak: B('Ispanak', 23, 2.9, 3.6, 0.4, 'sebze'),
  pirasa: B('Pırasa', 61, 1.5, 14, 0.3, 'sebze'),
  taze_fasulye: B('Taze fasulye', 31, 1.8, 7, 0.2, 'sebze'),
  bezelye: B('Bezelye', 77, 5.2, 13.6, 0.4, 'sebze'),
  enginar: B('Enginar (temizlenmiş)', 47, 3.3, 10.5, 0.2, 'sebze'),
  mantar: B('Kültür mantarı', 22, 3.1, 3.3, 0.3, 'sebze'),
  marul: B('Marul / kıvırcık', 15, 1.4, 2.9, 0.2, 'sebze'),
  roka: B('Roka', 25, 2.6, 3.7, 0.7, 'sebze'),
  salatalik: B('Salatalık', 15, 0.7, 3.6, 0.1, 'sebze'),
  maydanoz: B('Maydanoz', 36, 3, 6.3, 0.8, 'sebze'),
  dereotu: B('Dereotu', 43, 3.5, 7, 1.1, 'sebze'),
  taze_sogan: B('Taze soğan', 32, 1.8, 7.3, 0.2, 'sebze'),
  limon: B('Limon', 29, 1.1, 9.3, 0.3, 'sebze'),
  ceviz: B('Ceviz içi', 654, 15, 14, 65, 'temel'),
  bayat_ekmek: B('Bayat ekmek içi', 265, 9, 49, 3.2, 'temel'),

  // — Temel gıda, sos, yağ
  domates_salcasi: B('Domates salçası', 82, 4.3, 19, 0.5, 'temel', true),
  biber_salcasi: B('Biber salçası', 70, 3, 14, 1, 'temel', true),
  zeytinyagi: B('Zeytinyağı', 884, 0, 0, 100, 'temel', true),
  sivi_yag: B('Ayçiçek yağı', 884, 0, 0, 100, 'temel', true),
  tahin: B('Tahin', 595, 17, 21, 54, 'temel'),
  nar_eksisi: B('Nar ekşisi', 280, 0.5, 70, 0, 'temel'),
  seker: B('Toz şeker', 387, 0, 100, 0, 'temel', true),

  // — Ek sebze ve bakliyat
  yesil_mercimek: B('Yeşil mercimek', 352, 24.6, 63, 1.1, 'bakliyat'),
  kuru_barbunya: B('Kuru barbunya', 333, 23, 60, 1.2, 'bakliyat'),
  brokoli: B('Brokoli', 34, 2.8, 6.6, 0.4, 'sebze'),
  karnabahar: B('Karnabahar', 25, 1.9, 5, 0.3, 'sebze'),
  kereviz: B('Kereviz (kök)', 42, 1.5, 9.2, 0.3, 'sebze'),
  dolmalik_biber: B('Dolmalık biber', 20, 0.9, 4.6, 0.2, 'sebze'),
  asma_yapragi: B('Asma yaprağı (salamura)', 93, 5.6, 17, 2.1, 'temel'),
  semizotu: B('Semizotu', 20, 2, 3.4, 0.4, 'sebze'),
  kuru_biber: B('Kuru kırmızı biber', 282, 12, 54, 13, 'temel'),

  // — Tatlı malzemeleri
  kakao: B('Kakao', 228, 20, 58, 14, 'temel'),
  cilek: B('Çilek', 32, 0.7, 7.7, 0.3, 'sebze'),
  armut: B('Armut', 57, 0.4, 15, 0.1, 'sebze'),
  pekmez: B('Üzüm pekmezi', 290, 0, 72, 0, 'temel'),
  pancar: B('Kırmızı pancar', 43, 1.6, 10, 0.2, 'sebze'),
  lahana: B('Beyaz lahana', 25, 1.3, 5.8, 0.1, 'sebze'),
  makarna: B('Makarna', 371, 13, 75, 1.5, 'bakliyat'),
  tel_kadayif: B('Tel kadayıf', 340, 8, 74, 1.5, 'temel'),
  irmik: B('İrmik', 360, 12.7, 73, 1, 'bakliyat'),
  pirinc_unu: B('Pirinç unu', 366, 6, 80, 1.4, 'temel'),
  nisasta: B('Buğday nişastası', 381, 0.3, 91, 0.1, 'temel'),
  bal_kabagi: B('Bal kabağı', 26, 1, 6.5, 0.1, 'sebze'),
  ayva: B('Ayva', 57, 0.4, 15, 0.1, 'sebze'),
  elma: B('Elma', 52, 0.3, 14, 0.2, 'sebze'),
  nar: B('Nar', 83, 1.7, 19, 1.2, 'sebze'),
  badem: B('Badem', 579, 21, 22, 50, 'temel'),
  hindistan_cevizi: B('Hindistan cevizi', 660, 7, 24, 65, 'temel'),
  gullac: B('Güllaç yaprağı', 350, 9, 78, 1, 'temel'),

  // — Baharat (miktarı küçük; besin katkısı ihmal edilir)
  tuz: B('Tuz', 0, 0, 0, 0, 'baharat', true),
  karabiber: B('Karabiber', 0, 0, 0, 0, 'baharat', true),
  pul_biber: B('Pul biber', 0, 0, 0, 0, 'baharat', true),
  toz_biber: B('Toz kırmızı biber', 0, 0, 0, 0, 'baharat', true),
  kimyon: B('Kimyon', 0, 0, 0, 0, 'baharat', true),
  kuru_nane: B('Kuru nane', 0, 0, 0, 0, 'baharat', true),
  kekik: B('Kekik', 0, 0, 0, 0, 'baharat', true),
  defne: B('Defne yaprağı', 0, 0, 0, 0, 'baharat', true),
  isot: B('İsot', 0, 0, 0, 0, 'baharat'),
  tarcin: B('Tarçın', 0, 0, 0, 0, 'baharat'),
  vanilin: B('Vanilin', 0, 0, 0, 0, 'baharat'),
  karanfil: B('Karanfil', 0, 0, 0, 0, 'baharat'),
  gul_suyu: B('Gül suyu', 0, 0, 0, 0, 'baharat'),
  kabartma_tozu: B('Kabartma tozu', 0, 0, 0, 0, 'baharat', true),
  maya: B('Kuru maya', 0, 0, 0, 0, 'baharat'),
  sirke: B('Sirke', 0, 0, 0, 0, 'baharat', true),
  sumak: B('Sumak', 0, 0, 0, 0, 'baharat'),
  kori: B('Köri', 0, 0, 0, 0, 'baharat'),

  // — Sıvılar (listeye girmez)
  su: B('Su', 0, 0, 0, 0, 'su', true),
  et_suyu: B('Et / tavuk suyu (ya da su)', 6, 1, 0, 0.3, 'su', true),
};

export const REYONLAR = {
  sebze: 'Manav',
  et: 'Kasap / şarküteri',
  sut: 'Süt ve kahvaltılık',
  bakliyat: 'Bakliyat, makarna',
  temel: 'Temel gıda',
  baharat: 'Baharat',
};

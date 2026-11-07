// Genişletilmiş menü: ek tarifler (aynı biçim, bkz. tarifler.js).
export const EK_TARIFLER = [
  // ───────────── ÇORBALAR ─────────────
  {
    id: 'dugun-corbasi', ad: 'Düğün Çorbası', kat: 'corba', emoji: '🥣', sure: 60, porsiyon: 4,
    wiki: 'Düğün çorbası',
    malz: [
      ['dana_kusbasi', 200, '200 g (kemikli olursa daha lezzetli)'], ['yogurt', 200, '1 su bardağı'], ['yumurta', 50, '1 sarısı'],
      ['un', 20, '2 yemek kaşığı'], ['limon', 40, '½ adet'], ['su', 1500, '7–8 su bardağı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['toz_biber', 2, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Eti suyla, köpüğünü alarak yumuşayana kadar 45 dakika haşlayın; eti didikleyip suyunu süzün.',
      'Yoğurt, yumurta sarısı, un ve limon suyunu çırpın.',
      'Sıcak et suyundan birkaç kepçe ekleyerek terbiyeyi ılıştırın, sonra karıştırarak tencereye dökün.',
      'Didiklenmiş eti ekleyip kaynayana kadar karıştırın; tuzlayıp 5 dakika pişirin.',
      'Tereyağında kırmızı biberi kızdırıp üzerine gezdirin.',
    ],
  },
  {
    id: 'brokoli-corbasi', ad: 'Brokoli Çorbası', kat: 'corba', emoji: '🥦', sure: 30, porsiyon: 4,
    wiki: 'Brokoli',
    malz: [
      ['brokoli', 500, '1 orta boy'], ['patates', 170, '1 adet'], ['sogan', 60, '½ adet'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sut', 200, '1 su bardağı'], ['su', 900, '4,5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Zeytinyağında soğanı yumuşatın.',
      'Brokoli çiçeklerini ve küp patatesi ekleyip 3 dakika çevirin.',
      'Sıcak suyu ekleyin; sebzeler yumuşayana kadar 15 dakika pişirin.',
      'Blenderdan geçirip sütü ekleyin, tuz ve karabiberle bir taşım kaynatın.',
    ],
  },
  {
    id: 'balkabagi-corbasi', ad: 'Bal Kabağı Çorbası', kat: 'corba', emoji: '🎃', sure: 35, porsiyon: 4,
    wiki: 'Bal kabağı',
    malz: [
      ['bal_kabagi', 600, '600 g'], ['havuc', 70, '1 adet'], ['sogan', 60, '½ adet'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sut', 200, '1 su bardağı'], ['su', 800, '4 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
      ['karabiber', 1, '1 tutam'], ['ceviz', 20, 'servis için'],
    ],
    adim: [
      'Zeytinyağında soğan ve havucu 4–5 dakika kavurun.',
      'Küp doğranmış kabağı ekleyip 3 dakika çevirin.',
      'Sıcak suyu ekleyin; kabak yumuşayana kadar 20 dakika pişirin.',
      'Blenderdan geçirin, sütü ekleyip tuz ve karabiberle tatlandırın.',
      'Üzerine kırılmış cevizle servis edin.',
    ],
  },
  {
    id: 'yesil-mercimek-corbasi', ad: 'Yeşil Mercimek Çorbası', kat: 'corba', emoji: '🥣', sure: 50, porsiyon: 4,
    wiki: 'Mercimek çorbası',
    malz: [
      ['yesil_mercimek', 180, '1 su bardağı'], ['sogan', 110, '1 orta boy'], ['havuc', 70, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['eriste', 40, '1 avuç (isteğe bağlı)'],
      ['su', 1500, '7–8 su bardağı'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Mercimeği yıkayıp 20 dakika ön haşlayın, suyunu süzün.',
      'Zeytinyağında soğan ve küp havucu kavurun, salçayı ekleyin.',
      'Mercimek ve sıcak suyu ekleyip mercimekler yumuşayana kadar 25 dakika pişirin.',
      'Erişteyi ekleyip 8 dakika daha pişirin; tuz ve naneyle tatlandırın.',
    ],
  },
  {
    id: 'toyga-corbasi', ad: 'Toyga Çorbası', kat: 'corba', emoji: '🥣', sure: 40, porsiyon: 4,
    wiki: 'Toyga çorbası',
    malz: [
      ['yogurt', 400, '2 su bardağı'], ['bulgur', 60, '⅓ su bardağı'], ['nohut_haslanmis', 120, '¾ su bardağı'],
      ['yumurta', 50, '1 adet'], ['un', 20, '2 yemek kaşığı'], ['su', 1200, '6 su bardağı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['kuru_nane', 3, '1 tatlı kaşığı'], ['pul_biber', 2, '1 çay kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Bulguru suyla 15 dakika haşlayın, nohudu ekleyin.',
      'Yoğurt, yumurta ve unu çırpıp sıcak sudan ekleyerek ılıştırın.',
      'Karışımı sürekli karıştırarak tencereye dökün; kaynayınca 5 dakika pişirip tuzlayın.',
      'Tereyağında nane ve pul biberi çevirip üzerine gezdirin.',
    ],
  },

  // ───────────── ET YEMEKLERİ ─────────────
  {
    id: 'ali-nazik', ad: 'Ali Nazik', kat: 'et', emoji: '🍆', sure: 50, porsiyon: 4,
    wiki: 'Ali nazik',
    malz: [
      ['dana_kiyma', 400, '400 g (ya da kuşbaşı)'], ['patlican', 1000, '4 adet'], ['suzme_yogurt', 300, '1,5 su bardağı'],
      ['sarimsak', 8, '2 diş'], ['domates', 150, '1 adet'], ['sivri_biber', 40, '2 adet'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Patlıcanları közleyip kabuklarını soyun, suyunu süzdürüp kıyın.',
      'Patlıcanı ezilmiş sarımsaklı yoğurtla karıştırıp tuzlayın; tabağa yayın.',
      'Kıymayı tereyağının yarısında suyunu çekene kadar kavurun; doğranmış domates ve biberi ekleyip 8 dakika pişirin.',
      'Eti yoğurtlu patlıcanın ortasına koyun; kalan tereyağında pul biberi kızdırıp gezdirin.',
    ],
  },
  {
    id: 'etli-nohut', ad: 'Etli Nohut', kat: 'et', emoji: '🫘', sure: 90, porsiyon: 4,
    wiki: 'Nohut yemeği',
    not: 'Kuru nohut kullanacaksanız bir gece önceden ıslatıp haşlayın.',
    malz: [
      ['nohut_haslanmis', 600, '3 su bardağı'], ['dana_kusbasi', 250, '250 g'], ['sogan', 110, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['biber_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['su', 800, '4 su bardağı'], ['pul_biber', 2, '1 çay kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Eti yağda suyunu çekene kadar kavurun; soğanı ekleyip yumuşatın.',
      'Salçalar ve tereyağını ekleyip 2 dakika çevirin.',
      'Sıcak suyu ekleyin, et yumuşayana kadar 45 dakika pişirin.',
      'Haşlanmış nohudu ekleyip 20 dakika daha pişirin; tuz ve pul biberle tatlandırın.',
    ],
  },
  {
    id: 'kuzu-tandir', ad: 'Fırında Kuzu Tandır', kat: 'et', emoji: '🍖', sure: 180, porsiyon: 4,
    wiki: 'Tandır kebabı',
    malz: [
      ['kuzu_kusbasi', 900, '1 kg kuzu incik/kol (kemikli)'], ['sogan', 220, '2 adet'], ['sarimsak', 16, '4 diş'],
      ['domates', 150, '1 adet'], ['tereyagi', 14, '1 yemek kaşığı'], ['su', 300, '1,5 su bardağı'], ['defne', 1, '2 yaprak'],
      ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Eti tuz, karabiber ve kekikle ovun.',
      'Fırın kabına halka soğan, sarımsak ve domates dizin, eti üzerine yerleştirin; tereyağı ve defne ekleyin.',
      'Sıcak suyu ekleyip kabın üzerini folyoyla sıkıca kapatın.',
      '160 °C fırında et kemikten ayrılana kadar 2,5 saat pişirin.',
      'Folyoyu açıp 200 °C\'de 15 dakika üzerini kızartın. Pilavla servis edin.',
    ],
  },
  {
    id: 'eksili-kofte', ad: 'Ekşili Köfte', kat: 'et', emoji: '🍲', sure: 50, porsiyon: 4,
    wiki: 'Ekşili köfte',
    malz: [
      ['dana_kiyma', 350, '350 g'], ['pirinc', 50, '¼ su bardağı'], ['sogan', 60, '½ adet (rendelenmiş)'],
      ['havuc', 70, '1 adet'], ['patates', 170, '1 adet'], ['un', 30, 'bulamak için'], ['yumurta', 50, '1 adet (terbiye)'],
      ['limon', 40, '½ adet'], ['su', 1200, '6 su bardağı'], ['tereyagi', 14, '1 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'],
      ['karabiber', 1, '1 tutam'], ['kuru_nane', 2, '1 tatlı kaşığı'],
    ],
    adim: [
      'Kıyma, yıkanmış pirinç, soğan, tuz ve karabiberi yoğurup fındık büyüklüğünde köfteler yapın, una bulayın.',
      'Tencerede küp havuç ve patatesi suyla 10 dakika haşlayın.',
      'Köfteleri teker teker kaynar suya bırakın; pirinç pişene kadar 20 dakika pişirin.',
      'Yumurta ve limonu çırpıp sıcak suyla ılıştırın, tencereye ekleyin; bir taşım kaynatın.',
      'Tereyağında naneyi çevirip gezdirin.',
    ],
  },
  {
    id: 'patates-oturtma', ad: 'Kıymalı Patates Oturtma', kat: 'et', emoji: '🥔', sure: 60, porsiyon: 4,
    wiki: 'Oturtma',
    malz: [
      ['patates', 680, '4 orta boy'], ['dana_kiyma', 300, '300 g'], ['sogan', 110, '1 adet'], ['sivri_biber', 80, '4 adet'],
      ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['sivi_yag', 26, '2 yemek kaşığı'],
      ['su', 300, '1,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Patatesleri halka doğrayıp yağlanmış tepside 200 °C\'de 15 dakika ön pişirin.',
      'Kıymayı kavurun, soğan ve biberi ekleyip yumuşatın; domatesi katıp 5 dakika pişirin.',
      'Patateslerin üzerine kıymalı harcı yayın.',
      'Salçayı sıcak suda açıp tuzlayın, tepsiye dökün; 25 dakika daha pişirin.',
    ],
  },

  // ───────────── TAVUK YEMEKLERİ ─────────────
  {
    id: 'sebzeli-tavuk-haslama', ad: 'Sebzeli Tavuk Haşlama', kat: 'tavuk', emoji: '🍲', sure: 50, porsiyon: 4,
    wiki: 'Haşlama',
    malz: [
      ['tavuk_but', 700, '4 but'], ['patates', 340, '2 adet'], ['havuc', 140, '2 adet'], ['kabak', 200, '1 adet'],
      ['sogan', 110, '1 adet'], ['su', 1500, '7–8 su bardağı'], ['limon', 40, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı'],
      ['karabiber', 1, '1 tutam'], ['maydanoz', 15, 'birkaç dal'],
    ],
    adim: [
      'Tavukları soğanla birlikte suya koyup köpüğünü alarak 25 dakika haşlayın.',
      'İri doğranmış patates ve havucu ekleyip 10 dakika pişirin.',
      'Kabağı ekleyip sebzeler yumuşayana kadar 10 dakika daha pişirin.',
      'Tuz ve karabiberle tatlandırın; maydanoz ve limonla suyuyla birlikte servis edin.',
    ],
  },
  {
    id: 'tavuklu-bezelye', ad: 'Tavuklu Bezelye', kat: 'tavuk', emoji: '🫛', sure: 40, porsiyon: 4,
    wiki: 'Bezelye',
    malz: [
      ['tavuk_gogus', 400, '400 g'], ['bezelye', 400, '400 g'], ['havuc', 70, '1 adet'], ['patates', 170, '1 adet'],
      ['sogan', 110, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['sivi_yag', 26, '2 yemek kaşığı'],
      ['su', 400, '2 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Kuşbaşı tavuğu yağda suyunu çekene kadar soteleyin.',
      'Soğanı ekleyip yumuşatın, salçayı katın.',
      'Küp havuç, patates ve bezelyeyi ekleyip 3 dakika çevirin.',
      'Sıcak su ve tuzu ekleyip sebzeler yumuşayana kadar 25 dakika pişirin.',
    ],
  },
  {
    id: 'izgara-tavuk-pirzola', ad: 'Izgara Tavuk Pirzola', kat: 'tavuk', emoji: '🍗', sure: 30, porsiyon: 4,
    wiki: 'Pirzola',
    not: 'Marine süresi (en az 1 saat) hazırlık süresine dahil değildir.',
    malz: [
      ['tavuk_but', 800, '800 g kemiksiz but (pirzola)'], ['yogurt', 60, '3 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sarimsak', 8, '2 diş'], ['limon', 40, '½ adet'], ['kekik', 1, '1 tatlı kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Yoğurt, zeytinyağı, sarımsak, limon suyu ve baharatlarla marine sosu hazırlayın.',
      'Pirzolaları sosla ovup buzdolabında en az 1 saat bekletin.',
      'Kızgın ızgara ya da döküm tavada her yüzünü 5–6 dakika, içi pişene kadar pişirin.',
      '5 dakika dinlendirip közlenmiş biber ve domatesle servis edin.',
    ],
  },
  {
    id: 'tavuk-kavurma', ad: 'Tavuk Kavurma', kat: 'tavuk', emoji: '🍳', sure: 30, porsiyon: 4,
    wiki: 'Kavurma',
    malz: [
      ['tavuk_but', 700, '700 g kemiksiz but'], ['sogan', 220, '2 adet'], ['sivri_biber', 120, '6 adet'], ['domates', 150, '1 adet'],
      ['tereyagi', 14, '1 yemek kaşığı'], ['sivi_yag', 13, '1 yemek kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'],
      ['kimyon', 1, '½ çay kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Tavuğu küçük kuşbaşı doğrayın.',
      'Geniş tavada yağları kızdırıp tavuğu yüksek ateşte kızarana kadar kavurun.',
      'Piyaz doğranmış soğanı ve biberleri ekleyip 5 dakika çevirin.',
      'Domatesi ve baharatları ekleyip suyunu çekene kadar 5 dakika pişirin; sıcak servis edin.',
    ],
  },
  {
    id: 'ev-usulu-tavuk-doner', ad: 'Ev Usulü Tavuk Döner', kat: 'tavuk', emoji: '🥙', sure: 40, porsiyon: 4,
    wiki: 'Döner',
    not: 'Marine süresi (en az 2 saat) hazırlık süresine dahil değildir.',
    malz: [
      ['tavuk_but', 800, '800 g kemiksiz but'], ['yogurt', 100, '½ su bardağı'], ['sut', 50, '¼ su bardağı'],
      ['sogan', 60, '½ adet (suyu)'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['sivi_yag', 26, '2 yemek kaşığı'],
      ['sarimsak', 8, '2 diş'], ['kimyon', 1, '½ çay kaşığı'], ['kekik', 1, '1 tatlı kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'],
      ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuk butları ince şeritler halinde açın.',
      'Yoğurt, süt, soğan suyu, salça, yağ, sarımsak ve baharatlarla en az 2 saat marine edin.',
      'Döküm tavayı iyice kızdırıp tavukları partiler halinde yüksek ateşte kızartın.',
      'Pişen tavukları ince doğrayın; lavaş, domates ve turşuyla servis edin.',
    ],
  },
  {
    id: 'kori-soslu-tavuk', ad: 'Köri Soslu Tavuk', kat: 'tavuk', emoji: '🍛', sure: 30, porsiyon: 4,
    wiki: 'Köri',
    malz: [
      ['tavuk_gogus', 600, '600 g'], ['krema', 200, '1 kutu'], ['sogan', 60, '½ adet'], ['kapya_biber', 150, '1 adet'],
      ['sivi_yag', 26, '2 yemek kaşığı'], ['kori', 4, '1 tatlı kaşığı köri'], ['tuz', 6, '1 tatlı kaşığı'],
      ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuğu şerit doğrayıp yağda suyunu çekene kadar soteleyin.',
      'Soğan ve biberi ekleyip 4 dakika çevirin.',
      'Köriyi ekleyip 1 dakika kavurun; kremayı ekleyin.',
      'Tuz ve karabiberle tatlandırıp sos koyulaşana kadar 5 dakika pişirin. Pilavla servis edin.',
    ],
  },
];

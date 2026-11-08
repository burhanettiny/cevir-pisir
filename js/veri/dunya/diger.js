// Orta Doğu, Hint, Meksika, Amerikan & İngiliz, diğer dünya mutfakları
export const ORTADOGU = [
  {
    id: 'falafel', ad: 'Falafel', ulke: 'Orta Doğu', kat: 'meze', emoji: '🧆', sure: 40, porsiyon: 6, wiki: 'Falafel',
    not: 'Kuru nohudu bir gece önceden ıslatın; haşlamayın.',
    malz: [['kuru_nohut', 250, '1,5 su bardağı (ıslatılmış)'], ['sogan', 60, '½ adet'], ['sarimsak', 12, '3 diş'], ['maydanoz', 30, '1 demet'], ['kisnis', 15, '½ demet'],
      ['kimyon', 2, '1 tatlı kaşığı'], ['kabartma_tozu', 3, '½ tatlı kaşığı'], ['un', 20, '2 yemek kaşığı'], ['sivi_yag', 400, 'kızartmak için', 60], ['tahin', 60, 'sos için'], ['limon', 40, 'sos için'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Islatılmış nohudu soğan, sarımsak ve yeşilliklerle rondoda iri kum kıvamında çekin.', 'Baharat, un ve kabartma tozunu ekleyip 30 dakika dinlendirin.',
      'Ceviz büyüklüğünde toplar yapıp kızgın yağda kızartın.', 'Tahin, limon ve suyla sos yapıp servis edin.'],
  },
  {
    id: 'tabule', ad: 'Tabule', ulke: 'Lübnan', kat: 'meze', emoji: '🌿', sure: 20, porsiyon: 6, wiki: 'Tabule',
    malz: [['koftelik_bulgur', 60, '⅓ su bardağı'], ['maydanoz', 120, '3 demet'], ['kuru_nane', 2, '1 tatlı kaşığı (ya da taze nane)'], ['domates', 300, '2 adet'], ['taze_sogan', 40, '3 dal'],
      ['limon', 80, '1 adet'], ['zeytinyagi', 50, '4 yemek kaşığı'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Bulguru limon suyuyla ıslatın.', 'Maydanozu çok ince kıyın; domates ve taze soğanı küçük doğrayın.', 'Hepsini zeytinyağı ve tuzla karıştırın (tabulede yeşillik bulgurdan fazladır).'],
  },
  {
    id: 'shakshuka', ad: 'Shakshuka (Yumurtalı)', ulke: 'Kuzey Afrika', kat: 'sebze', emoji: '🍳', sure: 30, porsiyon: 4, wiki: 'Shakshouka',
    malz: [['domates', 600, '4 adet'], ['kapya_biber', 150, '1 adet'], ['sogan', 110, '1 adet'], ['sarimsak', 12, '3 diş'], ['yumurta', 300, '6 adet'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['kimyon', 1, '½ çay kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'], ['kisnis', 15, 'servis için'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Zeytinyağında soğan, biber ve sarımsağı yumuşatın; baharatları ekleyin.', 'Rendelenmiş domatesi ekleyip koyulaşana kadar 10 dakika pişirin.', 'Sosta çukurlar açıp yumurtaları kırın; kapak kapalı 6–8 dakika pişirin.', 'Kişnişle tavada servis edin.'],
  },
  {
    id: 'maklube', ad: 'Maklube', ulke: 'Filistin', kat: 'tavuk', emoji: '🍚', sure: 90, porsiyon: 6, wiki: 'Maklube',
    malz: [['tavuk_but', 600, '600 g'], ['pirinc', 360, '2 su bardağı'], ['patlican', 500, '2 adet'], ['karnabahar', 300, '¼ adet'], ['patates', 170, '1 adet'],
      ['sivi_yag', 300, 'kızartmak için', 60], ['yenibahar', 1, '1 çay kaşığı'], ['zerdecal', 1, '½ çay kaşığı'], ['tarcin', 1, '1 tutam'], ['et_suyu', 700, '3,5 su bardağı'],
      ['badem', 30, 'servis için'], ['tuz', 10, '2 tatlı kaşığı']],
    adim: ['Tavuğu baharatlarla haşlayıp suyunu ayırın.', 'Patlıcan, karnabahar ve patatesi kızartın.', 'Tencereye sırayla tavuk, sebzeler ve baharatlı pirinci dizip et suyunu ekleyin.',
      'Kısık ateşte 30 dakika pişirip 10 dakika dinlendirin; büyük bir tepsiye ters çevirip bademle servis edin.'],
  },
  {
    id: 'mucedere', ad: 'Mücedere', ulke: 'Orta Doğu', kat: 'garnitur', emoji: '🍚', sure: 50, porsiyon: 4, wiki: 'Mücedere',
    malz: [['yesil_mercimek', 180, '1 su bardağı'], ['pirinc', 180, '1 su bardağı'], ['sogan', 330, '3 adet'], ['zeytinyagi', 65, '5 yemek kaşığı'], ['kimyon', 1, '½ çay kaşığı'],
      ['su', 700, '3,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['yogurt', 200, 'servis için']],
    adim: ['Mercimeği 15 dakika ön haşlayın.', 'Soğanları piyazlık doğrayıp zeytinyağında koyu kahverengi ve çıtır olana kadar kavurun; yarısını ayırın.',
      'Pirinç, mercimek, kimyon, tuz ve suyu ekleyip suyunu çekene kadar pişirin.', 'Çıtır soğan ve yoğurtla servis edin.'],
  },
  {
    id: 'fattus', ad: 'Fattuş', ulke: 'Lübnan', kat: 'garnitur', emoji: '🥗', sure: 20, porsiyon: 4, wiki: 'Fattuş',
    malz: [['lavas', 100, '1 pide (kızartılmış)'], ['marul', 200, '1 küçük'], ['domates', 300, '2 adet'], ['salatalik', 150, '1 adet'], ['turp', 100, 'birkaç adet'],
      ['taze_sogan', 40, '3 dal'], ['maydanoz', 15, '½ demet'], ['sumak', 3, '1 yemek kaşığı'], ['nar_eksisi', 15, '1 yemek kaşığı'], ['limon', 40, '½ adet'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['tuz', 2, '1 tutam']],
    adim: ['Pideyi küçük parçalara bölüp fırında kızartın.', 'Sebzeleri iri doğrayın.', 'Zeytinyağı, limon, nar ekşisi ve sumakla sos yapıp sebzeleri harmanlayın.', 'Çıtır pideyi servisten hemen önce ekleyin.'],
  },
  {
    id: 'koobideh', ad: 'İran Kebabı (Kubide)', ulke: 'İran', kat: 'et', emoji: '🍢', sure: 40, porsiyon: 4, wiki: 'Kubide kebabı',
    malz: [['kiyma_karisik', 600, '600 g'], ['sogan', 110, '1 adet (rendelenmiş, suyu sıkılmış)'], ['zerdecal', 1, '½ çay kaşığı'], ['safran', 1, '1 tutam'], ['tuz', 8, '1,5 tatlı kaşığı'],
      ['karabiber', 1, '1 tutam'], ['pirinc', 300, 'yanına safranlı pilav'], ['tereyagi', 28, '2 yemek kaşığı'], ['domates', 300, 'közlenecek'], ['sumak', 2, 'servis için']],
    adim: ['Kıymayı soğan, zerdeçal ve baharatla yoğurup yassı şişlere uzun ve ince geçirin.', 'Közde pişirin; domatesleri de közleyin.', 'Safranlı tereyağlı pilav ve sumakla servis edin.'],
  },
];

export const HINT = [
  {
    id: 'tikka-masala', ad: 'Tavuk Tikka Masala', ulke: 'Hindistan', kat: 'tavuk', emoji: '🍛', sure: 50, porsiyon: 4, wiki: 'Tavuk tikka masala',
    malz: [['tavuk_gogus', 600, '600 g'], ['yogurt', 150, 'marine için'], ['garam_masala', 4, '2 tatlı kaşığı'], ['zerdecal', 1, '½ çay kaşığı'], ['sogan', 110, '1 adet'],
      ['sarimsak', 12, '3 diş'], ['zencefil', 10, '1 parmak'], ['domates', 400, '3 adet'], ['krema', 150, '¾ kutu'], ['tereyagi', 28, '2 yemek kaşığı'], ['kisnis', 15, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Tavuğu yoğurt, garam masala ve zerdeçalla 1 saat marine edin; ızgarada ya da fırında kızartın.', 'Tereyağında soğan, sarımsak ve zencefili kavurun; kalan baharatı ekleyin.',
      'Domatesi ekleyip 15 dakika pişirin, blenderdan geçirin.', 'Krema ve tavuğu ekleyip 10 dakika pişirin; kişniş ve pilavla servis edin.'],
  },
  {
    id: 'butter-chicken', ad: 'Tereyağlı Tavuk (Butter Chicken)', ulke: 'Hindistan', kat: 'tavuk', emoji: '🍛', sure: 45, porsiyon: 4, wiki: 'Butter chicken',
    malz: [['tavuk_but', 600, '600 g kemiksiz'], ['yogurt', 100, 'marine için'], ['tereyagi', 50, '50 g'], ['domates_salcasi', 34, '2 yemek kaşığı'], ['domates', 300, '2 adet'],
      ['krema', 150, '¾ kutu'], ['garam_masala', 4, '2 tatlı kaşığı'], ['sarimsak', 12, '3 diş'], ['zencefil', 10, '1 parmak'], ['seker', 5, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Tavuğu yoğurt ve baharatla marine edip tavada kızartın.', 'Tereyağında sarımsak ve zencefili çevirip salça ve domatesi ekleyin.', 'Sos koyulaşınca blenderdan geçirip krema ve şekeri ekleyin.', 'Tavuğu sosta 10 dakika pişirin.'],
  },
  {
    id: 'dal', ad: 'Dal (Hint Mercimeği)', ulke: 'Hindistan', kat: 'sebze', emoji: '🍲', sure: 35, porsiyon: 4, wiki: 'Dal',
    malz: [['kirmizi_mercimek', 250, '1,25 su bardağı'], ['sogan', 110, '1 adet'], ['domates', 150, '1 adet'], ['sarimsak', 12, '3 diş'], ['zencefil', 10, '1 parmak'],
      ['zerdecal', 1, '½ çay kaşığı'], ['kimyon', 2, '1 tatlı kaşığı'], ['garam_masala', 2, '1 tatlı kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'], ['su', 900, '4,5 su bardağı'],
      ['kisnis', 15, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Mercimeği zerdeçalla, dağılana kadar 20 dakika haşlayın.', 'Tereyağında kimyonu çıtırdatıp soğan, sarımsak, zencefil ve domatesi kavurun.', 'Karışımı mercimeğe ekleyip garam masala ve tuzla 5 dakika pişirin; kişnişle servis edin.'],
  },
  {
    id: 'biryani', ad: 'Tavuklu Biryani', ulke: 'Hindistan', kat: 'tavuk', emoji: '🍚', sure: 80, porsiyon: 6, wiki: 'Biryani',
    malz: [['pirinc', 400, '2 su bardağı (basmati)'], ['tavuk_but', 700, '700 g'], ['yogurt', 200, '1 su bardağı'], ['sogan', 330, '3 adet'], ['sivi_yag', 60, '⅓ su bardağı'],
      ['garam_masala', 6, '1 yemek kaşığı'], ['zerdecal', 1, '½ çay kaşığı'], ['zencefil', 10, '1 parmak'], ['sarimsak', 12, '3 diş'], ['safran', 1, '1 tutam (sütte)'],
      ['kakule', 1, '4 tane'], ['tarcin', 1, '1 çubuk'], ['kisnis', 15, '½ demet'], ['su', 3000, 'haşlama için'], ['tuz', 12, '2,5 tatlı kaşığı']],
    adim: ['Tavuğu yoğurt, baharatlar, sarımsak ve zencefille marine edin.', 'Soğanları çıtır kızartın.', 'Pirinci kakule ve tarçınla kaynar tuzlu suda yarı pişirip süzün.',
      'Tencereye tavuğu, üzerine soğan, kişniş ve pirinci kat kat koyup safranlı süt gezdirin.', 'Kapağı sıkıca kapatıp en kısık ateşte 35 dakika demlendirin.'],
  },
  {
    id: 'palak-paneer', ad: 'Ispanaklı Peynir (Palak Paneer)', ulke: 'Hindistan', kat: 'sebze', emoji: '🥬', sure: 35, porsiyon: 4, wiki: 'Palak paneer',
    malz: [['ispanak', 700, '700 g'], ['hellim', 250, '250 g (paneer yerine)'], ['sogan', 110, '1 adet'], ['domates', 150, '1 adet'], ['sarimsak', 12, '3 diş'], ['zencefil', 10, '1 parmak'],
      ['garam_masala', 4, '2 tatlı kaşığı'], ['kimyon', 1, '½ çay kaşığı'], ['krema', 50, '¼ kutu'], ['tereyagi', 28, '2 yemek kaşığı'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Ispanağı 2 dakika haşlayıp soğuk suya alın, püre yapın.', 'Peyniri küp kesip tavada kızartın.', 'Tereyağında kimyon, soğan, sarımsak, zencefil ve domatesi pişirin; baharatları ekleyin.',
      'Ispanak püresi ve kremayı ekleyip 5 dakika pişirin; peyniri katın.'],
  },
  {
    id: 'samosa', ad: 'Samosa', ulke: 'Hindistan', kat: 'hamur', emoji: '🥟', sure: 60, porsiyon: 6, wiki: 'Samosa',
    malz: [['un', 250, '2 su bardağı'], ['sivi_yag', 40, 'hamur için'], ['su', 100, '½ su bardağı'], ['patates', 500, '3 adet (haşlanmış)'], ['bezelye', 100, '½ su bardağı'],
      ['sogan', 60, '½ adet'], ['garam_masala', 4, '2 tatlı kaşığı'], ['kimyon', 1, '½ çay kaşığı'], ['kisnis', 15, '½ demet'], ['sivi_yag', 400, 'kızartmak için', 60], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Un, yağ, tuz ve suyla sert hamur yoğurun.', 'Ezilmiş patates, bezelye, soğan ve baharatlarla iç hazırlayın.', 'Hamuru açıp yarım daireler kesin, külah yapıp iç doldurun ve üçgen kapatın.', 'Orta ateşte kızgın yağda altın rengi olana kadar kızartın.'],
  },
  {
    id: 'chana-masala', ad: 'Chana Masala', ulke: 'Hindistan', kat: 'sebze', emoji: '🍛', sure: 35, porsiyon: 4, wiki: 'Chana masala',
    malz: [['nohut_haslanmis', 500, '3 su bardağı'], ['sogan', 110, '1 adet'], ['domates', 300, '2 adet'], ['sarimsak', 12, '3 diş'], ['zencefil', 10, '1 parmak'],
      ['garam_masala', 4, '2 tatlı kaşığı'], ['kimyon', 2, '1 tatlı kaşığı'], ['zerdecal', 1, '½ çay kaşığı'], ['sivi_yag', 26, '2 yemek kaşığı'], ['limon', 40, '½ adet'], ['kisnis', 15, 'servis için'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Yağda kimyonu çıtırdatıp soğanı kavurun; sarımsak ve zencefili ekleyin.', 'Domates ve baharatları ekleyip sos kıvamına gelene kadar pişirin.', 'Nohut ve biraz suyla 15 dakika pişirin; limon ve kişnişle servis edin.'],
  },
  {
    id: 'naan', ad: 'Naan Ekmeği', ulke: 'Hindistan', kat: 'hamur', emoji: '🫓', sure: 90, porsiyon: 6, wiki: 'Naan',
    malz: [['un', 400, '3,5 su bardağı'], ['yogurt', 150, '¾ su bardağı'], ['sut', 100, '½ su bardağı ılık'], ['maya', 7, '1 paket'], ['seker', 5, '1 tatlı kaşığı'],
      ['tereyagi', 40, 'sürmek için'], ['sarimsak', 8, '2 diş'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Bütün malzemelerle yumuşak hamur yoğurup 1 saat mayalandırın.', '6 bezeye bölüp gözyaşı şeklinde açın.', 'Çok kızgın döküm tavada kabarıp beneklenene kadar iki yüzünü pişirin.', 'Sarımsaklı tereyağı sürüp sıcak servis edin.'],
  },
];

export const MEKSIKA = [
  {
    id: 'tacos', ad: 'Kıymalı Tacos', ulke: 'Meksika', kat: 'et', emoji: '🌮', sure: 30, porsiyon: 4, wiki: 'Taco',
    malz: [['tortilla', 300, '8 küçük tortilla'], ['dana_kiyma', 500, '500 g'], ['sogan', 110, '1 adet'], ['kimyon', 2, '1 tatlı kaşığı'], ['toz_biber', 3, '1,5 tatlı kaşığı'],
      ['domates', 150, '1 adet'], ['marul', 100, 'birkaç yaprak'], ['kasar', 100, '¾ su bardağı'], ['avokado', 150, '1 adet'], ['limon', 40, '½ adet'], ['kisnis', 15, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Kıymayı soğanla kavurup kimyon, toz biber ve tuzla tatlandırın.', 'Tortillaları kuru tavada ısıtın.', 'Kıyma, marul, domates, peynir ve avokadoyla doldurun; limon ve kişnişle servis edin.'],
  },
  {
    id: 'burrito', ad: 'Tavuklu Burrito', ulke: 'Meksika', kat: 'tavuk', emoji: '🌯', sure: 40, porsiyon: 4, wiki: 'Burrito',
    malz: [['tortilla', 280, '4 büyük tortilla'], ['tavuk_gogus', 400, '400 g'], ['pirinc', 150, '¾ su bardağı'], ['kuru_fasulye', 100, 'haşlanmış'], ['misir', 100, '½ su bardağı'],
      ['kasar', 100, '¾ su bardağı'], ['domates', 150, '1 adet'], ['kimyon', 2, '1 tatlı kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'], ['sivi_yag', 13, '1 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Pirinci pişirin; tavuğu baharatlarla soteleyip şerit kesin.', 'Tortillaların ortasına pilav, fasulye, mısır, tavuk, domates ve peynir koyun.', 'Yanlarını katlayıp sıkıca sarın; tavada iki yüzünü kızartın.'],
  },
  {
    id: 'guacamole', ad: 'Guacamole', ulke: 'Meksika', kat: 'meze', emoji: '🥑', sure: 10, porsiyon: 6, wiki: 'Guacamole',
    malz: [['avokado', 450, '3 adet'], ['domates', 150, '1 adet'], ['sogan', 30, '¼ adet (mor)'], ['limon', 60, '1 misket limonu'], ['kisnis', 15, '½ demet'], ['sivri_biber', 20, '1 acı biber'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Avokadoları çatalla iri ezin.', 'İnce kıyılmış soğan, domates, biber ve kişnişi ekleyin.', 'Limon ve tuzla tatlandırıp hemen servis edin (kararmaması için çekirdeği içinde bırakın).'],
  },
  {
    id: 'chili-con-carne', ad: 'Chili Con Carne', ulke: 'Meksika/ABD', kat: 'et', emoji: '🌶️', sure: 70, porsiyon: 6, wiki: 'Chili con carne',
    malz: [['dana_kiyma', 500, '500 g'], ['kuru_fasulye', 200, '1 su bardağı (ıslatılmış, haşlanmış)'], ['domates', 600, '4 adet'], ['sogan', 110, '1 adet'], ['kapya_biber', 150, '1 adet'],
      ['sarimsak', 12, '3 diş'], ['kimyon', 2, '1 tatlı kaşığı'], ['toz_biber', 4, '2 tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['bitter_cikolata', 10, '1 kare (isteğe bağlı)'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Kıymayı yağda kavurup soğan, biber ve sarımsağı ekleyin.', 'Baharatları ekleyip 1 dakika çevirin; domatesi ekleyin.', 'Fasulyeyi ekleyip kısık ateşte 40 dakika pişirin; çikolatayı karıştırın.', 'Pilav ya da tortillayla servis edin.'],
  },
  {
    id: 'quesadilla', ad: 'Quesadilla', ulke: 'Meksika', kat: 'hamur', emoji: '🧀', sure: 20, porsiyon: 4, wiki: 'Quesadilla',
    malz: [['tortilla', 280, '4 büyük tortilla'], ['kasar', 200, '200 g'], ['tavuk_gogus', 200, '200 g (pişmiş)'], ['kapya_biber', 75, '½ adet'], ['misir', 80, '½ su bardağı'], ['toz_biber', 1, '1 tutam']],
    adim: ['Tortillanın yarısına peynir, tavuk, biber ve mısır koyup ikiye katlayın.', 'Kuru tavada iki yüzünü peynir eriyene kadar kızartın.', 'Dilimleyip guacamole ile servis edin.'],
  },
  {
    id: 'enchilada', ad: 'Tavuklu Enchilada', ulke: 'Meksika', kat: 'tavuk', emoji: '🌯', sure: 50, porsiyon: 4, wiki: 'Enchilada',
    malz: [['tortilla', 300, '8 küçük tortilla'], ['tavuk_gogus', 400, '400 g (haşlanmış)'], ['domates', 450, '3 adet'], ['sogan', 110, '1 adet'], ['sarimsak', 8, '2 diş'],
      ['toz_biber', 3, '1,5 tatlı kaşığı'], ['kimyon', 1, '½ çay kaşığı'], ['kasar', 150, '1 su bardağı'], ['sivi_yag', 13, '1 yemek kaşığı'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Domates, soğan, sarımsak ve baharatlarla koyu sos pişirin.', 'Didiklenmiş tavuğu sosun bir kısmıyla karıştırın.', 'Tortillalara tavuk koyup sarın, fırın kabına dizin.', 'Kalan sosu ve peyniri üzerine yayıp 200 °C fırında 15 dakika pişirin.'],
  },
];

export const AMERIKAN = [
  {
    id: 'hamburger', ad: 'Ev Yapımı Hamburger', ulke: 'ABD', kat: 'et', emoji: '🍔', sure: 30, porsiyon: 4, wiki: 'Hamburger',
    malz: [['dana_kiyma', 600, '600 g'], ['hamburger_ekmegi', 320, '4 adet'], ['kasar', 80, '4 dilim'], ['domates', 150, '1 adet'], ['marul', 80, 'birkaç yaprak'], ['sogan', 60, '½ adet (mor)'],
      ['ketcap', 30, '2 yemek kaşığı'], ['mayonez', 30, '2 yemek kaşığı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Kıymayı 4 eşit parçaya bölüp ekmekten biraz geniş, yassı köfteler yapın; yalnızca dış yüzeyini tuzlayın.', 'Çok kızgın tavada ya da ızgarada her yüzünü 3–4 dakika pişirin; son dakikada peynir koyun.',
      'Ekmekleri kızartıp sos sürün; marul, köfte, domates ve soğanla birleştirin.'],
  },
  {
    id: 'sezar-salata', ad: 'Sezar Salata', ulke: 'ABD/Meksika', kat: 'garnitur', emoji: '🥗', sure: 25, porsiyon: 4, wiki: 'Sezar salatası',
    malz: [['marul', 400, '1 göbek'], ['tavuk_gogus', 300, '300 g (ızgara)'], ['ekmek', 100, 'kruton için'], ['parmesan', 50, '½ su bardağı'], ['mayonez', 60, 'sos için 4 yemek kaşığı'],
      ['limon', 40, 'sos için'], ['hardal', 5, 'sos için'], ['sarimsak', 4, 'sos için'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['tuz', 2, '1 tutam']],
    adim: ['Ekmeği küp doğrayıp zeytinyağıyla fırında kızartın.', 'Mayonez, limon, hardal, sarımsak ve parmesanın yarısıyla sos çırpın.', 'Marulu sosla harmanlayıp tavuk, kruton ve kalan parmesanla servis edin.'],
  },
  {
    id: 'pancake', ad: 'Pankek', ulke: 'ABD', kat: 'tatli', emoji: '🥞', sure: 25, porsiyon: 4, wiki: 'Pankek',
    malz: [['un', 200, '1,5 su bardağı'], ['sut', 250, '1,25 su bardağı'], ['yumurta', 50, '1 adet'], ['seker', 25, '2 yemek kaşığı'], ['kabartma_tozu', 10, '1 paket'],
      ['tereyagi', 28, '2 yemek kaşığı'], ['bal', 60, 'servis için'], ['cilek', 150, 'servis için']],
    adim: ['Kuru ve yaş malzemeleri ayrı karıştırıp birleştirin; topakları tamamen gidermeyin.', 'Az yağlı tavaya kepçeyle döküp üzeri kabarcıklanınca çevirin.', 'Bal ve meyveyle servis edin.'],
  },
  {
    id: 'mac-cheese', ad: 'Mac & Cheese', ulke: 'ABD', kat: 'garnitur', emoji: '🧀', sure: 35, porsiyon: 6, wiki: 'Makarna ve peynir',
    malz: [['makarna', 400, '400 g (dirsek)'], ['sut', 600, '3 su bardağı'], ['tereyagi', 40, '3 yemek kaşığı'], ['un', 30, '3 yemek kaşığı'], ['kasar', 200, '200 g (çedar)'],
      ['hardal', 5, '1 tatlı kaşığı'], ['galeta_unu', 30, 'üzeri için'], ['su', 3000, 'haşlama için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Makarnayı haşlayın.', 'Tereyağında unu kavurup sütle beşamel yapın; peynir ve hardalı eritin.', 'Makarnayı sosla karıştırıp fırın kabına alın, galeta unu serpin.', '200 °C fırında 15 dakika kızartın.'],
  },
  {
    id: 'fish-chips', ad: 'Fish & Chips', ulke: 'İngiltere', kat: 'deniz', emoji: '🐟', sure: 45, porsiyon: 4, wiki: 'Fish and chips',
    malz: [['mezgit', 700, '4 fileto'], ['un', 150, '1 su bardağı', 70], ['su', 200, '1 su bardağı soğuk maden suyu'], ['kabartma_tozu', 5, '½ paket'], ['patates', 800, '5 adet'],
      ['sivi_yag', 800, 'kızartmak için', 90], ['limon', 80, 'servis için'], ['sirke', 15, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Patatesleri kalın çubuk doğrayıp iki aşamada kızartın.', 'Un, kabartma tozu, tuz ve soğuk maden suyuyla akışkan hamur çırpın.', 'Filetoları una bulayıp hamura batırın; 180 °C yağda altın rengi olana kadar kızartın.', 'Limon ve sirkeyle servis edin.'],
  },
  {
    id: 'coleslaw', ad: 'Coleslaw', ulke: 'ABD', kat: 'garnitur', emoji: '🥗', sure: 15, porsiyon: 6, wiki: 'Coleslaw',
    malz: [['lahana', 400, '¼ orta boy'], ['kirmizi_lahana', 150, 'bir parça'], ['havuc', 140, '2 adet'], ['mayonez', 60, '4 yemek kaşığı'], ['yogurt', 100, '½ su bardağı'],
      ['sirke', 15, '1 yemek kaşığı'], ['seker', 5, '1 tatlı kaşığı'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Lahanaları ince doğrayın, havucu rendeleyin.', 'Mayonez, yoğurt, sirke, şeker ve tuzla sos yapın.', 'Sebzeleri sosla harmanlayıp 30 dakika buzdolabında dinlendirin.'],
  },
  {
    id: 'brownie', ad: 'Brownie', ulke: 'ABD', kat: 'tatli', emoji: '🍫', sure: 45, porsiyon: 12, wiki: 'Brownie',
    malz: [['bitter_cikolata', 200, '200 g'], ['tereyagi', 150, '150 g'], ['seker', 200, '1 su bardağı'], ['yumurta', 150, '3 adet'], ['un', 100, '¾ su bardağı'], ['kakao', 20, '2 yemek kaşığı'], ['ceviz', 60, '½ su bardağı']],
    adim: ['Çikolata ve tereyağını benmari usulü eritin.', 'Şeker ve yumurtaları ekleyip çırpın; un ve kakaoyu katlayın, cevizi ekleyin.', 'Kare kaba döküp 175 °C fırında 22–25 dakika pişirin (ortası nemli kalmalı).'],
  },
  {
    id: 'cheesecake', ad: 'Fırın Cheesecake', ulke: 'ABD', kat: 'tatli', emoji: '🍰', sure: 90, porsiyon: 10, wiki: 'Cheesecake',
    not: 'Fırından çıkınca buzdolabında en az 6 saat dinlendirin.',
    malz: [['biskuvi', 200, 'taban için'], ['tereyagi', 80, 'taban için'], ['krem_peynir', 600, '600 g'], ['seker', 180, '¾ su bardağı'], ['yumurta', 150, '3 adet'],
      ['krema', 200, '1 kutu'], ['un', 20, '2 yemek kaşığı'], ['limon', 20, '½ limonun kabuğu ve suyu'], ['vanilin', 1, '1 paket'], ['cilek', 200, 'sos için']],
    adim: ['Bisküviyi ufalayıp eritilmiş tereyağıyla kalıbın tabanına bastırın.', 'Krem peynir ve şekeri pürüzsüz çırpın; yumurta, krema, un, limon ve vanilini ekleyin.',
      'Tabana döküp 160 °C fırında 60 dakika pişirin; fırının kapağı aralık soğumaya bırakın.', 'Çilek sosuyla servis edin.'],
  },
  {
    id: 'shepherds-pie', ad: 'Çoban Turtası (Shepherd\'s Pie)', ulke: 'İngiltere', kat: 'et', emoji: '🥧', sure: 70, porsiyon: 6, wiki: 'Çoban turtası',
    malz: [['kuzu_kiyma', 500, '500 g'], ['sogan', 110, '1 adet'], ['havuc', 140, '2 adet'], ['bezelye', 100, '½ su bardağı'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['et_suyu', 200, '1 su bardağı'], ['patates', 1000, '6 adet'], ['sut', 150, '¾ su bardağı'], ['tereyagi', 40, '3 yemek kaşığı'], ['tuz', 10, '2 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Kıymayı soğan ve havuçla kavurun; salça, bezelye ve et suyuyla koyulaşana kadar pişirin.', 'Patatesleri haşlayıp süt ve tereyağıyla püre yapın.', 'Kıymayı kaba yayıp püreyle kapatın, çatalla desen verin.', '200 °C fırında 25 dakika kızartın.'],
  },
];

export const DIGER_DUNYA = [
  {
    id: 'bors', ad: 'Borş Çorbası', ulke: 'Rusya/Ukrayna', kat: 'corba', emoji: '🥣', sure: 70, porsiyon: 6, wiki: 'Borş',
    malz: [['pancar', 400, '2 adet'], ['lahana', 300, '¼ küçük'], ['patates', 340, '2 adet'], ['havuc', 70, '1 adet'], ['sogan', 110, '1 adet'], ['dana_kusbasi', 300, '300 g'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['sirke', 15, '1 yemek kaşığı'], ['su', 1800, '9 su bardağı'], ['dereotu', 15, 'servis için'], ['yogurt', 150, 'servis için (smetana yerine)'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Eti suyla 40 dakika haşlayın.', 'Rendelenmiş pancarı salça ve sirkeyle 10 dakika soteleyin.', 'Et suyuna patates, lahana, havuç ve soğanı ekleyip 15 dakika pişirin; pancarı katın.', 'Dereotu ve yoğurtla servis edin.'],
  },
  {
    id: 'stroganoff', ad: 'Beef Stroganoff', ulke: 'Rusya', kat: 'et', emoji: '🍄', sure: 35, porsiyon: 4, wiki: 'Beef Stroganoff',
    malz: [['dana_biftek', 600, '600 g (şerit)'], ['mantar', 250, '250 g'], ['sogan', 110, '1 adet'], ['krema', 200, '1 kutu'], ['hardal', 10, '1 tatlı kaşığı'], ['un', 10, '1 yemek kaşığı'],
      ['tereyagi', 28, '2 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Eti yüksek ateşte, partiler halinde 1–2 dakika mühürleyip çıkarın.', 'Tereyağında soğan ve mantarı soteleyin; unu ekleyin.', 'Krema ve hardalı ekleyip kaynatın; eti geri koyup 2 dakika ısıtın.', 'Pilav ya da püreyle servis edin.'],
  },
  {
    id: 'gulas', ad: 'Macar Gulaşı', ulke: 'Macaristan', kat: 'et', emoji: '🥘', sure: 120, porsiyon: 6, wiki: 'Gulaş',
    malz: [['dana_kusbasi', 800, '800 g'], ['sogan', 330, '3 adet'], ['kapya_biber', 150, '1 adet'], ['patates', 340, '2 adet'], ['domates', 150, '1 adet'], ['toz_biber', 8, '2 yemek kaşığı (tatlı paprika)'],
      ['kimyon', 1, '½ çay kaşığı'], ['sarimsak', 12, '3 diş'], ['sivi_yag', 26, '2 yemek kaşığı'], ['su', 1200, '6 su bardağı'], ['tuz', 10, '2 tatlı kaşığı']],
    adim: ['Yağda soğanları yumuşayana kadar kavurun; ocaktan alıp paprikayı karıştırın.', 'Eti ekleyip mühürleyin; sarımsak, kimyon, domates ve suyu ekleyin.', 'Kısık ateşte 1 saat pişirin; biber ve patatesi ekleyip 25 dakika daha pişirin.'],
  },
  {
    id: 'tavuk-tajin', ad: 'Fas Usulü Tavuk Tajin', ulke: 'Fas', kat: 'tavuk', emoji: '🍲', sure: 70, porsiyon: 4, wiki: 'Tajin',
    malz: [['tavuk_but', 900, '4 but'], ['sogan', 220, '2 adet'], ['zeytin', 80, 'yeşil zeytin'], ['limon', 80, '1 adet'], ['zencefil', 10, '1 parmak'], ['zerdecal', 1, '½ çay kaşığı'],
      ['kimyon', 1, '½ çay kaşığı'], ['tarcin', 1, '1 tutam'], ['safran', 1, '1 tutam'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['su', 300, '1,5 su bardağı'], ['kisnis', 15, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Tavuğu baharatlarla ovun.', 'Zeytinyağında soğanı kavurup tavuğu ekleyin.', 'Su ve safranla kapak kapalı 40 dakika pişirin.', 'Zeytin ve limon dilimlerini ekleyip 10 dakika daha pişirin; kişnişle servis edin.'],
  },
  {
    id: 'sebzeli-kuskus', ad: 'Sebzeli Kuskus', ulke: 'Fas', kat: 'garnitur', emoji: '🍲', sure: 45, porsiyon: 4, wiki: 'Kuskus',
    malz: [['kuskus', 300, '1,5 su bardağı'], ['nohut_haslanmis', 150, '1 su bardağı'], ['havuc', 140, '2 adet'], ['kabak', 200, '1 adet'], ['sogan', 110, '1 adet'],
      ['domates', 150, '1 adet'], ['kuru_uzum', 30, '3 yemek kaşığı'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['kimyon', 1, '½ çay kaşığı'], ['tarcin', 1, '1 tutam'], ['et_suyu', 700, '3,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Zeytinyağında soğanı kavurup sebzeleri, baharatları ve 3 bardak et suyunu ekleyin; 20 dakika pişirin.', 'Kuskusu kalan sıcak et suyuyla ıslatıp örtün, 5 dakika sonra çatalla kabartın.', 'Kuskusu sebzeli sos, nohut ve üzümle servis edin.'],
  },
  {
    id: 'hacapuri', ad: 'Acaran Haçapurisi', ulke: 'Gürcistan', kat: 'hamur', emoji: '🧀', sure: 90, porsiyon: 6,
    not: '4 kayık çıkar; doyurucu olduğu için genellikle paylaşılarak yenir (6 kişilik).', wiki: 'Haçapuri',
    malz: [['un', 400, '3,5 su bardağı'], ['sut', 200, '1 su bardağı ılık'], ['maya', 7, '1 paket'], ['sivi_yag', 26, '2 yemek kaşığı'], ['kasar', 200, '200 g'], ['beyaz_peynir', 150, '150 g'],
      ['yumurta', 250, '5 adet (4 ortası + 1 sürmek)'], ['tereyagi', 40, '3 yemek kaşığı'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Mayalı hamuru yoğurup 1 saat dinlendirin; 4 parçaya bölün.', 'Her parçayı oval açın, kenarlarını kıvırıp uçlarını bükerek kayık yapın.', 'Ortasına peynirleri doldurup 220 °C fırında 12 dakika pişirin.',
      'Ortasına yumurta kırıp 3 dakika daha pişirin; tereyağı koyup karıştırarak yiyin.'],
  },
  {
    id: 'pelmeni', ad: 'Pelmeni', ulke: 'Rusya', kat: 'hamur', emoji: '🥟', sure: 80, porsiyon: 4, wiki: 'Pelmeni',
    malz: [['un', 400, '3,5 su bardağı'], ['yumurta', 50, '1 adet'], ['su', 150, '¾ su bardağı'], ['kiyma_karisik', 350, '350 g'], ['sogan', 110, '1 adet'],
      ['tereyagi', 40, 'servis için'], ['yogurt', 200, 'servis için'], ['dereotu', 10, 'servis için'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Hamuru yoğurup ince açın; küçük daireler kesin.', 'Kıymayı rendelenmiş soğan ve baharatlarla karıştırın.', 'Dairelere iç koyup yarım ay kapatın, uçlarını birleştirip kulak şekli verin.',
      'Kaynar tuzlu suda yüzeye çıktıktan sonra 3 dakika haşlayın; tereyağı, yoğurt ve dereotuyla servis edin.'],
  },
  {
    id: 'rus-salatasi', ad: 'Rus Salatası (Olivye)', ulke: 'Rusya', kat: 'meze', emoji: '🥗', sure: 40, porsiyon: 6, wiki: 'Olivye salatası',
    malz: [['patates', 340, '2 adet (haşlanmış)'], ['havuc', 140, '2 adet (haşlanmış)'], ['bezelye', 150, '1 su bardağı'], ['yumurta', 100, '2 adet (haşlanmış)'],
      ['salatalik', 100, '2 küçük turşu'], ['mayonez', 80, '5 yemek kaşığı'], ['yogurt', 100, '½ su bardağı'], ['dereotu', 10, 'birkaç dal'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Haşlanmış patates, havuç, yumurta ve turşuyu küçük küp doğrayın.', 'Bezelyeyi ekleyin.', 'Mayonez, yoğurt, dereotu ve tuzla karıştırıp soğuk servis edin.'],
  },
  {
    id: 'alman-patates-salatasi', ad: 'Alman Patates Salatası', ulke: 'Almanya', kat: 'garnitur', emoji: '🥔', sure: 30, porsiyon: 4, wiki: 'Patates salatası',
    malz: [['patates', 800, '5 adet'], ['sogan', 110, '1 adet'], ['et_suyu', 150, '¾ su bardağı sıcak'], ['sirke', 30, '2 yemek kaşığı'], ['hardal', 10, '1 tatlı kaşığı'],
      ['sivi_yag', 40, '3 yemek kaşığı'], ['taze_sogan', 30, '2 dal'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Patatesleri kabuklu haşlayıp sıcakken soyun ve dilimleyin.', 'Sıcak et suyu, sirke, hardal, yağ ve ince doğranmış soğanla sos yapın.', 'Sosu sıcak patateslere döküp 20 dakika bekletin; taze soğanla ılık servis edin.'],
  },
];

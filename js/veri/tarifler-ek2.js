// Genişletilmiş menü (2): sebze, garnitür, meze, tatlı ve ek çorba/et/tavuk seçenekleri.
export const EK_TARIFLER_2 = [
  // ───────────── SEBZE YEMEKLERİ ─────────────
  {
    id: 'zeytinyagli-biber-dolmasi', ad: 'Zeytinyağlı Biber Dolması', kat: 'sebze', emoji: '🫑', sure: 70, porsiyon: 4,
    wiki: 'Dolma',
    malz: [
      ['dolmalik_biber', 500, '10 adet'], ['pirinc', 180, '1 su bardağı'], ['sogan', 220, '2 adet'], ['domates', 150, '1 adet'],
      ['zeytinyagi', 80, '6 yemek kaşığı'], ['maydanoz', 15, '½ demet'], ['dereotu', 10, 'birkaç dal'], ['kuru_nane', 2, '1 tatlı kaşığı'],
      ['seker', 4, '1 çay kaşığı'], ['tarcin', 1, '1 tutam'], ['limon', 40, '½ adet'], ['su', 400, '2 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Biberlerin şapkalarını kesip çekirdeklerini çıkarın.',
      'Zeytinyağında ince doğranmış soğanı pembeleştirin, yıkanmış pirinci ekleyip 3 dakika kavurun.',
      'Rendelenmiş domates, şeker, tuz, baharatlar ve yarım su bardağı sıcak su ekleyip suyunu çekene kadar pişirin; yeşillikleri katın.',
      'Soğuyan harçla biberleri dörtte üçüne kadar doldurup şapkalarını kapatın.',
      'Tencereye dizin, sıcak su ve limon suyunu ekleyin; üzerine tabak kapatıp kısık ateşte 40 dakika pişirin. Soğuk servis edin.',
    ],
  },
  {
    id: 'yaprak-sarmasi', ad: 'Zeytinyağlı Yaprak Sarması', kat: 'sebze', emoji: '🍃', sure: 90, porsiyon: 6,
    wiki: 'Yaprak sarması',
    malz: [
      ['asma_yapragi', 250, '1 kavanoz (yaklaşık 50 yaprak)'], ['pirinc', 270, '1,5 su bardağı'], ['sogan', 330, '3 adet'],
      ['zeytinyagi', 100, '½ su bardağı'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['kuru_nane', 3, '1 tatlı kaşığı'],
      ['karabiber', 1, '1 çay kaşığı'], ['seker', 4, '1 çay kaşığı'], ['limon', 80, '1 adet'], ['su', 500, '2,5 su bardağı'],
      ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Yaprakları birkaç kez sıcak sudan geçirip tuzunu alın.',
      'Zeytinyağında soğanı kavurun; pirinç, salça, baharatlar ve şekeri ekleyip 3 dakika çevirin, ocaktan alın.',
      'Yaprakların damarlı yüzüne birer tatlı kaşığı iç koyup kenarlarını kapatarak sıkıca sarın.',
      'Sarmaları tencereye sıkıca dizin; su, limon suyu ve kalan zeytinyağını ekleyin, üzerine ters tabak kapatın.',
      'Kısık ateşte pirinç pişene kadar 45–50 dakika pişirin. Tenceresinde soğutup servis edin.',
    ],
  },
  {
    id: 'zeytinyagli-barbunya', ad: 'Zeytinyağlı Barbunya', kat: 'sebze', emoji: '🫘', sure: 70, porsiyon: 4,
    wiki: 'Barbunya pilaki',
    not: 'Kuru barbunyayı bir gece önceden ıslatın.',
    malz: [
      ['kuru_barbunya', 250, '1,5 su bardağı'], ['sogan', 110, '1 adet'], ['havuc', 70, '1 adet'], ['patates', 170, '1 adet'],
      ['sarimsak', 12, '3 diş'], ['domates', 150, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['zeytinyagi', 65, '5 yemek kaşığı'], ['seker', 4, '1 çay kaşığı'], ['su', 800, '4 su bardağı'],
      ['maydanoz', 15, 'servis için'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Islatılmış barbunyayı 20 dakika ön haşlayıp süzün.',
      'Zeytinyağında soğan ve sarımsağı kavurun, salça ve rendelenmiş domatesi ekleyin.',
      'Küp havuç ve patatesi, barbunyayı, şekeri ve sıcak suyu ekleyin.',
      'Barbunyalar yumuşayana kadar kısık ateşte 40 dakika pişirin; tuzu en sonda ekleyin.',
      'Soğuk, maydanozla servis edin.',
    ],
  },
  {
    id: 'karnabahar-yemegi', ad: 'Karnabahar Yemeği', kat: 'sebze', emoji: '🥦', sure: 35, porsiyon: 4,
    wiki: 'Karnabahar',
    malz: [
      ['karnabahar', 800, '1 orta boy'], ['sogan', 110, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['zeytinyagi', 40, '3 yemek kaşığı'], ['su', 300, '1,5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
      ['pul_biber', 1, 'isteğe göre'], ['yogurt', 200, 'servis için'],
    ],
    adim: [
      'Karnabaharı çiçeklerine ayırıp yıkayın.',
      'Zeytinyağında soğanı kavurun, salçayı ekleyin.',
      'Karnabaharı ekleyip 3 dakika çevirin; sıcak su ve tuzu ekleyin.',
      'Kapak kapalı, kısık ateşte karnabahar yumuşayana kadar 20 dakika pişirin. Yoğurtla servis edin.',
    ],
  },
  {
    id: 'zeytinyagli-kereviz', ad: 'Zeytinyağlı Kereviz', kat: 'sebze', emoji: '🥕', sure: 45, porsiyon: 4,
    wiki: 'Kereviz',
    malz: [
      ['kereviz', 700, '2 orta boy kök'], ['havuc', 140, '2 adet'], ['patates', 170, '1 adet'], ['sogan', 60, '½ adet'],
      ['bezelye', 80, '½ su bardağı'], ['zeytinyagi', 65, '5 yemek kaşığı'], ['limon', 80, '1 adet'], ['seker', 4, '1 çay kaşığı'],
      ['su', 400, '2 su bardağı'], ['dereotu', 20, '½ demet'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Kerevizleri soyup kararmaması için limonlu suda bekletin.',
      'Zeytinyağında soğan, küp havuç ve patatesi kavurun.',
      'Kerevizleri dizip bezelyeyi ekleyin; su, limon suyu, şeker ve tuzu ekleyin.',
      'Kapak kapalı, kısık ateşte kerevizler yumuşayana kadar 30 dakika pişirin.',
      'Soğuyunca dereotuyla servis edin.',
    ],
  },
  {
    id: 'kabak-yemegi', ad: 'Zeytinyağlı Kabak', kat: 'sebze', emoji: '🥒', sure: 30, porsiyon: 4,
    wiki: 'Kabak',
    malz: [
      ['kabak', 800, '4 adet'], ['sogan', 110, '1 adet'], ['domates', 150, '1 adet'], ['pirinc', 35, '2 yemek kaşığı'],
      ['zeytinyagi', 50, '4 yemek kaşığı'], ['dereotu', 20, '½ demet'], ['su', 200, '1 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Kabakları alacalı soyup yarım ay doğrayın.',
      'Zeytinyağında soğanı yumuşatın, rendelenmiş domatesi ekleyin.',
      'Kabak, yıkanmış pirinç, tuz ve sıcak suyu ekleyin.',
      'Kapak kapalı, kısık ateşte 15–20 dakika pişirin; dereotunu ekleyip ocaktan alın.',
    ],
  },
  {
    id: 'fasulye-pilaki', ad: 'Fasulye Pilaki', kat: 'sebze', emoji: '🫘', sure: 60, porsiyon: 4,
    wiki: 'Pilaki',
    not: 'Kuru fasulyeyi bir gece önceden ıslatın.',
    malz: [
      ['kuru_fasulye', 250, '1,5 su bardağı'], ['havuc', 140, '2 adet'], ['patates', 170, '1 adet'], ['sogan', 110, '1 adet'],
      ['sarimsak', 12, '3 diş'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 65, '5 yemek kaşığı'],
      ['limon', 40, '½ adet'], ['su', 800, '4 su bardağı'], ['maydanoz', 15, 'servis için'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Islatılmış fasulyeyi 20 dakika ön haşlayıp süzün.',
      'Zeytinyağında soğan ve sarımsağı kavurun, salçayı ekleyin.',
      'Küp havuç, patates, fasulye ve sıcak suyu ekleyip fasulye yumuşayana kadar 40 dakika pişirin.',
      'Tuz ve limon suyunu ekleyip soğutun; maydanozla servis edin.',
    ],
  },
  {
    id: 'firinda-sebze', ad: 'Fırında Sebze', kat: 'sebze', emoji: '🥘', sure: 50, porsiyon: 4,
    wiki: 'Sebze',
    malz: [
      ['patlican', 250, '1 adet'], ['kabak', 200, '1 adet'], ['patates', 340, '2 adet'], ['havuc', 140, '2 adet'],
      ['kapya_biber', 150, '1 adet'], ['sogan', 110, '1 adet'], ['domates', 150, '1 adet'], ['zeytinyagi', 50, '4 yemek kaşığı'],
      ['sarimsak', 12, '3 diş'], ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Bütün sebzeleri iri parçalar halinde doğrayın.',
      'Zeytinyağı, ezilmiş sarımsak ve baharatlarla harmanlayın.',
      'Geniş tepsiye tek kat halinde yayın.',
      '200 °C fırında, yarısında karıştırarak sebzeler yumuşayıp kızarana kadar 40 dakika pişirin.',
    ],
  },
  {
    id: 'lahana-sarmasi', ad: 'Zeytinyağlı Lahana Sarması', kat: 'sebze', emoji: '🥬', sure: 90, porsiyon: 6,
    wiki: 'Lahana sarması',
    malz: [
      ['lahana', 1000, '1 orta boy'], ['pirinc', 270, '1,5 su bardağı'], ['sogan', 220, '2 adet'], ['zeytinyagi', 100, '½ su bardağı'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['kuru_nane', 3, '1 tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'],
      ['limon', 80, '1 adet'], ['su', 600, '3 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Lahananın koçanını oyun, yaprakları kaynar tuzlu suda yumuşayana kadar haşlayıp ayırın; kalın damarlarını açın.',
      'Zeytinyağında soğanı kavurun; pirinç, salça ve baharatları ekleyip 3 dakika çevirin.',
      'Yaprakları ikiye bölüp her birine iç koyarak sıkıca sarın.',
      'Tencereye dizin; su, limon suyu ve kalan zeytinyağını ekleyip ters tabakla bastırın.',
      'Kısık ateşte 45 dakika pişirin; ılık ya da soğuk servis edin.',
    ],
  },
  {
    id: 'patlican-kebabi-sebze', ad: 'Patlıcan Oturtma (Etsiz)', kat: 'sebze', emoji: '🍆', sure: 50, porsiyon: 4,
    wiki: 'Oturtma',
    malz: [
      ['patlican', 750, '3 adet'], ['domates', 300, '2 adet'], ['sivri_biber', 80, '4 adet'], ['sogan', 110, '1 adet'],
      ['sarimsak', 8, '2 diş'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 50, '4 yemek kaşığı'],
      ['su', 200, '1 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Patlıcanları halka doğrayın, zeytinyağıyla fırçalayıp fırında 15 dakika yumuşatın.',
      'Kalan zeytinyağında soğan, sarımsak ve biberleri kavurun; domates ve salçayı ekleyip 5 dakika pişirin.',
      'Sosu patlıcanların üzerine yayın, sıcak suyu ekleyin.',
      '180 °C fırında 20 dakika pişirin; sarımsaklı yoğurtla servis edin.',
    ],
  },

  // ───────────── GARNİTÜRLER ─────────────
  {
    id: 'kisir', ad: 'Kısır', kat: 'garnitur', emoji: '🥗', sure: 25, porsiyon: 6,
    wiki: 'Kısır',
    malz: [
      ['koftelik_bulgur', 340, '2 su bardağı'], ['su', 400, '2 su bardağı sıcak su'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['biber_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 50, '4 yemek kaşığı'], ['nar_eksisi', 30, '2 yemek kaşığı'],
      ['limon', 40, '½ adet'], ['taze_sogan', 60, '4 dal'], ['maydanoz', 30, '1 demet'], ['domates', 150, '1 adet'],
      ['marul', 100, 'birkaç yaprak'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Bulguru sıcak suyla ıslatıp kapağını kapatın, 15 dakika şişmesini bekleyin.',
      'Salçalar, zeytinyağı ve baharatları ekleyip elinizle iyice yoğurun.',
      'Nar ekşisi ve limon suyunu katın.',
      'İnce doğranmış taze soğan, maydanoz ve domatesi ekleyip karıştırın; marul yaprağıyla servis edin.',
    ],
  },
  {
    id: 'piyaz', ad: 'Fasulye Piyazı', kat: 'garnitur', emoji: '🥗', sure: 20, porsiyon: 4,
    wiki: 'Piyaz',
    not: 'Haşlanmış ya da konserve kuru fasulye ile pratik olur.',
    malz: [
      ['kuru_fasulye', 160, '1 su bardağı (haşlanınca ~2,5 bardak)'], ['sogan', 110, '1 adet (piyazlık)'], ['domates', 150, '1 adet'],
      ['maydanoz', 30, '1 demet'], ['yumurta', 100, '2 adet (haşlanmış)'], ['zeytinyagi', 40, '3 yemek kaşığı'],
      ['sirke', 15, '1 yemek kaşığı'], ['tahin', 15, '1 yemek kaşığı (Antalya usulü, isteğe bağlı)'], ['limon', 40, '½ adet'],
      ['sumak', 2, '1 tatlı kaşığı'], ['pul_biber', 1, '1 tutam'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Fasulyeyi haşlayıp süzün ve soğutun.',
      'Soğanı piyazlık doğrayıp sumak ve tuzla ovun.',
      'Zeytinyağı, sirke, limon ve (istiyorsanız) tahini çırparak sos yapın.',
      'Fasulye, soğan, doğranmış domates ve maydanozu sosla harmanlayın; dilimlenmiş yumurtayla servis edin.',
    ],
  },
  {
    id: 'nohutlu-pilav', ad: 'Nohutlu Pilav', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4,
    wiki: 'Pilav',
    malz: [
      ['pirinc', 360, '2 su bardağı'], ['nohut_haslanmis', 160, '1 su bardağı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['et_suyu', 600, '3 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Pirinci ılık tuzlu suda 20 dakika bekletip yıkayın.',
      'Yağlarda pirinci 3–4 dakika kavurun, nohudu ekleyin.',
      'Sıcak et suyunu ve tuzu ekleyin; suyunu çekene kadar kısık ateşte 15 dakika pişirin.',
      'Karabiber serpip 15 dakika demlendirin.',
    ],
  },
  {
    id: 'patates-salatasi', ad: 'Patates Salatası', kat: 'garnitur', emoji: '🥔', sure: 30, porsiyon: 4,
    wiki: 'Patates salatası',
    malz: [
      ['patates', 680, '4 orta boy'], ['taze_sogan', 60, '4 dal'], ['maydanoz', 30, '1 demet'], ['dereotu', 10, 'birkaç dal'],
      ['zeytinyagi', 40, '3 yemek kaşığı'], ['limon', 40, '½ adet'], ['pul_biber', 2, '1 tatlı kaşığı'],
      ['kimyon', 1, '½ çay kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Patatesleri kabuklarıyla haşlayın, soyup küp doğrayın.',
      'Ilıkken zeytinyağı, limon, tuz ve baharatlarla harmanlayın (sosu daha iyi çeker).',
      'Taze soğan, maydanoz ve dereotunu ekleyip karıştırın.',
    ],
  },
  {
    id: 'gavurdagi-salatasi', ad: 'Gavurdağı Salatası', kat: 'garnitur', emoji: '🥗', sure: 15, porsiyon: 4,
    wiki: 'Gavurdağı salatası',
    malz: [
      ['domates', 450, '3 adet'], ['sivri_biber', 80, '4 adet'], ['sogan', 60, '½ adet'], ['maydanoz', 30, '1 demet'],
      ['ceviz', 60, '½ su bardağı'], ['nar_eksisi', 30, '2 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sumak', 2, '1 tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Domates, biber, soğan ve maydanozu küçük küp doğrayın.',
      'Cevizi iri kırın.',
      'Hepsini nar ekşisi, zeytinyağı ve baharatlarla harmanlayıp hemen servis edin.',
    ],
  },
  {
    id: 'arpa-sehriye-pilavi', ad: 'Arpa Şehriye Pilavı', kat: 'garnitur', emoji: '🍝', sure: 25, porsiyon: 4,
    wiki: 'Şehriye',
    malz: [
      ['sehriye', 340, '2 su bardağı arpa şehriye'], ['tereyagi', 28, '2 yemek kaşığı'], ['domates_salcasi', 17, '1 yemek kaşığı (isteğe bağlı)'],
      ['su', 700, '3,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Tereyağında şehriyeyi kızarana kadar kavurun.',
      'İsterseniz salçayı ekleyip 1 dakika çevirin.',
      'Sıcak su ve tuzu ekleyin; suyunu çekene kadar kısık ateşte 12 dakika pişirip 10 dakika demlendirin.',
    ],
  },
  {
    id: 'domatesli-makarna', ad: 'Domates Soslu Makarna', kat: 'garnitur', emoji: '🍝', sure: 20, porsiyon: 4,
    wiki: 'Makarna',
    malz: [
      ['makarna', 400, '1 paket'], ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sarimsak', 8, '2 diş'], ['kekik', 1, '1 tatlı kaşığı'], ['su', 2500, 'haşlama için'], ['tuz', 10, '2 tatlı kaşığı'],
      ['kasar', 60, 'servis için (isteğe bağlı)'],
    ],
    adim: [
      'Makarnayı kaynar tuzlu suda paketteki süre kadar haşlayıp süzün.',
      'Zeytinyağında sarımsağı çevirin; rendelenmiş domates ve salçayı ekleyip 8 dakika koyulaştırın.',
      'Makarnayı sosla harmanlayıp kekik serpin; isterseniz rendelenmiş kaşarla servis edin.',
    ],
  },
  {
    id: 'roka-salatasi', ad: 'Narlı Roka Salatası', kat: 'garnitur', emoji: '🥗', sure: 10, porsiyon: 4,
    wiki: 'Roka',
    malz: [
      ['roka', 150, '2 demet'], ['domates', 150, '1 adet'], ['nar', 80, '½ adet'], ['beyaz_peynir', 60, '60 g (isteğe bağlı)'],
      ['zeytinyagi', 26, '2 yemek kaşığı'], ['nar_eksisi', 15, '1 yemek kaşığı'], ['tuz', 2, '1 tutam'],
    ],
    adim: [
      'Rokayı yıkayıp kurulayın, iri doğrayın.',
      'Domatesi doğrayıp nar tanelerini ayıklayın.',
      'Zeytinyağı, nar ekşisi ve tuzla sos yapıp servisten hemen önce dökün; üzerine peynir ufalayın.',
    ],
  },
  {
    id: 'mercimekli-bulgur', ad: 'Mercimekli Bulgur Pilavı', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4,
    wiki: 'Bulgur pilavı',
    malz: [
      ['bulgur', 250, '1,5 su bardağı'], ['yesil_mercimek', 90, '½ su bardağı'], ['sogan', 110, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['su', 700, '3,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Mercimeği 20 dakika ön haşlayıp süzün.',
      'Yağlarda soğanı kavurun, salçayı ekleyin.',
      'Bulgur ve mercimeği ekleyip 2 dakika çevirin; sıcak su ve tuzu ekleyin.',
      'Suyunu çekene kadar kısık ateşte 15 dakika pişirip 10 dakika demlendirin.',
    ],
  },
  {
    id: 'patates-kizartmasi', ad: 'Patates Kızartması', kat: 'garnitur', emoji: '🍟', sure: 30, porsiyon: 4,
    wiki: 'Patates kızartması',
    malz: [
      ['patates', 800, '5 orta boy'], ['sivi_yag', 500, 'kızartmak için', 60], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Patatesleri parmak doğrayın, soğuk suda 20 dakika bekletip iyice kurulayın.',
      'Yağı 160 °C\'de ısıtıp patatesleri 5 dakika ön kızartın, çıkarın.',
      'Yağı 180 °C\'ye çıkarıp patatesleri çıtır olana kadar 3–4 dakika daha kızartın; tuzlayın.',
    ],
  },

  // ───────────── MEZELER ─────────────
  {
    id: 'mercimek-koftesi', ad: 'Mercimek Köftesi', kat: 'meze', emoji: '🧆', sure: 40, porsiyon: 6,
    wiki: 'Mercimek köftesi',
    malz: [
      ['kirmizi_mercimek', 180, '1 su bardağı'], ['koftelik_bulgur', 170, '1 su bardağı'], ['su', 500, '2,5 su bardağı'],
      ['sogan', 110, '1 adet'], ['zeytinyagi', 50, '4 yemek kaşığı'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['biber_salcasi', 17, '1 yemek kaşığı'], ['taze_sogan', 60, '4 dal'], ['maydanoz', 30, '1 demet'], ['kimyon', 2, '1 tatlı kaşığı'],
      ['pul_biber', 2, '1 tatlı kaşığı'], ['limon', 40, '½ adet'], ['marul', 150, 'servis için'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Mercimeği suyla, dağılana ve suyunu neredeyse çekene kadar 15 dakika pişirin.',
      'Ocağı kapatıp bulguru ekleyin, kapağı kapalı 20 dakika dinlendirin.',
      'Ayrı tavada zeytinyağında soğanı kavurun, salçaları ekleyin; mercimekli karışıma katın.',
      'Baharatlar, limon, taze soğan ve maydanozu ekleyip iyice yoğurun.',
      'Avuç içinde sıkarak şekil verin; marul yaprağıyla servis edin.',
    ],
  },
  {
    id: 'havuc-tarator', ad: 'Havuç Tarator', kat: 'meze', emoji: '🥕', sure: 15, porsiyon: 6,
    wiki: 'Tarator',
    malz: [
      ['havuc', 350, '5 adet'], ['suzme_yogurt', 300, '1,5 su bardağı'], ['sarimsak', 8, '2 diş'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['ceviz', 30, '¼ su bardağı'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Havuçları rendeleyip zeytinyağında suyunu çekip yumuşayana kadar 5 dakika soteleyin, soğutun.',
      'Süzme yoğurdu ezilmiş sarımsak ve tuzla karıştırın.',
      'Havucu ekleyip harmanlayın; cevizle süsleyin.',
    ],
  },
  {
    id: 'atom', ad: 'Atom', kat: 'meze', emoji: '🌶️', sure: 10, porsiyon: 6,
    wiki: 'Atom (meze)',
    malz: [
      ['suzme_yogurt', 400, '2 su bardağı'], ['sarimsak', 8, '2 diş'], ['kuru_biber', 15, '4–5 adet acı kuru biber'],
      ['tereyagi', 28, '2 yemek kaşığı'], ['tuz', 2, '1 tutam'],
    ],
    adim: [
      'Süzme yoğurdu sarımsak ve tuzla karıştırıp tabağa yayın.',
      'Kuru biberleri tereyağında kokusu çıkana kadar (yakmadan) kızartın.',
      'Biberleri yoğurdun ortasına koyup tereyağını üzerine gezdirin.',
    ],
  },
  {
    id: 'kopoglu', ad: 'Köpoğlu', kat: 'meze', emoji: '🍆', sure: 35, porsiyon: 6,
    wiki: 'Köpoğlu',
    malz: [
      ['patlican', 500, '2 adet'], ['kapya_biber', 150, '1 adet'], ['domates', 300, '2 adet'], ['sarimsak', 12, '3 diş'],
      ['yogurt', 300, '1,5 su bardağı'], ['sivi_yag', 250, 'kızartmak için', 50], ['zeytinyagi', 13, '1 yemek kaşığı'],
      ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Patlıcan ve biberi küp doğrayıp kızartın (ya da fırınlayın).',
      'Zeytinyağında rendelenmiş domatesi bir diş sarımsakla koyulaşana kadar pişirin.',
      'Yoğurdu kalan sarımsakla çırpın.',
      'Kızarmış sebzeleri tabağa alın; üzerine domates sosu ve sarımsaklı yoğurt dökün.',
    ],
  },
  {
    id: 'patlican-salatasi', ad: 'Közlenmiş Patlıcan Salatası', kat: 'meze', emoji: '🍆', sure: 30, porsiyon: 6,
    wiki: 'Patlıcan salatası',
    malz: [
      ['patlican', 750, '3 adet'], ['sarimsak', 8, '2 diş'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['limon', 40, '½ adet'],
      ['maydanoz', 15, '½ demet'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Patlıcanları közleyip kabuklarını soyun, acı suyunu süzdürün.',
      'Satırla kıyıp sarımsak, zeytinyağı, limon ve tuzla ezerek karıştırın.',
      'Maydanozla servis edin.',
    ],
  },
  {
    id: 'semizotu-salatasi', ad: 'Yoğurtlu Semizotu', kat: 'meze', emoji: '🌿', sure: 10, porsiyon: 6,
    wiki: 'Semizotu',
    malz: [
      ['semizotu', 300, '1 demet'], ['yogurt', 400, '2 su bardağı'], ['sarimsak', 8, '2 diş'], ['zeytinyagi', 13, '1 yemek kaşığı'],
      ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Semizotunu ayıklayıp yıkayın, iri doğrayın.',
      'Yoğurdu ezilmiş sarımsak ve tuzla çırpın.',
      'Semizotunu yoğurtla karıştırıp zeytinyağı gezdirin.',
    ],
  },
  {
    id: 'girit-ezmesi', ad: 'Girit Ezmesi', kat: 'meze', emoji: '🧀', sure: 10, porsiyon: 6,
    wiki: 'Girit ezmesi',
    malz: [
      ['beyaz_peynir', 250, '250 g'], ['ceviz', 60, '½ su bardağı'], ['zeytinyagi', 40, '3 yemek kaşığı'],
      ['dereotu', 10, 'birkaç dal'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['pul_biber', 1, '1 tutam'], ['sarimsak', 4, '1 diş'],
    ],
    adim: [
      'Peyniri çatalla iyice ezin.',
      'Kırılmış ceviz, zeytinyağı, sarımsak, dereotu ve baharatları ekleyin.',
      'Karıştırıp tabağa alın; zeytinyağı gezdirerek servis edin.',
    ],
  },
  {
    id: 'kozlenmis-biber', ad: 'Közlenmiş Kırmızı Biber', kat: 'meze', emoji: '🫑', sure: 30, porsiyon: 6,
    wiki: 'Kapya biberi',
    malz: [
      ['kapya_biber', 600, '4 adet'], ['sarimsak', 8, '2 diş'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['sirke', 15, '1 yemek kaşığı'],
      ['maydanoz', 15, '½ demet'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Biberleri ocakta ya da 220 °C fırında kabukları kararana kadar közleyin.',
      'Kapalı bir kapta 10 dakika terletip kabuklarını soyun.',
      'Şeritler halinde kesip zeytinyağı, sirke, sarımsak ve tuzla harmanlayın; maydanoz serpin.',
    ],
  },
  {
    id: 'pancar-salatasi', ad: 'Yoğurtlu Pancar Salatası', kat: 'meze', emoji: '🟣', sure: 15, porsiyon: 6,
    wiki: 'Kırmızı pancar',
    malz: [
      ['pancar', 400, '2 adet (haşlanmış)'], ['suzme_yogurt', 250, '1,25 su bardağı'], ['sarimsak', 8, '2 diş'],
      ['zeytinyagi', 13, '1 yemek kaşığı'], ['ceviz', 20, 'süslemek için'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Haşlanmış pancarı rendeleyin.',
      'Süzme yoğurdu sarımsak ve tuzla karıştırın.',
      'Pancarı ekleyip harmanlayın; zeytinyağı ve cevizle servis edin.',
    ],
  },

  // ───────────── TATLILAR ─────────────
  {
    id: 'muhallebi', ad: 'Muhallebi', kat: 'tatli', emoji: '🍮', sure: 25, porsiyon: 6,
    wiki: 'Muhallebi',
    malz: [
      ['sut', 1000, '1 litre'], ['seker', 150, '¾ su bardağı'], ['pirinc_unu', 40, '4 yemek kaşığı'], ['nisasta', 30, '3 yemek kaşığı'],
      ['vanilin', 1, '1 paket'], ['tarcin', 1, 'servis için'],
    ],
    adim: [
      'Süt, şeker, pirinç unu ve nişastayı soğukken pürüzsüz olana kadar karıştırın.',
      'Orta ateşte sürekli karıştırarak koyulaşana kadar pişirin.',
      'Kaynadıktan sonra 2–3 dakika daha karıştırıp vanilini ekleyin.',
      'Kaselere paylaştırıp soğutun; tarçınla servis edin.',
    ],
  },
  {
    id: 'sekerpare', ad: 'Şekerpare', kat: 'tatli', emoji: '🍪', sure: 60, porsiyon: 12,
    wiki: 'Şekerpare',
    malz: [
      ['tereyagi', 125, '125 g'], ['seker', 100, 'hamur için ½ su bardağı'], ['yumurta', 50, '1 adet'], ['irmik', 50, '3 yemek kaşığı'],
      ['un', 250, '2 su bardağı'], ['kabartma_tozu', 5, '1 paket'], ['badem', 25, '12 adet'], ['seker', 400, 'şerbet için 2 su bardağı'],
      ['su', 500, 'şerbet için 2,5 su bardağı'], ['limon', 20, 'birkaç damla'],
    ],
    adim: [
      'Şerbeti 10 dakika kaynatıp limonu ekleyin ve soğutun.',
      'Oda sıcaklığındaki tereyağını şekerle krema kıvamına getirin; yumurtayı ekleyin.',
      'İrmik, un ve kabartma tozunu ekleyip ele yapışmayan bir hamur yoğurun.',
      'Ceviz büyüklüğünde parçalar alıp yuvarlayın, ortalarına badem bastırın; tepsiye dizin.',
      '170 °C fırında altları kızarana kadar 25–30 dakika pişirin; ılık tatlıya soğuk şerbeti dökün.',
    ],
  },
  {
    id: 'supangle', ad: 'Supangle', kat: 'tatli', emoji: '🍫', sure: 25, porsiyon: 6,
    wiki: 'Supangle',
    malz: [
      ['sut', 1000, '1 litre'], ['seker', 150, '¾ su bardağı'], ['kakao', 30, '3 yemek kaşığı'], ['un', 30, '3 yemek kaşığı'],
      ['nisasta', 20, '2 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'], ['vanilin', 1, '1 paket'],
    ],
    adim: [
      'Süt, şeker, kakao, un ve nişastayı soğukken çırpın.',
      'Orta ateşte sürekli karıştırarak koyulaşana kadar pişirin.',
      'Ocaktan alıp tereyağı ve vanilini ekleyin, mikserle 1 dakika çırpın.',
      'Kaselere paylaştırıp soğutun; isterseniz hindistan cevizi serpin.',
    ],
  },
  {
    id: 'lokma', ad: 'Lokma', kat: 'tatli', emoji: '🟤', sure: 60, porsiyon: 8,
    wiki: 'Lokma',
    malz: [
      ['un', 250, '2 su bardağı'], ['maya', 7, '1 paket kuru maya'], ['su', 350, 'hamur için 1,75 su bardağı ılık su'],
      ['seker', 400, 'şerbet için 2 su bardağı'], ['su', 400, 'şerbet için 2 su bardağı'], ['limon', 20, 'birkaç damla'],
      ['sivi_yag', 500, 'kızartmak için', 60], ['tuz', 2, '1 tutam'],
    ],
    adim: [
      'Şerbeti 10 dakika kaynatıp limonu ekleyin ve soğutun.',
      'Un, maya, tuz ve ılık suyu cıvık bir hamur olana kadar çırpın; üzeri kapalı 45 dakika mayalandırın.',
      'Hamuru avucunuzdan sıkarak (ya da kaşıkla) orta ateşte kızgın yağa bırakın; her tarafı kızarana kadar çevirin.',
      'Sıcak lokmaları soğuk şerbete atıp 1–2 dakika bekletin, süzerek servis edin.',
    ],
  },
  {
    id: 'tel-kadayif', ad: 'Cevizli Tel Kadayıf', kat: 'tatli', emoji: '🍯', sure: 60, porsiyon: 10,
    wiki: 'Kadayıf',
    malz: [
      ['tel_kadayif', 500, '500 g'], ['tereyagi', 150, '150 g'], ['ceviz', 150, '1,5 su bardağı'],
      ['seker', 500, 'şerbet için 2,5 su bardağı'], ['su', 600, 'şerbet için 3 su bardağı'], ['limon', 20, 'birkaç damla'],
    ],
    adim: [
      'Şerbeti 10 dakika kaynatıp limonu ekleyin ve soğutun.',
      'Kadayıfı elinizle didikleyip eritilmiş tereyağıyla harmanlayın.',
      'Yarısını tepsiye bastırarak yayın, cevizi serpin, kalanını üzerine kapatıp bastırın.',
      '180 °C fırında üzeri kızarana kadar 35–40 dakika pişirin.',
      'Sıcak kadayıfa soğuk şerbeti dökün, şerbeti çekince dilimleyin.',
    ],
  },
  {
    id: 'kazandibi', ad: 'Kazandibi', kat: 'tatli', emoji: '🍮', sure: 40, porsiyon: 8,
    wiki: 'Kazandibi',
    malz: [
      ['sut', 1000, '1 litre'], ['seker', 170, 'muhallebi için ¾ su bardağı + tepsi için 3 yemek kaşığı'],
      ['pirinc_unu', 40, '4 yemek kaşığı'], ['nisasta', 30, '3 yemek kaşığı'], ['un', 20, '2 yemek kaşığı'],
      ['tereyagi', 14, '1 yemek kaşığı'], ['vanilin', 1, '1 paket'],
    ],
    adim: [
      'Süt, şekerin çoğu, pirinç unu, nişasta ve unu soğukken karıştırıp koyulaşana kadar pişirin; tereyağı ve vanilini ekleyin.',
      'Tefal tepsiyi tereyağıyla yağlayıp kalan şekeri tabana serpin.',
      'Tepsiyi ocakta, şeker karamelleşene kadar ısıtın; muhallebiyi üzerine dökün.',
      'Ocakta, tabanı kızarana kadar tepsiyi döndürerek 8–10 dakika tutun.',
      'Soğuyunca buzdolabında 3 saat dinlendirin; dilimleyip kızarmış yüzü üste gelecek şekilde rulo yapın.',
    ],
  },
  {
    id: 'cilekli-yogurt-kasesi', ad: 'Çilekli Yoğurt Kasesi', kat: 'tatli', emoji: '🍓', sure: 10, porsiyon: 4,
    wiki: 'Çilek', sekersiz: true,
    not: 'Şeker eklenmez; tatlılık çilekten gelir.',
    malz: [
      ['suzme_yogurt', 400, '2 su bardağı'], ['cilek', 250, '1 kâse'], ['ceviz', 40, '⅓ su bardağı'], ['tarcin', 1, '1 tutam'],
    ],
    adim: [
      'Çileklerin bir kısmını çatalla ezip yoğurtla karıştırın.',
      'Kalan çilekleri dilimleyin.',
      'Kaselere yoğurt, dilim çilek ve kırılmış ceviz katlayın; tarçın serpin.',
    ],
  },
  {
    id: 'firinda-armut', ad: 'Fırında Cevizli Armut', kat: 'tatli', emoji: '🍐', sure: 35, porsiyon: 4,
    wiki: 'Armut', sekersiz: true,
    not: 'Şeker eklenmez; tatlılık armuttan ve tarçından gelir.',
    malz: [
      ['armut', 720, '4 adet'], ['ceviz', 40, '⅓ su bardağı'], ['tarcin', 2, '1 tatlı kaşığı'], ['karanfil', 1, '4 tane'],
      ['su', 150, '¾ su bardağı'], ['suzme_yogurt', 120, 'servis için 4 yemek kaşığı'],
    ],
    adim: [
      'Armutları ikiye kesip çekirdek yataklarını oyun.',
      'Fırın kabına dizip oyuklara ceviz ve tarçın doldurun; karanfil ve suyu ekleyin.',
      'Üzerini folyoyla kapatıp 190 °C fırında 20 dakika, folyoyu açıp 10 dakika daha pişirin.',
      'Ilık, süzme yoğurtla servis edin.',
    ],
  },
  {
    id: 'tahin-pekmez', ad: 'Cevizli Tahin Pekmez', kat: 'tatli', emoji: '🍯', sure: 5, porsiyon: 4,
    wiki: 'Pekmez',
    not: 'Şeker eklenmez ama pekmez de bir şeker kaynağıdır; diyabette küçük porsiyon.',
    malz: [
      ['tahin', 60, '4 yemek kaşığı'], ['pekmez', 80, '4 yemek kaşığı'], ['ceviz', 30, '¼ su bardağı'],
    ],
    adim: [
      'Tahini kavanozunda iyice karıştırın (yağı üste çıkmış olabilir).',
      'Tahin ve pekmezi kasede kıvamı açılana kadar çırpın.',
      'Üzerine kırılmış ceviz serpin; ekmek ya da galeta ile servis edin.',
    ],
  },

  // ───────────── EK ÇORBALAR ─────────────
  {
    id: 'patates-corbasi', ad: 'Patates Çorbası', kat: 'corba', emoji: '🥔', sure: 30, porsiyon: 4,
    wiki: 'Patates çorbası',
    malz: [
      ['patates', 500, '3 orta boy'], ['havuc', 70, '1 adet'], ['sogan', 60, '½ adet'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['sut', 200, '1 su bardağı'], ['su', 900, '4,5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
      ['kasar', 40, 'servis için'],
    ],
    adim: [
      'Tereyağında soğanı yumuşatın; küp patates ve havucu ekleyip 3 dakika çevirin.',
      'Sıcak suyu ekleyip sebzeler yumuşayana kadar 20 dakika pişirin.',
      'Blenderdan geçirin, sütü ekleyip tuz ve karabiberle bir taşım kaynatın; rendelenmiş kaşarla servis edin.',
    ],
  },
  {
    id: 'sehriye-corbasi', ad: 'Domatesli Şehriye Çorbası', kat: 'corba', emoji: '🍜', sure: 20, porsiyon: 4,
    wiki: 'Şehriye çorbası',
    malz: [
      ['sehriye', 80, '½ su bardağı arpa şehriye'], ['domates', 150, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['tereyagi', 14, '1 yemek kaşığı'], ['sivi_yag', 13, '1 yemek kaşığı'], ['et_suyu', 1200, '6 su bardağı'],
      ['limon', 40, '½ adet'], ['tuz', 6, '1 tatlı kaşığı'], ['maydanoz', 10, 'birkaç dal'],
    ],
    adim: [
      'Yağlarda salçayı ve rendelenmiş domatesi 3 dakika pişirin.',
      'Sıcak et suyunu ekleyip kaynatın; şehriyeyi ekleyin.',
      'Şehriye yumuşayana kadar 10 dakika pişirin; tuz, limon ve maydanozla servis edin.',
    ],
  },
  {
    id: 'ispanak-corbasi', ad: 'Ispanak Çorbası', kat: 'corba', emoji: '🥬', sure: 25, porsiyon: 4,
    wiki: 'Ispanak',
    malz: [
      ['ispanak', 500, '½ kg'], ['pirinc', 35, '2 yemek kaşığı'], ['sogan', 60, '½ adet'], ['yogurt', 200, '1 su bardağı'],
      ['un', 10, '1 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'], ['su', 1000, '5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Tereyağında soğanı kavurun; doğranmış ıspanağı ekleyip sönene kadar çevirin.',
      'Pirinç ve sıcak suyu ekleyip pirinç pişene kadar 15 dakika pişirin.',
      'Yoğurt ve unu çırpıp sıcak suyla ılıştırarak tencereye ekleyin; bir taşım kaynatıp tuzlayın.',
    ],
  },
  {
    id: 'pirasa-corbasi', ad: 'Pırasa Çorbası', kat: 'corba', emoji: '🥬', sure: 30, porsiyon: 4,
    wiki: 'Pırasa',
    malz: [
      ['pirasa', 400, '2 kalın'], ['patates', 170, '1 adet'], ['havuc', 70, '1 adet'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sut', 200, '1 su bardağı'], ['su', 900, '4,5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Pırasa, patates ve havucu doğrayın.',
      'Zeytinyağında pırasayı 5 dakika kavurun, diğer sebzeleri ekleyin.',
      'Sıcak suyu ekleyip 20 dakika pişirin; blenderdan geçirip sütü ekleyin, tuzlayın.',
    ],
  },

  // ───────────── EK ET YEMEKLERİ ─────────────
  {
    id: 'et-sote', ad: 'Et Sote', kat: 'et', emoji: '🥩', sure: 60, porsiyon: 4,
    wiki: 'Sote',
    malz: [
      ['dana_kusbasi', 600, '600 g'], ['sogan', 110, '1 adet'], ['sivri_biber', 80, '4 adet'], ['kapya_biber', 150, '1 adet'],
      ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['su', 300, '1,5 su bardağı'], ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Eti yüksek ateşte suyunu salıp çekene kadar kavurun.',
      'Soğan ve biberleri ekleyip 5 dakika çevirin; salça ve domatesi ekleyin.',
      'Sıcak suyu ekleyip et yumuşayana kadar kısık ateşte 40 dakika pişirin; kekik ve tuzla tatlandırın.',
    ],
  },
  {
    id: 'tepsi-kebabi', ad: 'Tepsi Kebabı', kat: 'et', emoji: '🍕', sure: 50, porsiyon: 4,
    wiki: 'Tepsi kebabı',
    malz: [
      ['dana_kiyma', 500, '500 g'], ['sogan', 110, '1 adet'], ['sivri_biber', 80, '4 adet (kıymaya + üstüne)'],
      ['maydanoz', 30, '1 demet'], ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['biber_salcasi', 17, '1 yemek kaşığı'], ['su', 200, '1 su bardağı'], ['pul_biber', 2, '1 tatlı kaşığı'],
      ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Soğan, biber ve maydanozu çok ince kıyıp kıymaya ekleyin; biber salçası ve baharatlarla yoğurun.',
      'Harcı tepsiye 1 cm kalınlıkta yayıp dilimler halinde çizin.',
      'Üzerine domates ve biber dizin.',
      'Salçayı sıcak suda açıp tepsiye dökün; 200 °C fırında 30 dakika pişirin.',
    ],
  },
  {
    id: 'etli-taze-fasulye', ad: 'Etli Taze Fasulye', kat: 'et', emoji: '🫛', sure: 70, porsiyon: 4,
    wiki: 'Taze fasulye',
    malz: [
      ['taze_fasulye', 750, '750 g'], ['dana_kusbasi', 250, '250 g'], ['sogan', 110, '1 adet'], ['domates', 300, '2 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'], ['su', 400, '2 su bardağı'],
      ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Eti kendi suyunu salıp çekene kadar kavurun; tereyağı ve soğanı ekleyin.',
      'Salça ve rendelenmiş domatesi ekleyip 3 dakika pişirin.',
      'Ayıklanıp doğranmış fasulyeyi ve sıcak suyu ekleyin.',
      'Kapak kapalı, kısık ateşte fasulye ve et yumuşayana kadar 45 dakika pişirin.',
    ],
  },
  {
    id: 'kuzu-guvec', ad: 'Kuzu Güveç', kat: 'et', emoji: '🥘', sure: 120, porsiyon: 4,
    wiki: 'Güveç',
    malz: [
      ['kuzu_kusbasi', 500, '500 g'], ['patlican', 250, '1 adet'], ['patates', 170, '1 adet'], ['sivri_biber', 80, '4 adet'],
      ['domates', 300, '2 adet'], ['sogan', 110, '1 adet'], ['sarimsak', 12, '3 diş'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['tereyagi', 14, '1 yemek kaşığı'], ['su', 300, '1,5 su bardağı'], ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Eti tencerede 10 dakika kavurup güveç kabına alın.',
      'Sebzeleri iri doğrayıp etle birlikte güvece yerleştirin.',
      'Salçayı tereyağı ve sıcak suyla açıp baharatlarla güvece dökün.',
      'Kapağı kapalı, 180 °C fırında et yumuşayana kadar 90 dakika pişirin.',
    ],
  },
  {
    id: 'hasanpasa-kofte', ad: 'Hasanpaşa Köfte', kat: 'et', emoji: '🧆', sure: 60, porsiyon: 4,
    wiki: 'Hasanpaşa köfte',
    malz: [
      ['dana_kiyma', 500, '500 g'], ['bayat_ekmek', 40, '1,5 dilim içi'], ['sogan', 110, '1 adet'], ['yumurta', 50, '1 adet'],
      ['patates', 500, '3 orta boy (püre için)'], ['sut', 100, '½ su bardağı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['kasar', 80, '¾ su bardağı rendelenmiş'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['su', 300, '1,5 su bardağı'],
      ['kimyon', 1, '½ çay kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Patatesleri haşlayıp süt ve tereyağıyla püre yapın, tuzlayın.',
      'Kıymayı rendelenmiş soğan, ekmek içi, yumurta ve baharatlarla yoğurun; yuvarlak köfteler yapıp ortalarını bastırarak çukurlaştırın.',
      'Köfteleri tepsiye dizip çukurlara püreyi doldurun, üzerine kaşar serpin.',
      'Salçayı sıcak suda açıp tepsiye dökün; 200 °C fırında 30 dakika pişirin.',
    ],
  },

  // ───────────── EK TAVUK YEMEKLERİ ─────────────
  {
    id: 'tavuklu-patlican-kebabi', ad: 'Tavuklu Patlıcan Kebabı', kat: 'tavuk', emoji: '🍆', sure: 60, porsiyon: 4,
    wiki: 'Patlıcan kebabı',
    malz: [
      ['tavuk_gogus', 500, '500 g'], ['patlican', 500, '2 adet'], ['domates', 300, '2 adet'], ['sivri_biber', 80, '4 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['su', 200, '1 su bardağı'],
      ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Patlıcanları kalın halka doğrayıp zeytinyağıyla fırçalayın.',
      'Tavuğu küp doğrayıp salçanın yarısı, kekik, tuz ve karabiberle harmanlayın.',
      'Tepsiye sırayla patlıcan, tavuk ve domates dizin; aralara biber koyun.',
      'Kalan salçayı sıcak suda açıp dökün; 200 °C fırında 40 dakika pişirin.',
    ],
  },
  {
    id: 'kasarli-tavuk-sarma', ad: 'Kaşarlı Tavuk Sarma', kat: 'tavuk', emoji: '🧀', sure: 40, porsiyon: 4,
    wiki: 'Tavuk eti',
    malz: [
      ['tavuk_gogus', 600, '4 dilim (inceltilmiş)'], ['kasar', 120, '4 dilim'], ['kapya_biber', 75, '½ adet'],
      ['zeytinyagi', 26, '2 yemek kaşığı'], ['kekik', 1, '1 tatlı kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuk dilimlerini streç film arasında dövüp inceltin, baharatlayın.',
      'Her birine kaşar ve ince şerit biber koyup sıkıca sarın; kürdanla tutturun.',
      'Zeytinyağıyla fırçalayıp 200 °C fırında 25 dakika pişirin.',
      'Dilimleyip sebze sote ya da salatayla servis edin.',
    ],
  },
  {
    id: 'limonlu-firin-tavuk', ad: 'Limonlu Fırın Tavuk Göğsü', kat: 'tavuk', emoji: '🍋', sure: 35, porsiyon: 4,
    wiki: 'Tavuk eti',
    malz: [
      ['tavuk_gogus', 700, '700 g'], ['limon', 80, '1 adet (suyu ve kabuğu)'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['sarimsak', 12, '3 diş'], ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Limon suyu, rendelenmiş kabuğu, zeytinyağı, sarımsak ve baharatlarla sos hazırlayın.',
      'Tavuğu sosla 20 dakika marine edin.',
      '200 °C fırında içi pişip suyu berraklaşana kadar 20–25 dakika pişirin; 5 dakika dinlendirip dilimleyin.',
    ],
  },
  {
    id: 'tavuk-cokertme', ad: 'Tavuk Çökertme', kat: 'tavuk', emoji: '🍟', sure: 45, porsiyon: 4,
    wiki: 'Çökertme kebabı',
    malz: [
      ['tavuk_gogus', 500, '500 g'], ['patates', 500, '3 orta boy (kibrit)'], ['sivi_yag', 400, 'kızartmak için', 40],
      ['suzme_yogurt', 300, '1,5 su bardağı'], ['sarimsak', 8, '2 diş'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['tereyagi', 14, '1 yemek kaşığı'], ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Patatesleri kibrit doğrayıp çıtır olana kadar kızartın.',
      'Tavuğu ince şerit doğrayıp tereyağında soteleyin; salça ve kekik ekleyip 3 dakika daha pişirin.',
      'Yoğurdu sarımsak ve tuzla karıştırın.',
      'Tabağa patatesi yayıp üzerine yoğurt ve tavuğu koyun; sıcak servis edin.',
    ],
  },
];

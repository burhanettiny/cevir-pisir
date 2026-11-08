// Türk ev mutfağı (2): sebze, hamur işleri, meze, garnitür, tatlı
export const GENEL_2 = [
  // ── Sebze
  {
    id: 'menemen', ad: 'Menemen', kat: 'sebze', emoji: '🍳', sure: 20, porsiyon: 3, wiki: 'Menemen (yemek)',
    malz: [['domates', 450, '3 adet'], ['sivri_biber', 160, '8 adet'], ['yumurta', 200, '4 adet'], ['tereyagi', 28, '2 yemek kaşığı'], ['tuz', 4, '½ tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı']],
    adim: ['Tereyağında doğranmış biberleri yumuşatın.', 'Rendelenmiş domatesi ekleyip suyunu biraz çekene kadar pişirin.', 'Yumurtaları kırıp hafifçe karıştırarak, akışkan kalacak şekilde pişirin; tuz ve pul biberle servis edin.'],
  },
  {
    id: 'zeytinyagli-bamya', ad: 'Zeytinyağlı Bamya', kat: 'sebze', emoji: '🥘', sure: 40, porsiyon: 4, wiki: 'Bamya',
    malz: [['bamya', 500, '500 g'], ['sogan', 110, '1 adet'], ['domates', 300, '2 adet'], ['zeytinyagi', 50, '4 yemek kaşığı'], ['limon', 40, '½ adet'],
      ['su', 200, '1 su bardağı'], ['seker', 4, '1 çay kaşığı'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Bamyaların başlarını ayıklayıp limonlu suda bekletin.', 'Zeytinyağında soğanı kavurup domatesi ekleyin.', 'Bamya, şeker, tuz ve suyu ekleyip karıştırmadan 25 dakika pişirin; limonu ekleyin.'],
  },
  {
    id: 'patates-yemegi', ad: 'Patates Yemeği', kat: 'sebze', emoji: '🥔', sure: 35, porsiyon: 4, wiki: 'Patates',
    malz: [['patates', 800, '5 adet'], ['sogan', 110, '1 adet'], ['kapya_biber', 75, '½ adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['sivi_yag', 40, '3 yemek kaşığı'],
      ['su', 400, '2 su bardağı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Yağda soğan ve biberi kavurup salçayı ekleyin.', 'Küp patatesi ekleyip 3 dakika çevirin.', 'Suyu ekleyip patatesler yumuşayana kadar 20 dakika pişirin.'],
  },
  {
    id: 'ispanakli-yumurta', ad: 'Ispanaklı Yumurta', kat: 'sebze', emoji: '🍳', sure: 20, porsiyon: 3, wiki: 'Ispanak',
    malz: [['ispanak', 500, '½ kg'], ['sogan', 60, '½ adet'], ['yumurta', 200, '4 adet'], ['tereyagi', 28, '2 yemek kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 4, '½ tatlı kaşığı'], ['yogurt', 150, 'servis için']],
    adim: ['Tereyağında soğanı kavurup doğranmış ıspanağı ekleyin; suyunu çekene kadar pişirin.', 'Ispanakta çukurlar açıp yumurtaları kırın.', 'Kapak kapalı, yumurtalar istediğiniz kıvama gelene kadar pişirin; yoğurtla servis edin.'],
  },
  {
    id: 'kabak-musakka', ad: 'Kabak Musakka', kat: 'sebze', emoji: '🥒', sure: 45, porsiyon: 4, wiki: 'Musakka',
    malz: [['kabak', 800, '4 adet'], ['domates', 300, '2 adet'], ['sivri_biber', 80, '4 adet'], ['sogan', 110, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['zeytinyagi', 40, '3 yemek kaşığı'], ['su', 150, '¾ su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['yogurt', 200, 'servis için']],
    adim: ['Zeytinyağında soğan ve biberi kavurup salça ve domatesi ekleyin.', 'Halka doğranmış kabakları ekleyip suyu ilave edin.', 'Kapak kapalı 20 dakika pişirin; yoğurtla servis edin.'],
  },
  {
    id: 'sebzeli-guvec', ad: 'Sebzeli Güveç', kat: 'sebze', emoji: '🥘', sure: 70, porsiyon: 4, wiki: 'Güveç',
    malz: [['patlican', 250, '1 adet'], ['kabak', 200, '1 adet'], ['patates', 170, '1 adet'], ['taze_fasulye', 150, '150 g'], ['bamya', 100, '100 g'], ['domates', 300, '2 adet'],
      ['sivri_biber', 80, '4 adet'], ['sogan', 110, '1 adet'], ['zeytinyagi', 50, '4 yemek kaşığı'], ['su', 200, '1 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Bütün sebzeleri iri doğrayıp güvece alın.', 'Zeytinyağı, su ve tuzla harmanlayın.', 'Kapağı kapalı 200 °C fırında 50 dakika pişirin.'],
  },
  {
    id: 'zeytinyagli-kabak-dolmasi', ad: 'Zeytinyağlı Kabak Dolması', kat: 'sebze', emoji: '🥒', sure: 60, porsiyon: 4, wiki: 'Kabak dolması',
    malz: [['kabak', 800, '6 adet'], ['pirinc', 180, '1 su bardağı'], ['sogan', 220, '2 adet'], ['domates', 150, '1 adet'], ['zeytinyagi', 65, '5 yemek kaşığı'],
      ['dereotu', 15, '½ demet'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['limon', 40, '½ adet'], ['su', 400, '2 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Kabakları oyun.', 'Zeytinyağında soğanı kavurup pirinç, domates ve baharatları ekleyin; ocaktan alın.', 'Kabaklara doldurup tencereye dizin; su ve limonla 35 dakika pişirin. Soğuk servis edin.'],
  },
  {
    id: 'mantar-yemegi', ad: 'Mantar Yemeği', kat: 'sebze', emoji: '🍄', sure: 25, porsiyon: 4, wiki: 'Kültür mantarı',
    malz: [['mantar', 600, '600 g'], ['sogan', 110, '1 adet'], ['kapya_biber', 75, '½ adet'], ['domates', 150, '1 adet'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 4, '½ tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Tereyağında soğan ve biberi kavurun.', 'Doğranmış mantarı ekleyip suyunu salıp çekene kadar pişirin.', 'Domatesi ve baharatları ekleyip 5 dakika daha pişirin.'],
  },
  {
    id: 'firinda-karnabahar', ad: 'Fırında Karnabahar', kat: 'sebze', emoji: '🥦', sure: 40, porsiyon: 4, wiki: 'Karnabahar',
    malz: [['karnabahar', 800, '1 adet'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['kimyon', 1, '½ çay kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'], ['sarimsak', 8, '2 diş'],
      ['tuz', 6, '1 tatlı kaşığı'], ['suzme_yogurt', 200, 'servis için']],
    adim: ['Karnabaharı çiçeklerine ayırın.', 'Zeytinyağı, sarımsak ve baharatlarla harmanlayıp tepsiye yayın.', '220 °C fırında kenarları kızarana kadar 30 dakika pişirin; yoğurtla servis edin.'],
  },
  {
    id: 'kabak-kalye', ad: 'Kabak Kalye', kat: 'sebze', emoji: '🥒', sure: 35, porsiyon: 4, wiki: 'Kabak',
    malz: [['kabak', 800, '4 adet'], ['sogan', 110, '1 adet'], ['domates', 300, '2 adet'], ['sarimsak', 8, '2 diş'], ['zeytinyagi', 50, '4 yemek kaşığı'],
      ['dereotu', 15, '½ demet'], ['tuz', 6, '1 tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı']],
    adim: ['Kabakları iri dilimleyin.', 'Zeytinyağında soğan ve sarımsağı kavurup domatesi ekleyin.', 'Kabakları ekleyip kapak kapalı 20 dakika pişirin; dereotuyla servis edin.'],
  },
  {
    id: 'ispanakli-mercimek', ad: 'Ispanaklı Mercimek', kat: 'sebze', emoji: '🥬', sure: 40, porsiyon: 4, wiki: 'Mercimek',
    malz: [['yesil_mercimek', 150, '¾ su bardağı'], ['ispanak', 500, '½ kg'], ['sogan', 110, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 40, '3 yemek kaşığı'],
      ['su', 600, '3 su bardağı'], ['limon', 40, '½ adet'], ['tuz', 6, '1 tatlı kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı']],
    adim: ['Mercimeği 20 dakika haşlayıp süzün.', 'Zeytinyağında soğan ve salçayı kavurun; ıspanağı ekleyin.', 'Mercimek ve biraz suyla 10 dakika pişirin; limonla servis edin.'],
  },

  // ── Hamur işleri
  {
    id: 'kiymali-pide', ad: 'Kıymalı Pide', kat: 'hamur', emoji: '🥖', sure: 90, porsiyon: 6, wiki: 'Pide',
    malz: [['un', 500, '4 su bardağı'], ['maya', 7, '1 paket'], ['su', 300, '1,5 su bardağı ılık'], ['dana_kiyma', 350, '350 g'], ['sogan', 110, '1 adet'], ['domates', 150, '1 adet'],
      ['sivri_biber', 80, '4 adet'], ['maydanoz', 15, '½ demet'], ['tereyagi', 40, '3 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Mayalı hamuru yoğurup 1 saat dinlendirin.', 'Kıymayı çok ince doğranmış sebzeler ve maydanozla yoğurun.', 'Hamuru 4 parçaya bölüp uzun açın, harcı yayıp kenarlarını kıvırın.', '240 °C fırında 12 dakika pişirin; tereyağı sürün.'],
  },
  {
    id: 'kasarli-pide', ad: 'Kaşarlı Yumurtalı Pide', kat: 'hamur', emoji: '🥖', sure: 80, porsiyon: 6, wiki: 'Pide',
    malz: [['un', 500, '4 su bardağı'], ['maya', 7, '1 paket'], ['su', 300, '1,5 su bardağı ılık'], ['kasar', 300, '300 g rendelenmiş'], ['yumurta', 200, '4 adet'],
      ['tereyagi', 40, '3 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Mayalı hamuru yoğurup 1 saat dinlendirin.', 'Hamuru 4 parçaya bölüp uzun açın, kaşarı yayıp kenarlarını kıvırın.', '240 °C fırında 8 dakika pişirin; ortasına yumurta kırıp 3–4 dakika daha pişirin.', 'Tereyağı sürüp servis edin.'],
  },
  {
    id: 'kusbasili-pide', ad: 'Kuşbaşılı Pide', kat: 'hamur', emoji: '🥖', sure: 90, porsiyon: 6, wiki: 'Pide',
    malz: [['un', 500, '4 su bardağı'], ['maya', 7, '1 paket'], ['su', 300, '1,5 su bardağı ılık'], ['dana_kusbasi', 350, '350 g (küçük kuşbaşı)'], ['domates', 150, '1 adet'],
      ['sivri_biber', 80, '4 adet'], ['kasar', 100, '¾ su bardağı rendelenmiş'], ['tereyagi', 40, '3 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Mayalı hamuru yoğurup 1 saat dinlendirin.', 'Eti tavada 5 dakika soteleyip domates, biber ve baharatla karıştırın.', 'Hamuru açıp harcı ve kaşarı yayın, kenarlarını kıvırın.', '240 °C fırında 12–14 dakika pişirip tereyağı sürün.'],
  },
  {
    id: 'kiymali-tepsi-boregi', ad: 'Kıymalı Tepsi Böreği', kat: 'hamur', emoji: '🥧', sure: 70, porsiyon: 8, wiki: 'Börek',
    malz: [['yufka', 500, '3 adet'], ['dana_kiyma', 300, '300 g'], ['sogan', 110, '1 adet'], ['sut', 200, '1 su bardağı'], ['yumurta', 100, '2 adet'], ['sivi_yag', 60, '⅓ su bardağı'],
      ['maydanoz', 15, '½ demet'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Kıymayı soğanla kavurup baharat ve maydanozu ekleyin.', 'Süt, yumurta ve yağı çırpın.', 'Yufkaları tepsiye sosla ıslatarak katlayın; aralara kıymalı iç yayın.', 'Kalan sosu üzerine dökün; 190 °C fırında 40 dakika pişirin.'],
  },
  {
    id: 'ispanakli-borek', ad: 'Ispanaklı Börek', kat: 'hamur', emoji: '🥧', sure: 70, porsiyon: 8, wiki: 'Börek',
    malz: [['yufka', 500, '3 adet'], ['ispanak', 500, '½ kg'], ['beyaz_peynir', 200, '200 g'], ['sogan', 110, '1 adet'], ['sut', 200, '1 su bardağı'], ['yumurta', 100, '2 adet'],
      ['sivi_yag', 60, '⅓ su bardağı'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Ispanağı soğanla soteleyip suyunu çektirin; peyniri ekleyin.', 'Süt, yumurta ve yağı çırpın.', 'Yufkaları sosla ıslatarak tepsiye katlayın, aralara iç yayın.', '190 °C fırında 40 dakika pişirin.'],
  },
  {
    id: 'patatesli-kol-boregi', ad: 'Patatesli Kol Böreği', kat: 'hamur', emoji: '🥧', sure: 70, porsiyon: 8, wiki: 'Kol böreği',
    malz: [['yufka', 500, '3 adet'], ['patates', 500, '3 adet (haşlanmış)'], ['sogan', 110, '1 adet'], ['sut', 200, '1 su bardağı'], ['yumurta', 100, '2 adet'],
      ['sivi_yag', 60, '⅓ su bardağı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['corek_otu', 2, 'üzeri için']],
    adim: ['Haşlanmış patatesi ezip kavrulmuş soğan ve baharatlarla karıştırın.', 'Yufkaları sos sürerek ikiye katlayın, kenarına iç koyup rulo yapın.', 'Ruloları tepsiye spiral şeklinde dizin; kalan sosu ve çörek otunu sürün.', '190 °C fırında 40 dakika pişirin.'],
  },
  {
    id: 'bazlama', ad: 'Bazlama', kat: 'hamur', emoji: '🫓', sure: 70, porsiyon: 8, wiki: 'Bazlama',
    malz: [['un', 500, '4 su bardağı'], ['yogurt', 200, '1 su bardağı'], ['su', 150, '¾ su bardağı ılık'], ['maya', 7, '1 paket'], ['seker', 5, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Bütün malzemelerle yumuşak hamur yoğurup 45 dakika mayalandırın.', '8 bezeye bölüp 1 cm kalınlıkta açın.', 'Yağsız, kızgın tavada iki yüzü kabarıp benekleninceye kadar pişirin.'],
  },
  {
    id: 'pogaca', ad: 'Peynirli Poğaça', kat: 'hamur', emoji: '🥐', sure: 70, porsiyon: 12, wiki: 'Poğaça',
    malz: [['un', 500, '4 su bardağı'], ['yogurt', 100, '½ su bardağı'], ['sut', 150, '¾ su bardağı'], ['sivi_yag', 120, '⅔ su bardağı'], ['yumurta', 100, '2 adet'],
      ['maya', 7, '1 paket'], ['beyaz_peynir', 200, '200 g'], ['maydanoz', 15, '½ demet'], ['tuz', 6, '1 tatlı kaşığı'], ['corek_otu', 2, 'üzeri için']],
    adim: ['Un, yoğurt, süt, yağ, 1 yumurta, maya ve tuzla ele yapışmayan hamur yoğurup 30 dakika dinlendirin.', 'Peyniri maydanozla ezin.',
      'Hamurdan parçalar alıp içine peynir koyarak kapatın.', 'Yumurta sarısı ve çörek otu sürüp 180 °C fırında 25 dakika pişirin.'],
  },
  {
    id: 'sigara-boregi', ad: 'Sigara Böreği', kat: 'hamur', emoji: '🥟', sure: 30, porsiyon: 6, wiki: 'Sigara böreği',
    malz: [['yufka', 350, '2 adet'], ['beyaz_peynir', 250, '250 g'], ['maydanoz', 30, '1 demet'], ['yumurta', 50, '1 adet'], ['sivi_yag', 400, 'kızartmak için', 60]],
    adim: ['Peyniri maydanozla ezin.', 'Yufkaları üçgen dilimlere kesin; geniş ucuna iç koyup sigara gibi sarın, ucunu yumurtayla yapıştırın.', 'Kızgın yağda kızartın.'],
  },
  {
    id: 'tatar-boregi', ad: 'Tatar Böreği', kat: 'hamur', emoji: '🥟', sure: 60, porsiyon: 4, wiki: 'Tatar böreği',
    malz: [['un', 400, '3,5 su bardağı'], ['yumurta', 50, '1 adet'], ['su', 150, '¾ su bardağı'], ['dana_kiyma', 250, '250 g'], ['sogan', 60, '½ adet'],
      ['yogurt', 400, '2 su bardağı'], ['sarimsak', 8, '2 diş'], ['tereyagi', 40, '3 yemek kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Hamuru yoğurup ince açın; büyük kareler kesin.', 'Kıymayı soğanla kavurun.', 'Hamur karelerini haşlayıp tabağa kat kat dizin, aralarına kıyma serpin.', 'Sarımsaklı yoğurt ve kızdırılmış biberli tereyağıyla servis edin.'],
  },
  {
    id: 'tepsi-mantisi', ad: 'Tepsi Mantısı', kat: 'hamur', emoji: '🥟', sure: 80, porsiyon: 6, wiki: 'Mantı',
    malz: [['un', 400, '3,5 su bardağı'], ['yumurta', 50, '1 adet'], ['su', 150, '¾ su bardağı'], ['dana_kiyma', 300, '300 g'], ['sogan', 110, '1 adet'],
      ['et_suyu', 500, '2,5 su bardağı'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['yogurt', 400, '2 su bardağı'], ['tereyagi', 40, '3 yemek kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Hamuru açıp 3 cm kareler kesin, ortalarına kıyma koyup kayık şeklinde açık bırakarak kapatın.', 'Tepsiye dizip 200 °C fırında kızarana kadar 20 dakika pişirin.',
      'Salçalı et suyunu üzerine döküp 10 dakika daha pişirin.', 'Sarımsaklı yoğurt ve tereyağıyla servis edin.'],
  },
  {
    id: 'pirasali-borek', ad: 'Pırasalı Börek', kat: 'hamur', emoji: '🥧', sure: 70, porsiyon: 8, wiki: 'Börek',
    malz: [['yufka', 500, '3 adet'], ['pirasa', 500, '2 kalın'], ['beyaz_peynir', 150, '150 g'], ['sut', 200, '1 su bardağı'], ['yumurta', 100, '2 adet'],
      ['sivi_yag', 60, '⅓ su bardağı'], ['tuz', 4, '½ tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Pırasayı ince doğrayıp yumuşayana kadar soteleyin; peyniri ekleyin.', 'Süt, yumurta ve yağı çırpın.', 'Yufkaları sosla ıslatarak tepsiye katlayın, aralara iç koyun.', '190 °C fırında 40 dakika pişirin.'],
  },
  {
    id: 'puf-boregi', ad: 'Peynirli Puf Böreği', kat: 'hamur', emoji: '🥟', sure: 40, porsiyon: 6, wiki: 'Börek',
    malz: [['un', 300, '2,5 su bardağı'], ['yogurt', 100, '½ su bardağı'], ['sivi_yag', 60, '⅓ su bardağı (hamur)'], ['su', 80, 'gerektiği kadar'], ['kabartma_tozu', 5, '½ paket'],
      ['beyaz_peynir', 200, '200 g'], ['maydanoz', 15, '½ demet'], ['sivi_yag', 400, 'kızartmak için', 60], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Un, yoğurt, yağ, kabartma tozu, tuz ve suyla yumuşak hamur yoğurun.', 'Açıp daireler kesin; ortalarına peynir koyup yarım ay kapatın.', 'Kızgın yağda kabarıp kızarana kadar kızartın.'],
  },
  {
    id: 'acma', ad: 'Açma', kat: 'hamur', emoji: '🥯', sure: 100, porsiyon: 10, wiki: 'Açma',
    malz: [['un', 500, '4 su bardağı'], ['sut', 250, '1,25 su bardağı'], ['sivi_yag', 80, '½ su bardağı'], ['yumurta', 50, '1 adet'], ['maya', 7, '1 paket'], ['seker', 30, '2 yemek kaşığı'],
      ['tereyagi', 60, 'aralara sürmek için'], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Bütün malzemelerle yumuşak hamur yoğurup 1 saat mayalandırın.', 'Bezeler yapıp her birini ince açın, tereyağı sürüp rulo yapın; halka şeklinde birleştirin.', 'Yumurta sürüp 30 dakika daha bekletin; 180 °C fırında 20–25 dakika pişirin.'],
  },

  // ── Meze
  {
    id: 'kabak-borani', ad: 'Kabak Boranisi', kat: 'meze', emoji: '🥒', sure: 25, porsiyon: 6, wiki: 'Borani',
    malz: [['kabak', 600, '3 adet'], ['suzme_yogurt', 300, '1,5 su bardağı'], ['sarimsak', 8, '2 diş'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['dereotu', 10, 'birkaç dal'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Kabakları rendeleyip zeytinyağında suyunu çekene kadar soteleyin.', 'Soğuyunca sarımsaklı süzme yoğurtla karıştırın.', 'Dereotuyla süsleyip soğuk servis edin.'],
  },
  {
    id: 'patlican-kizartmasi', ad: 'Yoğurtlu Patlıcan Kızartması', kat: 'meze', emoji: '🍆', sure: 35, porsiyon: 6, wiki: 'Patlıcan',
    malz: [['patlican', 750, '3 adet'], ['sivri_biber', 120, '6 adet'], ['sivi_yag', 400, 'kızartmak için', 70], ['yogurt', 300, '1,5 su bardağı'], ['sarimsak', 8, '2 diş'],
      ['domates', 300, 'sos için 2 adet'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Patlıcanları alacalı soyup dilimleyin, tuzlu suda bekletip kurulayın.', 'Patlıcan ve biberleri kızartın.', 'Domatesi rendeleyip koyulaşana kadar pişirin.', 'Sarımsaklı yoğurt ve domates sosuyla servis edin.'],
  },
  {
    id: 'ton-balikli-salata', ad: 'Ton Balıklı Salata', kat: 'meze', emoji: '🐟', sure: 15, porsiyon: 6, wiki: 'Ton balığı',
    malz: [['ton_baligi', 320, '2 kutu (süzülmüş)'], ['misir', 150, '½ kutu'], ['marul', 200, '1 küçük'], ['domates', 150, '1 adet'], ['sogan', 60, '½ adet (mor)'],
      ['zeytin', 50, 'birkaç tane'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['limon', 40, '½ adet'], ['tuz', 2, '1 tutam']],
    adim: ['Marul, domates ve soğanı doğrayın.', 'Ton balığı, mısır ve zeytini ekleyin.', 'Zeytinyağı ve limonla soslayıp servis edin.'],
  },
  {
    id: 'zeytin-piyazi', ad: 'Zeytin Piyazı', kat: 'meze', emoji: '🫒', sure: 15, porsiyon: 6, wiki: 'Zeytin',
    malz: [['zeytin', 200, '1,5 su bardağı (çekirdeksiz yeşil)'], ['ceviz', 40, '⅓ su bardağı'], ['domates', 150, '1 adet'], ['taze_sogan', 40, '3 dal'], ['maydanoz', 15, '½ demet'],
      ['nar_eksisi', 15, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı']],
    adim: ['Zeytinleri ikiye bölün, cevizi iri kırın.', 'Doğranmış domates, taze soğan ve maydanozla karıştırın.', 'Nar ekşisi, zeytinyağı ve pul biberle soslayın.'],
  },
  {
    id: 'tarator', ad: 'Cevizli Tarator', kat: 'meze', emoji: '🥜', sure: 10, porsiyon: 6, wiki: 'Tarator',
    malz: [['ceviz', 120, '1 su bardağı'], ['bayat_ekmek', 60, '2 dilim içi'], ['sarimsak', 12, '3 diş'], ['yogurt', 150, '¾ su bardağı'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['limon', 20, 'birkaç damla'], ['tuz', 2, '1 tutam']],
    adim: ['Ekmeği ıslatıp sıkın.', 'Ceviz, ekmek ve sarımsağı rondodan geçirin.', 'Yoğurt, zeytinyağı, limon ve tuzla krem kıvamına getirin; balık ve kızartmalarla servis edin.'],
  },
  {
    id: 'biber-kizartmasi', ad: 'Sarımsaklı Biber Kızartması', kat: 'meze', emoji: '🌶️', sure: 20, porsiyon: 6, wiki: 'Biber',
    malz: [['sivri_biber', 400, '20 adet çarliston'], ['sivi_yag', 300, 'kızartmak için', 40], ['sarimsak', 12, '3 diş'], ['sirke', 15, '1 yemek kaşığı'], ['domates', 150, '1 adet (sos)'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Biberleri delip kızgın yağda kabukları kabarana kadar kızartın.', 'Domatesi rendeleyip sarımsakla kısa süre pişirin.', 'Biberleri sirkeli domates sosu ve tuzla servis edin.'],
  },

  // ── Garnitür
  {
    id: 'domatesli-pilav', ad: 'Domatesli Pilav', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4, wiki: 'Pilav',
    malz: [['pirinc', 360, '2 su bardağı'], ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'], ['sivi_yag', 13, '1 yemek kaşığı'],
      ['su', 500, '2,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Yağlarda rendelenmiş domates ve salçayı 5 dakika pişirin.', 'Yıkanmış pirinci ekleyip 2 dakika çevirin.', 'Sıcak su ve tuzla suyunu çekene kadar pişirip demlendirin.'],
  },
  {
    id: 'mantarli-pilav', ad: 'Mantarlı Pilav', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4, wiki: 'Pilav',
    malz: [['pirinc', 360, '2 su bardağı'], ['mantar', 250, '250 g'], ['sogan', 60, '½ adet'], ['tereyagi', 40, '3 yemek kaşığı'], ['et_suyu', 600, '3 su bardağı'],
      ['kekik', 1, '1 tutam'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Tereyağında soğan ve mantarı suyunu çekene kadar soteleyin.', 'Pirinci ekleyip 3 dakika çevirin.', 'Sıcak et suyu ve baharatla pişirip demlendirin.'],
  },
  {
    id: 'sebzeli-bulgur', ad: 'Sebzeli Bulgur Pilavı', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4, wiki: 'Bulgur pilavı',
    malz: [['bulgur', 300, '1,75 su bardağı'], ['havuc', 70, '1 adet'], ['bezelye', 80, '½ su bardağı'], ['kapya_biber', 75, '½ adet'], ['sogan', 60, '½ adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['su', 650, '3,25 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Zeytinyağında soğan ve küp sebzeleri kavurun.', 'Salça ve bulguru ekleyip 2 dakika çevirin.', 'Sıcak su ve tuzla suyunu çekene kadar pişirip demlendirin.'],
  },
  {
    id: 'havuc-salatasi', ad: 'Havuç Salatası', kat: 'garnitur', emoji: '🥕', sure: 10, porsiyon: 4, wiki: 'Havuç',
    malz: [['havuc', 400, '5 adet'], ['limon', 40, '½ adet'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['ceviz', 30, '¼ su bardağı'], ['tuz', 2, '1 tutam']],
    adim: ['Havuçları ince rendeleyin.', 'Limon, zeytinyağı ve tuzla karıştırın.', 'Kırılmış cevizle servis edin.'],
  },
  {
    id: 'kirmizi-lahana-salatasi', ad: 'Kırmızı Lahana Salatası', kat: 'garnitur', emoji: '🥗', sure: 15, porsiyon: 4, wiki: 'Kırmızı lahana',
    malz: [['kirmizi_lahana', 400, '¼ orta boy'], ['havuc', 70, '1 adet'], ['limon', 40, '½ adet'], ['sirke', 15, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Lahanayı çok ince doğrayıp tuzla ovun, 10 dakika bekletin.', 'Rendelenmiş havucu ekleyin.', 'Limon, sirke ve zeytinyağıyla soslayın.'],
  },
  {
    id: 'turp-salatasi', ad: 'Turp Salatası', kat: 'garnitur', emoji: '🥗', sure: 10, porsiyon: 4, wiki: 'Turp',
    malz: [['turp', 300, '1 adet'], ['marul', 150, 'birkaç yaprak'], ['taze_sogan', 40, '3 dal'], ['nar_eksisi', 15, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['tuz', 2, '1 tutam']],
    adim: ['Turpu rendeleyin ya da ince dilimleyin.', 'Doğranmış marul ve taze soğanla karıştırın.', 'Nar ekşisi ve zeytinyağıyla soslayın.'],
  },
  {
    id: 'patates-koftesi', ad: 'Patates Köftesi', kat: 'garnitur', emoji: '🥔', sure: 40, porsiyon: 4, wiki: 'Patates',
    malz: [['patates', 600, '4 adet (haşlanmış)'], ['yumurta', 100, '2 adet'], ['kasar', 80, '⅔ su bardağı'], ['un', 40, '4 yemek kaşığı'], ['dereotu', 15, '½ demet'],
      ['galeta_unu', 60, 'bulamak için', 30], ['sivi_yag', 300, 'kızartmak için', 40], ['tuz', 6, '1 tatlı kaşığı']],
    adim: ['Patatesleri ezip 1 yumurta, kaşar, un, dereotu ve tuzla yoğurun.', 'Köfte şekli verip kalan yumurtaya ve galeta ununa bulayın.', 'Kızgın yağda kızartın.'],
  },
  {
    id: 'sebzeli-pilav', ad: 'Sebzeli Pirinç Pilavı', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4, wiki: 'Pilav',
    malz: [['pirinc', 360, '2 su bardağı'], ['havuc', 70, '1 adet'], ['bezelye', 80, '½ su bardağı'], ['misir', 80, '½ su bardağı'], ['tereyagi', 40, '3 yemek kaşığı'],
      ['et_suyu', 600, '3 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Tereyağında küp havucu kavurun; pirinci ekleyip 3 dakika çevirin.', 'Bezelye, mısır, sıcak et suyu ve tuzu ekleyin.', 'Suyunu çekene kadar pişirip demlendirin.'],
  },
  {
    id: 'sehriyeli-bulgur', ad: 'Şehriyeli Bulgur Pilavı', kat: 'garnitur', emoji: '🍚', sure: 30, porsiyon: 4, wiki: 'Bulgur pilavı',
    malz: [['bulgur', 300, '1,75 su bardağı'], ['sehriye', 40, '3 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'], ['et_suyu', 600, '3 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Tereyağında şehriyeyi kızarana kadar kavurun.', 'Bulguru ekleyip 2 dakika çevirin.', 'Sıcak et suyu ve tuzla suyunu çekene kadar pişirip demlendirin.'],
  },
  {
    id: 'yogurtlu-makarna', ad: 'Yoğurtlu Makarna', kat: 'garnitur', emoji: '🍝', sure: 20, porsiyon: 4, wiki: 'Makarna',
    malz: [['makarna', 400, '1 paket'], ['yogurt', 400, '2 su bardağı'], ['sarimsak', 8, '2 diş'], ['tereyagi', 28, '2 yemek kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'],
      ['kuru_nane', 2, '1 tatlı kaşığı'], ['su', 2500, 'haşlama için'], ['tuz', 10, '2 tatlı kaşığı']],
    adim: ['Makarnayı tuzlu suda haşlayıp süzün.', 'Sarımsaklı yoğurdu makarnanın üzerine dökün.', 'Tereyağında pul biber ve naneyi kızdırıp gezdirin.'],
  },
  {
    id: 'makarna-salatasi', ad: 'Makarna Salatası', kat: 'garnitur', emoji: '🥗', sure: 25, porsiyon: 6, wiki: 'Makarna salatası',
    malz: [['makarna', 300, '300 g (burgu)'], ['misir', 150, '½ kutu'], ['kapya_biber', 75, '½ adet'], ['salatalik', 150, '1 adet'], ['yogurt', 200, '1 su bardağı'],
      ['mayonez', 30, '2 yemek kaşığı'], ['dereotu', 15, '½ demet'], ['su', 2000, 'haşlama için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Makarnayı haşlayıp soğuk sudan geçirin.', 'Doğranmış sebzeler ve mısırla karıştırın.', 'Yoğurt, mayonez, dereotu ve tuzla soslayıp soğuk servis edin.'],
  },

  // ── Tatlı
  {
    id: 'sutlu-nuriye', ad: 'Sütlü Nuriye', kat: 'tatli', emoji: '🥮', sure: 60, porsiyon: 12, wiki: 'Sütlü nuriye',
    malz: [['baklava_yufkasi', 400, '30 yaprak'], ['findik', 150, '1 su bardağı (çekilmiş)'], ['tereyagi', 150, '150 g'], ['seker', 400, 'şerbet için'], ['sut', 500, 'şerbet için 2,5 su bardağı'],
      ['su', 200, 'şerbet için 1 su bardağı']],
    adim: ['Şekeri suyla eritip sütü ekleyerek şerbeti hazırlayın; soğutun.', 'Yufkaları yağ sürerek kat kat dizin, ortasına fındık yayın.', 'Dilimleyip 180 °C fırında kızarana kadar 40 dakika pişirin.', 'Sıcak tatlıya soğuk sütlü şerbeti dökün.'],
  },
  {
    id: 'tulumba', ad: 'Tulumba Tatlısı', kat: 'tatli', emoji: '🍩', sure: 60, porsiyon: 8, wiki: 'Tulumba',
    malz: [['un', 200, '1,5 su bardağı'], ['irmik', 20, '2 yemek kaşığı'], ['su', 300, '1,5 su bardağı'], ['tereyagi', 40, '3 yemek kaşığı'], ['yumurta', 100, '2 adet'],
      ['seker', 400, 'şerbet için'], ['su', 400, 'şerbet için'], ['limon', 20, 'şerbet için'], ['sivi_yag', 500, 'kızartmak için', 60]],
    adim: ['Şerbeti kaynatıp soğutun.', 'Su ve tereyağını kaynatıp un ve irmiği ekleyin; hamur toplanana kadar karıştırın.', 'Ilıyınca yumurtaları ekleyin; yıldız uçlu torbayla ılık yağa sıkın.', 'Kızarınca soğuk şerbete alın.'],
  },
  {
    id: 'sutlu-irmik', ad: 'Sütlü İrmik Tatlısı', kat: 'tatli', emoji: '🍮', sure: 25, porsiyon: 6, wiki: 'İrmik',
    malz: [['sut', 1000, '1 litre'], ['irmik', 120, '¾ su bardağı'], ['seker', 150, '¾ su bardağı'], ['tereyagi', 14, '1 yemek kaşığı'], ['vanilin', 1, '1 paket'], ['hindistan_cevizi', 15, 'servis için']],
    adim: ['Süt ve şekeri ısıtın; irmiği yağmurlama ekleyip sürekli karıştırarak koyulaştırın.', 'Tereyağı ve vanilini ekleyin.', 'Kalıba döküp soğutun; hindistan ceviziyle servis edin.'],
  },
  {
    id: 'kalburabasti', ad: 'Kalburabastı', kat: 'tatli', emoji: '🍯', sure: 60, porsiyon: 12, wiki: 'Kalburabastı',
    malz: [['un', 400, '3 su bardağı'], ['irmik', 60, '⅓ su bardağı'], ['sivi_yag', 150, '¾ su bardağı'], ['yogurt', 100, '½ su bardağı'], ['kabartma_tozu', 10, '1 paket'],
      ['ceviz', 100, 'iç için'], ['seker', 450, 'şerbet için'], ['su', 500, 'şerbet için'], ['limon', 20, 'şerbet için']],
    adim: ['Şerbeti kaynatıp soğutun.', 'Hamur malzemelerini yoğurun; parçalar alıp içine ceviz koyun.', 'Kalbur ya da rendenin üzerinde bastırarak desen verin, tepsiye dizin.', '180 °C fırında 30 dakika pişirip şerbeti dökün.'],
  },
  {
    id: 'islak-kek', ad: 'Islak Kek', kat: 'tatli', emoji: '🍫', sure: 50, porsiyon: 12, wiki: 'Kek',
    malz: [['un', 250, '2 su bardağı'], ['seker', 250, '1,25 su bardağı'], ['yumurta', 200, '4 adet'], ['sut', 250, '1,25 su bardağı'], ['sivi_yag', 120, '⅔ su bardağı'],
      ['kakao', 40, '4 yemek kaşığı'], ['kabartma_tozu', 10, '1 paket'], ['vanilin', 1, '1 paket'], ['bitter_cikolata', 60, 'sos için']],
    adim: ['Yumurta ve şekeri köpürtün; süt ve yağı ekleyin.', 'Un, kakao, kabartma tozu ve vanilini ekleyin; sosun bir kısmını ayırın.', '180 °C fırında 30 dakika pişirin.', 'Ayırdığınız harcı çikolatayla ısıtıp sıcak kekin üzerine dökün.'],
  },
  {
    id: 'mozaik-pasta', ad: 'Mozaik Pasta', kat: 'tatli', emoji: '🍫', sure: 20, porsiyon: 10, wiki: 'Mozaik pasta',
    not: 'Buzdolabında en az 4 saat dinlendirin.',
    malz: [['biskuvi', 300, '2 paket'], ['tereyagi', 100, '100 g'], ['kakao', 40, '4 yemek kaşığı'], ['seker', 100, '½ su bardağı'], ['sut', 150, '¾ su bardağı'], ['ceviz', 50, '⅓ su bardağı']],
    adim: ['Tereyağı, şeker, kakao ve sütü ısıtıp eritin.', 'Kırılmış bisküvi ve cevizi ekleyip karıştırın.', 'Streç filme rulo şeklinde sarıp buzdolabında dondurun; dilimleyerek servis edin.'],
  },
  {
    id: 'kadayifli-muhallebi', ad: 'Kadayıflı Muhallebi', kat: 'tatli', emoji: '🍮', sure: 40, porsiyon: 8, wiki: 'Muhallebi',
    malz: [['tel_kadayif', 150, '150 g'], ['tereyagi', 50, '50 g'], ['seker', 50, 'kadayıf için'], ['sut', 1000, '1 litre'], ['seker', 150, 'muhallebi için'],
      ['nisasta', 40, '4 yemek kaşığı'], ['un', 20, '2 yemek kaşığı'], ['antep_fistigi', 30, 'süslemek için']],
    adim: ['Kadayıfı tereyağı ve şekerle tavada kızarana kadar kavurup kalıbın tabanına bastırın.', 'Süt, şeker, nişasta ve unla muhallebi pişirin.', 'Muhallebiyi kadayıfın üzerine dökün; soğutup fıstıkla servis edin.'],
  },
  {
    id: 'tahinli-corek', ad: 'Tahinli Çörek', kat: 'tatli', emoji: '🥐', sure: 100, porsiyon: 10, wiki: 'Tahinli çörek',
    malz: [['un', 500, '4 su bardağı'], ['sut', 250, '1,25 su bardağı'], ['sivi_yag', 80, '½ su bardağı'], ['maya', 7, '1 paket'], ['seker', 30, 'hamur için'],
      ['tahin', 120, 'iç için ½ su bardağı'], ['seker', 100, 'iç için ½ su bardağı'], ['tarcin', 1, '1 tatlı kaşığı'], ['yumurta', 50, '1 adet'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Mayalı hamuru yoğurup 1 saat dinlendirin.', 'Hamuru açıp tahin, şeker ve tarçın karışımını yayın; rulo yapıp dilimleyin.', 'Dilimleri burarak şekil verin, yumurta sürün.', '180 °C fırında 25 dakika pişirin.'],
  },
  {
    id: 'cevizli-kurabiye', ad: 'Cevizli Kurabiye', kat: 'tatli', emoji: '🍪', sure: 40, porsiyon: 12, wiki: 'Kurabiye',
    malz: [['un', 300, '2,5 su bardağı'], ['tereyagi', 125, '125 g'], ['seker', 100, '½ su bardağı'], ['yumurta', 50, '1 adet'], ['ceviz', 80, '¾ su bardağı'],
      ['kabartma_tozu', 5, '½ paket'], ['vanilin', 1, '1 paket']],
    adim: ['Tereyağı ve şekeri krema kıvamına getirip yumurtayı ekleyin.', 'Un, kabartma tozu, vanilin ve kırılmış cevizi ekleyip yoğurun.', 'Ceviz büyüklüğünde parçalar alıp tepsiye dizin; 180 °C fırında 18 dakika pişirin.'],
  },
  {
    id: 'elmali-kurabiye', ad: 'Elmalı Kurabiye', kat: 'tatli', emoji: '🍎', sure: 50, porsiyon: 12, wiki: 'Kurabiye',
    malz: [['un', 350, '3 su bardağı'], ['tereyagi', 125, '125 g'], ['yogurt', 100, '½ su bardağı'], ['seker', 60, 'hamur için'], ['elma', 300, '2 adet (rendelenmiş)'],
      ['seker', 60, 'iç için'], ['ceviz', 40, 'iç için'], ['tarcin', 1, '1 tatlı kaşığı'], ['kabartma_tozu', 5, '½ paket']],
    adim: ['Elmayı şeker ve tarçınla suyunu çekene kadar pişirin; cevizi ekleyin.', 'Hamur malzemelerini yoğurun.', 'Hamuru açıp üçgenler kesin; iç koyup rulo yapın.', '180 °C fırında 25 dakika pişirin; pudra şekeri serpin.'],
  },
];

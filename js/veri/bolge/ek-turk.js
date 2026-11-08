// Türk mutfağı: bölgelere eklenen son tarifler
export const EK_TURK = [
  {
    mutfak: 'karadeniz', id: 'hamsi-koftesi', ad: 'Hamsi Köftesi', kat: 'deniz', emoji: '🐟', sure: 40, porsiyon: 4, wiki: 'Hamsi',
    malz: [['hamsi', 500, '500 g (ayıklanmış)'], ['bayat_ekmek', 60, '2 dilim içi'], ['yumurta', 50, '1 adet'], ['sogan', 60, '½ adet'], ['maydanoz', 15, '½ demet'],
      ['misir_unu', 60, 'bulamak için', 30], ['sivi_yag', 300, 'kızartmak için', 40], ['tuz', 4, '½ tatlı kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Hamsileri satırla ince kıyın.', 'Islatılmış ekmek, yumurta, soğan, maydanoz ve baharatlarla yoğurun.', 'Yassı köfteler yapıp mısır ununa bulayın ve kızartın.'],
  },
  {
    mutfak: 'ege', id: 'kabak-boregi', ad: 'Kabak Böreği', kat: 'hamur', emoji: '🥧', sure: 60, porsiyon: 8, wiki: 'Börek',
    malz: [['yufka', 500, '3 adet'], ['kabak', 600, '3 adet'], ['beyaz_peynir', 200, '200 g'], ['dereotu', 15, '½ demet'], ['yumurta', 100, '2 adet'], ['sut', 200, '1 su bardağı'],
      ['sivi_yag', 60, '⅓ su bardağı'], ['tuz', 4, '½ tatlı kaşığı']],
    adim: ['Kabakları rendeleyip suyunu iyice sıkın; peynir ve dereotuyla karıştırın.', 'Süt, yumurta ve yağı çırpın.', 'Yufkaları sosla ıslatarak tepsiye katlayın, aralara iç koyun.', '190 °C fırında 40 dakika pişirin.'],
  },
  {
    mutfak: 'ic-anadolu', id: 'pastirmali-yumurta', ad: 'Pastırmalı Yumurta', kat: 'et', emoji: '🍳', sure: 10, porsiyon: 2, wiki: 'Pastırma',
    malz: [['pastirma', 80, '8 dilim'], ['yumurta', 200, '4 adet'], ['tereyagi', 14, '1 yemek kaşığı'], ['karabiber', 1, '1 tutam']],
    adim: ['Tereyağını sahanda eritin, pastırmaları dizip 30 saniye çevirin.', 'Yumurtaları üzerine kırın.', 'Beyazları pişince karabiberle sıcak servis edin.'],
  },
  {
    mutfak: 'dogu', id: 'kesme-asi', ad: 'Kesme Aşı Çorbası', kat: 'corba', emoji: '🥣', sure: 60, porsiyon: 6, wiki: 'Kesme çorbası',
    malz: [['un', 150, 'kesme için 1 su bardağı'], ['yumurta', 50, '1 adet'], ['yesil_mercimek', 120, '⅔ su bardağı'], ['dana_kiyma', 150, '150 g'], ['sogan', 110, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['su', 1800, '9 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Un, yumurta ve az suyla sert hamur yoğurup ince açın, kibrit gibi kesin.', 'Mercimeği haşlayın.', 'Tereyağında kıyma, soğan ve salçayı kavurup mercimeğe ekleyin.',
      'Kesmeleri ekleyip 10 dakika pişirin; naneyle servis edin.'],
  },
  {
    mutfak: 'guneydogu', id: 'siveydiz', ad: 'Şiveydiz', kat: 'et', emoji: '🍲', sure: 100, porsiyon: 4, wiki: 'Şiveydiz',
    malz: [['kuzu_kusbasi', 400, '400 g'], ['nohut_haslanmis', 150, '1 su bardağı'], ['taze_sogan', 200, '1 demet (ya da taze sarımsak)'], ['yogurt', 600, '3 su bardağı'],
      ['yumurta', 50, '1 adet'], ['un', 20, '2 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['su', 800, '4 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Eti suyla yumuşayana kadar haşlayın; nohudu ekleyin.', 'Taze soğanı doğrayıp tereyağında soteleyin, tencereye alın.', 'Yoğurdu yumurta ve unla çırpıp ılıştırarak ekleyin.', 'Kaynayınca naneyle servis edin (Antep\'te bahar yemeğidir).'],
  },
  {
    mutfak: 'osmanli', id: 'paluze', ad: 'Paluze', kat: 'tatli', emoji: '🍮', sure: 25, porsiyon: 6, wiki: 'Paluze',
    malz: [['nisasta', 100, '1 su bardağı'], ['seker', 200, '1 su bardağı'], ['su', 1000, '5 su bardağı'], ['gul_suyu', 10, '2 yemek kaşığı'], ['limon', 20, 'birkaç damla'], ['antep_fistigi', 20, 'süslemek için']],
    adim: ['Nişasta, şeker ve suyu soğukken karıştırın.', 'Sürekli karıştırarak şeffaf ve koyu bir kıvam alana kadar pişirin.', 'Gül suyu ve limonu ekleyip kaselere dökün; fıstıkla süsleyip soğutun.'],
  },
  {
    mutfak: 'genel', id: 'kiymali-gozleme', ad: 'Kıymalı Gözleme', kat: 'hamur', emoji: '🫓', sure: 60, porsiyon: 6, wiki: 'Gözleme',
    malz: [['un', 500, '4 su bardağı'], ['su', 280, '1,5 su bardağı'], ['dana_kiyma', 300, '300 g'], ['sogan', 110, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['pul_biber', 2, '1 tatlı kaşığı'], ['tereyagi', 40, 'sürmek için'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Un, su ve tuzla hamur yoğurup dinlendirin.', 'Kıymayı soğan, salça ve baharatla kavurun.', 'Hamuru ince açıp yarısına iç koyarak kapatın.', 'Sacda iki yüzünü pişirip tereyağı sürün.'],
  },
  {
    mutfak: 'genel', id: 'nohutlu-bulgur', ad: 'Nohutlu Bulgur Pilavı', kat: 'garnitur', emoji: '🍚', sure: 30, porsiyon: 4, wiki: 'Bulgur pilavı',
    malz: [['bulgur', 300, '1,75 su bardağı'], ['nohut_haslanmis', 150, '1 su bardağı'], ['sogan', 60, '½ adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['su', 650, '3,25 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı']],
    adim: ['Tereyağında soğan ve salçayı kavurun.', 'Bulgur ve nohudu ekleyip 2 dakika çevirin.', 'Sıcak su ve tuzla suyunu çekene kadar pişirip demlendirin.'],
  },
];

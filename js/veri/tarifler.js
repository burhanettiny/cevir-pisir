// Tarifler. Her malzeme: [besin anahtarı, gram, 'ölçü' (isteğe bağlı), yenen gram (isteğe bağlı)]
// "Yenen gram" yalnızca kızartmada tavada kalan yağ gibi durumlar için kullanılır: alışverişte tam
// miktar, besin hesabında yemeğe geçen miktar sayılır.
// wiki: görsel ve kaynak için Türkçe Vikipedi madde adı.
import { EK_TARIFLER } from './tarifler-ek.js';
import { EK_TARIFLER_2 } from './tarifler-ek2.js';
import { BOLGE_TARIFLERI } from './tarifler-bolge.js';
import { DUNYA_TARIFLERI } from './tarifler-dunya.js';
import { AYRINTILI_ADIMLAR } from './adimlar.js';

export const KATEGORILER = [
  { id: 'corba', ad: 'Çorba', emoji: '🍲', renk: '#e8833a' },
  { id: 'et', ad: 'Et Yemeği', emoji: '🥩', renk: '#b23a3a' },
  { id: 'tavuk', ad: 'Tavuk Yemeği', emoji: '🍗', renk: '#d9a21b' },
  { id: 'deniz', ad: 'Deniz Ürünleri', emoji: '🐟', renk: '#1f7a8c' },
  { id: 'sebze', ad: 'Sebze Yemeği', emoji: '🥦', renk: '#3f8f4a' },
  { id: 'hamur', ad: 'Hamur İşleri', emoji: '🥟', renk: '#b5651d' },
  { id: 'garnitur', ad: 'Garnitür', emoji: '🍚', renk: '#8a6d3b' },
  { id: 'meze', ad: 'Meze', emoji: '🫒', renk: '#6b5b95' },
  { id: 'tatli', ad: 'Tatlı', emoji: '🍮', renk: '#c2577a' },
];

const ANA_TARIFLER = [
  // ───────────── ÇORBALAR ─────────────
  {
    id: 'mercimek-corbasi', ad: 'Mercimek Çorbası', kat: 'corba', emoji: '🥣', sure: 40, porsiyon: 4,
    wiki: 'Mercimek çorbası',
    malz: [
      ['kirmizi_mercimek', 200, '1 su bardağı'], ['sogan', 110, '1 orta boy'], ['havuc', 70, '1 adet'],
      ['patates', 170, '1 orta boy'], ['tereyagi', 28, '2 yemek kaşığı'], ['un', 10, '1 yemek kaşığı'],
      ['su', 1500, '7–8 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['kimyon', 2, '1 çay kaşığı'],
      ['pul_biber', 2, '1 çay kaşığı'], ['limon', 40, 'servis için ½ adet'],
    ],
    adim: [
      'Mercimeği bol suda, suyu duruluncaya kadar yıkayın.',
      'Tencerede tereyağının yarısını eritin, doğranmış soğanı 3–4 dakika kavurun. Unu ekleyip kokusu çıkana kadar çevirin.',
      'Küp doğranmış havuç ve patatesi, mercimeği ve sıcak suyu ekleyin.',
      'Kaynayınca kısık ateşte, mercimekler ve sebzeler iyice yumuşayana kadar 25–30 dakika pişirin.',
      'Blenderdan geçirin, tuzu ve kimyonu ekleyip 2–3 dakika daha kaynatın.',
      'Kalan tereyağında pul biberi yakmadan kızdırıp servis ederken üzerine gezdirin; limonla sunun.',
    ],
  },
  {
    id: 'ezogelin-corbasi', ad: 'Ezogelin Çorbası', kat: 'corba', emoji: '🥣', sure: 45, porsiyon: 4,
    wiki: 'Ezogelin çorbası',
    malz: [
      ['kirmizi_mercimek', 150, '¾ su bardağı'], ['bulgur', 35, '2 yemek kaşığı'], ['pirinc', 25, '2 yemek kaşığı'],
      ['sogan', 110, '1 orta boy'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['biber_salcasi', 17, '1 yemek kaşığı'],
      ['tereyagi', 28, '2 yemek kaşığı'], ['su', 1600, '8 su bardağı'], ['kuru_nane', 3, '1 tatlı kaşığı'],
      ['pul_biber', 2, '1 çay kaşığı'], ['tuz', 6, '1 tatlı kaşığı'], ['limon', 40, 'servis için'],
    ],
    adim: [
      'Mercimek, bulgur ve pirinci birlikte yıkayın.',
      'Tereyağında ince doğranmış soğanı pembeleştirin; iki salçayı ekleyip 1–2 dakika kavurun.',
      'Yıkanmış bakliyatı ve sıcak suyu ekleyin, kaynayınca altını kısın.',
      'Ara ara karıştırarak 35–40 dakika, bulgur ve pirinç yumuşayıp çorba koyulaşana kadar pişirin. Gerekirse sıcak su ekleyin.',
      'Tuzu, kuru naneyi ve pul biberi ekleyip 2 dakika daha kaynatın. Limonla servis edin.',
    ],
  },
  {
    id: 'yayla-corbasi', ad: 'Yayla Çorbası', kat: 'corba', emoji: '🥣', sure: 30, porsiyon: 4,
    wiki: 'Yayla çorbası',
    malz: [
      ['yogurt', 500, '2,5 su bardağı'], ['pirinc', 60, '⅓ su bardağı'], ['yumurta', 50, '1 adet'],
      ['un', 20, '2 yemek kaşığı'], ['su', 1200, '6 su bardağı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['kuru_nane', 3, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Pirinci yıkayıp suyla birlikte tencereye alın ve yumuşayana kadar yaklaşık 15 dakika haşlayın.',
      'Ayrı bir kapta yoğurt, yumurta ve unu pürüzsüz olana kadar çırpın.',
      'Tencereden birkaç kepçe sıcak suyu azar azar yoğurtlu karışıma ekleyip ılıştırın (kesilmeyi önler).',
      'Ilıştırdığınız karışımı sürekli karıştırarak tencereye dökün; kaynayana kadar karıştırmayı bırakmayın.',
      'Kaynadıktan sonra kısık ateşte 5 dakika pişirip tuzlayın.',
      'Tereyağında kuru naneyi çevirip çorbanın üzerine gezdirin.',
    ],
  },
  {
    id: 'tarhana-corbasi', ad: 'Tarhana Çorbası', kat: 'corba', emoji: '🥣', sure: 20, porsiyon: 4,
    wiki: 'Tarhana çorbası',
    malz: [
      ['tarhana', 70, '4 yemek kaşığı'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['su', 1200, '6 su bardağı'], ['sarimsak', 8, '2 diş (isteğe bağlı)'], ['kuru_nane', 2, '1 çay kaşığı'],
      ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Tarhanayı 1 su bardağı ılık suda 10 dakika bekletip ezerek açın.',
      'Tereyağının yarısında ezilmiş sarımsağı ve salçayı kavurun.',
      'Kalan suyu ekleyip kaynatın; açılmış tarhanayı karıştırarak ekleyin.',
      'Sürekli karıştırarak kısık ateşte 8–10 dakika pişirin, tuzunu ayarlayın.',
      'Kalan tereyağında naneyi çevirip üzerine gezdirin.',
    ],
  },
  {
    id: 'domates-corbasi', ad: 'Domates Çorbası', kat: 'corba', emoji: '🍅', sure: 30, porsiyon: 4,
    wiki: 'Domates çorbası',
    malz: [
      ['domates', 600, '4 büyük boy'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['un', 20, '2 yemek kaşığı'],
      ['tereyagi', 28, '2 yemek kaşığı'], ['sut', 200, '1 su bardağı'], ['su', 800, '4 su bardağı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'], ['kasar', 60, 'servis için rendelenmiş'],
    ],
    adim: [
      'Domateslerin kabuğunu soyup rendeleyin.',
      'Tereyağında unu kokusu çıkana kadar kavurun, salçayı ekleyip 1 dakika çevirin.',
      'Rendelenmiş domatesi ekleyin, 5 dakika pişirin; ardından sıcak suyu ekleyip karıştırın.',
      'Kaynayınca kısık ateşte 15 dakika pişirin, blenderdan geçirin.',
      'Sütü ılıtıp yavaşça ekleyin, tuz ve karabiberle tatlandırıp bir taşım kaynatın.',
      'Rendelenmiş kaşarla servis edin.',
    ],
  },
  {
    id: 'sehriyeli-tavuk-corbasi', ad: 'Şehriyeli Tavuk Çorbası', kat: 'corba', emoji: '🍜', sure: 50, porsiyon: 4,
    wiki: 'Tavuk çorbası',
    malz: [
      ['tavuk_gogus', 250, '1 adet (yarım göğüs)'], ['sehriye', 60, '½ çay bardağı tel şehriye'],
      ['havuc', 70, '1 adet'], ['tereyagi', 14, '1 yemek kaşığı'], ['un', 10, '1 yemek kaşığı'],
      ['su', 1500, '7–8 su bardağı'], ['limon', 40, '½ adet'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuğu suyla haşlayın (yaklaşık 30 dakika); köpüğünü alın.',
      'Tavuğu çıkarıp didikleyin, suyunu süzün.',
      'Tereyağında unu kavurun, rendelenmiş havucu ekleyip 2 dakika çevirin.',
      'Tavuk suyunu ekleyin; kaynayınca şehriyeyi ve didiklenmiş tavuğu katın.',
      'Şehriye yumuşayınca (8–10 dakika) tuz, karabiber ve limon suyuyla tatlandırın.',
    ],
  },
  {
    id: 'kremali-mantar-corbasi', ad: 'Kremalı Mantar Çorbası', kat: 'corba', emoji: '🍄', sure: 30, porsiyon: 4,
    wiki: 'Mantar çorbası',
    malz: [
      ['mantar', 400, '1 paket (400 g)'], ['sogan', 60, '½ adet'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['un', 20, '2 yemek kaşığı'], ['sut', 400, '2 su bardağı'], ['krema', 100, '½ kutu'],
      ['su', 600, '3 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'], ['kekik', 1, '1 tutam'],
    ],
    adim: [
      'Mantarları silip ince doğrayın.',
      'Tereyağında soğanı yumuşatın, mantarları ekleyip suyunu salıp çekene kadar soteleyin.',
      'Unu ekleyip 2 dakika kavurun; sütü ve suyu azar azar, topaklanmaması için karıştırarak ekleyin.',
      'Kaynayınca kısık ateşte 10 dakika pişirin; isterseniz yarısını blenderdan geçirin.',
      'Kremayı ekleyin, tuz, karabiber ve kekikle tatlandırıp bir taşım kaynatın.',
    ],
  },
  {
    id: 'sebze-corbasi', ad: 'Sebze Çorbası', kat: 'corba', emoji: '🥕', sure: 35, porsiyon: 4,
    wiki: 'Sebze çorbası',
    malz: [
      ['patates', 170, '1 orta boy'], ['havuc', 140, '2 adet'], ['kabak', 200, '1 adet'],
      ['sogan', 110, '1 orta boy'], ['bezelye', 80, '½ su bardağı'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['zeytinyagi', 26, '2 yemek kaşığı'], ['un', 10, '1 yemek kaşığı'], ['su', 1400, '7 su bardağı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['maydanoz', 15, 'birkaç dal'],
    ],
    adim: [
      'Bütün sebzeleri küçük küpler halinde doğrayın.',
      'Zeytinyağında soğanı kavurun, unu ve salçayı ekleyip 1–2 dakika çevirin.',
      'Havuç ve patatesi ekleyip 3 dakika kavurun, sonra kabak ve bezelyeyi ekleyin.',
      'Sıcak suyu ekleyin; sebzeler yumuşayana kadar kısık ateşte 20 dakika pişirin.',
      'İsterseniz yarısını ezin; tuzlayıp ince kıyılmış maydanozla servis edin.',
    ],
  },

  // ───────────── ET YEMEKLERİ ─────────────
  {
    id: 'karniyarik', ad: 'Karnıyarık', kat: 'et', emoji: '🍆', sure: 75, porsiyon: 4,
    wiki: 'Karnıyarık',
    malz: [
      ['patlican', 1000, '4 orta boy (bostan)'], ['dana_kiyma', 250, '250 g'], ['sogan', 110, '1 orta boy'],
      ['sivri_biber', 80, '4 adet'], ['domates', 300, '2 orta boy'], ['sarimsak', 8, '2 diş'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['sivi_yag', 300, 'kızartmak için', 70],
      ['su', 200, '1 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'], ['maydanoz', 15, '½ demet'],
    ],
    adim: [
      'Patlıcanları alacalı soyup tuzlu suda 20 dakika bekletin, kurulayın.',
      'Kızgın yağda her yüzü kızarana kadar çevirerek kızartın, kâğıt havluya alın.',
      'Ayrı tavada kıymayı suyunu çekene kadar kavurun; soğan, sarımsak ve doğranmış biberin yarısını ekleyin.',
      'Bir domatesi küp doğrayıp ekleyin, tuz ve karabiberle 5 dakika pişirip maydanozu katın.',
      'Patlıcanları tepsiye dizin, ortalarını kaşıkla açıp harcı doldurun; üzerine domates dilimi ve biber koyun.',
      'Salçayı sıcak suda açıp tepsiye dökün; 180 °C fırında 25–30 dakika pişirin.',
    ],
  },
  {
    id: 'izmir-kofte', ad: 'İzmir Köfte', kat: 'et', emoji: '🧆', sure: 70, porsiyon: 4,
    wiki: 'İzmir köfte',
    malz: [
      ['dana_kiyma', 500, '500 g'], ['bayat_ekmek', 50, '2 dilim içi'], ['sogan', 110, '1 orta boy'],
      ['sarimsak', 8, '2 diş'], ['yumurta', 50, '1 adet'], ['patates', 500, '3 orta boy'],
      ['sivri_biber', 80, '4 adet'], ['domates', 300, '2 adet'], ['domates_salcasi', 34, '2 yemek kaşığı'],
      ['sivi_yag', 40, '3 yemek kaşığı'], ['su', 400, '2 su bardağı'], ['kimyon', 2, '1 çay kaşığı'],
      ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Kıymaya rendelenmiş soğan, ezilmiş sarımsak, ıslatılıp sıkılmış ekmek içi, yumurta, kimyon, tuz ve karabiberi ekleyip iyice yoğurun.',
      'Karışımdan parmak köfteler şekillendirin.',
      'Patatesleri elma dilim kesin; patates ve köfteleri az yağda hafifçe kızartın ya da fırında 10 dakika ön pişirin.',
      'Fırın kabına köfte, patates, domates dilimi ve biberleri sırayla dizin.',
      'Salçayı sıcak suyla açıp tuzlayın, kabın üzerine dökün.',
      '200 °C fırında patatesler yumuşayana kadar 30–35 dakika pişirin.',
    ],
  },
  {
    id: 'hunkar-begendi', ad: 'Hünkâr Beğendi', kat: 'et', emoji: '👑', sure: 100, porsiyon: 4,
    wiki: 'Hünkârbeğendi',
    malz: [
      ['dana_kusbasi', 500, '500 g kuşbaşı'], ['sogan', 110, '1 orta boy'], ['domates', 300, '2 adet'],
      ['sivri_biber', 40, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['su', 400, '2 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
      ['patlican', 1000, 'beğendi için 4 adet'], ['tereyagi', 28, 'beğendi için 2 yemek kaşığı'],
      ['un', 30, '3 yemek kaşığı'], ['sut', 400, '2 su bardağı'], ['kasar', 60, '½ su bardağı rendelenmiş'],
    ],
    adim: [
      'Eti tencerede kendi suyunu salıp çekene kadar kavurun; tereyağı ve soğanı ekleyin.',
      'Salça, doğranmış domates ve biberi ekleyip 3 dakika çevirin; sıcak suyu ekleyip et yumuşayana kadar kısık ateşte 60 dakika pişirin.',
      'Beğendi için patlıcanları ocakta ya da fırında közleyin, kabuklarını soyup ince kıyın.',
      'Tereyağında unu kavurun, soğuk sütü azar azar ekleyerek beşamel hazırlayın.',
      'Beşamele patlıcanı ve kaşarı ekleyip kıvam alana kadar karıştırın, tuzlayın.',
      'Servis tabağına beğendiyi yayıp ortasına eti koyun.',
    ],
  },
  {
    id: 'tas-kebabi', ad: 'Tas Kebabı', kat: 'et', emoji: '🍖', sure: 90, porsiyon: 4,
    wiki: 'Tas kebabı',
    malz: [
      ['dana_kusbasi', 600, '600 g kuşbaşı'], ['sogan', 220, '2 orta boy'], ['havuc', 140, '2 adet'],
      ['patates', 340, '2 orta boy'], ['domates_salcasi', 34, '2 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['su', 600, '3 su bardağı'], ['defne', 1, '1 yaprak'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Eti yağda suyunu salıp çekene kadar yüksek ateşte mühürleyin.',
      'Doğranmış soğanı ve tereyağını ekleyip soğanlar yumuşayana kadar kavurun.',
      'Salçayı ekleyip 2 dakika çevirin; sıcak su ve defne yaprağını ekleyin.',
      'Kapağı kapalı, kısık ateşte 45 dakika pişirin.',
      'Küp doğranmış havuç ve patatesi ekleyip sebzeler yumuşayana kadar 20 dakika daha pişirin; tuz ve karabiberle tatlandırın.',
    ],
  },
  {
    id: 'etli-kuru-fasulye', ad: 'Etli Kuru Fasulye', kat: 'et', emoji: '🫘', sure: 120, porsiyon: 4,
    wiki: 'Kuru fasulye',
    not: 'Fasulyeyi bir gece önceden suya yatırın.',
    malz: [
      ['kuru_fasulye', 300, '2 su bardağı'], ['dana_kusbasi', 250, '250 g kuşbaşı'], ['sogan', 110, '1 orta boy'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['biber_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['su', 1200, '6 su bardağı'], ['pul_biber', 2, '1 çay kaşığı'],
      ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Bir gece ıslatılmış fasulyeyi süzüp kaynar suda 10 dakika haşlayın ve suyunu dökün.',
      'Tencerede eti yağda suyunu çekene kadar kavurun, soğanı ekleyip yumuşatın.',
      'Salçaları ve tereyağını ekleyip 2 dakika çevirin.',
      'Fasulye ile sıcak suyu ekleyin; kapak kapalı, kısık ateşte fasulyeler yumuşayana kadar 60–80 dakika pişirin (düdüklüde 25 dakika).',
      'Tuz ve pul biberi en sonda ekleyip 10 dakika daha pişirin.',
    ],
  },
  {
    id: 'kadinbudu-kofte', ad: 'Kadınbudu Köfte', kat: 'et', emoji: '🧆', sure: 50, porsiyon: 4,
    wiki: 'Kadınbudu köfte',
    malz: [
      ['dana_kiyma', 500, '500 g'], ['pirinc', 70, '⅓ su bardağı'], ['sogan', 110, '1 orta boy'],
      ['yumurta', 150, '3 adet (1 harca, 2 bulamaya)'], ['un', 60, 'bulamak için 6 yemek kaşığı', 25],
      ['maydanoz', 15, '½ demet'], ['sivi_yag', 400, 'kızartmak için', 50], ['kimyon', 2, '1 çay kaşığı'],
      ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Pirinci haşlayıp süzün ve soğutun.',
      'Kıymanın yarısını rendelenmiş soğanla, suyunu çekene kadar kavurup soğutun.',
      'Kavrulmuş ve çiğ kıymayı, pirinç, 1 yumurta, maydanoz ve baharatlarla iyice yoğurun.',
      'Yassı, oval köfteler yapın.',
      'Köfteleri una, sonra çırpılmış yumurtaya bulayıp kızgın yağda her iki yüzü kızarana kadar kızartın.',
    ],
  },
  {
    id: 'musakka', ad: 'Patlıcan Musakka', kat: 'et', emoji: '🍆', sure: 70, porsiyon: 4,
    wiki: 'Musakka',
    malz: [
      ['patlican', 750, '3 orta boy'], ['dana_kiyma', 250, '250 g'], ['sogan', 110, '1 orta boy'],
      ['sivri_biber', 80, '4 adet'], ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['sivi_yag', 250, 'kızartmak için', 60], ['su', 300, '1,5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
      ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Patlıcanları alacalı soyup halka ya da küp doğrayın; tuzlu suda bekletip kurulayın.',
      'Patlıcanları kızartın (daha hafif olsun isterseniz yağlayıp fırında pişirin).',
      'Kıymayı kavurun, soğanı ve biberleri ekleyip yumuşatın; domates ve salçayı ekleyip 5 dakika pişirin.',
      'Fırın kabına patlıcan ve kıymalı harcı kat kat dizin.',
      'Sıcak suyu ekleyip 180 °C fırında 25–30 dakika pişirin.',
    ],
  },
  {
    id: 'orman-kebabi', ad: 'Orman Kebabı', kat: 'et', emoji: '🥘', sure: 90, porsiyon: 4,
    wiki: 'Orman kebabı',
    malz: [
      ['kuzu_kusbasi', 500, '500 g kuşbaşı'], ['patates', 340, '2 orta boy'], ['havuc', 140, '2 adet'],
      ['bezelye', 160, '1 su bardağı'], ['sogan', 220, '2 orta boy'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['tereyagi', 14, '1 yemek kaşığı'], ['su', 600, '3 su bardağı'], ['kekik', 1, '1 tatlı kaşığı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Eti tencerede suyunu salıp çekene kadar kavurun.',
      'Arpacık ya da iri doğranmış soğanı ve tereyağını ekleyip kavurun.',
      'Salçayı ekleyin, sıcak suyu ilave edip kısık ateşte 45 dakika pişirin.',
      'Küp patates, havuç ve bezelyeyi ekleyin; sebzeler yumuşayana kadar 25 dakika pişirin.',
      'Kekik, tuz ve karabiberle tatlandırıp 5 dakika demlendirin.',
    ],
  },

  // ───────────── TAVUK YEMEKLERİ ─────────────
  {
    id: 'tavuk-sote', ad: 'Tavuk Sote', kat: 'tavuk', emoji: '🍗', sure: 30, porsiyon: 4,
    wiki: 'Sote',
    malz: [
      ['tavuk_gogus', 600, '600 g'], ['sogan', 110, '1 orta boy'], ['kapya_biber', 150, '1 adet'],
      ['sivri_biber', 80, '4 adet'], ['domates', 300, '2 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['sivi_yag', 26, '2 yemek kaşığı'], ['sarimsak', 8, '2 diş'], ['kekik', 1, '1 tatlı kaşığı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuğu kuşbaşı doğrayın.',
      'Geniş tavada yağı kızdırıp tavukları yüksek ateşte suyunu çekene kadar soteleyin.',
      'Soğan, sarımsak ve biberleri ekleyip 4–5 dakika çevirin.',
      'Salçayı, ardından küp doğranmış domatesleri ekleyin.',
      'Kapak kapalı, kısık ateşte 10 dakika pişirin; kekik, tuz ve karabiberle tatlandırın.',
    ],
  },
  {
    id: 'firinda-patatesli-tavuk', ad: 'Fırında Patatesli Tavuk', kat: 'tavuk', emoji: '🍗', sure: 60, porsiyon: 4,
    wiki: 'Tavuk eti',
    malz: [
      ['tavuk_but', 800, '8 baget'], ['patates', 680, '4 orta boy'], ['sogan', 110, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['biber_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 40, '3 yemek kaşığı'],
      ['yogurt', 60, '3 yemek kaşığı'], ['sarimsak', 12, '3 diş'], ['toz_biber', 2, '1 tatlı kaşığı'],
      ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Salçalar, yoğurt, zeytinyağı, ezilmiş sarımsak ve baharatlarla sos hazırlayın.',
      'Bagetleri sosun yarısıyla ovup en az 30 dakika bekletin.',
      'Patatesleri elma dilim, soğanı iri doğrayın; kalan sosla harmanlayın.',
      'Tepsiye patates ve soğanı yayın, üzerine bagetleri dizin.',
      '200 °C fırında, tavuklar kızarıp patatesler yumuşayana kadar 45–50 dakika pişirin.',
    ],
  },
  {
    id: 'tavuk-sis', ad: 'Tavuk Şiş', kat: 'tavuk', emoji: '🍢', sure: 40, porsiyon: 4,
    wiki: 'Tavuk şiş',
    not: 'Marine süresi (en az 1 saat) hazırlık süresine dahil değildir.',
    malz: [
      ['tavuk_gogus', 700, '700 g'], ['yogurt', 100, '½ su bardağı'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['zeytinyagi', 26, '2 yemek kaşığı'], ['sarimsak', 8, '2 diş'], ['kapya_biber', 150, '1 adet'],
      ['sogan', 110, '1 adet'], ['toz_biber', 2, '1 tatlı kaşığı'], ['kimyon', 1, '½ çay kaşığı'],
      ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Tavuğu iri küp doğrayın.',
      'Yoğurt, salça, zeytinyağı, sarımsak ve baharatlarla marine edin; buzdolabında en az 1 saat bekletin.',
      'Tavukları biber ve soğan parçalarıyla şişlere dizin.',
      'Izgarada, döküm tavada ya da 220 °C fırında her yüzü kızarıp içi pişene kadar 15–20 dakika pişirin.',
    ],
  },
  {
    id: 'cerkez-tavugu', ad: 'Çerkez Tavuğu', kat: 'tavuk', emoji: '🥜', sure: 60, porsiyon: 4,
    wiki: 'Çerkez tavuğu',
    malz: [
      ['tavuk_gogus', 500, '500 g'], ['ceviz', 150, '1,5 su bardağı'], ['bayat_ekmek', 80, '3 dilim içi'],
      ['sarimsak', 8, '2 diş'], ['sogan', 60, '½ adet (haşlama için)'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['toz_biber', 2, '1 tatlı kaşığı'], ['su', 1200, 'haşlama için'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Tavuğu soğanla birlikte haşlayın; suyunu ayırın, eti ince didikleyin.',
      'Bayat ekmek içini tavuk suyunda ıslatın.',
      'Cevizin büyük kısmını, ekmeği ve sarımsağı rondodan geçirin; tavuk suyuyla krem kıvamına getirin.',
      'Didiklenmiş tavuğu sosun bir kısmıyla harmanlayıp tabağa alın; kalan sosla üzerini kaplayın.',
      'Tereyağında kırmızı biberi kızdırıp gezdirin; kalan cevizle süsleyin.',
    ],
  },
  {
    id: 'kremali-mantarli-tavuk', ad: 'Kremalı Mantarlı Tavuk', kat: 'tavuk', emoji: '🍄', sure: 30, porsiyon: 4,
    wiki: 'Tavuk eti',
    malz: [
      ['tavuk_gogus', 600, '600 g'], ['mantar', 250, '250 g'], ['krema', 200, '1 kutu'],
      ['sogan', 60, '½ adet'], ['tereyagi', 14, '1 yemek kaşığı'], ['sivi_yag', 13, '1 yemek kaşığı'],
      ['kasar', 60, '½ su bardağı (isteğe bağlı)'], ['kekik', 1, '1 tatlı kaşığı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuğu şerit doğrayıp yağda suyunu çekene kadar soteleyin.',
      'Tereyağı, ince doğranmış soğan ve mantarı ekleyip mantarlar suyunu çekene kadar pişirin.',
      'Kremayı ekleyin, tuz, karabiber ve kekikle tatlandırıp kısık ateşte 5 dakika koyulaştırın.',
      'İsterseniz üzerine kaşar serpip kapak kapalı eritin.',
    ],
  },
  {
    id: 'tavuk-guvec', ad: 'Tavuk Güveç', kat: 'tavuk', emoji: '🥘', sure: 60, porsiyon: 4,
    wiki: 'Güveç',
    malz: [
      ['tavuk_but', 600, '600 g kemiksiz but'], ['patlican', 250, '1 adet'], ['kabak', 200, '1 adet'],
      ['kapya_biber', 150, '1 adet'], ['sivri_biber', 80, '4 adet'], ['domates', 300, '2 adet'],
      ['sogan', 110, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['su', 200, '1 su bardağı'], ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Tavuğu ve sebzeleri iri küpler halinde doğrayın.',
      'Salçayı zeytinyağı ve sıcak suyla açıp tuz ve kekik ekleyin.',
      'Tavuk ve sebzeleri güveç kabında sosla harmanlayın.',
      'Kapağını ya da folyoyu kapatıp 200 °C fırında 40 dakika pişirin; açıp 10 dakika daha kızartın.',
    ],
  },
  {
    id: 'tavuk-sinitzel', ad: 'Tavuk Şinitzel', kat: 'tavuk', emoji: '🍗', sure: 30, porsiyon: 4,
    wiki: 'Şnitzel',
    malz: [
      ['tavuk_gogus', 600, '600 g'], ['un', 60, '6 yemek kaşığı', 25], ['yumurta', 100, '2 adet'],
      ['galeta_unu', 120, '1 su bardağı', 70], ['sivi_yag', 400, 'kızartmak için', 50],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'], ['limon', 40, 'servis için'],
    ],
    adim: [
      'Tavuk göğsünü ince bifteklere bölüp streç film arasında dövün; tuz ve karabiber serpin.',
      'Sırasıyla una, çırpılmış yumurtaya ve galeta ununa bulayın.',
      'Orta ateşte kızgın yağda her yüzü altın rengi olana kadar 3–4 dakika kızartın.',
      'Kâğıt havluya alıp limonla servis edin.',
    ],
  },
  {
    id: 'tavuklu-pilav', ad: 'Tavuklu Pilav', kat: 'tavuk', emoji: '🍛', sure: 50, porsiyon: 4,
    wiki: 'Tavuklu pilav',
    malz: [
      ['tavuk_gogus', 400, '400 g'], ['pirinc', 360, '2 su bardağı'], ['tereyagi', 42, '3 yemek kaşığı'],
      ['nohut_haslanmis', 160, '1 su bardağı (isteğe bağlı)'], ['et_suyu', 600, '3 su bardağı tavuk suyu'],
      ['tuz', 8, '1,5 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Tavuğu haşlayıp didikleyin; suyunu ayırın.',
      'Pirinci ılık tuzlu suda 20 dakika bekletip süzün.',
      'Tereyağında pirinci şeffaflaşana kadar kavurun.',
      'Sıcak tavuk suyunu, tuzu ve nohudu ekleyin; kaynayınca kısık ateşte suyunu çekene kadar 15 dakika pişirin.',
      'Didiklenmiş tavuğu üzerine yayın, kapağın altına kâğıt havlu koyup 15 dakika demlendirin.',
    ],
  },

  // ───────────── SEBZE YEMEKLERİ ─────────────
  {
    id: 'zeytinyagli-taze-fasulye', ad: 'Zeytinyağlı Taze Fasulye', kat: 'sebze', emoji: '🫛', sure: 50, porsiyon: 4,
    wiki: 'Zeytinyağlı taze fasulye',
    malz: [
      ['taze_fasulye', 750, '750 g'], ['sogan', 110, '1 orta boy'], ['domates', 300, '2 adet'],
      ['zeytinyagi', 65, '5 yemek kaşığı'], ['seker', 4, '1 çay kaşığı'], ['su', 200, '1 su bardağı'],
      ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Fasulyelerin kılçıklarını ayıklayıp ikiye ya da üçe bölün.',
      'Zeytinyağında yarım ay doğranmış soğanı yumuşatın.',
      'Fasulyeleri ekleyip 5 dakika çevirin; rendelenmiş domates, şeker ve tuzu ekleyin.',
      'Sıcak suyu ekleyin; kapak kapalı, kısık ateşte fasulyeler yumuşayana kadar 35–40 dakika pişirin.',
      'Tenceresinde soğumaya bırakın, ılık ya da soğuk servis edin.',
    ],
  },
  {
    id: 'imam-bayildi', ad: 'İmam Bayıldı', kat: 'sebze', emoji: '🍆', sure: 70, porsiyon: 4,
    wiki: 'İmambayıldı',
    malz: [
      ['patlican', 1000, '4 orta boy'], ['sogan', 330, '3 orta boy'], ['sarimsak', 24, '6 diş'],
      ['domates', 450, '3 adet'], ['sivri_biber', 80, '4 adet'], ['maydanoz', 30, '1 demet'],
      ['zeytinyagi', 100, '½ su bardağı'], ['seker', 4, '1 çay kaşığı'], ['su', 200, '1 su bardağı'],
      ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Patlıcanları alacalı soyup tuzlu suda bekletin; kurulayıp az zeytinyağıyla fırında ya da tavada yumuşatın.',
      'Zeytinyağında yarım ay soğanları ve sarımsağı yumuşayana kadar kavurun.',
      'Doğranmış domatesin çoğunu, şekeri ve tuzu ekleyip 5 dakika pişirin; maydanozu karıştırın.',
      'Patlıcanların ortasını yarıp harcı doldurun; üzerine domates ve biber koyun.',
      'Sıcak suyu tabana dökün, 180 °C fırında 30 dakika pişirin. Soğuk servis edin.',
    ],
  },
  {
    id: 'zeytinyagli-pirasa', ad: 'Zeytinyağlı Pırasa', kat: 'sebze', emoji: '🥬', sure: 40, porsiyon: 4,
    wiki: 'Pırasa',
    malz: [
      ['pirasa', 1000, '1 kg'], ['havuc', 140, '2 adet'], ['pirinc', 35, '2 yemek kaşığı'],
      ['zeytinyagi', 65, '5 yemek kaşığı'], ['limon', 40, '½ adet'], ['seker', 4, '1 çay kaşığı'],
      ['su', 300, '1,5 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Pırasaları yıkayıp verev, havuçları halka doğrayın.',
      'Zeytinyağında havuçları 3 dakika, pırasaları ekleyip 5 dakika kavurun.',
      'Yıkanmış pirinci, şekeri, tuzu ve sıcak suyu ekleyin.',
      'Kapak kapalı, kısık ateşte 25 dakika pişirin; limon suyunu ekleyip ocaktan alın.',
      'Soğuk servis edin.',
    ],
  },
  {
    id: 'ispanak-yemegi', ad: 'Ispanak Yemeği', kat: 'sebze', emoji: '🥬', sure: 35, porsiyon: 4,
    wiki: 'Ispanak',
    malz: [
      ['ispanak', 1000, '1 kg'], ['sogan', 110, '1 orta boy'], ['pirinc', 35, '2 yemek kaşığı'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['su', 200, '1 su bardağı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['pul_biber', 1, 'isteğe göre'], ['yogurt', 200, 'servis için 1 su bardağı'],
    ],
    adim: [
      'Ispanağı bol suda birkaç kez yıkayıp iri doğrayın.',
      'Zeytinyağında soğanı kavurun, salçayı ekleyip 1 dakika çevirin.',
      'Ispanağı ekleyip sönene kadar karıştırın; yıkanmış pirinç, tuz ve sıcak suyu ekleyin.',
      'Kapak kapalı, kısık ateşte pirinç pişene kadar 15–20 dakika pişirin.',
      'Sarımsaklı ya da sade yoğurtla servis edin.',
    ],
  },
  {
    id: 'turlu', ad: 'Türlü', kat: 'sebze', emoji: '🥘', sure: 60, porsiyon: 4,
    wiki: 'Türlü',
    malz: [
      ['patlican', 250, '1 adet'], ['kabak', 200, '1 adet'], ['patates', 170, '1 adet'], ['taze_fasulye', 200, '200 g'],
      ['sivri_biber', 80, '4 adet'], ['domates', 300, '2 adet'], ['sogan', 110, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 50, '4 yemek kaşığı'], ['su', 300, '1,5 su bardağı'],
      ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Bütün sebzeleri iri küp doğrayın; patlıcanı tuzlu suda bekletin.',
      'Zeytinyağında soğanı kavurun, salçayı ekleyin.',
      'Önce fasulye ve patatesi, 5 dakika sonra patlıcan, kabak ve biberi ekleyin.',
      'Domatesi, tuzu ve sıcak suyu ekleyip kapak kapalı, kısık ateşte 35–40 dakika pişirin.',
    ],
  },
  {
    id: 'zeytinyagli-enginar', ad: 'Zeytinyağlı Enginar', kat: 'sebze', emoji: '🌼', sure: 45, porsiyon: 4,
    wiki: 'Enginar',
    malz: [
      ['enginar', 600, '6 adet (temizlenmiş)'], ['bezelye', 160, '1 su bardağı'], ['havuc', 70, '1 adet'],
      ['patates', 170, '1 adet'], ['sogan', 60, '½ adet ya da 5–6 arpacık'], ['zeytinyagi', 65, '5 yemek kaşığı'],
      ['limon', 80, '1 adet'], ['seker', 4, '1 çay kaşığı'], ['dereotu', 20, '½ demet'],
      ['su', 400, '2 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Temizlenmiş enginarları kararmasın diye limonlu, unlu suda bekletin.',
      'Zeytinyağında soğanı, küp havucu ve patatesi 3–4 dakika kavurun; bezelyeyi ekleyin.',
      'Enginarları tencereye dizip ortalarına sebzeleri yerleştirin.',
      'Su, limon suyu, şeker ve tuzu ekleyin; üzerini yağlı kâğıtla kapatıp kısık ateşte 30 dakika pişirin.',
      'Soğuyunca dereotuyla servis edin.',
    ],
  },
  {
    id: 'mucver', ad: 'Kabak Mücver', kat: 'sebze', emoji: '🥒', sure: 30, porsiyon: 4,
    wiki: 'Mücver',
    malz: [
      ['kabak', 600, '3 adet'], ['yumurta', 100, '2 adet'], ['un', 60, '6 yemek kaşığı'],
      ['beyaz_peynir', 100, '100 g'], ['taze_sogan', 40, '3 dal'], ['dereotu', 20, '½ demet'],
      ['sivi_yag', 200, 'kızartmak için', 40], ['tuz', 4, '½ tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Kabakları rendeleyip tuzlayın, 10 dakika bekletip suyunu iyice sıkın.',
      'Yumurta, un, ezilmiş peynir, taze soğan, dereotu ve karabiberi ekleyip karıştırın.',
      'Kızgın yağa kaşıkla bırakıp her iki yüzü kızarana kadar pişirin (fırında yağlı kâğıtta 200 °C 25 dakika da olur).',
      'Yoğurtla servis edin.',
    ],
  },
  {
    id: 'bezelye-yemegi', ad: 'Bezelye Yemeği', kat: 'sebze', emoji: '🫛', sure: 40, porsiyon: 4,
    wiki: 'Bezelye',
    malz: [
      ['bezelye', 500, '500 g'], ['havuc', 140, '2 adet'], ['patates', 170, '1 adet'], ['sogan', 110, '1 adet'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['su', 400, '2 su bardağı'],
      ['seker', 4, '1 çay kaşığı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Zeytinyağında soğanı kavurun, salçayı ekleyin.',
      'Küp havuç ve patatesi ekleyip 3–4 dakika çevirin.',
      'Bezelye, şeker, tuz ve sıcak suyu ekleyin.',
      'Kapak kapalı, kısık ateşte sebzeler yumuşayana kadar 25 dakika pişirin.',
    ],
  },

  // ───────────── GARNİTÜRLER ─────────────
  {
    id: 'pirinc-pilavi', ad: 'Şehriyeli Pirinç Pilavı', kat: 'garnitur', emoji: '🍚', sure: 35, porsiyon: 4,
    wiki: 'Pilav',
    malz: [
      ['pirinc', 360, '2 su bardağı'], ['sehriye', 30, '2 yemek kaşığı arpa şehriye'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['su', 600, '3 su bardağı sıcak su'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Pirinci ılık tuzlu suda 20–30 dakika bekletip nişastası gidene kadar yıkayın.',
      'Yağda şehriyeyi kızarana kadar kavurun.',
      'Süzülmüş pirinci ekleyip 3–4 dakika, taneler şeffaflaşana kadar kavurun.',
      'Sıcak su ve tuzu ekleyin; kaynayınca altını kısıp suyunu çekene kadar 12–15 dakika pişirin.',
      'Tereyağını ekleyin, kapağın altına kâğıt havlu koyup 15 dakika demlendirin.',
    ],
  },
  {
    id: 'bulgur-pilavi', ad: 'Bulgur Pilavı', kat: 'garnitur', emoji: '🍚', sure: 30, porsiyon: 4,
    wiki: 'Bulgur pilavı',
    malz: [
      ['bulgur', 340, '2 su bardağı'], ['sogan', 110, '1 orta boy'], ['sivri_biber', 40, '2 adet'],
      ['domates', 150, '1 adet'], ['domates_salcasi', 17, '1 yemek kaşığı'], ['tereyagi', 28, '2 yemek kaşığı'],
      ['sivi_yag', 13, '1 yemek kaşığı'], ['su', 700, '3,5 su bardağı'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Yağlarda soğanı ve biberi kavurun; salça ve rendelenmiş domatesi ekleyip 3 dakika pişirin.',
      'Bulguru ekleyip 2 dakika çevirin.',
      'Sıcak su ve tuzu ekleyin; kaynayınca altını kısıp suyunu çekene kadar 15 dakika pişirin.',
      'Kapağın altına kâğıt havlu koyup 10 dakika demlendirin.',
    ],
  },
  {
    id: 'patates-puresi', ad: 'Patates Püresi', kat: 'garnitur', emoji: '🥔', sure: 30, porsiyon: 4,
    wiki: 'Patates püresi',
    malz: [
      ['patates', 1000, '6 orta boy'], ['sut', 200, '1 su bardağı'], ['tereyagi', 42, '3 yemek kaşığı'],
      ['tuz', 6, '1 tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Patatesleri soyup iri doğrayın, tuzlu suda çatal kolayca batana kadar 20 dakika haşlayın.',
      'Süzüp sıcakken ezin.',
      'Ilık süt ve tereyağını ekleyip pürüzsüz olana kadar karıştırın; tuz ve karabiberle tatlandırın.',
    ],
  },
  {
    id: 'firin-patates', ad: 'Fırın Elma Dilim Patates', kat: 'garnitur', emoji: '🍟', sure: 45, porsiyon: 4,
    wiki: 'Patates',
    malz: [
      ['patates', 1000, '6 orta boy'], ['zeytinyagi', 40, '3 yemek kaşığı'], ['toz_biber', 2, '1 tatlı kaşığı'],
      ['kekik', 1, '1 tatlı kaşığı'], ['sarimsak', 8, '2 diş (isteğe bağlı)'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Patatesleri iyice yıkayıp kabuklu olarak elma dilim kesin; soğuk suda 15 dakika bekletip kurulayın.',
      'Zeytinyağı ve baharatlarla harmanlayın.',
      'Yağlı kâğıt serili tepsiye aralıklı dizip 220 °C fırında, yarısında çevirerek 35 dakika pişirin.',
    ],
  },
  {
    id: 'coban-salata', ad: 'Çoban Salata', kat: 'garnitur', emoji: '🥗', sure: 15, porsiyon: 4,
    wiki: 'Çoban salatası',
    malz: [
      ['domates', 450, '3 adet'], ['salatalik', 300, '2 adet'], ['sivri_biber', 40, '2 adet'], ['sogan', 60, '½ adet'],
      ['maydanoz', 15, '½ demet'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['limon', 40, '½ adet'],
      ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Domates, salatalık ve biberi küçük küp doğrayın.',
      'Soğanı ince kıyıp tuzla ovun ve yıkayın (acısı gider).',
      'Hepsini maydanozla karıştırın; zeytinyağı, limon ve tuzla servisten hemen önce soslayın.',
    ],
  },
  {
    id: 'mevsim-salata', ad: 'Mevsim Salata', kat: 'garnitur', emoji: '🥗', sure: 15, porsiyon: 4,
    wiki: 'Salata',
    malz: [
      ['marul', 300, '1 adet kıvırcık'], ['roka', 50, '½ demet'], ['havuc', 70, '1 adet'],
      ['salatalik', 150, '1 adet'], ['domates', 150, '1 adet'], ['taze_sogan', 30, '2 dal'],
      ['zeytinyagi', 26, '2 yemek kaşığı'], ['nar_eksisi', 15, '1 yemek kaşığı'], ['limon', 20, 'birkaç damla'],
      ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Yeşillikleri yıkayıp kurulayın ve doğrayın.',
      'Havucu rendeleyin, salatalık ve domatesi doğrayın.',
      'Zeytinyağı, nar ekşisi, limon ve tuzla sos hazırlayıp servisten hemen önce dökün.',
    ],
  },
  {
    id: 'sebze-sote', ad: 'Sebze Sote', kat: 'garnitur', emoji: '🥕', sure: 20, porsiyon: 4,
    wiki: 'Sote',
    malz: [
      ['kabak', 200, '1 adet'], ['havuc', 140, '2 adet'], ['kapya_biber', 150, '1 adet'], ['mantar', 200, '200 g'],
      ['bezelye', 80, '½ su bardağı'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['tereyagi', 14, '1 yemek kaşığı'],
      ['kekik', 1, '1 tatlı kaşığı'], ['tuz', 4, '½ tatlı kaşığı'], ['karabiber', 1, '1 tutam'],
    ],
    adim: [
      'Sebzeleri jülyen ya da küçük küp doğrayın.',
      'Geniş tavada yağları kızdırıp önce havucu, 3 dakika sonra diğer sebzeleri ekleyin.',
      'Yüksek ateşte, diri kalacak şekilde 6–8 dakika soteleyin; baharatlarla tatlandırın.',
    ],
  },
  {
    id: 'domatesli-eriste', ad: 'Tereyağlı Erişte', kat: 'garnitur', emoji: '🍝', sure: 20, porsiyon: 4,
    wiki: 'Erişte',
    malz: [
      ['eriste', 300, '300 g'], ['tereyagi', 28, '2 yemek kaşığı'], ['ceviz', 30, '¼ su bardağı (isteğe bağlı)'],
      ['su', 2000, 'haşlama için'], ['tuz', 8, '1,5 tatlı kaşığı'],
    ],
    adim: [
      'Erişteyi kaynar tuzlu suda paketteki süre kadar (8–10 dakika) haşlayıp süzün.',
      'Tereyağını eritip erişteyle harmanlayın.',
      'İsterseniz kırılmış cevizi tereyağında hafifçe kavurup üzerine serpin.',
    ],
  },

  // ───────────── MEZELER ─────────────
  {
    id: 'haydari', ad: 'Haydari', kat: 'meze', emoji: '🥛', sure: 10, porsiyon: 6,
    wiki: 'Haydari',
    malz: [
      ['suzme_yogurt', 300, '1,5 su bardağı'], ['beyaz_peynir', 80, '80 g'], ['sarimsak', 8, '2 diş'],
      ['dereotu', 10, 'birkaç dal'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['zeytinyagi', 13, '1 yemek kaşığı'],
      ['tuz', 2, '1 tutam'],
    ],
    adim: [
      'Peyniri çatalla ezin.',
      'Süzme yoğurt, ezilmiş sarımsak, kıyılmış dereotu ve naneyle karıştırın; tuzunu ayarlayın.',
      'Üzerine zeytinyağı gezdirip soğuk servis edin.',
    ],
  },
  {
    id: 'humus', ad: 'Humus', kat: 'meze', emoji: '🫘', sure: 15, porsiyon: 6,
    wiki: 'Humus',
    malz: [
      ['nohut_haslanmis', 400, '2 su bardağı'], ['tahin', 60, '4 yemek kaşığı'], ['limon', 40, '½–1 adet'],
      ['sarimsak', 4, '1 diş'], ['zeytinyagi', 26, '2 yemek kaşığı'], ['kimyon', 1, '½ çay kaşığı'],
      ['su', 60, 'birkaç yemek kaşığı buzlu su'], ['tuz', 4, '½ tatlı kaşığı'], ['toz_biber', 1, 'süslemek için'],
    ],
    adim: [
      'Haşlanmış nohudu (mümkünse kabuklarını ayıklayarak) rondoya alın.',
      'Tahin, limon suyu, sarımsak, kimyon ve tuzu ekleyip çekin.',
      'Buzlu suyu azar azar ekleyerek pürüzsüz, kremamsı kıvama getirin.',
      'Tabağa yayıp zeytinyağı ve kırmızı biberle süsleyin.',
    ],
  },
  {
    id: 'acili-ezme', ad: 'Acılı Ezme', kat: 'meze', emoji: '🌶️', sure: 15, porsiyon: 6,
    wiki: 'Ezme (meze)',
    malz: [
      ['domates', 300, '2 adet'], ['sivri_biber', 80, '4 adet (acı)'], ['kapya_biber', 75, '½ adet'],
      ['sogan', 60, '½ adet'], ['maydanoz', 30, '1 demet'], ['domates_salcasi', 17, '1 yemek kaşığı'],
      ['biber_salcasi', 17, '1 yemek kaşığı'], ['nar_eksisi', 30, '2 yemek kaşığı'], ['zeytinyagi', 26, '2 yemek kaşığı'],
      ['pul_biber', 2, '1 tatlı kaşığı'], ['isot', 1, 'isteğe göre'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Domatesin çekirdekli kısmını çıkarın; tüm sebzeleri ve maydanozu satırla çok ince kıyın.',
      'Salçalar, nar ekşisi, zeytinyağı ve baharatları ekleyin.',
      'Satırla bir süre daha kıyarak harmanlayın; buzdolabında 15 dakika dinlendirin.',
    ],
  },
  {
    id: 'saksuka', ad: 'Şakşuka', kat: 'meze', emoji: '🍆', sure: 40, porsiyon: 6,
    wiki: 'Şakşuka (meze)',
    malz: [
      ['patlican', 500, '2 adet'], ['kabak', 200, '1 adet'], ['kapya_biber', 150, '1 adet'],
      ['sivri_biber', 40, '2 adet'], ['domates', 300, '2 adet'], ['sarimsak', 12, '3 diş'],
      ['domates_salcasi', 17, '1 yemek kaşığı'], ['sivi_yag', 250, 'kızartmak için', 50],
      ['zeytinyagi', 13, '1 yemek kaşığı'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Patlıcan ve kabağı küp doğrayın; patlıcanı tuzlu suda bekletip kurulayın.',
      'Patlıcan, kabak ve biberleri ayrı ayrı kızartın (ya da yağlayıp fırınlayın).',
      'Zeytinyağında sarımsağı, salçayı ve rendelenmiş domatesi koyulaşana kadar 8–10 dakika pişirin; tuzlayın.',
      'Sosu sebzelerin üzerine döküp soğuk servis edin; isterseniz sarımsaklı yoğurt ekleyin.',
    ],
  },
  {
    id: 'babagannus', ad: 'Babagannuş', kat: 'meze', emoji: '🍆', sure: 30, porsiyon: 6,
    wiki: 'Babagannuş',
    malz: [
      ['patlican', 750, '3 adet'], ['kapya_biber', 75, '½ adet'], ['domates', 150, '1 adet'],
      ['taze_sogan', 30, '2 dal'], ['maydanoz', 15, '½ demet'], ['nar_eksisi', 15, '1 yemek kaşığı'],
      ['zeytinyagi', 26, '2 yemek kaşığı'], ['sarimsak', 4, '1 diş'], ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Patlıcanları ocakta ya da fırında közleyin, kabuklarını soyup suyunu süzdürün ve kıyın.',
      'Domates, biber, taze soğan ve maydanozu ince doğrayın.',
      'Hepsini zeytinyağı, nar ekşisi, sarımsak ve tuzla harmanlayın.',
    ],
  },
  {
    id: 'fava', ad: 'Fava', kat: 'meze', emoji: '🫛', sure: 60, porsiyon: 6,
    wiki: 'Fava (yemek)',
    not: 'Soğuyup donması için birkaç saat buzdolabında bekletin.',
    malz: [
      ['kuru_bakla', 250, '1,5 su bardağı'], ['sogan', 110, '1 adet'], ['zeytinyagi', 65, '5 yemek kaşığı'],
      ['seker', 4, '1 çay kaşığı'], ['dereotu', 20, '½ demet'], ['limon', 20, 'birkaç damla'],
      ['su', 800, '4 su bardağı'], ['tuz', 6, '1 tatlı kaşığı'],
    ],
    adim: [
      'Baklaları bir gece ıslatıp süzün.',
      'Zeytinyağının yarısında soğanı yumuşatın; baklaları ve sıcak suyu ekleyin.',
      'Bakla tamamen dağılana kadar kısık ateşte 40–45 dakika pişirin.',
      'Şeker, tuz ve kalan zeytinyağını ekleyip blenderdan geçirin.',
      'Yağlanmış kaba döküp soğutun; ters çevirip dereotu, zeytinyağı ve limonla servis edin.',
    ],
  },
  {
    id: 'cacik', ad: 'Cacık', kat: 'meze', emoji: '🥒', sure: 10, porsiyon: 6,
    wiki: 'Cacık',
    malz: [
      ['yogurt', 500, '2,5 su bardağı'], ['salatalik', 300, '2 adet'], ['sarimsak', 8, '2 diş'],
      ['su', 200, '1 su bardağı soğuk su'], ['kuru_nane', 2, '1 tatlı kaşığı'], ['zeytinyagi', 13, '1 yemek kaşığı'],
      ['tuz', 4, '½ tatlı kaşığı'],
    ],
    adim: [
      'Salatalıkları rendeleyin ya da küçük küp doğrayın.',
      'Yoğurdu ezilmiş sarımsak, tuz ve soğuk suyla çırpın.',
      'Salatalığı ekleyin; nane ve zeytinyağıyla soğuk servis edin.',
    ],
  },
  {
    id: 'muhammara', ad: 'Muhammara (Acuka)', kat: 'meze', emoji: '🌶️', sure: 15, porsiyon: 6,
    wiki: 'Muhammara',
    malz: [
      ['ceviz', 100, '1 su bardağı'], ['biber_salcasi', 50, '3 yemek kaşığı'], ['galeta_unu', 30, '3 yemek kaşığı'],
      ['zeytinyagi', 40, '3 yemek kaşığı'], ['nar_eksisi', 15, '1 yemek kaşığı'], ['sarimsak', 8, '2 diş'],
      ['kimyon', 1, '½ çay kaşığı'], ['pul_biber', 2, '1 tatlı kaşığı'], ['tuz', 2, '1 tutam'],
    ],
    adim: [
      'Cevizi rondoda iri çekin.',
      'Salça, galeta unu, zeytinyağı, nar ekşisi, sarımsak ve baharatları ekleyip kısa kısa çekerek karıştırın.',
      'Kıvamı koyuysa 1–2 kaşık su ekleyin; üzerine ceviz ve zeytinyağı koyarak servis edin.',
    ],
  },

  // ───────────── TATLILAR ─────────────
  {
    id: 'firin-sutlac', ad: 'Fırın Sütlaç', kat: 'tatli', emoji: '🍮', sure: 60, porsiyon: 6,
    wiki: 'Sütlaç',
    malz: [
      ['sut', 1000, '1 litre'], ['pirinc', 70, '⅓ su bardağı'], ['seker', 150, '¾ su bardağı'],
      ['pirinc_unu', 30, '3 yemek kaşığı'], ['su', 400, '2 su bardağı'], ['vanilin', 1, '1 paket'],
      ['tarcin', 1, 'servis için'],
    ],
    adim: [
      'Pirinci suyla, suyunu çekip iyice yumuşayana kadar 15 dakika haşlayın.',
      'Sütü ekleyip kaynatın; şekeri ilave edin.',
      'Pirinç ununu yarım su bardağı soğuk sütte açıp karıştırarak tencereye ekleyin; koyulaşana kadar 10 dakika pişirin, vanilini katın.',
      'Fırın kaplarına paylaştırıp fırın tepsisine dizin; tepsiye kapların yarısına kadar soğuk su koyun.',
      'Fırının üst ızgarasında, üzerleri kızarana kadar 220 °C\'de 15–20 dakika pişirin. Soğutup servis edin.',
    ],
  },
  {
    id: 'irmik-helvasi', ad: 'İrmik Helvası', kat: 'tatli', emoji: '🍯', sure: 35, porsiyon: 8,
    wiki: 'İrmik helvası',
    malz: [
      ['irmik', 250, '1,5 su bardağı'], ['tereyagi', 100, '100 g'], ['badem', 30, '2 yemek kaşığı (ya da çam fıstığı)'],
      ['sut', 500, '2,5 su bardağı'], ['seker', 200, '1 su bardağı'], ['tarcin', 1, 'servis için'],
    ],
    adim: [
      'Sütle şekeri ayrı bir tencerede ısıtıp şekeri eritin.',
      'Tereyağını eritin, irmik ve bademi ekleyin; kısık ateşte sürekli karıştırarak irmik pembeleşene kadar 15–20 dakika kavurun.',
      'Sıcak şerbeti dikkatle (sıçrar) irmiğe ekleyip karıştırın.',
      'Suyunu çekince ocağı kapatın; kapağın altına kâğıt havlu koyup 15 dakika demlendirin.',
      'Kaşıkla şekil vererek tarçınla servis edin.',
    ],
  },
  {
    id: 'kabak-tatlisi', ad: 'Kabak Tatlısı', kat: 'tatli', emoji: '🎃', sure: 60, porsiyon: 6,
    wiki: 'Kabak tatlısı',
    not: 'Kabaklar şekerle bir gece bekletilirse kendi suyunu salar, su eklemeye gerek kalmaz.',
    malz: [
      ['bal_kabagi', 1000, '1 kg (soyulmuş)'], ['seker', 250, '1,25 su bardağı'], ['ceviz', 60, 'servis için ½ su bardağı'],
      ['karanfil', 1, '3–4 tane (isteğe bağlı)'],
    ],
    adim: [
      'Kabakları soyup iri dilimleyin, tencereye dizip aralarına şeker serpin.',
      'Kabaklar suyunu salana kadar en az 3 saat (tercihen bir gece) bekletin.',
      'Karanfili ekleyip kapak kapalı, kısık ateşte kabaklar yumuşayıp şerbet koyulaşana kadar 35–45 dakika pişirin.',
      'Soğutup çekilmiş ceviz (ve isterseniz tahin) ile servis edin.',
    ],
  },
  {
    id: 'ayva-tatlisi', ad: 'Ayva Tatlısı', kat: 'tatli', emoji: '🍐', sure: 75, porsiyon: 4,
    wiki: 'Ayva tatlısı',
    malz: [
      ['ayva', 700, '2 büyük boy'], ['seker', 200, '1 su bardağı'], ['su', 400, '2 su bardağı'],
      ['karanfil', 1, '5–6 tane'], ['ceviz', 40, 'servis için'], ['limon', 20, 'birkaç damla'],
    ],
    adim: [
      'Ayvaları soyup ikiye kesin, çekirdek yataklarını oyun; kabuk ve çekirdekleri atmayın.',
      'Tencerenin dibine kabuk ve çekirdekleri serip ayvaları kesik yüzleri üstte dizin; oyuklara şeker ve karanfil koyun.',
      'Suyu ekleyip kapak kapalı, kısık ateşte ayvalar yumuşayıp kızarana kadar 50–60 dakika pişirin; ara ara şerbetle sulayın.',
      'Limon damlatıp soğutun; cevizle (isterseniz kaymakla) servis edin.',
    ],
  },
  {
    id: 'keskul', ad: 'Keşkül', kat: 'tatli', emoji: '🥛', sure: 30, porsiyon: 6,
    wiki: 'Keşkül',
    malz: [
      ['sut', 1000, '1 litre'], ['badem', 100, '¾ su bardağı (çekilmiş)'], ['seker', 150, '¾ su bardağı'],
      ['pirinc_unu', 40, '4 yemek kaşığı'], ['nisasta', 20, '2 yemek kaşığı'], ['hindistan_cevizi', 15, 'süslemek için'],
      ['vanilin', 1, '1 paket'],
    ],
    adim: [
      'Sütü, şekeri, pirinç ununu ve nişastayı soğukken tencerede pürüzsüz olana kadar karıştırın.',
      'Çekilmiş bademi ekleyip orta ateşte sürekli karıştırarak koyulaşana kadar pişirin.',
      'Kaynadıktan sonra 3–4 dakika daha karıştırıp vanilini ekleyin.',
      'Kaselere paylaştırıp soğutun; hindistan cevizi ve badem ile süsleyin.',
    ],
  },
  {
    id: 'revani', ad: 'Revani', kat: 'tatli', emoji: '🍰', sure: 60, porsiyon: 12,
    wiki: 'Revani',
    malz: [
      ['yumurta', 200, '4 adet'], ['seker', 150, 'hamur için ¾ su bardağı'], ['yogurt', 120, '½ su bardağı'],
      ['irmik', 150, '1 su bardağı'], ['un', 100, '1 su bardağı'], ['seker', 400, 'şerbet için 2 su bardağı'],
      ['su', 500, 'şerbet için 2,5 su bardağı'], ['limon', 20, 'birkaç damla'], ['hindistan_cevizi', 10, 'süslemek için'],
    ],
    adim: [
      'Şerbet için şekeri suyla 10 dakika kaynatın, limonu ekleyip soğumaya bırakın.',
      'Yumurta ve şekeri köpük köpük olana kadar 5 dakika çırpın; yoğurdu ekleyin.',
      'İrmik ve unu (isterseniz 1 paket kabartma tozuyla) eleyerek ekleyip spatulayla karıştırın.',
      'Yağlanmış tepsiye döküp 180 °C fırında üzeri kızarana kadar 30–35 dakika pişirin.',
      'Sıcak revaniye soğuk şerbeti dökün, şerbeti çekince dilimleyip hindistan ceviziyle servis edin.',
    ],
  },
  {
    id: 'gullac', ad: 'Güllaç', kat: 'tatli', emoji: '🌹', sure: 30, porsiyon: 8,
    wiki: 'Güllaç',
    not: 'Ramazan sofralarının vazgeçilmezi; servisten önce en az 2 saat buzdolabında dinlenmeli.',
    malz: [
      ['gullac', 100, '1 paket (yaklaşık 10 yaprak)'], ['sut', 1500, '1,5 litre'], ['seker', 250, '1,25 su bardağı'],
      ['ceviz', 100, '1 su bardağı'], ['gul_suyu', 5, '1 yemek kaşığı (isteğe bağlı)'], ['nar', 100, 'süslemek için ½ adet'],
    ],
    adim: [
      'Sütü şekerle ılıtıp şekeri eritin; isterseniz gül suyunu ekleyin. Süt sıcak değil, ılık olmalı.',
      'Tepsiye bir kepçe süt koyup ilk güllaç yaprağını serin, üzerini sütle ıslatın.',
      'Yaprakların yarısını bu şekilde dizin, ortasına çekilmiş cevizin çoğunu serpin.',
      'Kalan yaprakları da her birini sütle ıslatarak dizin; kalan sütü üstten dökün.',
      'Buzdolabında en az 2 saat bekletin; dilimleyip ceviz ve nar taneleriyle servis edin.',
    ],
  },
  {
    id: 'firinda-tarcinli-elma', ad: 'Fırında Tarçınlı Elma', kat: 'tatli', emoji: '🍎', sure: 35, porsiyon: 4,
    wiki: 'Elma', sekersiz: true,
    not: 'Şeker eklenmez; tatlılık elmanın kendisinden ve tarçından gelir.',
    malz: [
      ['elma', 720, '4 orta boy (ekşi-tatlı)'], ['ceviz', 40, '⅓ su bardağı'], ['tarcin', 2, '1 tatlı kaşığı'],
      ['su', 100, '½ su bardağı'], ['suzme_yogurt', 120, 'servis için 4 yemek kaşığı'],
    ],
    adim: [
      'Elmaları yıkayıp çekirdek yataklarını alttan delmeden oyun.',
      'Oyuklara kırılmış ceviz ve tarçın doldurun.',
      'Fırın kabına dizip dibine suyu dökün; 190 °C fırında elmalar yumuşayana kadar 25–30 dakika pişirin.',
      'Ilık olarak, bir kaşık süzme yoğurtla servis edin.',
    ],
  },
  {
    id: 'cevizli-yogurt-tatlisi', ad: 'Cevizli Yoğurt Tatlısı', kat: 'tatli', emoji: '🥣', sure: 10, porsiyon: 4,
    wiki: 'Süzme yoğurt', sekersiz: true,
    not: 'Şeker eklenmez; rendelenmiş elma ve tarçın doğal tatlılık verir.',
    malz: [
      ['suzme_yogurt', 400, '2 su bardağı'], ['elma', 150, '1 adet (rendelenmiş)'], ['ceviz', 60, '½ su bardağı'],
      ['badem', 20, '1 avuç'], ['tarcin', 2, '1 tatlı kaşığı'],
    ],
    adim: [
      'Elmayı rendeleyip suyunu hafifçe sıkın.',
      'Süzme yoğurtla elmayı karıştırıp kaselere paylaştırın.',
      'Üzerine kırılmış ceviz, badem ve tarçın serpin; soğuk servis edin.',
    ],
  },
];

// Mutfaklar (konsept): Türk mutfağı bölgeleri, Osmanlı saray mutfağı ve dünya mutfakları.
export const MUTFAKLAR = [
  { id: 'genel', ad: 'Türk ev mutfağı', grup: 'turk' },
  { id: 'karadeniz', ad: 'Karadeniz', grup: 'turk' },
  { id: 'ege', ad: 'Ege', grup: 'turk' },
  { id: 'akdeniz', ad: 'Akdeniz', grup: 'turk' },
  { id: 'marmara', ad: 'Marmara & İstanbul', grup: 'turk' },
  { id: 'ic-anadolu', ad: 'İç Anadolu', grup: 'turk' },
  { id: 'dogu', ad: 'Doğu Anadolu', grup: 'turk' },
  { id: 'guneydogu', ad: 'Güneydoğu', grup: 'turk' },
  { id: 'osmanli', ad: 'Osmanlı saray mutfağı', grup: 'osmanli' },
  { id: 'uzakdogu', ad: 'Uzak Doğu', grup: 'dunya' },
  { id: 'italyan', ad: 'İtalyan', grup: 'dunya' },
  { id: 'fransiz', ad: 'Fransız', grup: 'dunya' },
  { id: 'ispanyol', ad: 'İspanyol', grup: 'dunya' },
  { id: 'yunan-balkan', ad: 'Yunan & Balkan', grup: 'dunya' },
  { id: 'ortadogu', ad: 'Orta Doğu', grup: 'dunya' },
  { id: 'hint', ad: 'Hint', grup: 'dunya' },
  { id: 'meksika', ad: 'Meksika', grup: 'dunya' },
  { id: 'amerikan', ad: 'Amerikan & İngiliz', grup: 'dunya' },
  { id: 'diger-dunya', ad: 'Rus, Macar, Fas ve diğerleri', grup: 'dunya' },
];

// Mevcut tariflerin bölgeleri (belirtilmeyenler: Türk ev mutfağı)
const BOLGE = {
  'izmir-kofte': 'ege', 'zeytinyagli-taze-fasulye': 'ege', 'zeytinyagli-enginar': 'ege', 'zeytinyagli-pirasa': 'ege',
  'girit-ezmesi': 'ege', 'semizotu-salatasi': 'ege', 'zeytinyagli-kereviz': 'ege', 'kabak-yemegi': 'ege',
  'haydari': 'marmara', 'fava': 'ege', 'mucver': 'ege', 'yaprak-sarmasi': 'ege', 'zeytinyagli-biber-dolmasi': 'ege',
  'zeytinyagli-barbunya': 'ege', 'fasulye-pilaki': 'marmara', 'kisir': 'akdeniz', 'piyaz': 'akdeniz', 'acili-ezme': 'akdeniz',
  'humus': 'akdeniz', 'muhammara': 'akdeniz', 'mercimek-koftesi': 'guneydogu', 'ali-nazik': 'guneydogu', 'ezogelin-corbasi': 'guneydogu',
  'yayla-corbasi': 'ic-anadolu', 'tarhana-corbasi': 'ic-anadolu', 'dugun-corbasi': 'ic-anadolu', 'etli-kuru-fasulye': 'ic-anadolu',
  'kuzu-tandir': 'ic-anadolu', 'toyga-corbasi': 'ic-anadolu', 'tepsi-kebabi': 'guneydogu', 'babagannus': 'guneydogu',
  'hunkar-begendi': 'osmanli', 'cerkez-tavugu': 'marmara', 'kadinbudu-kofte': 'osmanli', 'imam-bayildi': 'osmanli',
  'firin-sutlac': 'marmara', 'kazandibi': 'osmanli', 'keskul': 'osmanli', 'gullac': 'osmanli', 'ayva-tatlisi': 'marmara',
  'kabak-tatlisi': 'marmara', 'tas-kebabi': 'osmanli', 'hasanpasa-kofte': 'osmanli', 'sekerpare': 'osmanli', 'revani': 'osmanli',
  'tel-kadayif': 'guneydogu', 'irmik-helvasi': 'genel', 'lokma': 'ege', 'atom': 'ege', 'kopoglu': 'ege', 'karniyarik': 'genel',
  'musakka': 'genel', 'saksuka': 'ege', 'cacik': 'genel', 'havuc-tarator': 'ege', 'patlican-salatasi': 'ege',
  'eksili-kofte': 'marmara', 'orman-kebabi': 'genel', 'tavuk-sis': 'guneydogu', 'gavurdagi-salatasi': 'guneydogu',
  'etli-nohut': 'ic-anadolu', 'kori-soslu-tavuk': 'hint', 'tavuk-sinitzel': 'diger-dunya', 'domatesli-makarna': 'italyan',
};

export const TARIFLER = [...ANA_TARIFLER, ...EK_TARIFLER, ...EK_TARIFLER_2, ...BOLGE_TARIFLERI, ...DUNYA_TARIFLERI]
  .map((t) => ({ ...t, mutfak: t.mutfak ?? BOLGE[t.id] ?? 'genel', adim: AYRINTILI_ADIMLAR[t.id] ?? t.adim }));

// Sofra menüleri: her satır bir yemek yuvası; uygun kategorilerden rastgele seçilir.
export const SOFRALAR = [
  {
    id: 'davet', ad: 'Davet Sofrası', emoji: '🎉',
    aciklama: 'Misafir için eksiksiz bir sofra: çorbadan tatlıya.',
    yuvalar: [
      { ad: 'Çorba', kat: ['corba'] },
      { ad: 'Ana yemek', kat: ['et', 'tavuk', 'deniz'] },
      { ad: 'Zeytinyağlı / sebze', kat: ['sebze'] },
      { ad: 'Garnitür', kat: ['garnitur'] },
      { ad: 'Meze', kat: ['meze'] },
      { ad: 'Meze', kat: ['meze'] },
      { ad: 'Tatlı', kat: ['tatli'] },
    ],
  },
  {
    id: 'iftar', ad: 'İftar Sofrası', emoji: '🌙',
    aciklama: 'Hafiften başlayan iftar düzeni: çorba, ana yemek, pilav, meze ve tatlı.',
    ek: 'Geleneksel olarak oruç hurma ya da suyla açılır; sofraya pide, zeytin ve peynir eklenir.',
    yuvalar: [
      { ad: 'Çorba', kat: ['corba'] },
      { ad: 'Ana yemek', kat: ['et', 'tavuk', 'deniz'] },
      { ad: 'Pilav / garnitür', kat: ['garnitur'] },
      { ad: 'Meze', kat: ['meze'] },
      { ad: 'Tatlı', kat: ['tatli'] },
    ],
  },
  {
    id: 'hafta-ici', ad: 'Hafta İçi Akşamı', emoji: '🏠',
    aciklama: 'Pratik üçlü: çorba, ana yemek ve yanına bir garnitür.',
    yuvalar: [
      { ad: 'Çorba', kat: ['corba'] },
      { ad: 'Ana yemek', kat: ['et', 'tavuk', 'deniz', 'sebze', 'hamur'] },
      { ad: 'Garnitür', kat: ['garnitur'] },
    ],
  },
];

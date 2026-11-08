"""Seçilen aday fotoğrafları webp'ye çevirip gorseller/yemek/ altına koyar ve js/veri/gorseller.js'i üretir.
Kullanım: python3 -I scripts/gorsel-sec.py <1. tur aday dizini> <2. tur aday dizini> <3. tur aday dizini> <4. tur aday dizini>
Seçimler elle, adayların gözle incelenmesiyle yapıldı (yanlış yemeği gösteren fotoğraflar alınmadı)."""
import json, sys, os
from PIL import Image, ImageOps

SECIM = {
  'mercimek-corbasi': 1, 'ezogelin-corbasi': 1, 'yayla-corbasi': 5, 'tarhana-corbasi': 4, 'domates-corbasi': 3,
  'sehriyeli-tavuk-corbasi': 2, 'sebze-corbasi': 1, 'karniyarik': 2, 'izmir-kofte': 3, 'hunkar-begendi': 1,
  'tas-kebabi': 3, 'etli-kuru-fasulye': 3, 'kadinbudu-kofte': 3, 'musakka': 3, 'orman-kebabi': 1,
  'firinda-patatesli-tavuk': 1, 'tavuk-sis': 2, 'tavuk-sinitzel': 1, 'zeytinyagli-taze-fasulye': 2, 'imam-bayildi': 1,
  'zeytinyagli-pirasa': 4, 'ispanak-yemegi': 2, 'turlu': 1, 'zeytinyagli-enginar': 4, 'mucver': 2, 'bezelye-yemegi': 3,
  'pirinc-pilavi': 1, 'bulgur-pilavi': 1, 'patates-puresi': 1, 'coban-salata': 1, 'mevsim-salata': 2, 'sebze-sote': 1,
  'haydari': 2, 'acili-ezme': 1, 'saksuka': 1, 'babagannus': 2, 'cacik': 1, 'firin-sutlac': 1, 'irmik-helvasi': 2,
  'kabak-tatlisi': 3, 'ayva-tatlisi': 1, 'keskul': 1, 'revani': 3, 'gullac': 2, 'dugun-corbasi': 1, 'brokoli-corbasi': 3,
  'toyga-corbasi': 1, 'ali-nazik': 1, 'etli-nohut': 1, 'kuzu-tandir': 2, 'eksili-kofte': 1, 'ev-usulu-tavuk-doner': 1,
  'kori-soslu-tavuk': 1, 'zeytinyagli-biber-dolmasi': 1, 'yaprak-sarmasi': 2, 'zeytinyagli-barbunya': 1,
  'zeytinyagli-kereviz': 3, 'fasulye-pilaki': 1, 'lahana-sarmasi': 2, 'kisir': 2, 'piyaz': 1, 'patates-salatasi': 3,
  'arpa-sehriye-pilavi': 1, 'mercimekli-bulgur': 2, 'patates-kizartmasi': 3, 'mercimek-koftesi': 1, 'semizotu-salatasi': 3,
  'girit-ezmesi': 2, 'muhallebi': 1, 'sekerpare': 1, 'supangle': 3, 'lokma': 1, 'tel-kadayif': 3, 'kazandibi': 1,
  'ispanak-corbasi': 4, 'tepsi-kebabi': 3, 'etli-taze-fasulye': 1, 'kuzu-guvec': 2, 'hasanpasa-kofte': 3,
  'tavuklu-patlican-kebabi': 2,
}
# İkinci tur (özel aramalar, scripts/gorsel-ek-sorgular.json)
SECIM2 = {
  'kremali-mantar-corbasi': 1, 'cerkez-tavugu': 1, 'kremali-mantarli-tavuk': 2, 'tavuklu-pilav': 3, 'firin-patates': 1,
  'humus': 6, 'muhammara': 1, 'firinda-tarcinli-elma': 3, 'balkabagi-corbasi': 4, 'yesil-mercimek-corbasi': 1,
  'sebzeli-tavuk-haslama': 1, 'tavuklu-bezelye': 5, 'izgara-tavuk-pirzola': 2, 'firinda-sebze': 7, 'nohutlu-pilav': 3,
  'gavurdagi-salatasi': 2, 'domatesli-makarna': 5, 'roka-salatasi': 3, 'havuc-tarator': 2, 'kopoglu': 5,
  'patlican-salatasi': 7, 'patates-corbasi': 7, 'sehriye-corbasi': 2, 'pirasa-corbasi': 6,
}
# Üçüncü tur: bölge ve dünya mutfağı tarifleri (EKSIK=1 ile toplanan adaylar)
SECIM3 = {
  'fava': 3, 'hamsi-tava': 1, 'hamsili-pilav': 1, 'karalahana-corbasi': 1, 'karalahana-sarmasi': 1, 'laz-boregi': 2,
  'akcaabat-kofte': 1, 'hamsi-kayganasi': 1, 'karadeniz-pidesi': 3, 'hamsikoy-sutlaci': 1, 'misir-ekmegi': 2,
  'tokat-kebabi': 1, 'kalamar-tava': 3, 'midye-dolma': 1, 'midye-tava': 1, 'ahtapot-salatasi': 2,
  'levrek-bugulama': 3, 'kabak-cicegi-dolmasi': 3, 'keskek': 1, 'cokertme-kebabi': 1, 'kumru': 3, 'sambali': 1,
  'ayvalik-tostu': 2, 'kuzu-kapama': 2, 'ekmek-kadayifi': 3, 'cop-sis': 3, 'adana-kebap': 2, 'tantuni': 1,
  'kunefe': 2, 'cezerye': 1, 'batirik': 1, 'anali-kizli': 1, 'belen-tava': 2, 'bici-bici': 1, 'antalya-sis-kofte': 1,
  'fellah-koftesi': 1, 'tereyagli-karides': 4, 'oruk': 1, 'iskender': 1, 'inegol-kofte': 1, 'kuru-kofte': 1,
  'tekirdag-koftesi': 1, 'balik-ekmek': 3, 'balik-corbasi': 1, 'karides-guvec': 3, 'pideli-kofte': 1,
  'etli-lahana-sarmasi': 1, 'pisi': 1, 'pacanga-boregi': 1, 'uskumru-izgara': 3, 'islama-kofte': 1,
  'kayseri-mantisi': 2, 'pastirmali-kuru-fasulye': 1, 'kayseri-yaglamasi': 1, 'etli-ekmek': 1, 'firin-kebabi': 1,
  'bamya-corbasi': 1, 'testi-kebabi': 1, 'tirit': 1, 'sac-tava': 3, 'gozleme': 2, 'su-boregi': 3, 'ciborek': 1,
  'arabasi-corbasi': 1, 'asure': 1, 'tutmac-corbasi': 1, 'kuzu-haslama': 4, 'cag-kebabi': 3, 'kadayif-dolmasi': 2,
  'ayran-asi': 2, 'kete': 1, 'abdigor-koftesi': 1, 'bozbas': 1, 'lahmacun': 1, 'icli-kofte': 2,
  'cig-kofte': 1, 'beyran': 1, 'yuvarlama': 3, 'firikli-pilav': 1, 'kaburga-dolmasi': 2, 'baklava': 1, 'katmer': 1,
  'sillik': 1, 'urfa-kebabi': 2, 'perde-pilavi': 1, 'lebeniye': 1, 'mutancana': 1, 'ayva-dolmasi': 1,
  'kuzu-incik': 1, 'elbasan-tava': 3, 'ic-pilav': 1, 'levzine': 1, 'tavuk-gogsu-tatlisi': 1, 'zerde': 2,
  'havuc-corbasi': 4, 'tavuklu-eriste-corbasi': 2, 'izgara-kofte': 3, 'kuzu-pirzola': 1, 'kuzu-sis': 2,
  'etli-kabak-dolmasi': 2, 'etli-biber-dolmasi': 1, 'et-kavurma': 2, 'dalyan-kofte': 1, 'etli-bamya': 3,
  'kuzu-yahni': 1, 'sulu-kofte': 2, 'etli-kapuska': 1, 'tavuk-durum': 1, 'balik-koftesi': 1, 'mezgit-tava': 4,
  'menemen': 2, 'zeytinyagli-bamya': 3, 'ispanakli-yumurta': 2, 'zeytinyagli-kabak-dolmasi': 1, 'kabak-kalye': 4,
  'kiymali-pide': 2, 'kusbasili-pide': 3, 'kiymali-tepsi-boregi': 2, 'ispanakli-borek': 3, 'bazlama': 1, 'pogaca': 1,
  'sigara-boregi': 1, 'tepsi-mantisi': 3, 'pirasali-borek': 3, 'puf-boregi': 1, 'acma': 4, 'domatesli-pilav': 3,
  'sehriyeli-bulgur': 4, 'sutlu-nuriye': 1, 'tulumba': 3, 'kalburabasti': 4, 'islak-kek': 1, 'mozaik-pasta': 2,
  'tahinli-corek': 2, 'cevizli-kurabiye': 1, 'pastirmali-yumurta': 2, 'mapo-tofu': 2, 'miso-corbasi': 1,
  'teriyaki-tavuk': 1, 'sushi-maki': 1, 'ramen': 2, 'tempura': 1, 'yakitori': 4, 'gyoza': 2, 'bibimbap': 1,
  'bulgogi': 1, 'japchae': 1, 'pad-thai': 1, 'tom-kha': 1, 'karbonara': 1, 'lazanya': 2, 'mantarli-risotto': 1,
  'pizza-margherita': 2, 'minestrone': 1, 'tiramisu': 1, 'panna-cotta': 1, 'bruschetta': 5, 'fettuccine-alfredo': 3,
  'ratatouille': 2, 'krep': 1, 'hachis-parmentier': 2, 'profiterol': 2, 'paella': 1, 'gazpacho': 1,
  'ispanyol-omleti': 2, 'churros': 1, 'patatas-bravas': 3, 'yunan-salatasi': 3, 'souvlaki': 1, 'yunan-musakasi': 1,
  'cevapi': 2, 'trilece': 5, 'gyros': 1, 'falafel': 1, 'maklube': 1, 'tikka-masala': 3, 'butter-chicken': 1,
  'samosa': 1, 'chana-masala': 2, 'naan': 1, 'tacos': 1, 'burrito': 1, 'guacamole': 2, 'chili-con-carne': 2,
  'quesadilla': 3, 'enchilada': 1, 'hamburger': 2, 'sezar-salata': 3, 'pancake': 1, 'mac-cheese': 3, 'fish-chips': 1,
  'coleslaw': 1, 'cheesecake': 2, 'bors': 1, 'stroganoff': 1, 'gulas': 1, 'sebzeli-kuskus': 1, 'hacapuri': 1,
  'pelmeni': 1, 'rus-salatasi': 2, 'alman-patates-salatasi': 1,
}
# Dördüncü tur: genişletilmiş dünya mutfağı tarifleri
SECIM4 = {
  'kagit-kebabi': 3, 'oyakodon': 1, 'okonomiyaki': 1, 'udon-corbasi': 2, 'tavuk-satay': 1, 'penne-arrabbiata': 1,
  'patlican-parmigiana': 2, 'ossobuco-kuzu': 1, 'gnocchi': 1, 'focaccia': 2, 'calzone': 1, 'frittata': 1,
  'biscotti': 1, 'panzanella': 2, 'croque-madame': 3, 'cikolatali-mus': 1, 'clafoutis': 1, 'crema-catalana': 1,
  'salmorejo': 1, 'arroz-con-pollo': 1, 'kleftiko': 1, 'galaktoboureko': 1, 'ajvar': 2, 'tabule': 1,
  'tavuk-shawarma': 1, 'mansaf': 1, 'foul-medames': 1, 'koshari': 2, 'labneh': 1, 'pakora': 1, 'gulab-jamun': 3,
  'fajitas': 1, 'sopa-tortilla': 2, 'pico-de-gallo': 2, 'chilaquiles': 1, 'huevos-rancheros': 2, 'carne-asada': 2,
  'ceviche': 1, 'elmali-turta': 1, 'cikolatali-cookie': 2, 'harira': 1, 'rosti': 1, 'apfelstrudel': 2,
  'isvec-koftesi': 1, 'empanada': 2,
}
UYGUN_DEGIL = ('GFDL',)

os.makedirs('gorseller/yemek', exist_ok=True)
kayit, toplam = {}, 0
for kok, secim in ((sys.argv[1], SECIM), (sys.argv[2], SECIM2), (sys.argv[3], SECIM3), (sys.argv[4], SECIM4)):
  bilgi = json.load(open(os.path.join(kok, 'aday', 'bilgi.json')))
  for tid, n in secim.items():
    assert tid not in kayit, tid
    c = next(x for x in bilgi[tid] if x['n'] == n)
    assert not any(u in c['lisans'] for u in UYGUN_DEGIL), (tid, c['lisans'])
    im = ImageOps.exif_transpose(Image.open(os.path.join(kok, 'aday', tid, f'{n}.jpg'))).convert('RGB')
    # 4:3'e ortadan kırp, 720x540'a küçült (telefon ekranı için yeterli, paket boyutu küçük kalsın)
    w, h = im.size; hedef = 4 / 3
    if w / h > hedef: yeni = int(h * hedef); im = im.crop(((w - yeni) // 2, 0, (w - yeni) // 2 + yeni, h))
    else: yeni = int(w / hedef); im = im.crop((0, (h - yeni) // 2, w, (h - yeni) // 2 + yeni))
    im = im.resize((720, 540), Image.LANCZOS)
    yol = f'gorseller/yemek/{tid}.webp'
    im.save(yol, 'WEBP', quality=68, method=6)
    toplam += os.path.getsize(yol)
    kayit[tid] = {'yazar': c['yazar'][:120], 'lisans': c['lisans'], 'lisansUrl': c['lisansUrl'], 'sayfa': c['sayfa']}
js = ('// Yemek fotoğrafları: uygulamaya gömülü (gorseller/yemek/<id>.webp). Kaynak: Wikimedia Commons.\n'
      '// Her kayıt: { yazar, lisans, lisansUrl, sayfa }. scripts/gorsel-sec.py ile üretilir; elle düzenlemeyin.\n'
      'export const GORSELLER = ' + json.dumps(kayit, ensure_ascii=False, indent=1) + ';\n')
open('js/veri/gorseller.js', 'w').write(js)
print(f'{len(kayit)} fotoğraf, toplam {toplam/1024/1024:.1f} MB')

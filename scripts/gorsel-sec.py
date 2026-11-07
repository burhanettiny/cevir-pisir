"""Seçilen aday fotoğrafları webp'ye çevirip gorseller/yemek/ altına koyar ve js/veri/gorseller.js'i üretir.
Kullanım: python3 -I scripts/gorsel-sec.py <1. tur aday dizini> <2. tur aday dizini>
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
UYGUN_DEGIL = ('GFDL',)

os.makedirs('gorseller/yemek', exist_ok=True)
kayit, toplam = {}, 0
for kok, secim in ((sys.argv[1], SECIM), (sys.argv[2], SECIM2)):
  bilgi = json.load(open(os.path.join(kok, 'aday', 'bilgi.json')))
  for tid, n in secim.items():
    assert tid not in kayit, tid
    c = next(x for x in bilgi[tid] if x['n'] == n)
    assert not any(u in c['lisans'] for u in UYGUN_DEGIL), (tid, c['lisans'])
    im = ImageOps.exif_transpose(Image.open(os.path.join(kok, 'aday', tid, f'{n}.jpg'))).convert('RGB')
    # 4:3'e ortadan kırp, 800x600'e küçült
    w, h = im.size; hedef = 4 / 3
    if w / h > hedef: yeni = int(h * hedef); im = im.crop(((w - yeni) // 2, 0, (w - yeni) // 2 + yeni, h))
    else: yeni = int(w / hedef); im = im.crop((0, (h - yeni) // 2, w, (h - yeni) // 2 + yeni))
    im = im.resize((800, 600), Image.LANCZOS)
    yol = f'gorseller/yemek/{tid}.webp'
    im.save(yol, 'WEBP', quality=74, method=6)
    toplam += os.path.getsize(yol)
    kayit[tid] = {'yazar': c['yazar'][:120], 'lisans': c['lisans'], 'lisansUrl': c['lisansUrl'], 'sayfa': c['sayfa']}
js = ('// Yemek fotoğrafları: uygulamaya gömülü (gorseller/yemek/<id>.webp). Kaynak: Wikimedia Commons.\n'
      '// Her kayıt: { yazar, lisans, lisansUrl, sayfa }. scripts/gorsel-sec.py ile üretilir; elle düzenlemeyin.\n'
      'export const GORSELLER = ' + json.dumps(kayit, ensure_ascii=False, indent=1) + ';\n')
open('js/veri/gorseller.js', 'w').write(js)
print(f'{len(kayit)} fotoğraf, toplam {toplam/1024/1024:.1f} MB')

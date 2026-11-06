# 🎡 Çevir Pişir — Bugün ne yiyoruz?

"Akşama ne pişirsem?" sorusuna eğlenceli bir cevap: kategori seç, çark dönsün, ekrana dokun — yemeğin, tarifi, kalorisi, besin dengesi ve eksik malzemelerin alışveriş listesi hazır.

## Telefona kurulum (Android)

**[⬇ Son sürümü indir (cevir-pisir.apk)](https://github.com/burhanettiny/cevir-pisir/releases/latest/download/cevir-pisir.apk)**

1. Bu bağlantıyı telefonda açın; `cevir-pisir.apk` iner.
2. İndirilen dosyaya dokunun. Telefon "bilinmeyen uygulamaları yükle" izni isterse tarayıcınıza izin verin.
3. **Yükle**'ye basın. Yeni sürümler aynı şekilde eskisinin üzerine kurulur; listeleriniz ve favorileriniz korunur.

APK, `main` dalına yapılan her değişiklikte GitHub Actions ile otomatik derlenir ve [Sürümler](https://github.com/burhanettiny/cevir-pisir/releases) sayfasında yayınlanır.

## Neler var

- **Çark:** Çorba, et, tavuk, sebze, garnitür, meze ve tatlı — isimler döner, dokununca yavaşlayıp durur. "Şansıma" tüm kategorilerden seçer.
  Arada bir 🛵 **joker** çıkar: *"Bugün senin günün, dışarıdan sipariş ver!"* (Yemeksepeti, Getir Yemek, Trendyol Yemek).
- **Tarif sayfası:** görsel (Vikipedi), 1 porsiyonun ortalama kalorisi, protein–karbonhidrat–yağ dengesi ve yorumu,
  kişi sayısına göre ölçeklenen malzemeler, adım adım tarif, YouTube'da yapılış videoları, kaynaklar.
- **Evde olanı işaretle → eksik listesi:** eksikler tek dokunuşla alışveriş listesine; market düğmeleri (Getir, Migros Hemen)
  ürün adını panoya kopyalayıp marketin arama sayfasını açar.
- **Alışveriş listesi:** birden çok tarifin malzemeleri birleşir, reyonlara ayrılır, işaretlenir, WhatsApp vb. ile paylaşılır.
- **Sofralar:** Davet, İftar ve Hafta İçi Akşamı. Menü, yüzlerce kombinasyon **puanlanarak** kurulur:
  - Türkiye Beslenme Rehberi (TÜBER 2022) enerji dağılımı: karbonhidrat %45–60, protein %10–20, yağ %20–35
  - aynı ana malzemenin tekrarından ve iki ağır yemeğin üst üste gelmesinden kaçınma
  - Türk damak tadının klasik ikilileri (kuru fasulye–pilav, karnıyarık–cacık, köfte–çoban salata…)
  - beğenmediğin tek yemeği yeniden çevirme, kişi sayısı, menünün tamamını listeye ekleme
- **🩺 Diyabetli misafir:** her yemekte porsiyon başı karbonhidrat ve eklenmiş şekere göre 🟢/🟡/🔴 etiketi.
  Sofrada iki seçenek: *menüyü ona göre kur* ya da *menü aynı kalsın, ona ayrıca seçenek sun* (ör. revani yerine fırında tarçınlı elma).
- **Yemekten sonra 😌:** yemeğe göre içecek (baklagilde rezene/kimyon çayı, acılıda ayran…), hafif yürüyüş ve esneme hareketleri,
  dikkat edilecekler ve "bu porsiyonu yakmak için kaç dakika yürümeli" hesabı.

## Hesaplama ve kaynaklar

- Kalori ve makrolar, tariflerdeki malzeme gramlarından hesaplanır (`js/veri/besinler.js`: 100 g değerleri, USDA FoodData Central ve TÜRKOMP ile uyumlu yuvarlanmış ortalamalar). Kızartmada yemeğe geçen yağ sayılır.
- Makro yüzdeleri enerjiye katkıdır (Atwater: 4/4/9 kcal/g).
- Yürüyüş süresi: ACSM formülü, ~5 km/sa yürüyüş ≈ 3,5 MET, 70 kg.
- Diyabet etiketleri ve hazım önerileri genel yol göstericidir; tıbbi öneri değildir.

## Geliştirme

```bash
npm install
npm test            # hesaplama ve veri testleri
npx serve .         # tarayıcıda dene (ya da python3 -m http.server)
npm run android     # web dosyalarını Android projesine aktar
```

Yeni tarif eklemek için `js/veri/tarifler.js` dosyasına bir kayıt ekleyin; malzemeler `js/veri/besinler.js` anahtarlarıyla yazılır, testler eksik anahtarı yakalar.

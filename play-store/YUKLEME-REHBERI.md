# Çevir Pişir — Play Store'a yükleme rehberi

Bu klasörde Play Console'a yüklemek için gereken her şey var:

| Dosya | Ne işe yarar |
|---|---|
| `magaza-metinleri.md` | Uygulama adı, kısa ve tam açıklama, sürüm notları (Türkçe + isteğe bağlı İngilizce) |
| `form-yanitlari.md` | Veri güvenliği, içerik derecelendirmesi, hedef kitle, sağlık beyanı vb. formların yanıtları |
| `gizlilik-politikasi.md` | Gizlilik politikası (Play'e bu dosyanın GitHub adresi verilir) |
| `gorseller/simge-512.png` | Uygulama simgesi (512×512, 32 bit PNG) |
| `gorseller/one-cikan-gorsel-1024x500.png` | Öne çıkan görsel (feature graphic) |
| `gorseller/ekran-*.png` | 10 telefon ekran görüntüsü (1080×1920) |

Yüklenecek paket (**AAB**) GitHub Actions tarafından otomatik derlenir; bunun için bir kez aşağıdaki 1. adımı yapmanız yeterli.

## 1. Yükleme anahtarını GitHub'a ekleyin (bir kez)

Size ayrıca verilen üç dosya: `cevir-pisir-upload.jks` (anahtar), `jks.b64` (anahtarın metin hali) ve `ANAHTAR-BILGISI.txt` (şifre).
**Bu dosyaları güvenli bir yerde saklayın, depoya koymayın.**

1. https://github.com/burhanettiny/cevir-pisir/settings/secrets/actions/new adresini açın.
2. **Name:** `YUKLEME_ANAHTARI_B64` — **Secret:** `jks.b64` dosyasının içeriğinin tamamı → *Add secret*.
3. Tekrar *New repository secret*: **Name:** `YUKLEME_ANAHTARI_SIFRE` — **Secret:** `ANAHTAR-BILGISI.txt` içindeki şifre → *Add secret*.
4. https://github.com/burhanettiny/cevir-pisir/actions → **Android APK** → *Run workflow* (ya da depoya yeni bir değişiklik gönderin).
5. Derleme bitince [Sürümler](https://github.com/burhanettiny/cevir-pisir/releases) sayfasında `cevir-pisir.apk` ile birlikte **`cevir-pisir.aab`** de görünür. Play'e yüklenecek dosya budur.

## 2. Play Console'da uygulamayı oluşturun

1. https://play.google.com/console → **Uygulama oluştur**.
   - Uygulama adı: `Çevir Pişir: Bugün Ne Yesek?` · Varsayılan dil: **Türkçe – tr-TR**
   - Uygulama · **Ücretsiz** · Beyanları onaylayın.
2. **Panel**'deki "Uygulamanızı ayarlayın" görevlerini `form-yanitlari.md`'deki yanıtlarla doldurun:
   gizlilik politikası, uygulama erişimi, reklamlar, içerik derecelendirmesi, hedef kitle, veri güvenliği, sağlık uygulamaları, devlet/finans/haber beyanları.
3. **Mağaza girişi** (Ana mağaza girişi): `magaza-metinleri.md`'deki adı, kısa ve tam açıklamayı yapıştırın; `gorseller/` klasöründeki simge, öne çıkan görsel ve ekran görüntülerini yükleyin. Kategori: **Yeme ve İçme**.

## 3. Test ve yayın

> **Yeni kişisel geliştirici hesaplarında** Google, üretime çıkmadan önce **kapalı test** ister: en az 12 test kullanıcısı, 14 gün boyunca. (Şirket hesaplarında bu şart yoktur.)

1. **Test > Kapalı test** → yeni bir kanal (ör. "Aile ve arkadaşlar") → test kullanıcılarının e-postalarını ekleyin.
2. **Yeni sürüm oluştur** → **Play Uygulama İmzalama** sorulursa *Google tarafından oluşturulan anahtarı kullan* (önerilen) → `cevir-pisir.aab` dosyasını yükleyin → sürüm notlarını `magaza-metinleri.md`'den yapıştırın → *İncelemeye gönder*.
3. 14 gün sonra **Üretim** → *Üretim erişimi için başvur* → onaylanınca aynı AAB'yi (ya da daha yenisini) üretime yükleyin.

## Güncellemeler

Depoya her değişiklik gönderildiğinde Actions yeni bir sürüm numarasıyla (`versionCode` = derleme numarası) APK ve AAB üretir. Play Console'da **Yeni sürüm oluştur** deyip en yeni `cevir-pisir.aab`'yi yüklemeniz yeterli.

## Notlar

- Paket adı: `io.github.burhanettiny.cevirpisir` (yayından sonra değiştirilemez).
- En düşük Android sürümü: 7.0 (API 24) · Hedef API: 36.
- Yükleme anahtarını kaybederseniz: Play Console → *Test ve yayınla > Uygulama bütünlüğü > Uygulama imzalama* → **Yükleme anahtarını sıfırlama isteği**.
- Ekran görüntülerinde yemek görselleri yerine çizimler görünüyor; uygulama internete bağlıyken Vikipedi fotoğraflarını gösterir. İsterseniz telefondan kendi ekran görüntülerinizi de yükleyebilirsiniz (9:16, en az 1080 px önerilir).

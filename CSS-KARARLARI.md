# CSS Kararları – LAB-3

## Breakpoint Seçimi
Mobil-first yaklaşım kullanıldı.
- 0–639px: Mobil
- 640px+: Tablet
- 1024px+: Masaüstü

## Layout Tercihleri
Header ve navigasyon için Flexbox kullanıldı.
Proje kartları için CSS Grid tercih edildi (auto-fit + minmax).

## Design Tokens
Renk, spacing ve typography değerleri :root altında değişken olarak tanımlandı.
Tekrarlayan sabit değerler kaldırıldı.

## Typography
Clamp() kullanılarak fluid typography uygulandı.
Başlık ve body font boyutları ekran genişliğine göre ölçeklenmektedir.

## Responsive Strateji
Media query'ler mobile-first olarak yazıldı.
Grid yapısı küçük ekranlarda tek sütun, geniş ekranlarda çok sütun olacak şekilde tasarlandı.

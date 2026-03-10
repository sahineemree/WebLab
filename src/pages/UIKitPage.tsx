import { Alert } from "../components/Alert"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Input } from "../components/Input"

export function UIKitPage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl space-y-10 px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-violet-600 dark:text-violet-400">
          LAB-4
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          UI Kit
        </h1>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Bu sayfada yeniden kullanılabilir arayüz bileşenleri ve varyantları
          sergilenmektedir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Inputs
          </h2>

          <Input id="input-1" label="Normal Input" placeholder="Metin girin" />
          <Input
            id="input-2"
            label="Hintli Input"
            placeholder="mail@example.com"
            hint="Geçerli bir e-posta adresi giriniz."
          />
          <Input
            id="input-3"
            label="Hatalı Input"
            placeholder="Hatalı alan"
            error="Bu alan zorunludur."
          />
          <Input
            id="input-4"
            label="Pasif Input"
            placeholder="Devre dışı"
            disabled
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Alerts
          </h2>

          <Alert title="Bilgi" variant="info">
            Bu bir bilgilendirme mesajıdır.
          </Alert>
          <Alert title="Başarılı" variant="success">
            İşlem başarıyla tamamlandı.
          </Alert>
          <Alert title="Uyarı" variant="warning">
            Devam etmeden önce bilgileri kontrol edin.
          </Alert>
          <Alert title="Hata" variant="error">
            Bir sorun oluştu. Lütfen tekrar deneyin.
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Cards
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Elevated Card" variant="elevated">
            <p>
              Gölge efektli kart varyantı. Öne çıkan içerik alanlarında
              kullanılabilir.
            </p>
          </Card>

          <Card title="Outlined Card" variant="outlined">
            <p>
              Çerçeveli kart varyantı. Daha sade ve düzenli bölümlerde tercih
              edilebilir.
            </p>
          </Card>

          <Card title="Filled Card" variant="filled">
            <p>
              Dolgulu kart varyantı. Arka plan ayrımı gereken yapılarda
              kullanılabilir.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
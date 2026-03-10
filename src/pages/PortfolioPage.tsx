import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Input } from "../components/Input"

export function PortfolioPage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl space-y-12 px-6 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Kişisel Portföy
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Emre Şahin
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Web Tasarımı ve Programlama dersi kapsamında hazırlanan bu portföy;
            semantik yapı, erişilebilirlik, responsive tasarım ve modern arayüz
            bileşenleri üzerine geliştirilmiştir.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              HTML
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              CSS
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              React
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              TypeScript
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Tailwind CSS
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Projeler
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Ders sürecinde tamamlanan laboratuvar çalışmalarının özeti.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card title="LAB-1 Temel Kurulum" variant="elevated">
            <p>
              Proje kurulumu, geliştirme ortamı hazırlığı, Git akışı ve GitHub’a
              yükleme süreçleri tamamlandı.
            </p>
            <Button variant="secondary">Detay</Button>
          </Card>

          <Card title="LAB-2 Semantik Portföy" variant="outlined">
            <p>
              Semantik HTML, erişilebilirlik kuralları, form yapısı ve kullanıcı
              odaklı içerik düzeni uygulandı.
            </p>
            <Button variant="secondary">Detay</Button>
          </Card>

          <Card title="LAB-3 Responsive Tasarım" variant="filled">
            <p>
              Responsive düzen, breakpoint yapısı, design tokens ve ekran
              görüntüleri ile mobil-öncelikli tasarım geliştirildi.
            </p>
            <Button variant="secondary">Detay</Button>
          </Card>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Hakkımda
          </h2>
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Bu proje, hem teknik gelişimimi göstermek hem de ders kapsamında
            yapılan çalışmaları düzenli bir yapıda sunmak amacıyla hazırlanmıştır.
          </p>
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Hedefim; sade, okunabilir, erişilebilir ve modern bir kullanıcı
            deneyimi sunan arayüzler geliştirmektir.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-white">
            İletişim
          </h2>

          <form className="space-y-4">
            <Input id="name" label="Ad Soyad" placeholder="Adınızı girin" />
            <Input
              id="email"
              label="E-posta"
              placeholder="mail@example.com"
              type="email"
            />
            <Input id="subject" label="Konu" placeholder="Konu başlığı" />
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-900 dark:text-slate-100"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Mesajınızı yazın"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Mesaj Gönder
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
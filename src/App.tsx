
import "./App.css";

export default function App() {
  return (
    <>
      {/* Skip link */}
      <a className="skip-link" href="#main-content">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <div className="container">
          <h1>Emre Şahin – Kişisel Portföy (LAB-2)</h1>

          <nav aria-label="Ana navigasyon">
            <ul className="nav-list">
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <figure className="profile">
            {/* İstersen sonra gerçek foto ekleriz. Şimdilik dekoratif ikon da olabilir */}
            <img
              src="/vite.svg"
              alt="Emre Şahin profil görseli"
              width={96}
              height={96}
            />
            <figcaption>
              <p><strong>Ad Soyad:</strong> Emre Şahin</p>
              <p><strong>Öğrenci No:</strong> 235541015</p>
            </figcaption>
          </figure>

          <p>
            Merhaba! Bu sayfa Web Tasarımı ve Programlama dersi LAB-2 kapsamında
            semantik HTML ve erişilebilirlik kurallarına uygun olarak hazırlanmıştır.
          </p>

          <h3>Teknolojiler</h3>
          <ul>
            <li>HTML5 (Semantik)</li>
            <li>CSS</li>
            <li>React + TypeScript</li>
            <li>Vite</li>
          </ul>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projeler</h2>

          <div className="cards">
            <article className="card" aria-labelledby="p1-baslik">
              <h3 id="p1-baslik">WebLab – LAB-1 Temel Kurulum</h3>
              <p>
                Vite + React + TypeScript ile proje oluşturma, Git iş akışı, branch/commit ve GitHub’a push.
              </p>
              <p><strong>Kullanılanlar:</strong> React, TypeScript, Vite, Git</p>
              <a href="https://github.com/sahineemree/WebLab" target="_blank" rel="noreferrer">
                Repo’yu aç
              </a>
            </article>

            <article className="card" aria-labelledby="p2-baslik">
              <h3 id="p2-baslik">Semantik Portföy Sayfası (LAB-2)</h3>
              <p>
                Semantik etiketler, skip link, form etiketleme ve Lighthouse erişilebilirlik hedefiyle hazırlanmış portföy sayfası.
              </p>
              <p><strong>Kullanılanlar:</strong> HTML Semantics, A11y, CSS</p>
              <a href="#iletisim">İletişime git</a>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          <form className="contact-form" noValidate>
            <div className="field">
              <label htmlFor="name">Ad Soyad</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                aria-describedby="name-error"
              />
              <small id="name-error" className="error-msg" role="alert"></small>
            </div>

            <div className="field">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-describedby="email-error"
              />
              <small id="email-error" className="error-msg" role="alert"></small>
            </div>

            <div className="field">
              <label htmlFor="subject">Konu</label>
              <select
                id="subject"
                name="subject"
                required
                aria-describedby="subject-error"
                defaultValue=""
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                <option value="genel">Genel</option>
                <option value="proje">Proje</option>
                <option value="diger">Diğer</option>
              </select>
              <small id="subject-error" className="error-msg" role="alert"></small>
            </div>

            <div className="field">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                aria-describedby="message-error"
              />
              <small id="message-error" className="error-msg" role="alert"></small>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Emre Şahin</p>
        </div>
      </footer>
    </>

  );
}
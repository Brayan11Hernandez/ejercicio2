import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="logo">BH</div>
          <div>
            <h1>Brayan Hernández</h1>
            <p>Aplicación estática con Vite + React + AWS CloudFront</p>
          </div>
        </div>

        <a className="btn" href="#proyectos">
          Ver proyectos
        </a>
      </header>

      <main className="main">
        <section className="card">
          <h2>Sobre esta app</h2>
          <p>
            Esta es una aplicación web sencilla y estática creada con Vite. Se
            despliega automáticamente a AWS S3 y se distribuye por CloudFront
            mediante GitHub Actions.
          </p>

          <div className="chips">
            <span>Vite</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>AWS S3</span>
            <span>CloudFront</span>
            <span>Doppler</span>
          </div>
        </section>

        <section id="proyectos" className="grid">
          <article className="card">
            <h3>Pipeline CI/CD</h3>
            <p>
              Build → Upload a S3 → Invalidate CloudFront para ver cambios al
              instante.
            </p>
          </article>

          <article className="card">
            <h3>Seguridad de secretos</h3>
            <p>
              Variables protegidas en Doppler y token de acceso guardado en
              GitHub Secrets.
            </p>
          </article>

          <article className="card">
            <h3>CDN público</h3>
            <p>
              El sitio queda accesible para cualquier persona desde la URL
              pública de CloudFront.
            </p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Brayan Hernández · Assignment-02
        </p>
      </footer>
    </div>
  );
}

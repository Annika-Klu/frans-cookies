import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner">

        <div className="brand">
          <h3>Fran's Cookies</h3>
          <p>freshly handmade</p>
        </div>

        <nav className="links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

      </div>
    </footer>
  );
}
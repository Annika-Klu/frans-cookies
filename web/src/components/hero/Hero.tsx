import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="overlay" />

      <div className="content">
        <h1 className="logo">Fran’s Cookies</h1>

        <p className="claim">freshly handmade</p>

        <div className="links">
          <Link href="#entdecken">Entdecken</Link>
          <Link href="#probieren">Probieren</Link>
        </div>
      </div>
    </header>
  );
}
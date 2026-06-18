"use client";

import "./CookieSection.css";
import { useEffect, useState } from "react";
import CookieCarousel from "./CookieCarousel";
import CookiePriceList from "./CookiePriceList";
import { client, urlFor } from "@/sanity/client";
import { Cookie, CookieViewModel } from "@/types/cookies";
import { isNew } from "@/utils";

export default function Cookies() {
  const [cookies, setCookies] = useState<CookieViewModel[]>([]);
  const [view, setView] = useState<"gallery" | "list">("gallery");
  useEffect(() => {
    client.fetch(`*[_type == "cookie"]`).then((data: Cookie[]) => {
      const formatted = data.map((cookie) => ({
        name: cookie.name,
        price: cookie.price,
        isNew: isNew(cookie._createdAt),
        description: cookie.description,
        image: urlFor(cookie.image?.asset?._ref).width(300).url(),
      }));

      setCookies(formatted);
    });
  }, []);

  if (!cookies.length) {
    return <p>Cookies werden geladen ...</p>;
  }

  return (
    <section id="entdecken" className="wrap">
      <h2>Entdecken</h2>

      <div className="view-switch">
        <button
          onClick={() => setView("gallery")}
          disabled={view === "gallery"}
        >
          Galerie
        </button>

        <button
          onClick={() => setView("list")}
          disabled={view === "list"}
        >
          Preisliste
        </button>
      </div>

      {view === "gallery" ? (
        <CookieCarousel cookies={cookies} />
      ) : (
        <CookiePriceList cookies={cookies} />
      )}
    </section>
  );
}
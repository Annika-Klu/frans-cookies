"use client";

import { useState } from "react";

const locations = [
  {
    name: "München – Glockenbach",
    address: "Ickstattstraße 1, 80469 München",
    image:
      "https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?w=600&auto=format&fit=crop&w=800&q=80",
    delivery: {
      wolt: "#",
      uberEats: "#",
      lieferando: "#",
    },
  },
  {
    name: "München – Schwabing",
    address: "Leopoldstraße 45, 80802 München",
    image:
      "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600&auto=format&fit=crop&w=800&q=80",
    delivery: {
      wolt: "#",
      uberEats: "#",
    },
  },
  {
    name: "München – Sendling",
    address: "Daiserstraße 12, 81371 München",
    image:
      "https://images.unsplash.com/photo-1611693088055-f20ef834328a?w=600?auto=format&fit=crop&w=800&q=80",
    delivery: {
      lieferando: "#",
    },
  },
  {
    name: "München – Wochenmarkt",
    address: "Daiserstraße, 81371 München, Dienstags 10-12. Standort in unserer Instagram-Stroy",
    image:
      "https://images.unsplash.com/photo-1611693088055-f20ef834328a?w=600?auto=format&fit=crop&w=800&q=80",    
  },
];

export default function LocationSection() {
  const [active, setActive] = useState(0);

  const current = locations[active];

  return (
    <section id="probieren" className="wrap">
      <h2>Probieren</h2>

      <div className="layout">

        {/* LIST */}
        <div className="list">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`item ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <h3>{loc.name}</h3>

              {i === active && (
                <>
                  <p className="address">{loc.address}</p>

                  {loc.delivery && (
                    <div className="delivery">
                        <span>Lieferung: </span>

                        {loc.delivery.wolt && (
                        <a href={loc.delivery.wolt}>Wolt</a>
                        )}

                        {loc.delivery.uberEats && (
                        <a href={loc.delivery.uberEats}>Uber Eats</a>
                        )}

                        {loc.delivery.lieferando && (
                        <a href={loc.delivery.lieferando}>Lieferando</a>
                        )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <div className="image">
          <img src={current.image} alt={current.name} />
        </div>

      </div>

      <style jsx>{`
        .wrap {
          padding: 100px 40px;
          background: #fafafa;
          text-align: center;
        }

        .layout {
          display: flex;
          justify-content: center;
          gap: 60px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .list {
          max-width: 420px;
          text-align: left;
        }

        .item {
          padding: 14px 16px;
          border-left: 3px solid transparent;
          cursor: pointer;
          transition: 0.2s;
        }

        .item:hover {
          background: white;
        }

        .item.active {
          border-left: 3px solid #ff4fa3;
          background: white;
        }

        .item h3 {
          font-size: 16px;
          margin: 0;
        }

        .address {
          font-size: 13px;
          color: #555;
          margin-top: 6px;
        }

        .delivery {
          margin-top: 10px;
          font-size: 13px;
        }

        .delivery a {
          margin-right: 12px;
          color: #ff4fa3;
          font-weight: 600;
        }

        .image img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 16px;
          border: 2px solid #0b1b3a;
        }

        @media (max-width: 768px) {
          .image {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
"use client";

import CookieCard from "./CookieCard";
import type { Cookie } from "@/types/cookies";
import { useState } from "react";

type Props = {
  cookies: Cookie[];
};

export default function CookiePriceList({ cookies }: Props) {
    const [search, setSearch] = useState("");
    
    const filteredCookies = cookies.filter((cookie) =>
        [cookie.name, cookie.description].find(text => text?.toLowerCase().includes(search.toLowerCase()))
    );
    
    return (
    <>
        <input
            className="search"
            type="text"
            placeholder="Suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <div className="price-list">
        {filteredCookies.map((cookie) => (
            <CookieCard
            key={cookie.name}
            cookie={cookie}
            showDetails={true}
            outline
            size="sm"
            />
        ))}
        </div>
    </>
    );
}
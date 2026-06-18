"use client";

import { useState } from "react";
import CookieCard from "./CookieCard";
import { Cookie } from "@/types/cookies";

type Props = {
  cookies: Cookie[];
}

export default function CookieCarousel({ cookies }: Props) {
  const [index, setIndex] = useState(0);

  if (!cookies.length) return null;

  const canLoop = cookies.length > 2;

  const showSideCards = cookies.length > 2;

  const canGoPrev = canLoop || index > 0;
  const canGoNext = canLoop || index < cookies.length - 1;

  const next = () => {
    setIndex((i) => {
      if (!canLoop) return Math.min(i + 1, cookies.length - 1);
      return (i + 1) % cookies.length;
    });
  };

  const prev = () => {
    setIndex((i) => {
      if (!canLoop) return Math.max(i - 1, 0);
      return (i - 1 + cookies.length) % cookies.length;
    });
  };

  const current: Cookie = cookies[index];

  const left =
    index > 0
      ? cookies[index - 1]
      : canLoop
        ? cookies[cookies.length - 1]
        : null;

  const right =
    index < cookies.length - 1
      ? cookies[index + 1]
      : canLoop
        ? cookies[0]
        : null;

  return (
    <div className="carousel">

        <div className="side">
          {canGoPrev && (
            <button onClick={prev}>‹</button>
          )}

          {showSideCards && left && (
            <CookieCard cookie={left} />
          )}
        </div>

        <div className="main">
          <img src={current.image} alt={current.name} />
          <h3>{current.name}</h3>
          <p>{current.description}</p>
        </div>

        <div className="side">
          {showSideCards && right && (
            <CookieCard cookie={right} />
          )}

          {canGoNext && (
            <button onClick={next}>›</button>
          )}
        </div>

      </div>
  );
}
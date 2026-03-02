import React from "react";

export default function Home() {
  return (
    <section className="home">
      <div className="archipelago">
        <img
          src="/images/tetris-paintings.png"
          alt="Paintings cluster one"
          className="archipelago-image image-a"
          loading="eager"
          fetchpriority="high"
        />
        <img
          src="/images/tetris-paintings-2.png"
          alt="Paintings cluster two"
          className="archipelago-image image-b"
          loading="eager"
          fetchpriority="high"
        />
        <img
          src="/images/sam.png"
          alt="Sam painting"
          className="archipelago-image image-c"
          loading="eager"
        />
        <img
          src="/images/cameron.png"
          alt="Cameron painting"
          className="archipelago-image image-d"
          loading="eager"
        />
        <img
          src="/images/betsy-2.png"
          alt="Betsy painting"
          className="archipelago-image image-e"
          loading="eager"
        />
        <img
          src="/images/goop-jars.jpeg"
          alt="Goop jars"
          className="archipelago-image image-f"
          loading="eager"
        />
      </div>
    </section>
  );
}
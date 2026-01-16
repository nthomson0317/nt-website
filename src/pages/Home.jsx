import React from "react";


export default function Home() {
  return (
    <section className="home">
      <div className="archipelago">
        <img
          src="/images/tetris-paintings.png"
          alt="Paintings cluster one"
          className="archipelago-image image-a"
        />
        <img
          src="/images/tetris-paintings-2.png"
          alt="Paintings cluster two"
          className="archipelago-image image-b"
        />
      </div>
    </section>
  );
}

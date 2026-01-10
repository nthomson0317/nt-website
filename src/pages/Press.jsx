import React from "react";
import PressCard from "../components/PressCard";

export default function Press() {
  const articles = [
    { title: "Circling", link: "https://circlingcircling.substack.com/p/nicholas-thomson-finds-cat-hairs" },
    // add more
  ];

  return (
    <section className="press">
      <h2>Press</h2>
      <ul>
        {articles.map((a, i) => (
          <PressCard key={i} article={a} />
        ))}
      </ul>
    </section>
  );
}

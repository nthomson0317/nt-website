import React from "react";
import CoverCard from "../components/CoverCard";

export default function Covers() {
  const covers = [
    { title: "Sewanee Review, fall 2025", imageUrl: "/images/sewanee-cover.jpeg" },

    // add more
  ];

  return (
    <section className="gallery">
      <h2>Magazine Covers</h2>
      <div className="grid">
        {covers.map((c, i) => (
          <CoverCard key={i} cover={c} />
        ))}
      </div>
    </section>
  );
}

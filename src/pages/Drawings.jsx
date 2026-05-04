import React from "react";
import DrawingCard from "../components/DrawingCard";

export default function Drawings() {
  const drawings = [
    { title: "Graphite on toned paper", imageUrl: "/images/drawings/drawing-1.webp" },
    { title: "Graphite on toned paper", imageUrl: "/images/drawings/drawing-2.webp" },
    { title: "Graphite on toned paper", imageUrl: "/images/drawings/drawing-3.webp" },
    { title: "Graphite on toned paper", imageUrl: "/images/drawings/drawing-4.webp" },
  ];

  return (
    <section className="gallery">
      <h2>Drawings</h2>
      <div className="grid">
        {drawings.map((d, i) => (
          <DrawingCard key={i} drawing={d} />
        ))}
      </div>
    </section>
  );
}

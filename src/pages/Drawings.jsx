import React from "react";
import DrawingCard from "../components/DrawingCard";

export default function Drawings() {
  const drawings = [
    { title: "Sunset Dream", imageUrl: "/images/drawing-1.jpg" },
    { title: "Quiet River", imageUrl: "/images/drawing-2.jpg" },
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

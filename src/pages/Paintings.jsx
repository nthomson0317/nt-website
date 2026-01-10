import React from "react";
import PaintingCard from "../components/PaintingCard";

export default function Paintings() {
  const paintings = [
    { title: "Annie Interior", imageUrl: "/images/annie-red-chairs.jpg" },
    { title: "Still Life for C and K", imageUrl: "/images/still-life-1.jpg" },
    { title: "Annie interior", imageUrl: "/images/annie-interior-2.jpeg" }, 
    { title: "The Cat Trappers", imageUrl: "/images/cat-trappers.jpeg" },
    { title: "Annie Interior", imageUrl: "/images/annie-interior.jpeg" },
    { title: "Andrew Weber", imageUrl: "/images/andrew-weber.png" },
    { title: "Simon Geballe", imageUrl: "/images/simon-geballe.png" },
    { title: "Self Portrait", imageUrl: "/images/self-portrait.png" },
    { title: "Doorway", imageUrl: "/images/doorway-1.jpg" }  
    
    
    
    // add more
  ];

  return (
    <section className="gallery">
      <h2>Paintings</h2>
      <div className="grid">
        {paintings.map((p, i) => (
          <PaintingCard key={i} painting={p} />
        ))}
      </div>
    </section>
  );
}

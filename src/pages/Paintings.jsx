import React from "react";
import PaintingCard from "../components/PaintingCard";

const pleinAir = [
  { title: "Doorway", imageUrl: "/images/plein-air/doorway-1.webp" },
  { title: "Green-Wood Cemetery", imageUrl: "/images/plein-air/green-wood-cemetery-1.webp" },
  { title: "Green-Wood Cemetery", imageUrl: "/images/plein-air/green-wood-cemetery-2.webp" },
  { title: "Souler Powered", imageUrl: "/images/plein-air/souler-powered.webp" },
];

const interiors = [
  { title: "Annie Asleep", imageUrl: "/images/interiors/annie-asleep.webp" },
  { title: "Annie Interior", imageUrl: "/images/interiors/annie-interior.webp" },
  { title: "Annie Red Chairs", imageUrl: "/images/interiors/annie-red-chairs.webp" },
  { title: "Betsy", imageUrl: "/images/interiors/betsy-2.webp" },
  { title: "The Cat Trappers", imageUrl: "/images/interiors/cat-trappers.webp" },
];

const stillLifes = [
  { title: "Still Life", imageUrl: "/images/still-lifes/still-life-1.webp" },
  { title: "Cherries", imageUrl: "/images/still-lifes/cherries.webp" },
  { title: "Silver and Pomegranates", imageUrl: "/images/still-lifes/silver-and-pomegranates.webp" },
  { title: "Skull and Plants", imageUrl: "/images/still-lifes/skull-and-plants.webp" },
  { title: "Thanksgiving", imageUrl: "/images/still-lifes/thanksgiving.webp" },
];

const portraits = [
  { title: "Graham", imageUrl: "/images/portraits/graham.webp" },
  { title: "NT", imageUrl: "/images/portraits/nt-1.webp" },
  { title: "NT", imageUrl: "/images/portraits/nt-2.webp" },
  { title: "NT", imageUrl: "/images/portraits/nt-3.webp" },
  { title: "Ruben", imageUrl: "/images/portraits/ruben.webp" },
  { title: "Sam", imageUrl: "/images/portraits/sam.webp" },
  { title: "Self Portrait", imageUrl: "/images/portraits/self-portrait.webp" },
  { title: "Trevor", imageUrl: "/images/portraits/trevor.webp" },
  { title: "Weber", imageUrl: "/images/portraits/weber.webp" },
];

export default function Paintings() {
  return (
    <section className="gallery">
      <h2>Paintings</h2>

      <h3 className="section-subheading">Plein Air</h3>
      <div className="grid">
        {pleinAir.map((p, i) => <PaintingCard key={i} painting={p} />)}
      </div>

      <h3 className="section-subheading">Interiors</h3>
      <div className="grid">
        {interiors.map((p, i) => <PaintingCard key={i} painting={p} />)}
      </div>

      <h3 className="section-subheading">Still Lifes</h3>
      <div className="grid">
        {stillLifes.map((p, i) => <PaintingCard key={i} painting={p} />)}
      </div>

      <h3 className="section-subheading">Portraits</h3>
      <div className="grid">
        {portraits.map((p, i) => <PaintingCard key={i} painting={p} />)}
      </div>
    </section>
  );
}

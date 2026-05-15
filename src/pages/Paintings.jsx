import React from "react";
import PaintingCard from "../components/PaintingCard";

const pleinAir = [
  { title: "Doorway", details: '9x12" oil on canvas board', imageUrl: "/images/plein-air/doorway-1.webp" },
  { title: "Green-Wood Cemetery", details: '8x12" oil on canvas board', imageUrl: "/images/plein-air/green-wood-cemetery-1.webp" },
  { title: "Green-Wood Cemetery", details: '9x12" oil on canvas board', imageUrl: "/images/plein-air/green-wood-cemetery-2.webp" },
  { title: "Souler Powered", details: '14x12" oil on canvas board', imageUrl: "/images/plein-air/souler-powered.webp" },
];

const interiors = [
  { title: "Annie Asleep", details: '8x12" oil on canvas board', imageUrl: "/images/interiors/annie-asleep.webp" },
  { title: "Annie Interior", details: '24x16" oil on canvas', imageUrl: "/images/interiors/annie-interior.webp" },
  { title: "Annie Red Chairs", details: '24x16" oil on stretched linen', imageUrl: "/images/interiors/annie-red-chairs.webp" },
  { title: "Betsy", details: '16x24" oil on stretched linen', imageUrl: "/images/interiors/betsy-2.webp" },
  { title: "The Cat Trappers", details: '18x24" oil on stretched linen', imageUrl: "/images/interiors/cat-trappers.webp" },
];

const stillLifes = [
  { title: "Still Life", details: '24x26" oil on stretched linen', imageUrl: "/images/still-lifes/still-life-1.webp" },
  { title: "Cherries", details: '8x10" oil on canvas board', imageUrl: "/images/still-lifes/cherries.webp" },
  { title: "Silver and Pomegranates", details: '14x18" oil on canvas board', imageUrl: "/images/still-lifes/silver-and-pomegranates.webp" },
  { title: "Skull and Plants", details: '14x18" oil on canvas board', imageUrl: "/images/still-lifes/skull-and-plants.webp" },
  { title: "Thanksgiving", details: '11x14" oil on canvas board', imageUrl: "/images/still-lifes/thanksgiving.webp" },
];

const portraits = [
  { title: "Graham", details: '12x16" oil on canvas board', imageUrl: "/images/portraits/graham.webp" },
  { title: "Self portrait", details: '8x12" oil on canvas board', imageUrl: "/images/portraits/nt-1.webp" },
  { title: "Self portrait", details: '8x12" oil on canvas board', imageUrl: "/images/portraits/nt-2.webp" },
  { title: "Self portrait", details: '8x12" oil on canvas board', imageUrl: "/images/portraits/nt-3.webp" },
  { title: "Ruben", details: '12x16" oil on canvas board', imageUrl: "/images/portraits/ruben.webp" },
  { title: "Sam", details: '18x24" oil on stretched linen', imageUrl: "/images/portraits/sam.webp" },
  { title: "Self Portrait", details: '8x12" oil on canvas board', imageUrl: "/images/portraits/self-portrait.webp" },
  { title: "Trevor", details: '12x16" oil on canvas board', imageUrl: "/images/portraits/trevor.webp" },
  { title: "Weber", details: '12x16" oil on canvas board', imageUrl: "/images/portraits/weber.webp" },
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

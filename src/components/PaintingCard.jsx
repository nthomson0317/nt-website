import React from "react";

export default function PaintingCard({ painting }) {
  return (
    <div className="card">
      <img src={painting.imageUrl} alt={painting.title} />
      <h3>{painting.title}</h3>
    </div>
  );
}

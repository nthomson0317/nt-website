import React from "react";

export default function DrawingCard({ drawing }) {
  return (
    <div className="card">
      <img src={drawing.imageUrl} alt={drawing.title} />
      <h3>{drawing.title}</h3>
    </div>
  );
}

import React from "react";

export default function CoverCard({ cover }) {
  return (
    <div className="card">
      <img src={cover.imageUrl} alt={cover.title} />
      <h3>{cover.title}</h3>
    </div>
  );
}

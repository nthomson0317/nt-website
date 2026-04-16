import React from "react";

export default function CoverCard({ cover }) {
  return (
    <div className="card">
      {cover.link ? (
        <a href={cover.link} target="_blank" rel="noopener noreferrer">
          <img src={cover.imageUrl} alt={cover.title} />
        </a>
      ) : (
        <img src={cover.imageUrl} alt={cover.title} />
      )}
      <h3>{cover.title}</h3>
    </div>
  );
}

import React from "react";

export default function PressCard({ article }) {
  return (
    <li className="press-item">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        {article.imageUrl && (
          <img src={article.imageUrl} alt={article.title} className="press-image" />
        )}
        <h3>{article.title}</h3>
      </a>
    </li>
  );
}

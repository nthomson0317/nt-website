import React from "react";

export default function PressCard({ article }) {
  return (
    <li className="press-item">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        {article.title}
      </a>
    </li>
  );
}

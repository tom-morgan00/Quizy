import React from 'react';

export default function Category({ category, pressHandler }) {
  return (
    <li
      className="category"
      onClick={() => pressHandler(category.id, category.name)}
    >
      {category.name}
    </li>
  );
}

import React from "react";

export default function Card({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>

      {product.description && (
        <p>{product.description}</p>
      )}
    </div>
  );
}
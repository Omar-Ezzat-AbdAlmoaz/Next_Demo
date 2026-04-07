import React from "react";

export default function Card({ product }) {
  return (
    <div
      style={{
        border: "1px solid #c3c5c7",
        borderRadius: "12px",
        padding: "16px",
        margin: "10px",
        width: "250px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
        backgroundColor: "#fff",
      }}
    >

      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.name}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
      )}

      <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#0c4c39" }}>
        {product.id}
      </h3>
      <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#0c4c39" }}>
        {product.title || product.name}
      </h3>

      <p
        style={{
          color: "#16a34a",
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        ${product.price}
      </p>

      {product.description && (
        <p
          style={{
            fontSize: "14px",
            color: "#3c3e42",
          }}
        >
          {product.description.substring(0, 60)}...
        </p>
      )}
    </div>
  );
}
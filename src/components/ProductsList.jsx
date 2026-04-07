import Card from "./Card";
import React from "react";

export default function ProductsList({ products }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((p) => (
                <Card key={p.id} product={p} />
            ))}
        </div>
    );
}
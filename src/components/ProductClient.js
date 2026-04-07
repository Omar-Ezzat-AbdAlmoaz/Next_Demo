import { useEffect, useState } from "react";
import Card from "./Card";

export default function ProductClient() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/2")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Card product={product} />
    </div>
  );
}
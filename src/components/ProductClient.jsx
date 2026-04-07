import { useEffect, useState } from "react";
import Card from "./Card";

export default function ProductClient({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!productId) return <p>Enter Product ID</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>Product Result</h2>
      <Card product={product} />
    </div>
  );
}
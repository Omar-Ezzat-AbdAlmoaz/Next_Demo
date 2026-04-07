import { useState } from "react";
import ProductClient from "../../components/ProductClient";

export default function ProductForm() {
  const [inputId, setInputId] = useState("");
  const [productId, setProductId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductId(inputId);
  };

  return (
    <div>
      <h2>Search Product by ID</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Product ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />

        <br /><br />

        <button type="submit">Search</button>
      </form>

      <hr />
      <ProductClient productId={productId} />
    </div>
  );
}
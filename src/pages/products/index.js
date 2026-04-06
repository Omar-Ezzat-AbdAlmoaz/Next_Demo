import Link from "next/link";
import Card from "../../components/Card";

export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, description: "A high-performance laptop for all your needs." },
    { id: 2, name: "Phone", price: 599.99, description: "A sleek smartphone for everyday use." },
    { id: 3, name: "Headset", price: 199.99, description: "Wireless headphones for immersive audio." },
  ];

  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "flex" }}>
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <div>
              <Card product={p} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
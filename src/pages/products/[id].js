import { useRouter } from "next/router";
import Card from "../../components/Card";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
        <h2>Product Details</h2>
        <Card product={{ id, name: `Product ${id}`, price: 99.99, description: "This is a great product." }} />
    </div>
  );
}
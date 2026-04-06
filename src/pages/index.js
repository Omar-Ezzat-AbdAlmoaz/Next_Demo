import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <Link href="/products">Go to Products</Link>
    </div>
  );
}
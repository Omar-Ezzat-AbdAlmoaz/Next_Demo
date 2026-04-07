import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>My Store</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link href="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>

        <Link
          href="/products/form"
          style={{
            backgroundColor: "#22c55e",
            padding: "6px 12px",
            borderRadius: "6px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Get Product
        </Link>
      </div>
    </nav>
  );
}
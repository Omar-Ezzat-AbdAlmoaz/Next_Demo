import ProductsList from "../../components/ProductsList";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}

export default function ProductsPage({ products }) {
  return <ProductsList products={products} />;
}
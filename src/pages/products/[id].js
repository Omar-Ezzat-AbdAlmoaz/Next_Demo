import ProductDetails from "../../components/ProductDetails";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  return <ProductDetails product={product} />;
}
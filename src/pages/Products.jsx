import ProductCard from "../pages/ProductCard";
import useProducts from "../hooks/useProducts";

function Products() {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <h2>Loading Products...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;

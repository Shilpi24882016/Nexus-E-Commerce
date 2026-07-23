import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <img src={product.image} alt={product.title} width="300" />

      <h1>{product.title}</h1>

      <h2>₹ {product.price}</h2>

      <p>{product.description}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductDetails;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products";
import { useCart } from "../context/CartContext";

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

  const { dispatch } = useCart();

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <img src={product.image} alt={product.title} width="300" />

      <h1>{product.title}</h1>

      <h2>₹ {product.price}</h2>

      <p>{product.description}</p>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          })
        }
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductImage } from "../utils/productImage";

function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      <img
        src={getProductImage(product)}
        alt={product.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <h2>₹ {product.price}</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
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

          <Link to={`/products/${product.id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

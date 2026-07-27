import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px", padding: "8px 12px" }}
      >
        Back
      </button>

      {cart.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <h2>{item.title}</h2>

              <h3>₹ {item.price}</h3>

              <h3>Quantity : {item.quantity}</h3>

              <button
                onClick={() =>
                  dispatch({
                    type: "INCREASE",
                    payload: item.id,
                  })
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "DECREASE",
                    payload: item.id,
                  })
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total : ₹ {total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;

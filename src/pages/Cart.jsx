import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { getProductImage } from "../utils/productImage";
import "./Cart.css";

function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div>
          <h1>Shopping Cart</h1>
          <p>Review your selected items and continue with confidence.</p>
        </div>
        <button className="back-btn" onClick={() => navigate("/products")}>
          Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add a few products to see them here.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img
                  src={getProductImage(item)}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                  <div className="cart-price-row">
                    <span className="cart-price">₹ {item.price}</span>
                    <span className="cart-subtotal">
                      Subtotal: ₹ {item.price * item.quantity}
                    </span>
                  </div>
                </div>

                <div className="cart-actions">
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() =>
                        dispatch({
                          type: "DECREASE",
                          payload: item.id,
                        })
                      }
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() =>
                        dispatch({
                          type: "INCREASE",
                          payload: item.id,
                        })
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
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
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <h3 className="summary-title">Order Summary</h3>
              <p className="summary-text">Free delivery on orders above ₹ 999.</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <h2 style={{ margin: "0 0 8px" }}>Total: ₹ {total}</h2>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
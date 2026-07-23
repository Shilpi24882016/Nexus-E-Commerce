import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#111827",
        color: "white",
      }}
    >
      <h2>Nexus Store</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white" }}>
          Products
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart ({totalItems})
        </Link>

        {!isAdmin ? (
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        ) : (
          <>
            <Link to="/admin" style={{ color: "white" }}>
              Admin
            </Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

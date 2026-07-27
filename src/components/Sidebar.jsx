import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#fff",
        color: "#0f172a",
        padding: "20px",
        borderRight: "1px solid #e6eef8",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 20 }}>Admin</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <Link to="/admin" style={{ color: "#0f172a" }}>
          Dashboard
        </Link>

        <Link to="/admin/add-product" style={{ color: "#0f172a" }}>
          Add Product
        </Link>

        <Link to="/" style={{ color: "#0f172a" }}>
          Back to Store
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("isAdmin");
            navigate("/");
          }}
          style={{
            background: "transparent",
            color: "#0f172a",
            border: "1px solid #e6eef8",
            padding: "6px 8px",
            borderRadius: 6,
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
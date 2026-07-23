import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#222",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Admin</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <Link to="/admin" style={{ color: "white" }}>
          Dashboard
        </Link>

        <Link to="/admin/add-product" style={{ color: "white" }}>
          Add Product
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
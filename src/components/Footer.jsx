function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#f8fafc",
        padding: "40px 24px 24px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 10px" }}>Nexus Store</h3>
          <p style={{ margin: 0, lineHeight: 1.6, color: "#cbd5e1" }}>
            Premium gadgets, fast delivery, and trusted service for every tech lover.
          </p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 10px" }}>Quick Links</h4>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>About Us</p>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Products</p>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Contact</p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 10px" }}>Support</h4>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Shipping & Returns</p>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>FAQs</p>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Help Center</p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 10px" }}>Follow Us</h4>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Instagram</p>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Facebook</p>
          <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Twitter</p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "24px auto 0",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 Nexus Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
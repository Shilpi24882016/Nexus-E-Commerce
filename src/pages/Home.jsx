import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../pages/ProductCard";
import "./Home.css";

function Home() {
  const { data = [], isLoading } = useProducts();

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Nexus Store</h1>

          <p>
            Discover premium laptops, smartphones, smartwatches and accessories
            at unbeatable prices.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="primary-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Featured Categories</h2>

        <div className="category-grid">
          <Link
            to="/products?category=Laptops"
            style={{ textDecoration: "none" }}
          >
            <div className="category-card">
              💻
              <h3>Laptops</h3>
            </div>
          </Link>

          <Link
            to="/products?category=Mobiles"
            style={{ textDecoration: "none" }}
          >
            <div className="category-card">
              📱
              <h3>Mobiles</h3>
            </div>
          </Link>

          <Link
            to="/products?category=Accessories"
            style={{ textDecoration: "none" }}
          >
            <div className="category-card">
              🎧
              <h3>Accessories</h3>
            </div>
          </Link>

          <Link
            to="/products?category=Smart%20Watches"
            style={{ textDecoration: "none" }}
          >
            <div className="category-card">
              ⌚<h3>Smart Watches</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Nexus?</h2>

        <div className="feature-grid">
          <div>
            🚚
            <h3>Free Shipping</h3>
            <p>Fast delivery across India.</p>
          </div>

          <div>
            💳
            <h3>Secure Payments</h3>
            <p>100% safe online transactions.</p>
          </div>

          <div>
            ⭐<h3>Premium Quality</h3>
            <p>Trusted electronic brands.</p>
          </div>

          <div>
            🔄
            <h3>Easy Returns</h3>
            <p>7-Day replacement policy.</p>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {data.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../pages/ProductCard";
import useProducts from "../hooks/useProducts";

const categoryKeywords = {
  Laptops: ["laptop", "macbook", "xps", "dell"],
  Mobiles: ["phone", "iphone", "galaxy", "mobile"],
  Accessories: ["headphone", "headphones", "sony", "accessory"],
  "Smart Watches": ["watch", "apple watch", "smart watch"],
};

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const { data = [], isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <h2>Loading Products...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const normalizedSearchQuery = searchQuery.toLowerCase().trim();
  const filteredProducts = normalizedSearchQuery
    ? data.filter((product) =>
        product.title.toLowerCase().startsWith(normalizedSearchQuery),
      )
    : category && categoryKeywords[category]
      ? data.filter((product) => {
          const text = `${product.title} ${product.description}`.toLowerCase();
          return categoryKeywords[category].some((keyword) =>
            text.includes(keyword),
          );
        })
      : data;

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <input
          type="text"
          placeholder="Search products by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "560px",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          }}
        />
      </div>

      {category && !normalizedSearchQuery && (
        <p>
          Showing category: <strong>{category}</strong>
        </p>
      )}

      {filteredProducts.length === 0 ? (
        <h2>No products match your search.</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;

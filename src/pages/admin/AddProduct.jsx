import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddProduct from "./useAddProduct";
import { getProductImage } from "../../utils/productImage";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { mutate: addProduct, isLoading } = useAddProduct();

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      title,
      price: Number(price),
      image: image || getProductImage({ title }),
      description,
    };

    addProduct(product, {
      onSuccess: () => {
        navigate("/admin");
      },
    });
  };

  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 640 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Title</label>
          <br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Price</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Image URL</label>
          <br />
          <input value={image} onChange={(e) => setImage(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Product"}
          </button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

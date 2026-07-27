import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/products";
import useUpdateProduct from "../../hooks/useUpdateProduct";
import { useState, useEffect } from "react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["product", id], queryFn: () => getProduct(id) });

  const { mutate: updateProduct, isLoading: updating } = useUpdateProduct();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setPrice(product.price || "");
      setImage(product.image || "");
      setDescription(product.description || "");
    }
  }, [product]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: product.id,
      product: {
        title,
        price: Number(price),
        image: image || product.image,
        description,
      },
    };

    updateProduct(payload, {
      onSuccess: () => {
        navigate("/admin");
      },
    });
  };

  return (
    <div>
      <h1>Edit Product</h1>

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
          <button type="submit" disabled={updating}>
            {updating ? "Updating..." : "Update Product"}
          </button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;

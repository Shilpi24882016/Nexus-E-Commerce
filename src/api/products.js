import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await api.post("/products", product);
  return response.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};

export const updateProduct = async ({ id, product }) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};
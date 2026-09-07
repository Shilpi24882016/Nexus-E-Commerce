export function getProductImage(product) {
  if (product?.image) return product.image;

  const title = product?.title || "Product";
  const safeTitle = encodeURIComponent(title.trim() || "Product");

  return `https://dummyimage.com/300x300/4f46e5/ffffff&text=${safeTitle}`;
}

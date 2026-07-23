import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import useDeleteProduct from "../../hooks/useDeleteProduct";

function Dashboard() {
  const { data, isLoading } = useProducts();
  const { mutate: deleteProduct } = useDeleteProduct();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Link to="/admin/add-product">
        <button>Add Product</button>
      </Link>

      <br />
      <br />

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} width="80" />
              </td>

              <td>{product.title}</td>

              <td>₹ {product.price}</td>

              <td>
                <Link to={`/admin/edit-product/${product.id}`}>
                  <button>Edit</button>
                </Link>
              </td>

              <td>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

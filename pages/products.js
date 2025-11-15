import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("PRODUCTS:", products);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting ID:", id);
    const userConfirmed = await new Promise((resolve) => {
      const confirmBox = window.confirm("Do you really want to delete this product?");
      resolve(confirmBox);
    });

    if (!userConfirmed) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Delete failed:", error);
        alert(error.message || "Failed to delete product");
        return;
      }

      fetchProducts(); 
      alert("Product deleted successfully!");
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Something went wrong while deleting");
    }
  };

const handleEdit = (product) => {
  router.push(`/products/edit/${product._id}`);
};

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Products List</h1>
      {products.length === 0 && <p>No products found.</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "250px",
              position: "relative", 
            }}
          >
            <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", gap: "4px" }}>
              <button
                onClick={() => handleEdit(product)}
                style={{ padding: "4px 8px", cursor: "pointer" }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                style={{ padding: "4px 8px", cursor: "pointer", background: "red", color: "white", border: "none" }}
              >
                Delete
              </button>
            </div>

            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
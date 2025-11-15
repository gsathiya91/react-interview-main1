import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/pages/products.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [deleteId, setDeleteId] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

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
  const handleDeleteClick = (id) => {
    setDeleteId(id); 
  };
  
  const handleCancel = () => {
    setDeleteId(null); 
  };

  const handleConfirmDelete = async () => {
    try {
      const res = await fetch(`/api/products/${deleteId}`, { method: "DELETE" });
      if (!res.ok) {
        const error = await res.json();
        alert(error.message || "Failed to delete product");
        setDeleteId(null);
        return;
      }
      fetchProducts();
      setDeleteId(null);
      router.push(`/products`);
      setSuccessMsg("Product deleted successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while deleting");
      setDeleteId(null);
    }
  };

  const handleEdit = (product) => {
    router.push(`/products/edit/${product._id}`);
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className={styles.productsPage}>
      <h1>Products List</h1>
      {products.length === 0 && <p>No products found.</p>}
      <div className={styles.productsList}>
        {successMsg && (
          <div className={styles.successMessage}>
            {successMsg}
          </div>
        )}

        {products.map((product) => (
          <div key={product._id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p className="cardDescription">{product.description}</p>
            <div className={styles.actionButtons}>
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteClick(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {deleteId && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                Cancel
              </button>
              <button className={styles.confirmBtn} onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

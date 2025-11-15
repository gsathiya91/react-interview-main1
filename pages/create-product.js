import { useEffect, useState } from "react";
import TextInput from "../components/form/TextInput";
import NumberInput from "../components/form/NumberInput";
import Textarea from "../components/form/Textarea";
import FileInput from "../components/form/FileInput";
import styles from "../styles/pages/products.module.css";
import { useRouter } from "next/router";

export default function AddProductForm({ product}) {
  console.log({product})
  const [formData, setFormData] = useState({ name: "", price: "", description: "", image: null });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number";
    }
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.image) newErrors.image = "Product image is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("description", formData.description);
      if (formData.image) data.append("image", formData.image);

      const url = product ? `/api/products/${product._id}` : "/api/products";
      const method = product ? "PUT" : "POST";
      const res = await fetch(url, { method, body: data });
      const result = await res.json();
      console.log({ result })

      if (!res.ok) {
        setErrors({ api: result.message || "Something went wrong" });
      } else {
        console.log("Product added successfully!");
        setFormData({ name: "", price: "", description: "", image: null });
        router.push("/products");
      }
    } catch (err) {
      console.error(err);
      setErrors({ api: "Failed to submit. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        description: product.description || "",
        image: null,
      });
    }
  }, [product]);

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit} className={styles["create-product-form"]}>
            <h2>{product ? "Edit Product" : "Add New Product"}</h2>

          <TextInput
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            error={errors.name}
          />

          <NumberInput
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            error={errors.price}
          />

          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            error={errors.description}
          />

          <FileInput
            label="Product Image"
            name="image"
            type="file"
            onChange={handleFileChange}
            error={errors.image}
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
}

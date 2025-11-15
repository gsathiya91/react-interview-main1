import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddProductForm from "../../create-product"; 

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query; 

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!router.isReady || !id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [router.isReady, id]);

  if (!product) return <p>Loading product...</p>;

  return <AddProductForm product={product} />;
}

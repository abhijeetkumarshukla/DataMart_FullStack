import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productApi";

export const useProducts = (page, search) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      const data = await fetchProducts(page, search);

      setProducts(data.data);
      setTotal(data.total);
      setLoading(false);
    };

    loadProducts();
  }, [page, search]);

  return { products, total, loading };
};


// Benefits:

// ✔ Reusable
// ✔ Clean logic separation
// ✔ Controlled fetching
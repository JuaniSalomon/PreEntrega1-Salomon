import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../main";

const ItemListContainer = ({ brand }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsCollection = collection(db, "products");
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productList);
      } catch (err) {
        setError("Error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = brand
    ? products.filter((product) => product.name.includes(brand))
    : products;

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;

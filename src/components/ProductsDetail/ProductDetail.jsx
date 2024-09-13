import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../main";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      alert("No hay suficiente stock.");
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Se agregaron ${quantity} ${product.name} al carrito.`);
  };

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} className="imgDetail" />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <div className="d-flex align-items-center">
        <button onClick={handleDecrease} className="btn btn-warning me-4">
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} className="btn btn-warning ms-4">
          +
        </button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-warning mt-3">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetail;

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Products from "../Products/Products";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = Products.find(
    (product) => product.id === parseInt(productId)
  );

  const [quantity, setQuantity] = useState(1);

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
    alert(`Se agregaron ${quantity} ${product.name} al carrito.`);
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <div className="container mt-4">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="img-fluid" />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>
      </div>

      <div className="d-flex align-items-center">
        <button onClick={handleDecrease} className="btn btn-warning me-4 ms-4">
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} className="btn btn-warning ms-4">
          +
        </button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-warning mt-3 ms-4">
        Agregar al carrito
      </button>
      <Link to="/" className="btn btn-link mt-3">
        Volver
      </Link>
    </>
  );
};

export default ProductDetail;

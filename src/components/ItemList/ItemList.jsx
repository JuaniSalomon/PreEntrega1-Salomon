import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

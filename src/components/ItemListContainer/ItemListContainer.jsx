import React from "react";
import ItemList from "../ItemList/ItemList";
import Products from "../Products/Products";

const ItemListContainer = ({ brand }) => {
  const filteredProducts = brand
    ? Products.filter((product) => product.name.includes(brand))
    : Products; // Si no hay marca, muestra todos los productos

  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;

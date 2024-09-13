import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetail from "./components/ProductsDetail/ProductDetail";
import { CartProvider } from "./components/Cart/CartContext";

const brands = ["", "Quilmes", "Schneider", "Stella"];
function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          {brands.map((brand, index) => (
            <Route
              key={index}
              path={brand ? `/${brand.toLowerCase()}` : "/"}
              element={<ItemListContainer brand={brand} />}
            />
          ))}
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

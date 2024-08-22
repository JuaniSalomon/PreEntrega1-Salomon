import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetail from "./components/ProductsDetail/ProductDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/quilmes"
          element={<ItemListContainer brand="Quilmes" />}
        />
        <Route
          path="/schneider"
          element={<ItemListContainer brand="Schneider" />}
        />
        <Route
          path="/stella"
          element={<ItemListContainer brand="Stella Artois" />}
        />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

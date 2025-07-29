import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/product/ProductDetail";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

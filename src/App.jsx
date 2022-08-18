import React from "react";
import Header from "./Containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsLists from "./Containers/ProductsLists";
import ProductsDetails from "./Containers/ProductsDetails";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<ProductsLists />} />
        <Route path="/product/:productId" element={<ProductsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

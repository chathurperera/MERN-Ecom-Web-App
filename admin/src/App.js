import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PanelLayout from "./layouts/panelLayout";
import Products from "./pages/products";
import EditProduct from "pages/edit-product";
import CreateProduct from "pages/create-product";
import "../src/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PanelLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

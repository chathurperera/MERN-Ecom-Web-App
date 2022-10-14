import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/sign-up";
import UserSharedLayout from "./layouts/userSharedLayout";
import MainLayout from "./layouts/mainLayout";
import Profile from "./pages/my-account/profile";
import Orders from "./pages/my-account/orders";
import ViewOrder from "./pages/my-account/view-order";
import AllProducts from "./pages/shop";
import SingleProduct from "./pages/single-product";
import Checkout from "./pages/checkout";
import { useSelector } from "react-redux";

const Routing = () => {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="shop" element={<AllProducts />} />
          <Route path="all-products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            user={user.currentUser}
            element={<Checkout />}
          />
        </Route>
        <Route
          path="/my-account"
          user={user.currentUser}
          element={<UserSharedLayout />}
        >
          <Route index element={<Profile />} />
          <Route path="/my-account/orders" element={<Orders />} />
          <Route path="/my-account/orders/:id" element={<ViewOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

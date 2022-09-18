import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../../components/Header";

const userSharedLayout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default userSharedLayout;

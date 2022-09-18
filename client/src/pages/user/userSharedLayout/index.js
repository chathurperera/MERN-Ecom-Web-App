import React from "react";
import {Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import classes from "./userSharedLayout.module.scss";
const userSharedLayout = () => {
  return (
    <div>
      <Header />
      <div className={classes.layoutWrapper}>
        <aside className={classes.sidebar}></aside>
        <Outlet />
      </div>
    </div>
  );
};

export default userSharedLayout;

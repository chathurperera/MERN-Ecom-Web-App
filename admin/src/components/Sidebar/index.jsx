import React from "react";
import classes from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import dashboardicon from "../../assets/images/dashboard.svg";
import shoppingBag from "../../assets/images/shoppingBag.svg";
import addProducts from "../../assets/images/addProducts.svg";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.head}>Welcome Jon doe</div>
      <div className={classes.sidebar__option}>
        <Link to="dashboard">
          <img src={dashboardicon} alt="dashboard icon" /> Dashboard
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="">
          <img src={shoppingBag} alt="shopping cart" /> Products
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="">
          <img src={addProducts} alt="add icon" /> Add Product
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

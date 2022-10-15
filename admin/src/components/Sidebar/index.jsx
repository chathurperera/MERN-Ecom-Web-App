import React from "react";
import classes from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/images/sidebar/dashboard.png";
import ordersIcon from "../../assets/images/sidebar/shopping-cart.png";
import groupIcon from "../../assets/images/sidebar/group.png";
import shoppingBag from "../../assets/images/shoppingBag.svg";
import addProducts from "../../assets/images/addProducts.svg";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.head}>
        <div className={classes.avatar}>
          <p>J</p>
        </div>
        <div className={classes.adminName}>
          <p>Welcome back</p>
          <p>Jon doe</p>
        </div>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/">
          <img src={dashboardIcon} alt="dashboard icon" /> Dashboard
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/products">
          <img src={shoppingBag} alt="shopping cart" /> Products
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/create-product">
          <img src={addProducts} alt="add icon" /> Add Product
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/all-order">
          <img src={ordersIcon} alt="all orders icon" /> Orders
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/all-users"> 
          <img src={groupIcon} alt="all users icon" /> Users
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

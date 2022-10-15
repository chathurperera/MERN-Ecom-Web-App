import React, { useEffect, useState } from "react";
import classes from "./StatsCard.module.scss";
import totalProductsIcon from "assets/images/products.png";
import revenueIcon from "assets/images/increasing.png";
import usersIcon from "assets/images/group.png";
import cartIcon from "assets/images/shopping-cart.png";
import API from "api";

const StatsCard = () => {
  useEffect(() => {

  },[])

  const [allOrders, setAllOrders] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);


  return (
    <div className={classes.statsCard}>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total Products</p>
          <h3 className={classes.count}>765</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={totalProductsIcon} alt="total products" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Revenue</p>
          <h3 className={classes.count}>765</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={revenueIcon} alt="total revenue" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total signups</p>
          <h3 className={classes.count}>20</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={usersIcon} alt="total users" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total Orders</p>
          <h3 className={classes.count}>50</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={cartIcon} alt="total orders" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

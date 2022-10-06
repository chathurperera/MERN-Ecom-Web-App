import React from "react";
import classes from "./StatsCard.module.scss";
import totalProducts from "../../../assets/images/products.png";
import revenue from "../../../assets/images/increasing.png";
import users from "../../../assets/images/group.png";
import cart from "../../../assets/images/shopping-cart.png";
const StatsCard = () => {
  return (
    <div className={classes.statsCard}>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Products Sold</p>
          <h3 className={classes.count}>765</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={totalProducts} alt="total products" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Revenue</p>
          <h3 className={classes.count}>765</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={revenue} alt="total revenue" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total signups</p>
          <h3 className={classes.count}>20</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={users} alt="total users" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total Orders</p>
          <h3 className={classes.count}>50</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={cart} alt="total orders" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

import React from "react";
import classes from "./OrderSummary.module.scss";
import { Link } from "react-router-dom";
const OrderSummary = () => {
  return (
    <div className={classes.orderSummary}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>Order Summary</div>
        <div className={classes.detail}>
          <span className={classes.label}>Sub Total</span>
          <span className={classes.value}>$71.42</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.label}>Discount</span>
          <span className={classes.value}>-</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.label}>Shipping</span>
          <span className={classes.value}>Free</span>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.total}>
          <span>Total</span>
          <span>$66.42</span>
        </div>
      </div>
      <button className={classes.checkoutButton}>
        <Link to="/">Check Out</Link>
      </button>
    </div>
  );
};

export default OrderSummary;

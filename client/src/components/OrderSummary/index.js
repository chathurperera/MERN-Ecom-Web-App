import React from "react";
import classes from "./OrderSummary.module.scss";
import { Link } from "react-router-dom";

const OrderSummary = ({setCheckoutStep , checkoutStep , cart }) => {
  return (
    <div className={classes.orderSummary}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>Order Summary</div>
        <div className={classes.detail}>
          <span className={classes.label}>Sub Total</span>
          <span className={classes.value}>${cart?.total}</span>
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
          <span>${cart?.total}</span>
        </div>
      </div>
      {checkoutStep === 1 && (
        <button className={classes.checkoutButton} onClick={() => setCheckoutStep(2)}>
          Check Out
        </button>
      )}
    </div>
  );
};

export default OrderSummary;

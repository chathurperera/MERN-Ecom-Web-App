import React, { useState } from "react";
import classes from "./OrderSummary.module.scss";
import { Link } from "react-router-dom";
import API from "api";
import { useSelector } from "react-redux";
import Spinner from "components/Spinner";

const OrderSummary = ({ setCheckoutStep, checkoutStep, cart }) => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const payload = {
    products: cart.products,
    userId: user.currentUser.user.userId,
  };

  const handleCheckout = async () => {
    console.log('ran');
    setLoading(true);
    await API.post("/cart", payload)
      .then((res) => {
        setLoading(false);
        setCheckoutStep(2);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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
        <button
          className={classes.checkoutButton}
          onClick={handleCheckout}
        >
          Check Out
        </button>
      )}
    </div>
  );
};

export default OrderSummary;

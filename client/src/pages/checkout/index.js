import React from "react";
import classes from "./checkout.module.scss";

const Checkout = () => {
  return (
    <div className={classes.checkout}>
      <div className={classes.stepProgress}>
        <div className={classes.step}>
          <div className={classes.dot}></div>
          <small>Cart</small>
        </div>
        <div className={classes.step}>
          <div className={classes.dot}></div>
          <small>Billing & Address</small>
        </div>
        <div className={classes.step}>
          <div className={classes.dot}></div>
          <small>Cart</small>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

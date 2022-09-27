import React, { useState } from "react";
import classes from "./checkout.module.scss";
import check from "../../assets/images/check.png";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);
  return (
    <div className={classes.checkout}>
      <div className={classes.stepProgress}>
        <div
          className={
            checkoutStep === 1 || 2 || 3
              ? `${classes.step} ${classes.currentStep}`
              : `${classes.step}`
          }
        >
          <div className={classes.dot}>
            {checkoutStep === 2 || checkoutStep === 3 ? (
              <img src={check} alt="check icon" />
            ) : (
              "1"
            )}
          </div>
          <small>Cart</small>
        </div>
        <div
          className={
            checkoutStep === 2 || checkoutStep === 3
              ? `${classes.step} ${classes.currentStep}`
              : `${classes.step}`
          }
        >
          <div className={classes.dot}>
            {checkoutStep === 2 || checkoutStep === 3 ? (
              <img src={check} alt="check icon" />
            ) : (
              "2"
            )}
          </div>
          <small>Billing & Address</small>
        </div>
        <div
          className={
            checkoutStep === 3
              ? `${classes.step} ${classes.currentStep}`
              : `${classes.step}`
          }
        >
          <div className={classes.dot}>
            {checkoutStep === 3 ? <img src={check} alt="check icon" /> : "3"}
          </div>
          <small>Cart</small>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

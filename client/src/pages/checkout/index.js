import React, { useState } from "react";
import classes from "./checkout.module.scss";

import CheckoutProgressBar from "../../components/CheckoutProgressBar";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);
  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
    </div>
  );
};

export default Checkout;

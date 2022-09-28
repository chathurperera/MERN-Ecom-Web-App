import React, { useState } from "react";
import classes from "./checkout.module.scss";
import CheckoutProgressBar from "../../components/CheckoutProgressBar";
import OrdersTable from "../../components/OrdersTable";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);

  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <OrdersTable />
    </div>
  );
};

export default Checkout;

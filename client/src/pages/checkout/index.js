import React, { useState } from "react";
import classes from "./checkout.module.scss";
import CheckoutProgressBar from "../../components/CheckoutProgressBar";
import OrdersTable from "../../components/OrdersTable";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);

  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <div className={classes.order}>
        <OrdersTable />
        <div className={classes.orderSummary}></div>
      </div>
    </div>
  );
};

export default Checkout;

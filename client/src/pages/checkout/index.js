import React, { useState } from "react";
import classes from "./checkout.module.scss";
import CheckoutProgressBar from "../../components/CheckoutProgressBar";
import OrdersTable from "../../components/OrdersTable";

import OrderSummary from "../../components/OrderSummary";
import SelectAddress from "../../components/SelectAddress";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);

  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <div className={classes.order}>
        {checkoutStep === 1 && <OrdersTable />}
        {checkoutStep === 2 &&  <SelectAddress />}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;

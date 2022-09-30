import React, { useState } from "react";
import classes from "./checkout.module.scss";
import CheckoutProgressBar from "components/CheckoutProgressBar";
import OrdersTable from "components/OrdersTable";
import OrderSummary from "components/OrderSummary";
import SelectAddress from "components/SelectAddress";
import PaymentOptions from "components/PaymentOptions";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(3);

  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <div className={classes.order}>
        {checkoutStep === 1 && <OrdersTable />}
        {checkoutStep === 2 &&  <SelectAddress setCheckoutStep={setCheckoutStep} />}
        {checkoutStep === 3 && <PaymentOptions setCheckoutStep={setCheckoutStep}/>}
        <OrderSummary checkoutStep={checkoutStep} />
      </div>
    </div>
  );
};

export default Checkout;

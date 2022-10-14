import React, { useEffect, useState } from "react";
import classes from "./checkout.module.scss";
import CheckoutProgressBar from "components/CheckoutProgressBar";
import OrdersTable from "components/OrdersTable";
import OrderSummary from "components/OrderSummary";
import SelectAddress from "components/SelectAddress";
import PaymentOptions from "components/PaymentOptions";
import BillingAddress from "components/BillingAddress";
import { useSelector } from "react-redux";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState({});

  useEffect(() => {
    setOrder(cart);
  }, []);

  console.log(cart);
  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <div className={classes.order}>
        {checkoutStep === 1 && <OrdersTable cart={cart} />}
        {checkoutStep === 2 && (
          <SelectAddress
            setCheckoutStep={setCheckoutStep}
            setOrder={setOrder}
          />
        )}
        {checkoutStep === 3 && (
          <PaymentOptions
            setCheckoutStep={setCheckoutStep}
            setOrder={setOrder}
          />
        )}
        <div>
          {checkoutStep === 3 && <BillingAddress address={order.address}  />}
          <OrderSummary
            checkoutStep={checkoutStep}
            setCheckoutStep={setCheckoutStep}
            cart={cart}
            order={order}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import classes from "./checkout.module.scss";
import CheckoutProgressBar from "../../components/CheckoutProgressBar";
import OrdersTable from "../../components/OrdersTable";
import {Link} from 'react-router-dom';
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);

  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <div className={classes.order}>
        <OrdersTable />
        <div className={classes.orderSummary}>
          <div className={classes.card}>
            <div className={classes.cardHeader}>Order Summary</div>
            <div className={classes.detail}>
              <span className={classes.label}>Sub Total</span>
              <span className={classes.value}>$71.42</span>
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
              <span>$66.42</span>
            </div>
          </div>
          <button className={classes.checkoutButton}>
            <Link to="/">Check Out</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

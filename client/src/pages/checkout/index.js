import React, { useState } from "react";
import classes from "./checkout.module.scss";

import CheckoutProgressBar from "../../components/CheckoutProgressBar";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState(2);
  return (
    <div className={classes.checkout}>
      <CheckoutProgressBar checkoutStep={checkoutStep} />
      <div className={classes.order}>
        <div className={classes.orderTable}>
          <div className={classes.orderTable__card}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.orderSummary}></div>
      </div>
    </div>
  );
};

export default Checkout;

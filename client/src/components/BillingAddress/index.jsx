import React from "react";
import classes from "./BillingAddress.module.scss";

const BillingAddress = () => {
  return (
    <div className={classes.billingAddress}>
      <h3>Billing Address</h3>
      <p className={classes.name}>Jayvion Simon</p>
      <p className={classes.address}>36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836</p>
      <p className={classes.contactNumber}>990-588-5716</p>
    </div>
  );
};

export default BillingAddress;

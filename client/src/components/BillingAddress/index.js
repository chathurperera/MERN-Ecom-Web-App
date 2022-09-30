import React from "react";
import classes from "./BillingAddress.module.scss";

const BillingAddress = () => {
  return (
    <div className={classes.billingAddress}>
      <h3>Billing Address</h3>
      <p className={classes.name}>Jayvion Simon</p>
      <p className={classes.address}>Jayvion Simon</p>
      <p className={classes.contactNumber}>Jayvion Simon</p>

    </div>
  );
};

export default BillingAddress;

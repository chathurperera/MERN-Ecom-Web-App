import React from "react";
import { useSelector } from "react-redux";
import classes from "./BillingAddress.module.scss";

const BillingAddress = ({ address }) => {
  const user = useSelector((state) => state.user);
  return (
    <div className={classes.billingAddress}>
      <h3>Billing Address</h3>
      <p className={classes.name}>
        {user.currentUser.user.firstName + " " + user.currentUser.user.lastName}
      </p>
      <address className={classes.address}>
        {address.address}
        <br />
        {address.city}
        <br />
        {address.state}
        <br />
        {address.postalCode}
      </address>
      {/* <p className={classes.contactNumber}>990-588-5716</p> */}
    </div>
  );
};

export default BillingAddress;

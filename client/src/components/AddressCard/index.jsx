import React from "react";
import classes from "./AddressCard.module.scss";
const AddressCard = ({
  setOrder,
  setCheckoutStep,
  firstName,
  lastName,
  address
}) => {
  const selectAddress = () => {
    setOrder((prevState) => {
      return {
        ...prevState,
        address: address,
      };
    });
    setCheckoutStep(3);
  };
  return (
    <div className={classes.address}>
      <div className={classes.addressDetails}>
        <p className={classes.name}>
          {firstName + " " + lastName} <span>(Home)</span>
        </p>
        <address className={classes.completeAddress}>
          {address.address},
          <br />
          {address.city && address.city}
          <br />
          {address.state && address.state}
          <br />
          {address.postalCode && address.postalCode}
        </address>
        {/* <p className={classes.contact}>365-374-4961</p> */}
      </div>
      <div className={classes.addressButtons}>
        <button>Delete</button>
        <button onClick={selectAddress}>Deliver to this Address</button>
      </div>
    </div>
  );
};

export default AddressCard;

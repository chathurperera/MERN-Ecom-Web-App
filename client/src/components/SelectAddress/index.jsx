import React, { useState } from "react";
import classes from "./SelectAddress.module.scss";
import backArrow from "assets/images/back.png";
import AddNewAddress from "../AddNewAddress";
import AddressCard from "components/AddressCard";
import { useSelector } from "react-redux";

const SelectAddress = ({ setCheckoutStep, setOrder }) => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className={classes.selectAddress}>
        <AddressCard
          setOrder={setOrder}
          setCheckoutStep={setCheckoutStep}
          firstName={user.currentUser.user.firstName}
          lastName={user.currentUser.user.lastName}
          address={user.currentUser.user.address}
        />
        <AddNewAddress />
        <div className={classes.backButton} onClick={() => setCheckoutStep(1)}>
          <img src={backArrow} alt="back arrow" />
          Back
        </div>
      </div>
    </>
  );
};

export default SelectAddress;

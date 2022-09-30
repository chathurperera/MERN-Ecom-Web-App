import React from "react";
import classes from "./SelectAddress.module.scss";
import backArrow from "assets/images/back.png";
import AddNewAddress from "../AddNewAddress";
import AddressCard from "components/AddressCard";
const SelectAddress = ({ setCheckoutStep }) => {

  return (
    <>
      <div className={classes.selectAddress}>
        <AddressCard setCheckoutStep={setCheckoutStep} />
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

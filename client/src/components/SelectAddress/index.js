import React from "react";
import classes from "./SelectAddress.module.scss";
import backArrow from "../../assets/images/back.png";
import { useNavigate } from "react-router-dom";
import AddNewAddress from "../AddNewAddress";
import AddressCard from "components/AddressCard";
const SelectAddress = ({ setCheckoutStep }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.selectAddress}>
        <AddressCard />
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

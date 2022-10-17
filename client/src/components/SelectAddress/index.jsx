import React, { useEffect, useState } from "react";
import classes from "./SelectAddress.module.scss";
import backArrow from "assets/images/back.png";
import AddNewAddress from "../AddNewAddress";
import AddressCard from "components/AddressCard";
import { useSelector } from "react-redux";
import API from "api";

const SelectAddress = ({ setCheckoutStep, setOrder }) => {
  const user = useSelector((state) => state.user);
  const [availableAddresses, setAvailableAddresses] = useState([]);

  useEffect(() => {
    getAllAddresses();
  }, []);

  const getAllAddresses = async () => {
    API.get(`/address/${user.currentUser.user.userId}`).then((res) => {
      setAvailableAddresses(res.data.allAddress);
    });
  };

  return (
    <>
      <div className={classes.selectAddress}>
        {availableAddresses?.map((address) => {
          return (
            <AddressCard
              setOrder={setOrder}
              setCheckoutStep={setCheckoutStep}
              address={address}
            />
          );
        })}
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

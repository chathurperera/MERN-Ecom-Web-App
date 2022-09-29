import React from "react";
import classes from "./SelectAddress.module.scss";
import backArrow from "../../assets/images/back.png";
import { Link , useNavigate } from "react-router-dom";
const SelectAddress = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className={classes.selectAddress}>
        <div className={classes.address}>
          <div className={classes.addressDetails}>
            <p className={classes.name}>
              Jayvion Simon <span>(Home)</span>
            </p>
            <p className={classes.completeAddress}>
              19034 Verna Unions Apt. 164 - Honolulu, RI / 87535
            </p>
            <p className={classes.contact}>365-374-4961</p>
          </div>
          <div className={classes.addressButtons}>
            <button>Delete</button>
            <button>Deliver to this Address</button>
          </div>
        </div>
        <div className={classes.backButton} onClick={() => navigate(-1)}>
          <img src={backArrow} alt="back arrow" />
          <Link to="">Back</Link>
        </div>
      </div>
    </>
  );
};

export default SelectAddress;

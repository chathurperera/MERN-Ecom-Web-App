import React from "react";
import classes from './AddressCard.module.scss'
const AddressCard = () => {
  return (
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
  );
};

export default AddressCard;

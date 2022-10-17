import React from "react";
import classes from "./address.module.scss";

const MyAddress = () => {
  return (
    <div className={classes.myAddress}>
      <div className={classes.addressCardWrapper}>
        <div className={classes.addressCard}>
          <h6 className={classes.name}>
            Jayvion Simon <span>Default</span>
          </h6>{" "}
          <address>
            <p>B 35 2/2 Soyspura housing Scheme Moratuwa </p>
            <p>Moratuwa</p>
            <p>Western Province</p>
            <p>10400</p>
          </address>
        </div>
      </div>
      <div className={classes.wrapper}></div>
    </div>
  );
};

export default MyAddress;

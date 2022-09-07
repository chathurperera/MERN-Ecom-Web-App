import React from "react";
import classes from "./MegaDropDown.module.scss";
import phoneIcon from "../../assets/images/Phone Icon.svg";
import { Link } from "react-router-dom";

const MegaDropDown = () => {
  return (
    <div className={classes.megaDropDown}>
      <div className={classes.container}>
        <div className={classes.categoriesWrapper}>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <img src={phoneIcon} alt="phone icon" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <h1>2</h1>
        </div>
      </div>
    </div>
  );
};

export default MegaDropDown;

import React from "react";
import classes from "./SelectedFilters.module.scss";
import close from "../../assets/images/cancel.png";
const SelectedFilters = () => {
  const numArray = [1, 2, 3, 4, ];
  return (
    <div className={classes.selectedFilters}>
      {numArray.map(() => {
        return (
          <div className={classes.filter}>
            <p>phones</p>
            <div className={classes.closeIcon}>
              <img src={close} alt="close icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedFilters;

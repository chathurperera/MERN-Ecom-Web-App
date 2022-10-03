import React from "react";
import classes from "./SelectedFilters.module.scss";
import close from "../../assets/images/cancel.png";
const SelectedFilters = ({filters}) => {
  const numArray = [1, 2, 3, 4, ];
  // Get the filters and create an array to display filtering options
  return (
    <div className={classes.selectedFilters}>
      {numArray.map((option) => {
        return (
          <div className={classes.filter} key={option}>
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

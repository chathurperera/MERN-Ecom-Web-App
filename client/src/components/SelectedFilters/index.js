import React from "react";
import classes from "./SelectedFilters.module.scss";
import close from "../../assets/images/cancel.png";
const SelectedFilters = ({ filters }) => {
  const numArray = [1, 2, 3, 4];
  // Get the filters and create an array to display filtering options
  const filterTruthyValues = Object.keys(filters).filter(
    (value) => !!filters[value]
  );
  console.log("filterTruthyValues", filterTruthyValues);

  const filtersList =
    filterTruthyValues.length !== 0 &&
    filterTruthyValues.map((option, index) => {
      return (
        <div className={classes.filter} key={index}>
          <p>{option}</p>
          <div className={classes.closeIcon}>
            <img src={close} alt="close icon" />
          </div>
        </div>
      );
    });


  return <div className={classes.selectedFilters}>{filtersList}</div>;
};

export default SelectedFilters;

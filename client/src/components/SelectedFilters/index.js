import React from "react";
import classes from "./SelectedFilters.module.scss";
import close from "assets/images/cancel.png";
const SelectedFilters = ({ filters, setFilters }) => {
  const filterTruthyValues = Object.keys(filters).filter(
    (value) => !!filters[value]
  );

  const removeFilter = (value) => {
    const newValue = typeof filters[value] == "boolean" ? !filters[value] : "";
    setFilters((prevState) => {
      return {
        ...prevState,
        [value]: newValue,
      };
    });
  };

  const filtersList =
    filterTruthyValues.length !== 0 &&
    filterTruthyValues.map((option, index) => {
      return (
        <div className={classes.filter} key={index}>
          <p>{option}</p>
          <div className={classes.closeIcon} onClick={() => removeFilter(option)}>
            <img src={close} alt="close icon" />
          </div>
        </div>
      );
    });

  return <div className={classes.selectedFilters}>{filtersList}</div>;
};

export default SelectedFilters;

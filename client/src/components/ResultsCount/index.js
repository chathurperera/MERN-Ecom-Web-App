import React, { useState } from "react";
import classes from "./ResultsCount.module.scss";
import Select from "react-select";

const ResultsCount = ({productsCount}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const selectOptions = [
    { value: "latest", label: "Newest First" },
    { value: "priceLowToHigh", label: "Price Low to High" },
    { value: "priceHighToLow", label: "Price High to Low" },
  ];
  return (
    <div className={classes.resultsCount}>
      <div className={classes.count}>
        Showing: <span>1-{productsCount < 10 ? productsCount : 10} products of {productsCount} results</span>{" "}
      </div>
      <div className={classes.sortBy}>
        Sort by
        
        <Select
          placeholder=""
          className={classes.customSelect}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={selectOptions}
        />
      </div>
    </div>
  );
};

export default ResultsCount;

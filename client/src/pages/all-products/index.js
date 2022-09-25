import React, { useState } from "react";
import Filter from "../../components/Filter";
import ResultsCount from "../../components/ResultsCount";
import classes from "./allProducts.module.scss";
// import arrowIcon from "../../assets/images/down-arrow.png";

const AllProducts = () => {
  const [filterValues, setFilterValues] = useState({
    category: [
      { name: "phones", value: false },
      { name: "laptops", value: false },
      { name: "watches", value: false },
    ],
    rating: [
      { name: "phones", value: false },
      { name: "laptops", value: false },
      { name: "watches", value: false },
    ],
  });
  return (
    <div className={classes.allProducts}>
      <div className={classes.wrapper}>
        <aside>
          <Filter filterValues={filterValues} />
        </aside>
        <div>
          <ResultsCount />
          <div className={classes.productsGrid}></div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

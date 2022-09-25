import React, { useState } from "react";
import Filter from "../../components/Filter";
import ItemCard from "../../components/ItemCard";
import ResultsCount from "../../components/ResultsCount";
import SelectedFilters from "../../components/SelectedFilters";
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
          <SelectedFilters />
          <div className={classes.productsGrid}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

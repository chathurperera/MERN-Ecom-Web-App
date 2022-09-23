import React from "react";
import Filter from "../../components/Filter";
import classes from "./allProducts.module.scss";
// import arrowIcon from "../../assets/images/down-arrow.png";


const allProducts = () => {

  return (
    <div className={classes.allProducts}>
      <div className={classes.wrapper}>
        <aside>
        <Filter />          
        </aside>
        <div className={classes.productsGrid}></div>
      </div>
    </div>
  );
};

export default allProducts;

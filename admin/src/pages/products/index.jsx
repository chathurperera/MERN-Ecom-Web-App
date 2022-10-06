import React from "react";
import classes from "./products.module.scss";
import addIcon from "assets/images/add.png";
const Products = () => {
  return (
    <div className={classes.products}>
      <div className={classes.head}>
        <h3>Products List</h3>
        <button>
          <img src={addIcon} alt="add icon" /> Add Product
        </button>
      </div>
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import classes from "./Filter.module.scss";
import { Rating } from "react-simple-star-rating";

const Filter = ({ filters, setFilters, setCategories, categories }) => {
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;
    setCategories({ ...categories, [name]: checked });
  };

  const resetAllFilters = () => {
    setFilters({
      rating: "",
      price: "",
      availability: false,
    });
    setCategories({
      shorts: false,
      tanks: false,
      shoes: false,
    });
  };

  return (
    <div className={classes.filter}>
      <div className={classes.filterTitle}>Filters</div>
      <div className={classes.filterOption}>
        <div className={classes.filterCollapse}>Category</div>
        <ul className={classes.filtersList}>
          <li>
            <input
              type="checkbox"
              name="shorts"
              checked={categories.shorts}
              id="shorts"
              onChange={handleCheckbox}
            />
            <label htmlFor="shorts">Shorts</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="shoes"
              checked={categories.shoes}
              id="shoes"
              onChange={handleCheckbox}
            />
            <label htmlFor="shoes">Shoes</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="tanks"
              checked={categories.tanks}
              id="tanks"
              onChange={handleCheckbox}
            />
            <label htmlFor="tanks">Tanks</label>
          </li>
        </ul>
      </div>
      <div className={classes.filterOption}>
        <div className={classes.filterCollapse}>Ratings</div>
        <ul className={classes.filtersList}>
          <li>
            <input type="radio" name="rating" value="5" id="lvl5" />
            <label htmlFor="lvl5">
              <Rating initialValue="5" size="18" readonly="true" />
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="4" id="lvl4" />
            <label htmlFor="lvl4">
              <Rating initialValue="4" size="18" readonly="true" />
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="3" id="lvl3" />
            <label htmlFor="lvl3">
              <Rating initialValue="3" size="18" readonly="true" />
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="2" id="lvl2" />
            <label htmlFor="lvl2">
              <Rating initialValue="2" size="18" readonly="true" />
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="1" id="lvl1" />
            <label htmlFor="lvl1">
              <Rating initialValue="1" size="18" readonly="true" />
            </label>
          </li>
        </ul>
      </div>
      <div className={classes.filterOption}>
        <div className={classes.filterCollapse}>Price</div>
        <ul className={classes.filtersList}>
          <li>
            <input
              type="radio"
              name="price"
              value="40-500"
              onChange={handleChange}
              id="priceLvl1"
            />
            <label htmlFor="priceLvl1">$40 - $500</label>
          </li>
          <li>
            <input
              type="radio"
              name="price"
              value="500-1000"
              onChange={handleChange}
              id="priceLvl2"
            />
            <label htmlFor="priceLvl2">$500 - $1000</label>
          </li>
          <li>
            <input
              type="radio"
              name="price"
              value="1000-2000"
              onChange={handleChange}
              id="priceLvl3"
            />
            <label htmlFor="priceLvl3">$1000 - $2000</label>
          </li>
          <li>
            <input
              type="radio"
              name="price"
              value="2000-3000"
              onChange={handleChange}
              id="priceLvl4"
            />
            <label htmlFor="priceLvl4">$2000 - $3000</label>
          </li>
        </ul>
      </div>
      <div className={classes.filterOption}>
        <div className={classes.filterCollapse}>Availability</div>
        <ul className={classes.filtersList}>
          <li>
            <input type="checkbox" name="" id="inStock" />
            <label htmlFor="inStock">In Stock</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;

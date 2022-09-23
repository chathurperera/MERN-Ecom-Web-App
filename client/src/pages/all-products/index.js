import React from "react";
import classes from "./allProducts.module.scss";
import arrowIcon from "../../assets/images/down-arrow.png";
const allProducts = () => {
  return (
    <div className={classes.allProducts}>
      <div className={classes.wrapper}>
        <aside>
          <div className={classes.filter}>
            <div className={classes.filterTitle}>Filters</div>
            <div className={classes.filterOption}>
              <div className={classes.filterCollapse}>
                Category <img src={arrowIcon} alt="arrow icon" />
              </div>
              <ul className={classes.filtersList}>
                <li>
                  <input type="checkbox" name="" id="phones" />{" "}
                  <label htmlFor="phones">Phones</label>{" "}
                </li>
                <li>
                  <input type="checkbox" name="" id="laptops" />{" "}
                  <label htmlFor="laptops">Laptops</label>{" "}
                </li>
                <li>
                  <input type="checkbox" name="" id="watches" />{" "}
                  <label htmlFor="watches">Watches</label>{" "}
                </li>
              </ul>
            </div>
            <div className={classes.filterOption}>
              <div className={classes.filterCollapse}>
                Price <img src={arrowIcon} alt="arrow icon" />
              </div>
              <ul className={classes.filtersList}>
                <li>
                  <input type="checkbox" name="" id="lvl1" />{" "}
                  <label htmlFor="lvl1">$500 - $1000</label>{" "}
                </li>
                <li>
                  <input type="checkbox" name="" id="lvl2" />{" "}
                  <label htmlFor="lvl2">$1000 - $2000</label>{" "}
                </li>
                <li>
                  <input type="checkbox" name="" id="lvl3" />{" "}
                  <label htmlFor="lvl3">$2000 - $3000</label>{" "}
                </li>
                <li>
                  <input type="checkbox" name="" id="lvl3" />{" "}
                  <label htmlFor="lvl3">$3000 +</label>{" "}
                </li>
              </ul>
            </div>
            <div className={classes.filterOption}>
              <div className={classes.filterCollapse}>
                Availability <img src={arrowIcon} alt="arrow icon" />
              </div>
              <ul className={classes.filtersList}>
                <li>
                  <input type="checkbox" name="" id="inStock" />{" "}
                  <label htmlFor="inStock">In Stock</label>{" "}
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className={classes.productsGrid}></div>
      </div>
    </div>
  );
};

export default allProducts;

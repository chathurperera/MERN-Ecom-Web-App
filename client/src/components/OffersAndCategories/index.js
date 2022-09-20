import React from "react";
import classes from "./OffersAndCategories.module.scss";
import { Link } from "react-router-dom";
import categoryImageLaptop from "../../assets/images/categoryImageLaptop.png";
import phoneCategory from "../../assets/images/phoneCategory.png";
import tabletCategory from "../../assets/images/tabletCategory.png";
import categoryWatch from "../../assets/images/categoryWatch.png";

const OffersAndCategories = () => {
  return (
    <section className={classes.offersAndCategories}>
      <h2 className={classes.sectionTitle}>
        Shop our latest offers and categories
      </h2>
      <p className={classes.sectionDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
        est dui, aliquam, tempor. <br /> Faucibus morbi turpis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={classes.categoriesGrid}>
        <div className={`${classes.laptops} ${classes.category}`}>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <img
                  className={classes.categoryImage1}
                  src={categoryImageLaptop}
                  alt="a laptop"
                />
              </div>
              <div className={classes.categoryContentHolder}>
                <div className={classes.content}>
                  <p>Laptops</p>
                  <h4>
                    True Laptop <br /> Solution
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${classes.phones} ${classes.category}`}>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <img
                  className={classes.categoryImage2}
                  src={phoneCategory}
                  alt="phoneCategory"
                />
              </div>
              <div className={classes.categoryContentHolder}>
                <div className={classes.content}>
                  <p>Laptops</p>
                  <h4>
                    True Laptop <br /> Solution
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${classes.tablets} ${classes.category}`}>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <img
                  className={classes.categoryImage3}
                  src={tabletCategory}
                  alt="tabletCategory"
                />
              </div>
              <div className={classes.categoryContentHolder}>
                <div className={classes.content}>
                  <p>Tablet</p>
                  <h4>
                    Empower <br /> your work
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${classes.watches} ${classes.category}`}>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <img
                  className={classes.categoryImage3}
                  src={categoryWatch}
                  alt="categoryWatch"
                />
              </div>
              <div className={classes.categoryContentHolder}>
                <div className={classes.content}>
                  <p>Tablet</p>
                  <h4>
                    Empower <br /> your work
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersAndCategories;

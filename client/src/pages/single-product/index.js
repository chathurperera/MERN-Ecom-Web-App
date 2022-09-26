import React from "react";
import classes from "./single-product.module.scss";
import macBook1 from "../../assets/images/Mac Book 4.png";
import macBook2 from "../../assets/images/Mac Book 3.png";
const SingleProduct = () => {
  return (
    <div className={classes.singleProduct}>
      <div className={classes.productWrapper}>
        <div className={classes.productImage}>
          <div className={classes.mainImage}>
            <img src={macBook1} alt="" />
          </div>
          <div className={classes.secondaryImages}>
            <div className={classes.secondaryImageHolder}>
              <img src={macBook2} alt="" />
            </div>
            <div className={classes.secondaryImageHolder}>
              <img src={macBook2} alt="" />
            </div>
            <div className={classes.secondaryImageHolder}>
              <img src={macBook2} alt="" />
            </div>
            <div className={classes.secondaryImageHolder}>
              <img src={macBook2} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.productSelection}>
          <div className={classes.stockTag}>OUT OF STOCK</div>
        
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

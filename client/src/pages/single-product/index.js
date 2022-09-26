import React from "react";
import classes from "./single-product.module.scss";
import macBook1 from "../../assets/images/Mac Book 4.png";
import macBook2 from "../../assets/images/Mac Book 3.png";
import { Rating } from "react-simple-star-rating";
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
          <h2 className={classes.productTitle}>MacBook Pro 13</h2>
          <Rating initialValue="3" size="22" readonly="true" />

          <p className={classes.productDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste
            enim amet perferendis odit sapiente adipisci sed tempore. Quisquam,
            provident iure facilis animi error vitae! Culpa accusamus atque
            eaque doloremque nulla error, cumque eius voluptate rem eligendi
            laudantium reiciendis esse.
          </p>
          <div className={classes.shipping}>
            Delivery : <span>Free Shipping | 10-15 Business days</span>
          </div>
          <div className={classes.quantity}>
            
            <div className={classes.quantityCounter}>
              <div>-</div>
              <div>5</div>
              <div>+</div>
            </div>
          </div>
          <button className={classes.addToCart}>Add To Cart </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

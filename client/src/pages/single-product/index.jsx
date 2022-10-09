import React, { useEffect, useState } from "react";
import classes from "./single-product.module.scss";
import macBook1 from "../../assets/images/Mac Book 4.png";
import macBook2 from "../../assets/images/Mac Book 3.png";
import { Rating } from "react-simple-star-rating";
import API from "api";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    API.get(`/products/${id}`).then((res) => {
      console.log(res);
      setProduct(res.data.data);
    });
  };

  return (
    <div className={classes.singleProduct}>
      <div className={classes.productWrapper}>
        <div className={classes.productImage}>
          <div className={classes.mainImage}>
            <img src={product?.imageUrl} alt={product?.name} />
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

          <p className={classes.productDesc}>{product?.description}</p>
          <div className={classes.colorPicker}>
            <p>Color :</p>
            <div className={classes.colors}>
              <div
                className={classes.colorWrapper}
                style={{ border: "1px solid black" }}
              >
                <div
                  className={classes.color}
                  style={{ backgroundColor: "blue" }}
                ></div>
              </div>
              <div className={classes.colorWrapper}>
                <div
                  className={classes.color}
                  style={{ backgroundColor: "black" }}
                ></div>
              </div>
            </div>
          </div>
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

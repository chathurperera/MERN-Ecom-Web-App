import React, { useEffect, useState } from "react";
import classes from "./single-product.module.scss";
import macBook1 from "../../assets/images/Mac Book 4.png";
import macBook2 from "../../assets/images/Mac Book 3.png";
import { Rating } from "react-simple-star-rating";
import API from "api";
import { addProduct } from "features/cartSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  useEffect(() => {
    getProduct();
  }, []);

  const dispatch = useDispatch();

  const addToCart = async () => {
    dispatch(addProduct({ ...product, quantity, color }));
  };

  const handleQuantity = (type) => {
    if (type === "remove") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const getProduct = async () => {
    API.get(`/products/${id}`).then((res) => {
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
          {!product?.quantity && (
            <div className={classes.stockTag}>OUT OF STOCK</div>
          )}
          <h2 className={classes.productTitle}>{product?.name}</h2>
          {/* <Rating initialValue="3" size="22" readonly="true" /> */}
          <p className={classes.productDesc}>{product?.description}</p>
          <div className={classes.colorPicker}>
            <p>Color :</p>
            <div className={classes.colors}>
              {product?.colors.map((color, index) => {
                return (
                  <div
                    onClick={() => setColor(color)}
                    key={index}
                    className={classes.colorWrapper}
                    style={{ border: "1px solid black" }}
                  >
                    <div
                      className={classes.color}
                      style={{ backgroundColor: `${color}` }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.shipping}>
            Brand : <span>{product?.brand}</span>
          </div>
          <div className={classes.quantity}>
            <div className={classes.quantityCounter}>
              <div onClick={() => handleQuantity("remove")}>-</div>
              <div>{quantity}</div>
              <div onClick={() => handleQuantity("add")}>+</div>
            </div>
          </div>
          <button className={classes.addToCart} onClick={addToCart}>
            Add To Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

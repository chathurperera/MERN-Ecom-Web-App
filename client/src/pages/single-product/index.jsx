import React, { useEffect, useState } from "react";
import classes from "./single-product.module.scss";
import macBook2 from "../../assets/images/Mac Book 3.png";
import API from "api";
import { addProduct, deleteItem, addExistingProduct } from "features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = async () => {
    const existingItem = cart.products?.find((product) => product._id === id);
    if (existingItem) {
      const totalPrice = product.price * quantity;
      dispatch(addExistingProduct({ id, quantity, totalPrice }));
      setQuantity(1);
      setColor("");
      return;
    }
    dispatch(
      addProduct({
        productId: id,
        price: product.price,
        name: product.name,
        imageUrl: product.imageUrl,
        color,
        quantity,
      })
    );
    setQuantity(1);
    setColor("");
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
          {/* <div className={classes.secondaryImages}>
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
          </div> */}
        </div>
        <div className={classes.productSelection}>
          {!product?.quantity && (
            <div className={classes.stockTag}>OUT OF STOCK</div>
          )}
          <h2 className={classes.productTitle}>{product?.name}</h2>
          {/* <Rating initialValue="3" size="22" readonly="true" /> */}
          <p className={classes.productDesc}>{product?.description}</p>
          <p className={classes.price}>${product?.price}.00</p>
          <div className={classes.colorPicker}>
            <p>Color :</p>
            <div className={classes.colors}>
              {product?.colors.map((colorText, index) => {
                return (
                  <div
                    onClick={() => setColor(colorText)}
                    key={index}
                    className={classes.colorWrapper}
                  >
                    <div
                      className={classes.color}
                      style={
                        color === colorText
                          ? {
                              backgroundColor: `${colorText}`,
                              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                              transform: "scale(1.2)",
                            }
                          : { backgroundColor: `${colorText}` }
                      }
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
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

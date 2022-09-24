import React from "react";
import classes from "./Cart.module.scss";
import close from "../../assets/images/cancel.png";
import CartItem from "../CartItem";
const Cart = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.cartOverlay}></div>
      <div className={classes.cartWrapper}>
        <div className={classes.cartHeader}>
            <p>YOUR CART</p>
          <div className={classes.close}>
            <img src={close} alt="close icon" />
          </div>
        </div>
        <div className={classes.cartBody}>
            <CartItem />
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import classes from "./Cart.module.scss";
import close from "../../assets/images/cancel.png";
import { Link } from "react-router-dom";

import CartItem from "../CartItem";
const Cart = ({ setShowCart }) => {
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  return (
    <div className={classes.cart}>
      <div className={classes.cartOverlay}></div>
      <div className={classes.cartWrapper}>
        <div className={classes.cartHeader}>
          <p>YOUR CART</p>
          <div
            onClick={() => setShowCart((prevState) => !prevState)}
            className={classes.close}
          >
            <img src={close} alt="close icon" />
          </div>
        </div>
        <div className={classes.cartBody}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          {isEmptyCart && <h3 >Your Cart is Empty </h3>}
        </div>
        <div className={classes.cartFooter}>
          <div className={classes.total}>
            <p>Total</p>
            <p>$30.00 USD</p>
          </div>
          <div className={classes.btns}>
            <Link to="/">Checkout </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

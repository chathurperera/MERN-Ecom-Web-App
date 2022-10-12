import React, { useState } from "react";
import classes from "./Cart.module.scss";
import close from "../../assets/images/cancel.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "features/cartSlice";
import CartItem from "../CartItem";

const Cart = ({ setShowCart }) => {
  const [isEmptyCart, setIsEmptyCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  return (
    <div className={classes.cart}>
      <div className={classes.cartOverlay}></div>
      <div className={classes.cartWrapper}>
        <div className={classes.cartHeader}>
          <div
            className={classes.clearCart}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </div>
          <p>YOUR CART</p>
          <div
            onClick={() => setShowCart((prevState) => !prevState)}
            className={classes.close}
          >
            <img src={close} alt="close icon" />
          </div>
        </div>
        <div className={classes.cartBody}>
          {cart.products.map((product, index) => {
            return <CartItem product={product} key={index} />;
          })}
          {cart.products?.length < 1 && <h3>Your Cart is Empty </h3>}
        </div>
        <div className={classes.cartFooter}>
          <div className={classes.total}>
            <p>Total</p>
            <p>${cart.total} USD</p>
          </div>
          <div className={classes.btns}>
            {cart.products.length > 0 ? (
              <Link to="/">Checkout </Link>
            ) : (
              <Link to="/">Continue Shopping</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

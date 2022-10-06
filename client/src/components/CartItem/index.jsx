import React from "react";
import classes from "./CartItem.module.scss";
import itemImage from "../../assets/images/Watch Image-min.png";
import deleteIcon from "../../assets/images/delete.png";

const CartItem = () => {
  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItem__image}>
        <img src={itemImage} alt="" />
      </div>
      <div className={classes.cartItem__content}>
        <div className={classes.cartItem__name}>
          <p className={classes.itemName}>Smart Galaxy Watch 3</p>
          <img src={deleteIcon} alt="delete icon" />
        </div>
        <div className={classes.cartItem__price}>
          <div className={classes.itemCount}>
            <button className={classes.decrement}>-</button>
            <div className={classes.count}>5</div>
            <button className={classes.increment}>+</button>
          </div>
          <div className={classes.price}>$ 199.00 USD</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

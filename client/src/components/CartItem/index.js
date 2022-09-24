import React from "react";
import classes from "./CartItem.module.scss";
import itemImage from '../../assets/images/Watch Image-min.png';
import deleteIcon from '../../assets/images/delete.png';

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
        <div className={classes.cartItem__price}></div>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import classes from "./CartItem.module.scss";
import itemImage from "../../assets/images/Watch Image-min.png";
import deleteIcon from "../../assets/images/delete.png";
import { deleteItem } from "features/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItem__image}>
        <img src={product?.imageUrl} alt={product?.name} />
      </div>
      <div className={classes.cartItem__content}>
        <div className={classes.cartItem__name}>
          <p className={classes.itemName}>{product?.name}</p>
          <img
            src={deleteIcon}
            // onClick={() => dispatch(deleteItem({ product }))}
            alt="delete icon"
          />
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

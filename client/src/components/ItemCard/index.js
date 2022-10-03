import React from "react";
import classes from "./ItemCard.module.scss";
import { Link } from "react-router-dom";
import SPORT5SHORTS from 'assets/images/home/SPORT5SHORTS.png';
const ItemCard = ({product}) => {
  return (
    <div className={classes.itemCard}>
      <Link to="">
        <div className={classes.cardHolder}>
          <div className={classes.imageHolder}>
            <img src={SPORT5SHORTS} className={classes.itemImage} alt="product item" />
          </div>
          <div className={classes.contentHolder}>
            <h3 className={classes.title}>{product?.name}</h3>
            <p className={classes.desc}>
              {product?.description.slice(0,70)}....
            </p>
            <p className={classes.price}>$ {product?.price}.00 USD</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;

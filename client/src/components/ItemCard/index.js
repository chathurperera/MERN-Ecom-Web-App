import React from "react";
import classes from "./ItemCard.module.scss";
import macBook from "../../assets/images/Mac Book 3.png";
import { Link } from "react-router-dom";

const ItemCard = () => {
  return (
    <div className={classes.itemCard}>
      <Link to="">
        <div className={classes.cardHolder}>
          <div className={classes.imageHolder}>
            <img src={macBook} className={classes.itemImage} alt="product item" />
          </div>
          <div className={classes.contentHolder}>
            <h3 className={classes.title}>MacBook Pro 13</h3>
            <p className={classes.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, cum
              minus. Commodi praesentium 
            </p>
            <p className={classes.price}>$ 1,2000.00 USD</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;

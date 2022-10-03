import React from "react";
import classes from "./ItemCard.module.scss";
import macBook from "../../assets/images/Mac Book 3.png";
import { Link } from "react-router-dom";
import SPORT5SHORTS from 'assets/images/home/SPORT5SHORTS.png';
const ItemCard = () => {
  return (
    <div className={classes.itemCard}>
      <Link to="">
        <div className={classes.cardHolder}>
          <div className={classes.imageHolder}>
            <img src={SPORT5SHORTS} className={classes.itemImage} alt="product item" />
          </div>
          <div className={classes.contentHolder}>
            <h3 className={classes.title}>SPORT 5 SHORTS</h3>
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

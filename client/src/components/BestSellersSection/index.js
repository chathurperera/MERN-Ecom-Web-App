import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard";
import classes from "./BestSellersSection.module.scss";

const BestSellersSection = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    
  },[])
  return (
    <section className={classes.bestSellersSection}>
      <h2 className={classes.sectionTitle}>Save on our best sellers</h2>
      <p className={classes.sectionDesc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
        modi.
      </p>

      <div className={classes.productsWrapper}>
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
      </div>
    </section>
  );
};

export default BestSellersSection;

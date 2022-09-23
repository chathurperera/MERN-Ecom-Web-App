import React from "react";
import BestSellersSection from "../../components/BestSellersSection";
import EmailSubSection from "../../components/EmailSubSection";
import HeroSlider from "../../components/HeroSlider";
import OffersAndCategories from "../../components/OffersAndCategories";
import classes from "./home.module.scss";
const Home = () => {
  console.log('hello')
  const BASEURL = process.env.REACT_APP_BASE_URL;
  console.log('BASEURL',BASEURL)
  return (
    <div className={classes.title}>
      <HeroSlider />
      <OffersAndCategories />
      <BestSellersSection />
      <EmailSubSection />
    </div>
  );
};

export default Home;

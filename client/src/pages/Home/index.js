import React from "react";
import BestSellersSection from "../../components/BestSellersSection";
import EmailSubSection from "../../components/EmailSubSection";
import HeroSlider from "../../components/HeroSlider";
import OffersAndCategories from "../../components/OffersAndCategories";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <OffersAndCategories />
      <BestSellersSection />
      <EmailSubSection />
    </div>
  );
};

export default Home;

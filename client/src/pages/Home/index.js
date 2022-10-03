import HeroSection from "components/HeroSection";
import React from "react";
import BestSellersSection from "../../components/BestSellersSection";
import EmailSubSection from "../../components/EmailSubSection";
import OffersAndCategories from "../../components/OffersAndCategories";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OffersAndCategories />
      <BestSellersSection />
      <EmailSubSection />
    </div>
  );
};

export default Home;

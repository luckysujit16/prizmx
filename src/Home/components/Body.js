// src/components/Body.js
import React from "react";
import HowDoes from "./HowDoes";
import MarketPlace from "./MarketPlace";
import ParaCalculator from "./ParaCalculator";
import ReviewSlider from "./ReviewSlider";

// import Banner from "./Banner";

const Body = () => {
  // const children = [<Banner />];
  return (
    <main>
      <HowDoes />
      <MarketPlace />
      <ParaCalculator />
      <ReviewSlider />
    </main>
  );
};

export default Body;

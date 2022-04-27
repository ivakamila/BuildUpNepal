import React from "react";
import HeroImpact from "./HeroImpact";
import HeroSlider from "./HeroSlider";
import Menu from "./Menu";

const HeroSection = () => {
  return (
    <div>
      <HeroSlider />
      <Menu />
      <HeroImpact />
    </div>
  );
};

export default HeroSection;

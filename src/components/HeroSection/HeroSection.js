import React from "react";
import HeroImpact from "./HeroImpact";
import HeroSlider from "./HeroSlider";
import Menu from "./Menu";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-section__container">
        <HeroSlider />
        <HeroImpact />
      </div>
      <Menu />
    </div>
  );
};

export default HeroSection;

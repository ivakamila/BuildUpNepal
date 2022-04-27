import { useEffect, useState } from "react";
import { HeroSliderData } from "../../data/HeroSliderData";
import BunLogo from "../../assets/bun-logo.png";
import "./HeroSection.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = HeroSliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="heroSlider">
      {HeroSliderData.map((slide, index) => {
        return (
          <div key={index}>
            {currentSlide === index && (
              <div className="slide">
                <img src={slide.img} alt={slide.label} />
                <img src={BunLogo} alt="Build Up Nepal Logo" className="logo" />
                <h2 className="slideDesc">{slide.desc}</h2>
              </div>
            )}
          </div>
        );
      })}
      <div className="slideNav">
        {HeroSliderData.map((slide, index) => {
          return (
            <div
              key={index}
              id={index}
              className={
                currentSlide === index ? "slideNavLine active" : "slideNavLine"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlider;

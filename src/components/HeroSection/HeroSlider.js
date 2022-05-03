import { HeroSliderData } from "../../data/HeroSliderData";
import { v4 as uuid } from "uuid";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BunLogo from "../../assets/bun-logo.svg";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const [startSlider, setStartSlider] = useState(false);

  SwiperCore.use([Pagination, Autoplay, EffectFade]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setStartSlider(true);
  //     console.log(startSlider);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [startSlider]);

  return (
    <div className="hero-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        onSwiper={(Swiper) => console.log(Swiper)}
        // enabled={startSlider && true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        preloadImages={false}
        lazy={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        className="hero-slider__slide"
      >
        {HeroSliderData.map((slide) => {
          return (
            <SwiperSlide key={uuid()}>
              <img src={slide.img} alt={slide.label} />
              <h2>{slide.desc}</h2>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
      <img
        src={BunLogo}
        alt="Build Up Nepal Logo"
        className="hero-slider__logo"
      />
    </div>
  );
};

export default HeroSlider;

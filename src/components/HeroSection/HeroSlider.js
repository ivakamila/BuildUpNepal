import { HeroSliderData } from "../../data/HeroSliderData";
import { v4 as uuid } from "uuid";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BunLogo from "../../assets/bun-logo.svg";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";

const HeroSlider = () => {
  SwiperCore.use([Pagination, Autoplay, EffectFade]);

  return (
    <div className="hero-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={
          false
          // delay: 3000,
          // disableOnInteraction: true,
        }
        onSwiper={(Swiper) => {
          setTimeout(() => {
            Swiper.autoplay.start();
          }, 3000);
          console.log(Swiper);
        }}
        enabled={true}
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
              <img
                src={slide.img}
                alt={slide.label}
                className="hero-slider__img"
              />
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

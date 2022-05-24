import "./VideoSlider.scss";
import { VideoSliderData } from "../../data/VideoSliderData";
import { v4 as uuid } from "uuid";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";

const VideoSlider = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoIndex, setVideoIndex] = useState(null);

  SwiperCore.use([Pagination, Autoplay, EffectFade]);

  return (
    <div className="video-slider" id="our-entrepreneurs">
      <h2>Meet our Entrepreneurs</h2>
      <LazyLoad height={200} offset={0}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={() => setPlayVideo(false)}
          onClick={(Swiper) => {
            setPlayVideo(true);
            setVideoIndex(Swiper.clickedIndex);
          }}
          watchSlidesProgress={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
          }}
          preloadImages={false}
          lazy={true}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          className="video-slider__swiper"
        >
          {VideoSliderData.map((slide, index) => {
            return (
              <SwiperSlide key={uuid()} className="video__slide">
                <img
                  src={slide.img}
                  alt={slide.smallText}
                  className="slide__img"
                />
                <h3>{slide.quote}</h3>
                <p>{slide.smallText}</p>
                <span className="icon-play-button"></span>
                {playVideo && (
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    playing={true}
                    url={VideoSliderData[videoIndex].url}
                    controls={true}
                    muted
                    className="video__slide--player"
                    style={{ paddingBottom: playVideo && "3em" }}
                  />
                )}
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination"></div>
        </Swiper>
      </LazyLoad>
    </div>
  );
};

export default VideoSlider;

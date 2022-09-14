import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./HeroSlider.module.scss";

const HeroSlider = () => {
  return (
    <div className={classes.sliderWrapper}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={`${classes.slideHolder} ${classes.slideOne}`}>
            <div className={classes.slideContent}>
              <h1>Your Pro setup just got better</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                quidem.
              </p>
            </div>
            <div className={classes.slideImage}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default HeroSlider;

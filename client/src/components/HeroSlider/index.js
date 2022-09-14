import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sliderImage1 from "../../assets/images/sliderImage1.png";
import sliderImage2 from "../../assets/images/sliderImage2.png";
import classes from "./HeroSlider.module.scss";
const HeroSlider = () => {
  return (
    <div className={classes.sliderWrapper}>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={classes.slider}>
          <div className={`${classes.slideHolder} ${classes.slideOne}`}>
            <div className={classes.slideContent}>
              <h1>The new phones are here take a look.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
              </p>
              <Link to="/">Explore</Link>
            </div>
            <div className={classes.slideImage}>
              <img src={sliderImage1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <div className={`${classes.slideHolder} ${classes.slideOne}`}>
            <div className={classes.slideContent}>
              <h1>The new phones are here take a look.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
              </p>
              <Link to="/">Explore</Link>
            </div>
            <div className={classes.slideImage}>
              <img src={sliderImage1} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;

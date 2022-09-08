import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import {Repably} from "../../../assets/repably.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../Styles/Landing.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

export default function Landing() {
  return (
    <>

      <div className="h-screen relative w-full grid place-items-center">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://www.dropbox.com/s/w9k27an1dsyry59/final_repaybly_front_page.jpg?dl=1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
}

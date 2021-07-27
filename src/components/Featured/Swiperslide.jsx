import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img 4.png";
import img5 from "../../assets/img 5.png";
import img6 from "../../assets/img 6.png";
import img7 from "../../assets/img 7.png";
import img8 from "../../assets/img 8.png";
import img9 from "../../assets/img 9.png";
import './Featured.css';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function Swiperslide() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Nothing here"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="No Image1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="No Image2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="No Image3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="No Image4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="No Image5"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="No Image6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="No Image7"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="No Image8"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swiperslide;

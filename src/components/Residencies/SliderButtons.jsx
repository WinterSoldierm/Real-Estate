import React from "react";
import { useSwiper } from "swiper/react";
import "./SliderButton.scss";
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <div className="flexCenter r-button">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </div>
  );
};

export default SliderButtons;

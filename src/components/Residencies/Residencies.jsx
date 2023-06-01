import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.scss";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import SliderButtons from "./SliderButtons";

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />

          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="Property Image" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>₹</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Residencies;

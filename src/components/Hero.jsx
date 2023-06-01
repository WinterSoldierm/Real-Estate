import React from "react";
import "./Hero.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings  innerWidth flexCenter hero-container">
          {/* Left Sider */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                HomeQuest: <br />
                Your Gateway to <br />
                Real Estate Opportunities
              </h1>
            </div>

            <div className="flexColStart hero-desc">
              <span className="secondaryText">
                Discover your dream property with our comprehensive
              </span>
              <span className="secondaryText">
                real estate listings and personalized search features
              </span>
            </div>

            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={999} end={3999} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Winnings</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="hero-image1.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

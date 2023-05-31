import React from "react";
import "./Hero.scss";
import { HiLocationMarker } from "react-icons/hi";

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
              <span>Discover your dream property with our comprehensive</span>
              <span>real estate listings and personalized search features</span>
            </div>

            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
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

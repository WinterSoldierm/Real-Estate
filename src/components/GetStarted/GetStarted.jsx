import React from "react";
import "./GetStarted.scss";
const GetStarted = () => {
  return (
    <div>
      <div className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText">Get Started With MM Real Estate</span>
            <span className="secondaryText">
              Explore More Properties with Us
            </span>

            <button className="button">
              <a href="mailto:realestate@gmail.com">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

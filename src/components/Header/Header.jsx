import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo1.png" alt="logo" width={50} />

          <div className="flexCenter h-menu">
            <a href="/">Residencies</a>
            <a href="/">Our Value</a>
            <a href="/">Contact Us</a>
            <a href="/">Get Started</a>
            <button>
              <a href="/">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

import React from "react";
import "./Footer.scss";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <section className="f-wrapper">
        <div className="paddings innerWidth f-container">
          <div className="flexCenter f-left">
            <a href="" className="orangeText">
              Residencies
            </a>
            <a href="/" className="orangeText">
              Our Value
            </a>
            <a href="/" className="orangeText">
              Contact Us
            </a>
            <a href="/" className="orangeText">
              Get Started
            </a>
          </div>

          <div className="f-center">
            <img src="./logo.png" alt="Logo" width={180} />
          </div>

          <div className="flexColCenter f-right">
            <div className="about-us">
              <span className="orangeText">Follow Us</span>
              <div className=" icons">
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <BsFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="flexCenter">
          <span className="secondaryText">
            &copy; 2023 Your Real Estate Company. All rights reserved.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;

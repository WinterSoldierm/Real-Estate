import React from "react";
import "./Contact.scss";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsCameraVideo } from "react-icons/bs";
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="c-container flexCenter paddings innerWidth">
          {/* left side */}
          <div className="c-left flexColStart">
            <span className="primaryText">Our Contact</span>
            <span className="orangeText">Contact Our Real Estate Team</span>
            <span className="secondaryText">
              Reach out to our friendly team for all your real estate inquiries{" "}
              <br />
              and let us guide you towards your perfect property
            </span>

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart GAP">
                    <div className="flexCenter icon">
                      <MdCall size={20} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="orangeText">+918245697828</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart GAP">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={20} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="orangeText">+918245697828</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>
                </div>
              </div>

              {/* second row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart GAP">
                    <div className="flexCenter icon">
                      <HiOutlineMailOpen size={20} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">E-mail</span>
                      <span className="orangeText">restate@gmail.com</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Mail Now</div>
                </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart GAP">
                    <div className="flexCenter icon">
                      <BsCameraVideo size={20} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="orangeText">+918245697828</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="c-right">
            <div className="image-container">
              <img src="contact3.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

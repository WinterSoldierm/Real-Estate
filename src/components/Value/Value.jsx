import React, { useState } from "react";
import "./Value.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
const Value = () => {
  const [ClassName, setClassName] = useState(null);
  return (
    <div>
      <section className="v-wrapper">
        <div className="flexCenter paddings innerWidth v-container">
          {/* left side */}
          <div className="image-container">
            <img src="./value.jpg" alt="Image" />
          </div>

          {/* right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value we give to you</span>
            <span className="secondaryText">
              Discover your dream home with our extensive selection of <br />
              properties, expert agents, and personalized search tools, making
              your real estate journey seamless and rewarding.
            </span>

            <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
              {data.map((item, index) => {
                return (
                  <AccordionItem
                    className={`accordionItem ${ClassName}`}
                    key={index}
                    uuid={index}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton flexCenter">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText heading">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;

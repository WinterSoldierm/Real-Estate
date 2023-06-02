import React from "react";
import "./Image.scss";
const Image = ( source ) => {
  return (
    <div>
      <div className="image-container">
        <img src={source} alt="Image" />
      </div>
    </div>
  );
};

export default Image;

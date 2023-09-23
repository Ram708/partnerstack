import React from "react";
import slider1 from "../../../../Asset/Home/slider1.png";
import dadd from "../../../../Asset/Home/displayad.png";
import vadd from "../../../../Asset/Home/videoad.png";

import "./Slider.css";

export const Slider = () => {
  return (
    <div className="home-slider-block">
      <div className="slider-container">
        <img src={slider1} alt="" />
      </div>
      <div className="slider-ad">
        <div className="display-ad">
          <img src={dadd} alt="" />
        </div>
        <div className="video-ad">
          <img src={vadd} alt="" />
        </div>
      </div>
    </div>
  );
};

import React from "react";

import "./Adsmarkethome.css";

const AdsMarketHome = [
  {
    id: 1,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },

  {
    id: 2,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },

  {
    id: 3,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },

  {
    id: 4,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },

  {
    id: 5,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },

  {
    id: 6,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },

  {
    id: 7,
    img: "",
    name: "hgfghf",
    categories: "hfhfghfhgf",
  },
];

export const Adsmarkethome = () => {
  return (
    <div className="adsmarkethome">
      <div className="adsmarkethomeheader">
        <div className="adsmarkethometitle">
          <span>Ads market</span>
        </div>
        
      </div>

      <div className="adsmarkethome-slider">
        <div className="adsmarkethomeimgcontainer">
          {AdsMarketHome.map((data) => (
            <div className="adsmarkethome-block-container">
              <div className="adsmarkethome-block">
                <div className="adsmarkethome-blockimg-container">
                  <img src={data.img} alt="" />
                </div>
                <div className="adsmarkethome-block-textcontainer">
                  <span>{data.name}</span>
                  <p>{data.categories}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
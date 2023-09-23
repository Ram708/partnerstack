import React from "react";
import { Slider } from "../Home/Component/Home Slider/Slider";
import Partnersslider from "../../Asset/Home/Partnersslider.png";
import { NavLink } from "react-router-dom";
import "./Partners.css";

export const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-main">
        <div className="partners-left">
          <div className="product-sidebar">
            <NavLink to="/Dashboard" className="product-sidebar-listname">
              Dashboard
            </NavLink>
            <NavLink
              to="/Rewards & Withdrawls"
              className="product-sidebar-listname"
            >
              Rewards & Withdrawls
            </NavLink>
            <NavLink to="/Marketplace" className="product-sidebar-listname">
              Marketplace
            </NavLink>
            <NavLink to="/Status" className="product-sidebar-listname">
              Status
            </NavLink>
            <NavLink
              to="/Apply Partner"
              className="product-sidebar-listname applypartner"
            >
              Apply Partner
            </NavLink>
          </div>
        </div>
        <div className="partnershome">
          <div className="partnershome-img">
            <img src={Partnersslider} alt="" />
          </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>

      <div className="ourpartnerhome-container">
        <div className="ourpartnerhome-left">
          <img src="" alt="" />
        </div>
        <div className="ourpartnerhome-right">
            <div className="ourpartnerhome-right-top">
              <span>All Set</span>
              <span>10%</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod voluptates consectetur magnam nihil unde nobis fuga tempora accusamus vel reiciendis, excepturi tempore eveniet rerum ex cupiditate mollitia illo possimus.
            </p>
            <div className="ourpartnerhome-right-top-button">
              <span>Join Program</span>
            </div>
        </div>
      </div>
     
    </div>
  );
};

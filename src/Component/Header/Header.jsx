import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Talkscubelogo from '../../Asset/Home/Talkscubelogo.png';
import { Home } from "../../Pages/Home/Home";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left"> 
      <div className="header-left-logo">
      <img src={Talkscubelogo} alt="" />
        </div>
      </div>

      <div className="header-right">
        <NavLink to="/" className="home">
          Home
        </NavLink>
        <NavLink to="/whatwedo" className="what-we-do">
          What we do
        </NavLink>
        <NavLink to="/ourproducts" className="our-products">
          Our Products
        </NavLink>
        <NavLink to="/adsmarket" className="ads-market">
          ADs Market
        </NavLink>
        <NavLink to="/partners" className="partners">
          Partners
        </NavLink>
        <NavLink to="/blog" className="blog">
          Blog
        </NavLink>
        
          
        
      </div>
      
    </div>
  );
};

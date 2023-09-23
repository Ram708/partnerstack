import React from "react";

import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import "./Topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left-icon">
      <NavLink to="/www.facebook.com" className="topbar-left-icon-socialicon">
            <FaFacebookF />
          </NavLink>

          <NavLink to="/www.twitter.com" className="topbar-left-icon-socialicon">
            <TfiTwitterAlt />
          </NavLink>

          <NavLink to="/www.instagram.com" className="topbar-left-icon-socialicon">
            <RiInstagramFill />
          </NavLink>

          <NavLink to="/www.linkedin.com" className="footer-icon-socialicon">
            <FaLinkedinIn />
          </NavLink>

          <NavLink to="/www.pintrest.com" className="topbar-left-icon-socialicon">
            <FaPinterest />
          </NavLink>
      </div>
      <div className="topbar-right">
       <span className="Auction"><NavLink to="Auction">Auction</NavLink> </span> 
      <span className="advertisers">Advertisers</span>
        <span className="book-marking">Bookmarking</span>

        <span className="pitch-deck">Pitch Deck</span>
        
            <span className="login">Login / Register </span>
          

        

        
      </div>
    </div>
  );
};

import React from "react";
import "./Footer.css";
import Talkscubelogo from '../../Asset/Home/Talkscubelogo.png'
import { NavLink } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Talkscubelogo} alt="" />
        </div>
        <div className="footer-icon">
          <NavLink to="/www.facebook.com" className="footer-icon-socialicon">
            <FaFacebookF />
          </NavLink>

          <NavLink to="/www.twitter.com" className="footer-icon-socialicon">
            <TfiTwitterAlt />
          </NavLink>

          <NavLink to="/www.instagram.com" className="footer-icon-socialicon">
            <RiInstagramFill />
          </NavLink>

          <NavLink to="/www.linkedin.com" className="footer-icon-socialicon">
            <FaLinkedinIn />
          </NavLink>

          <NavLink to="/www.pintrest.com" className="footer-icon-socialicon">
            <FaPinterest />
          </NavLink>
        </div>
      </div>
      <div className="footer-container-qrn">
        <h1>Quick Links</h1>
        <span>Home</span>
        <span>What we do</span>
        <span>Pitch Decks</span>
        <span>Privacy policy</span>
        <span>Terms & conditions</span>
      </div>

      <div className="footer-container-qrn">
      <h1>Services</h1>
        <span>Auction</span>
        <span>Our Products</span>
        <span>ADs Market</span>
        <span>TalksCube Affiliate</span>
        <span>Partners</span>
      </div>

      <div className="footer-container-qrn">
      <h1>Newsletter</h1>
        <div className="footer-newslatter">
            <input type="text" placeholder="Email" />
            <button className="footer-subs">
                Subscribe
            </button>
         </div>
        <span>support@TalksCube.com</span>
      </div>
     
    </div>
  );
};

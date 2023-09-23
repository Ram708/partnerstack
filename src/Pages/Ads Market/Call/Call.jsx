import React from "react";
import "./Call.css";

import { BiSolidPhoneCall } from "react-icons/bi";
import {LuPhoneCall } from "react-icons/lu";
const Adsmarketplace = [
  {
    id: 1,
    website: "www.website.com",
    mob: "+1-(800-800-0000)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit architecto voluptatum, iusto quod recusandae repudiandae quaerat molestias voluptas, doloremque quos tempora mollitia itaque cupiditate dicta nisi? Facere molestias ullam ipsam.",
  },

  {
    id: 1,
    website: "www.website.com",
    mob: "+1-(800-800-0000)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit architecto voluptatum, iusto quod recusandae repudiandae quaerat molestias voluptas, doloremque quos tempora mollitia itaque cupiditate dicta nisi? Facere molestias ullam ipsam.",
  },

  {
    id: 2,
    website: "www.website.com",
    mob: "+1-(800-800-0000)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit architecto voluptatum, iusto quod recusandae repudiandae quaerat molestias voluptas, doloremque quos tempora mollitia itaque cupiditate dicta nisi? Facere molestias ullam ipsam.",
  },

  {
    id: 3,
    website: "www.website.com",
    mob: "+1-(800-800-0000)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit architecto voluptatum, iusto quod recusandae repudiandae quaerat molestias voluptas, doloremque quos tempora mollitia itaque cupiditate dicta nisi? Facere molestias ullam ipsam.",
  },

  {
    id: 4,
    website: "www.website.com",
    mob: "+1-(800-800-0000)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit architecto voluptatum, iusto quod recusandae repudiandae quaerat molestias voluptas, doloremque quos tempora mollitia itaque cupiditate dicta nisi? Facere molestias ullam ipsam.",
  },

  {
    id: 5,
    website: "www.website.com",
    mob: "+1-(800-800-0000)",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit architecto voluptatum, iusto quod recusandae repudiandae quaerat molestias voluptas, doloremque quos tempora mollitia itaque cupiditate dicta nisi? Facere molestias ullam ipsam.",
  },
];
export const Call = () => {
  return (
    // <div className="adsmarket-call-main">
    //   <div className="adsmarket-call-main-adsmarketplace">
    //     {Adsmarketplace.map((market) => (
    //       <div
    //         className="adsmarket-call-main-adsmarketplace-key"
    //         key={market.id}
    //       >
    //         <div>
    //           <span>{market.website}</span>
    //         </div>

    //         <BiSolidPhoneCall />

    //         <div className="adsmarket-call-main-adsmarketplace-container">
    //           <span className="adsmarket-call-main-adsmarketplace-container-left">
    //             +1-(800-800-0000)
    //           </span>

    //           <p>{market.desc}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
   <div> {Adsmarketplace.map((market) =>(
    <div className="adsmarket-call-container">
    
            
          
      <div className="adsmarket-call">
        <div className="adsmarket-call-top">
          <span></span>
          <span>{market.website}</span>
        </div>

        <div className="adsmarket-call-bottom">
          <div >
          <LuPhoneCall className ="adsmarket-call-bottom-icon"/>
          {/* <BiSolidPhoneCall className="adsmarket-call-bottom-icon-hover"/> */}
          </div>

          <div className="adsmarket-bottom-call">
            <span>{market.mob}</span>
            <p>
            {market.desc}
            </p>
          </div>
        </div>
      </div>
    </div>))}</div>
  );
};



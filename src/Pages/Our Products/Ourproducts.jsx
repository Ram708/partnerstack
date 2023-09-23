import React from "react";
import "./Ourproducts.css";
import { GoSearch } from "react-icons/go";
import Adsences1 from "../Home/Component/Adsences 1/Adsences1";
import { Products } from "./Component/Products/Products";


export const Ourproducts = () => {
  return (
    <div className="products-component">
      <div className="products-searchbar">
        <input type="text" />
        <GoSearch className="products-searchbar-text" />
      </div>
      <div>
        <Adsences1 />
      </div>
        <>
        <Products/>
        </>
    </div>
  );
};

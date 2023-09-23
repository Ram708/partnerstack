import React from "react";
import "./Ourproductshome.css";


const products =[
  {
    id:1,
    img:""
  },

  {
    id:1,
    img:""
  },

  {
    id:1,
    img:""
  },


  {
    id:1,
    img:""
  },

  {
    id:2,
    img:""
  },

  {
    id:2,
    img:""
  },
  {
    id:3,
    img:""
  },
  {
    id:4,
    img:""
  },
]

export default function Ourproductshome() {
  return (
    <div className="ourproductshome">
      <div className="ourproductshome-heading">
        <span>Our Products</span>

        </div>

        <div className="ourproductshome-list-container">
          {
            products.map((product)=>(
              <div className="ourproductshome-list" key={product.id}>
              <div className="ourproductshome-list-img">
                <img src={product.img} alt="" />
              </div>
              <div className="ourproductshome-list-buynow">
                <span>Buy Now</span>
    
              </div>
            
            </div>
            ))
          }

        </div>

        <div className="viewall-product-home"><span>View All</span></div>
    </div>
    
  );
}

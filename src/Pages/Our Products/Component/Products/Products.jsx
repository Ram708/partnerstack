import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";

const products = [
  {
    id: 1,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 2,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 3,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 4,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 5,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 6,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 7,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 8,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 9,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 10,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 11,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 12,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 13,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 14,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 15,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 16,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 17,
    img: "",
    tile: "title",
    desc: "desc",
  },
  {
    id: 18,
    img: "",
    tile: "title",
    desc: "desc",
  },
];

export const Products = () => {
  return (
    <>
      <div className="products-component-explore">
        <div className="products-category-menu-list-left">
          <Sidebar />
        </div>
        <div className="products-category-explore-right">
          {products.map((product) => (
            <div className="products-right-grid">
              <div className="products-right-img">
                <img src="" alt="" />
              </div>
              <div className="">
                <span>{product.tile}</span>
                <p>{product.desc}</p>

                <button>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

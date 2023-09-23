import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./Pitchdeckshome.css";

const PitchDecks = [
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
export const Pitchdeckshome = () => {
  return (
    <div className="Todaysdeals">
      <div className="Todaysheader">
        <div className="Todaystitle">
          <span>Pitch Decks</span>
        </div>
       
      </div>

      <div className="Todays-deal-slider">
        <div className="Todaysdealsliderimgcontainer">
          {PitchDecks.map((data) => (
            <div className="pitchdecks-block-container">
              <div className="pitchdecks-block">
                <div className="pitchdecks-blockimg-container">
                  <img src={data.img} alt="" />
                </div>
                <div className="pitchdecks-block-textcontainer">
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

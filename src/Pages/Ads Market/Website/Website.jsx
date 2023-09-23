import React from 'react'




const Adsmarketplace = [
  { id: 1, img: "", title: "hkchbkdc" , category : "website"},
  { id: 2, img: "", title: "hkchbkdc" , category : "app"},
  { id: 3, img: "", title: "hkchbkdc" , category : "app"},
];
export const Website = () => {
  
    return (
      <div className="adsmarket-main">
        <div className="adsmarket-main-adsmarketplace">
          {Adsmarketplace.map((market) => (
            <div className="adsmarket-main-adsmarketplace-key" key={market.id}>
              <div className="adsmarket-main-adsmarketplace-container">
                <img src={market.img} alt="" />
              </div>
              <span>{market.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
 
import React from 'react'

import './App.css'


const Adsmarketplace = [
  { id: 1, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },
  { id: 2, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 3, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 4, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },


  { id: 5, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 6, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 7, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 8, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 9, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 10, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },

  { id: 11, img: "", 
  title: "hkchbkdc" ,
   category : "app",
   calltoaction:"INSTALL",
  },


];
  
export const App = () => {
  
    return (
      <div className='adsmarket-app'>
        <div className="adsmarket-main">
        <div className="adsmarket-main-adsmarketplace-app">
          {Adsmarketplace.map((market) => (
            <div className="adsmarket-main-adsmarketplace-key" key={market.id}>
              <div className="adsmarket-main-adsmarketplace-container">
                <img src={market.img} alt="" />
              </div>
              <span>{market.title}</span>
              <span className="adsmarket-main-adsmarketplace-container-install">{market.calltoaction}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
 
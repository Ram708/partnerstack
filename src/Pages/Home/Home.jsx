import React from 'react'
import { Slider } from './Component/Home Slider/Slider'
import { Pitchdeckshome  } from './Component/Pitch Decks/Pitchdeckhome'
import Adsences1 from './Component/Adsences 1/Adsences1'
import { Adsmarkethome } from './Component/Ads Market Home/Adsmarkethome'
import Ourpartnerhome from './Component/Our Partner Home/Ourpartnerhome'
import Adsences2home from './Component/Adsences 2/Adsences2home'
import Ourproductshome from './Component/Our Products Home/Ourproductshome'
import Talktoushome from './Component/Talk To Us Home/Talktoushome'
import Tutorialshome from './Component/Tutorials/Tutorialshome'
import { Homeform } from './Component/Home Form/Homeform'



export const Home = () => {
  return (
    <div>
      
      <Slider/>
      <Pitchdeckshome/>
     <Adsmarkethome/>
      
      
      <Ourpartnerhome/>
      <Adsences2home/>
      <Ourproductshome/>
      <Talktoushome/> 
      <Homeform/>
      <Adsences1/>
     
      {/*<Tutorialshome/>    */}
      </div>
  )
}

import React, { useState } from "react";
import "./Adsmarket.css";
import { GoSearch } from "react-icons/go";
import { App } from "./App/App";
import { Call } from "./Call/Call";
import {Video} from "./Video/Video";
import { Website } from "./Website/Website";


export default function Adsmarket() {
  const [app, setApp] = useState(false);
  const [video, setVideo] = useState(false);
  const [web, setWeb] = useState(false);
  const [call, setCall] = useState(true);

  const handleCall = ()=>{
    setCall(true);
    setApp(false);
    setVideo(false);
    setWeb(false);
  }

  const handleVideo = ()=>{
    setCall(false);
    setApp(false);
    setVideo(true);
    setWeb(false);
  }

  const handleApp = ()=>{
    setCall(false);
    setApp(true);
    setVideo(false);
    setWeb(false);
  }

  const handleWeb = ()=>{
    setCall(false);
    setApp(false);
    setVideo(false);
    setWeb(true);
  }


  return (
    <div className="adsmarket-main">
      <div className="adsmarket-main-ads">
      
        <div className="adsmarket-main-button">
          <span className="call" onClick={handleCall}>
            Call
          </span>
          <span className="website" onClick={handleWeb}>
            Website
          </span>
          <span className="app" onClick={handleApp}>
            App
          </span>
          <span className="video" onClick={handleVideo}>
            Video
          </span>
        </div>

        <div className="adsmarket-main-searchbar">
          <div className="adsmarket-main-keyword-searchbar">
            <input type="text" placeholder="Type Keyword" />
            <GoSearch className="adsmarket-main-keyword-searchbar-text" />
          </div>
        </div>
      </div>

      {call && <Call/>}
      <div className="adsmarket-main-adsmarketplace">

        
          

        
          {app && <App/>}
          {video && <Video/>}
         {web && <Website/>}
        


      </div>
    </div>
  );
}

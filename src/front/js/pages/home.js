import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ProjectList } from "../component/projectlist";
import { Display } from "../component/carousel";

import logo from "../../img/logo.png";
import logoGIF from "../../img/logoGIF.gif";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div class=" text-center container">
      <img src={logoGIF} alt="img alt" id="logo-id" />
      
      <div class="row">
        <div class="col"> <h1 className=" subhead fw-bold display-1">BUY. <span id="BUY">LIST.</span><br/> <span id="TRACK">TRACK.</span> REPEAT. </h1>
            <p className="lead text-muted">
              Unlock some of our newest listed products, while you still can.
            </p></div>
        <div class="col"><Display/> </div>
      </div>
      <div>
        
      </div>

      

      <ProjectList />
     
    </div>
  );
};
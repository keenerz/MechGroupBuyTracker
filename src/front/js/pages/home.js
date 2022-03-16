import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ProjectList } from "../component/projectlist";
import { Display } from "../component/carousel";

import homepagegif from "../../img/homepagegif.gif";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div class=" text-center container">
      <div class="row">
        <div class="col">
          <img src={homepagegif} alt="img alt" id="" />
        </div>
        <div class="col">
          <Display />{" "}
        </div>
      </div>
      <div></div>

      <ProjectList />
    </div>
  );
};

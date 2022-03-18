import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ProjectList } from "../component/projectlist";
import { Display } from "../component/carousel";

import homepagegif from "../../img/homepagegif.gif";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const session = actions.getCurrentSession();
  useEffect(() => {
    localStorage.removeItem("projectedit");
  }, []);
  return (
    <div className=" text-center container">
      <div className="col">
        {!session ? <img src={homepagegif} alt="img alt" id="" /> : ""}
      </div>
      {!session ? <Display /> : ""}
      <ProjectList />
    </div>
  );
};

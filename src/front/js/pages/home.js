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
    <div className="text-center mt-5">
      <div>
        <img src={logoGIF} alt="img alt" id="logo-id" />
      </div>

      <section className="py-5 text-center container" id="album">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">List, Buy, Track. Repeat. </h1>
            <p className="lead text-muted">
              Unlock some of our newest listed products, while you still can.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Login
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </section>
      <ProjectList />
      <Display />
    </div>
  );
};

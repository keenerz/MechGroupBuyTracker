import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ProjectList } from "../component/projectlist";
import logo from "../../img/logo.png";
export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <img src={logo} alt="img alt" id="logo-id" />

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">List, Buy, Track. Repeat. </h1>
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
    </div>
  );
};

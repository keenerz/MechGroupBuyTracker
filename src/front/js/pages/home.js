import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ProjectList } from "../component/projectlist";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Group Buy Tracker (working title)</h1>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  Keep track of when products go live, when group buys happend
                  create new lsitings all in one place. Priority givenn to
                  members so sign up before you miss the latest in stock
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Follow on Twitter for Latest Updates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Donate Now
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">List, Buy, Sell. Repeat. </h1>
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

import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">About</h4>
            <p className="text-muted">
              Keep track of when products go live, when group buys happend
              create new lsitings all in one place. Priority givenn to members
              so sign up before you miss the latest in stock
            </p>
            <p>Connect With Us Elsewhere</p>
            <span>
              <i className="fab fa-discord"></i>
            </span>
            <span>
              <i className="fab fa-reddit-alien"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <p>
              Group Buy Tracker made by Keenan Kan, Joel Barrera, and Bianca
              Silket
            </p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Twitter (for latest updates!)
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
    </header>
  </footer>
);

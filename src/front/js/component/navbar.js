import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      {/* <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
      >
        <svg
          className="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Bootstrap"
        >
          <use xlink:href="#bootstrap" />
        </svg>
      </a> */}

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
              Live Listings
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            Customers
          </a>
        </li>        
  <div className="dropdown me-1">
    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Product
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li><a className="dropdown-item" href="#">Keyboard</a></li>
      <li><a className="dropdown-item" href="#">Keycaps</a></li>
      <li><a className="dropdown-item" href="#">Switches</a></li>
    </ul>
  </div>
      </ul>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

      <div className="dropdown text-end">
        <a
          href="#"
          className="d-block link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
          />
        </a>
        <ul
          className="dropdown-menu text-small"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New Listing (Coming Soon!)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              My Account
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

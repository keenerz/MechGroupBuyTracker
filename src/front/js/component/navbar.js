import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="  py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className=" nav me-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Live Lisitings
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link link-dark dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Keycaps
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Keyboards
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Switches
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Sign up
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              ></ul>
            </li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-light text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
            <span className="fs-4">Create New Listing</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>
      <div className="b-example-divider"></div>
    </>
  );
};

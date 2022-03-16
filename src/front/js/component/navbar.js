import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const session = actions.getCurrentSession();
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
        <li>
          <Link to="/">
            <button className="key__button btn btn link-light ">Home</button>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="key__button__long nav-link link-light dropdown-toggle"
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
      <div className="float-end login d-inline-flex">
        {!session ? (
          <Link to="/login">
            <button className="key__button btn btn-primary ">Login</button>
          </Link>
        ) : (
          <button
            className="btn btn-danger key__button"
            onClick={() => {
              actions.logout();
            }}
          >
            Logout
          </button>
        )}
        <Link to="/create">
          <button className="key__button__long btn btn-primary mx-3">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="d-inline-flex">
        <form>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e) => {}}
          />
        </form>
        <div className="dropdown">
          <a
            href="#"
            className="link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle image"
            />
          </a>
          <ul className="dropdown-menu text-small">
            <li>
              <a className="nav-link disabled dropdown-item" href="#">
                Add New Listing (Coming Soon to Members!)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Tracked Listings
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
    </div>
  );
};

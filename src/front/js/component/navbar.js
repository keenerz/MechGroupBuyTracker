import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import { Home } from "../layout";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const session = actions.getCurrentSession();
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
        <li>
          {/* <Link to={`/${Home}`}> */}
          <Link to="/home">
            <button className="btn btn link-light">Home</button>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link link-light dropdown-toggle"
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
        {!session ? (
          <Link to="/login">
            <button className="btn btn-danger">Login</button>
          </Link>
        ) : (
          <button
            className="btn btn-danger log"
            onClick={() => {
              actions.logout();
            }}
          >
            Logout
          </button>
        )}
        <ul className="nav">
          <li className="nav-item">
            <Link to="/create" className="nav-link link-light px-2">
              Sign up
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
          </li>
        </ul>
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
            src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
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
  );
};

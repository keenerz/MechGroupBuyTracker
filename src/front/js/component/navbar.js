/*import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import { App } from "../component/popup";
import { ProjectList } from "./projectlist";

export const Navbar2 = () => {
  const { store, actions } = useContext(Context);
  const session = actions.getCurrentSession();
  const { searchbar, setsearchbar } = useContext(Context);
  const history = useHistory();
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
        <li>
          <Link to="/">
            <button
              className="key__button btn btn link-light "
              onClick={() => localStorage.removeItem("projectedit")}
            >
              Home
            </button>
          </Link>
        </li>
        {session ? <App /> : ""}
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
              history.push("/");
            }}
          >
            Logout
          </button>
        )}
        {!session ? (
          <Link to="/create">
            <button className="key__button__long btn btn-primary mx-3">
              Sign Up
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="d-inline-flex">
        <form>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e) => {
              store.projects
                .filter(() =>
                  store.project.name.filter("keycap", "keyboard", "switches")
                )
                .map((filteredproject) => {
                  <ul>
                    <li>{filteredproject.target.value}</li>
                  </ul>;
                });
            }}
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
            {!session ? (
              <li className="nav-link disabled dropdown-item">Please Login!</li>
            ) : (
              <div>
                <li>
                  <a className="nav-link disabled dropdown-item" href="#">
                    My Projects (Coming Soon to Members!)
                  </a>
                </li>
                <li>
                  <Link
                    to="/accountsettings"
                    className="nav-link dropdown-item"
                  >
                    Account Settings
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
*/

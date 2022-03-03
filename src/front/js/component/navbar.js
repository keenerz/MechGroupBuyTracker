import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav class="  py-2 bg-light border-bottom">
        <div class="container d-flex flex-wrap">
          <ul class=" nav me-auto">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-dark px-2">
                Live Lisitings
              </a>
            </li>
           
            <li class="nav-item">
              <a href="#" class="nav-link link-dark px-2">
                About</a>
              
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link link-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Keycaps</a></li>
            <li><a class="dropdown-item" href="#">Keyboards</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Switches</a></li>
          </ul>
        </li>
        
          </ul>
          <ul class="nav">
            <li class="nav-item">
              <a href="#" class="nav-link link-dark px-2">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-dark px-2">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header class="py-3 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-light text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
            <span class="fs-4">Create New Listing</span>
          </a>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>
      <div class="b-example-divider"></div>
    </>
  );
};

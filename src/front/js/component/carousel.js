import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const frontDisplay = () => {
  return (
    <section id="carousel">
      <div id="carousel-1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <div class="bg-light border rounded border-light front-keyboard carousel-front jumbotron py-5 px-4">
              <h1 class="front-title">First Slide</h1>
              <p class="front-subtitle">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
              <p>
                <a
                  class="btn btn-primary front-button plat"
                  role="button"
                  href="#"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-light border rounded border-light front-caps carousel-front jumbotron py-5 px-4">
              <h1 class="front-title">Second Slide</h1>
              <p class="front-subtitle">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
              <p>
                <a
                  class="btn btn-primary front-button plat"
                  role="button"
                  href="#"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="bg-light border rounded border-light front-switches carousel-front jumbotron py-5 px-4">
              <h1 class="front-title">Third Slide </h1>
              <p class="front-subtitle">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
              <p>
                <a
                  class="btn btn-primary front-button plat"
                  role="button"
                  href="#"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <a
            class="carousel-control-prev"
            href="#carousel-1"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel-1"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <ol class="carousel-indicators">
          <li data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
          <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
          <li
            class="active"
            data-bs-target="#carousel-1"
            data-bs-slide-to="2"
          ></li>
        </ol>
      </div>
    </section>
  );
};

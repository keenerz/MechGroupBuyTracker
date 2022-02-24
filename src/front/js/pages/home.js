import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Group Buy Tracker (working title)</h1>
      <div class="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <div>
            <p class="card-text"></p>
          </div>

          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

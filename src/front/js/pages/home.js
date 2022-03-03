import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/cards";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Group Buy Tracker (working title)</h1>     
      <header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Keep track of when products go live, when group buys happend create new lsitings all in one place. Priority givenn to members so sign up before you miss the latest in stock.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>


  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">List, Buy, Sell. Repeat. </h1>
        <p class="lead text-muted">Unlock some of our newest listed products, while you still can.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Login</a>
          <a href="#" class="btn btn-secondary my-2">Sign Up</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div
        className="d-flex flex-row mx-auto"
        style={{ width: "90%", overflow: "auto" }}
      >
        {store.projects.map((c, i) => (
          <Card
            data={c}
            id={store.projects[i].id}
            name={store.projects[i].name}
            project_type={store.projects[i].project_type}
            hair_color={store.projects[i].hair_color}
            eye_color={store.projects[i].eye_color}
            img={store.projects[i].img_url}
            details={store.projects[i].details}
            key={i}
          />
        ))}
      </div>
     
       

      
       

        
    
       
      </div>
    </div>
  </div>
    </div>
  );
};

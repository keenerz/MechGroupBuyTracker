import React, { useContext, useState } from "react";
import "/workspace/MechGroupBuyTracker/src/front/styles/home.css";
import { Context } from "/workspace/MechGroupBuyTracker/src/front//js/store/appContext.js";
import { useHistory } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <section className="login-dark">
      <form
        method="post"
        onSubmit={(e) => {
          actions.login(email, password).then((session) => history.push("/"));
          e.preventDefault();
        }}
      >
        <h2 className="visually-hidden">Login Form</h2>
        <div className="illustration">
          <i className="fa-solid fa-lock-keyhole"></i>
        </div>
        <div className="mb-3">
          <label for="email" classNameName="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="user@user.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="password" classNameName="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary d-block w-100" type="submit">
            Log In
          </button>
        </div>
        <a className="forgot" href="#">
          Forgot your email or password?
        </a>
      </form>
    </section>
  );
};

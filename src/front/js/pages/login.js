import React, { useContext, useState } from "react";
import "/workspace/MechGroupBuyTracker/src/front/styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "/workspace/MechGroupBuyTracker/src/front//js/store/appContext.js";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  console.log("This is your token", store.session);

  return (
    
      <section class="login-dark">
        <form
          method="post"
          onSubmit={(e) => {
            actions.login(email, password).then((session) => history.push("/"));
            e.preventDefault();
          }}
        >
          <h2 class="visually-hidden">Login Form</h2>
          <div class="illustration">
            <i class="fa-solid fa-lock-keyhole"></i>
          </div>
          <div class="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              class="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="user@user.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              class="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <button class="btn btn-primary d-block w-100" type="submit">
              Log In
            </button>
          </div>
          <a class="forgot" href="#">
            Forgot your email or password?
          </a>
        </form>
      </section>
  );
};

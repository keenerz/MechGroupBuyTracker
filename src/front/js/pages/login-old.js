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
    <div>
      <form
        onSubmit={(e) => {
          actions.login(email, password).then((session) => history.push("/"));
          e.preventDefault();
        }}
        className="container"
      >
        <div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="shhhh"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div align="center">
        <Link to="...">
          <button type="newuser" className="btn btn-primary">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export function AccountCreation(props) {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const history = useHistory();

  let matchedpassword = null;
  let matchingPassword = () => {
    if (password !== passwordRepeat) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <section class="register">
      <div class="form-container">
        <div class="image-holder"></div>
        <form
          method="post"
          onSubmit={(e) => {
            actions
              .createUser(email, password, username)
              .then((session) => history.push("/login"));
            e.preventDefault();
          }}
        >
          <h2 class="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div class="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              class="form-control"
              type="username"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="password-repeat" className="form-label">
              Password Confirmation
            </label>
            <input
              class="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password (repeat)"
              id="password-repeat"
              value={passwordRepeat}
              onChange={(e) => {
                setPasswordRepeat(e.target.value);
                matchingPassword();
              }}
            />
          </div>
          {matchingPassword() === false ? (
            <div class="alert alert-danger" role="alert">
              Passwords do not match!
            </div>
          ) : null}

          <div class="mb-3">
            <button class="btn btn-primary d-block w-100" type="submit">
              Sign Up
            </button>
          </div>
          <a class="already" href="#">
            You already have an account? Login here.
          </a>
        </form>
      </div>
    </section>
  );
}

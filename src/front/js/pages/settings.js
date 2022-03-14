import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";

export function Settings(props) {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  const usernameEdit = JSON.parse(localStorage.getItem("useredit"));

  let matchingPassword = () => {
    if (password !== passwordRepeat) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    actions.getUser();
    setEmail(usernameEdit.email);
    setUsername(usernameEdit.username);
    setPhone(usernameEdit.phone);
  }, []);

  return (
    <section className="register">
      <div className="form-container">
        <form
          method="post"
          onSubmit={(e) => {
            if (matchingPassword() === false) {
              alert("Make sure your passwords are matching!");
              e.preventDefault();
            } else {
              actions
                .editUser(email, password, username, phone)
                .then((session) => history.push("/"));
              e.preventDefault();
            }
          }}
        >
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="user@user.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              type="username"
              name="username"
              placeholder="User"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              placeholder="+18884452342"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password-repeat" className="form-label">
              Password Confirmation
            </label>
            <input
              className="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password (Repeat)"
              id="password-repeat"
              value={passwordRepeat}
              onChange={(e) => {
                setPasswordRepeat(e.target.value);
                matchingPassword();
              }}
            />
          </div>
          {matchingPassword() === false ? (
            <div className="alert alert-danger" role="alert">
              Passwords do not match!
            </div>
          ) : null}

          <div className="mb-3">
            <button className="btn btn-primary d-block w-100" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

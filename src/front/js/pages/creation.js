import React from "react";
import "../../styles/register.css";

export function AccountCreation(props) {
  return (
    <section class="register">
      <div class="form-container">
        <div class="image-holder"></div>
        <form method="post">
          <h2 class="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div class="mb-3">
            <input
              class="form-control"
              type="Username"
              name="Username"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password (repeat)"
            />
          </div>

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

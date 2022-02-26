import react from "react";

export function accountLogin(props) {
  return (
    <div className="container">
      <section class="login-dark">
        <form method="post">
          <h2 class="visually-hidden">Login Form</h2>
          <div class="illustration">
            <i class="fa-solid fa-lock-keyhole"></i>
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
            <button class="btn btn-primary d-block w-100" type="submit">
              Log In
            </button>
          </div>
          <a class="forgot" href="#">
            Forgot your email or password?
          </a>
        </form>
      </section>
    </div>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Login.css";
import { useContext } from "react";
import WorklyContext from "../../contexts/worklyContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    showPassword,
    setShowPassword,
    loginUser,
    loginData,
    loginHandleChange,
  } = useContext(WorklyContext);

  return (
    <div className="d-flex justify-content-center">
      <div className="login-box text-center">
        <h4 className="brand-text mb-3">Workly</h4>

        <h5 className="fw-semibold mb-2">Log in to your account</h5>
        <p className="text-muted small mb-4">Please enter your details.</p>

        <form
          className="text-start"
          onSubmit={(e) => {
            loginUser(e, navigate);
          }}
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              value={loginData.email}
              onChange={(e) => loginHandleChange(e)}
            />
          </div>

          <div className="mb-4 position-relative">
            <label className="form-label fw-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              autoComplete="off"
              className="form-control pe-5"
              value={loginData.password}
              onChange={(e) => loginHandleChange(e)}
            />
            <button
              type="button"
              className="btn btn-link position-absolute end-0 top-50 me-2 text-muted"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
              ></i>
            </button>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
        <p className="text-muted small mt-3 d-flex justify-content-center align-items-strech">
          <span className="toggle-login-text">Don't have an account?</span>
          <Link
            type="button"
            className="btn btn-link p-0 px-2 fw-semibold text-decoration-none"
            to="/signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

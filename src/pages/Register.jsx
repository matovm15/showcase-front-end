import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../components/Layout";
import { registerSchema } from "../utils/validations";
import useTitle from "../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { errors } = formState;

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Register</h2>
              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Register</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">
            <div className="login-register-page">
              <div className="welcome-text">
                <h3 style={{ fontSize: "26px" }}>Let's create your account!</h3>
                <span>
                  Already have an account? <a href="/login">Log In!</a>
                </span>
              </div>

              <div className="account-type">
                <div>
                  <input
                    type="radio"
                    name="account-type-radio"
                    id="freelancer-radio"
                    className="account-type-radio"
                    defaultChecked
                  />
                  <label
                    htmlFor="freelancer-radio"
                    className="ripple-effect-dark"
                  >
                    <i className="icon-material-outline-account-circle"></i>{" "}
                    Freelancer
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="account-type-radio"
                    id="employer-radio"
                    className="account-type-radio"
                  />
                  <label
                    htmlFor="employer-radio"
                    className="ripple-effect-dark"
                  >
                    <i className="icon-material-outline-business-center"></i>{" "}
                    Employer
                  </label>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(handleRegister)}
                id="register-account-form"
              >
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input
                    type="email"
                    className={`input-text with-border ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="emailaddress-register"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div
                  className="input-with-icon-left"
                  data-tippy-placement="bottom"
                  data-tippy=""
                  data-original-title="Should be at least 8 characters long"
                >
                  <i className="icon-material-outline-lock"></i>
                  <input
                    type="password"
                    className={`input-text with-border ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password-register"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input
                    type="password"
                    className={`"input-text with-border" ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    id="password-repeat-register"
                    placeholder="Repeat Password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

              </form>
              <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="submit"
                form="register-account-form"
                style={{ width: "504.156px" }}
              >
                Register{" "}
                <i className="icon-material-outline-arrow-right-alt"></i>
              </button>

              <div className="social-login-separator">
                <span>or</span>
              </div>
              <div className="social-login-buttons">
                <button className="facebook-login ripple-effect">
                  <i className="icon-brand-facebook-f"></i> Register via
                  Facebook
                </button>
                <button className="google-login ripple-effect">
                  <i className="icon-brand-google-plus-g"></i> Register via
                  Google+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-top-70"></div>
    </Layout>
  );
};

export default Register;

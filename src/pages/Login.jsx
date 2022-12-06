import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { loginSchema } from "../utils/validations";
import Layout from "../components/Layout";
import useTitle from "../hooks/useTitle";
import { userLogin } from "../actions/users";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  useTitle("Login");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData
  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(loginSchema),
  // });

  // const { errors } = formState;

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(userLogin(formData, navigate))
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <Layout>
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Log In</h2>

              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Log In</li>
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
                <h3>We're glad to see you again!</h3>
                <span>
                  Don't have an account? <a href="/register">Sign Up!</a>
                </span>
              </div>

              <form onSubmit={handleSubmit} id="login-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>

                  {/* ${
                      errors.email ? "is-invalid" : ""
                    }`} */}
                  <input
                    type="text"
                    className='input-text with-border'
                    name="email"
                    value={email}
                    onChange={handleChange}
                    id="emailaddress"
                    placeholder="Email Address"
                    />
                    {/* {...register("email")} */}
                  {/* {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )} */}
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  
                  {/* ${
                      errors.password ? "is-invalid" : ""
                    }`} */}
                  <input
                    type="password"
                    className='input-text with-border'
                    name="password"
                    value={password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Password"
                    />
                    {/* {...register("password")} */}
                  {/* {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )} */}
                </div>
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </form>

              <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="submit"
                form="login-form"
                style={{ width: "504.156px" }}
              >
                Log In <i className="icon-material-outline-arrow-right-alt"></i>
              </button>

              <div className="social-login-separator">
                <span>or</span>
              </div>
              <div className="social-login-buttons">
                <button className="facebook-login ripple-effect">
                  <i className="icon-brand-facebook-f"></i> Log In via Facebook
                </button>
                <button className="google-login ripple-effect">
                  <i className="icon-brand-google-plus-g"></i> Log In via
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

export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validations";
import Layout from "../components/Layout";
import useTitle from "../hooks/useTitle";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useTitle("Login");
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { errors } = formState;

  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const handleLogin = async (data) => {
    setError(null);
    try {
      const { tokens, user } = await login(data).unwrap();
      dispatch(setCredentials({ tokens, user }));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (parseInt(error.status) != error.status) {
        setError("Something went wrong. Please try again later.");
      } else {
        setError(error?.data?.message);
      }
    }
  };
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
                {error && (
                  <div className="notification error closeable">
                    <p>{error}</p>
                    <a
                      onClick={() => setError(null)}
                      className="close"
                      href="#"
                    ></a>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit(handleLogin)} id="login-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input
                    type="text"
                    className={`input-text with-border ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    name="emailaddress"
                    id="emailaddress"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input
                    type="password"
                    className={`input-text with-border ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    name="password"
                    id="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
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
                {isLoading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Log In"
                )}
                <i className="icon-material-outline-arrow-right-alt"></i>
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
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../components/Layout";
import { registerSchema } from "../utils/validations";
import useTitle from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useRegisterUserMutation } from "../features/auth/authApiSlice";

const Register = () => {
  useTitle("Register");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { errors } = formState;

  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

  const handleRegister = async (data) => {
    setError(null);
    try {
      const { tokens, user } = await registerUser({
        ...data,
      }).unwrap();
      dispatch(setCredentials({ tokens, user }));
      if(user.role === 'freelancer'){
        console.log(user)
        navigate(`/register/create-profile/${user.id}`);
      }else{
        navigate("/dashboard");
      }
    } catch (error) {
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

              <div className="account-type">
                <div>
                  <input
                    type="radio"
                    name="account-type-radio"
                    id="freelancer-radio"
                    className="account-type-radio"
                    value={'freelancer'}
                    defaultChecked
                    {...register("role")}
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
                    value={'employer'}
                    {...register("role")}
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
                  <i className="icon-material-outline-account-circle"></i>
                  <input
                    type="text"
                    className={`input-text with-border ${
                      errors.first_name ? "is-invalid" : ""
                    }`}
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    {...register("first_name")}
                  />
                  {errors.first_name && (
                    <div className="invalid-feedback">
                      {errors.first_name.message}
                    </div>
                  )}
                </div>
                <div className="input-with-icon-left">
                  <i className="icon-feather-user"></i>
                  <input
                    type="text"
                    className={`input-text with-border ${
                      errors.last_name ? "is-invalid" : ""
                    }`}
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    {...register("last_name")}
                  />
                  {errors.first_name && (
                    <div className="invalid-feedback">
                      {errors.last_name.message}
                    </div>
                  )}
                </div>
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
                {isLoading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  'Register'
                )}
                
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../components/Layout";
import { registerSchema } from "../utils/validations";
import useTitle from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../actions/users";

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    first_name:'',
    last_name: '',
    email: '',
    role: 'freelancer',
    password: '',
    confirmPassword: ''
  })
  useTitle("Register");
  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(registerSchema),
  // });

  // const { errors } = formState;

  const {first_name, last_name,email, password, confirmPassword} = formData

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(userRegister(formData, navigate))

    setFormData({
      ...formData,
      password: '',
      confirmPassword: ''
    })
    // navigate('/register/create-profile/freelancer')
  };


  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  
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
                    name="role"
                    id="freelancer-radio"
                    value={'freelancer'}
                    onClick={onChange}
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
                    name="role"
                    value={'employer'}
                    onClick={onChange}
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
                onSubmit={onSubmit}
                id="register-account-form"
              >
                 <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  {/* Email Error */}
                  {/* ${
                      errors.email ? "is-invalid" : ""
                    } */}
                    {/* {...register("email")} */}
                  <input
                    type="text"
                    name="first_name"
                    className={'input-text with-border'}
                    id="first_name-register"
                    value={first_name}
                    placeholder="First name"
                    onChange={onChange}
                  />
                  {/* {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )} */}
                </div>
                 <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  {/* Email Error */}
                  {/* ${
                      errors.email ? "is-invalid" : ""
                    } */}
                    {/* {...register("email")} */}
                  <input
                    type="text"
                    name="last_name"
                    className={'input-text with-border'}
                    id="last_name-register"
                    value={last_name}
                    placeholder="Last name"
                    onChange={onChange}
                  />
                  {/* {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )} */}
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  {/* Email Error */}
                  {/* ${
                      errors.email ? "is-invalid" : ""
                    } */}
                    {/* {...register("email")} */}
                  <input
                    type="email"
                    name="email"
                    className={'input-text with-border'}
                    id="email-register"
                    value={email}
                    placeholder="Email Address"
                    onChange={onChange}
                  />
                  {/* {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )} */}
                </div>

                <div
                  className="input-with-icon-left"
                  data-tippy-placement="bottom"
                  data-tippy=""
                  data-original-title="Should be at least 8 characters long"
                >
                  <i className="icon-material-outline-lock"></i>
                  {/* ${
                      errors.password ? "is-invalid" : ""
                    } */}
                    {/* {...register("password")} */}

                  <input
                    type="password"
                    name='password'
                    className={`input-text with-border`}
                    id="password-register"
                    value={password}
                    placeholder="Password"
                    onChange={onChange}
                  />
                  {/* {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )} */}
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>

                  {/* ${
                      errors.confirmPassword ? "is-invalid" : ""
                    } */}
                    {/* {...register("confirmPassword")} */}

                  <input
                    type="password"
                    name='confirmPassword'
                    className={"input-text with-border"}
                    id="password-repeat-register"
                    value={confirmPassword}
                    onChange={onChange}
                    placeholder="Repeat Password"
                  />
                  {/* {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )} */}
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

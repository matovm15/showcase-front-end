/* eslint-disable */
import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-rows-container">
                <div className="footer-rows-left">
                  <div className="footer-row">
                    <div className="footer-row-inner footer-logo">
                      <img src="images/logo2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="footer-rows-right">
                  <div className="footer-row">
                    <div className="footer-row-inner">
                      <ul className="footer-social-links">
                        <li>
                          <a
                            href="#"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                            data-tippy=""
                            data-original-title="Facebook"
                          >
                            <i className="icon-brand-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                            data-tippy=""
                            data-original-title="Twitter"
                          >
                            <i className="icon-brand-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                            data-tippy=""
                            data-original-title="Instagram"
                          >
                            <i className="icon-brand-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                            data-tippy=""
                            data-original-title="LinkedIn"
                          >
                            <i className="icon-brand-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                  </div>

                  <div className="footer-row">
                    <div className="footer-row-inner">
                      <div className="btn-group bootstrap-select language-switcher">
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-default"
                          data-toggle="dropdown"
                          role="button"
                          title="English"
                        >
                          <span className="filter-option pull-left">English</span>
                          &nbsp;
                          <span className="bs-caret">
                            <span className="caret"></span>
                          </span>
                        </button>
                        <div className="dropdown-menu open" role="combobox">
                          <ul
                            className="dropdown-menu inner"
                            role="listbox"
                            aria-expanded="false"
                          >
                            <li data-original-index="0" className="selected">
                              <a
                                tabIndex="0"
                                className=""
                                data-tokens="null"
                                role="option"
                                aria-disabled="false"
                                aria-selected="true"
                              >
                                <span className="text">English</span>
                                <span className="glyphicon glyphicon-ok check-mark"></span>
                              </a>
                            </li>
                            <li data-original-index="1">
                              <a
                                tabIndex="0"
                                className=""
                                data-tokens="null"
                                role="option"
                                aria-disabled="false"
                                aria-selected="false"
                              >
                                <span className="text">Français</span>
                                <span className="glyphicon glyphicon-ok check-mark"></span>
                              </a>
                            </li>
                            <li data-original-index="2">
                              <a
                                tabIndex="0"
                                className=""
                                data-tokens="null"
                                role="option"
                                aria-disabled="false"
                                aria-selected="false"
                              >
                                <span className="text">Español</span>
                                <span className="glyphicon glyphicon-ok check-mark"></span>
                              </a>
                            </li>
                            <li data-original-index="3">
                              <a
                                tabIndex="0"
                                className=""
                                data-tokens="null"
                                role="option"
                                aria-disabled="false"
                                aria-selected="false"
                              >
                                <span className="text">Deutsch</span>
                                <span className="glyphicon glyphicon-ok check-mark"></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <select
                          className="selectpicker language-switcher"
                          data-selected-text-format="count"
                          data-size="5"
                          tabIndex="-98"
                        >
                          <option defaultValue="english">English</option>
                          <option>Français</option>
                          <option>Español</option>
                          <option>Deutsch</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>For Candidates</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Browse Jobs</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Add Resume</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Job Alerts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>My Bookmarks</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>For Employers</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Browse Candidates</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Post a Job</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Post a Task</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Plans &amp; Pricing</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>Helpful Links</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Terms of Use</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>Account</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Log In</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>My Account</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <h3>
                <i className="icon-feather-mail"></i> Sign Up For a Newsletter
              </h3>
              <p>
                Weekly breaking news, analysis and cutting edge advices on job
                searching.
              </p>
              <form action="#" method="get" className="newsletter">
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your email address"
                />
                <button type="submit">
                  <i className="icon-feather-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              © {new Date().getFullYear()} <strong>Show Case</strong>. All
              Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

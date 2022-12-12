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
                <h3>For Freelancers</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Browse Gigs</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Add Resume</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Gig Alerts</span>
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
                      <span>Browse Freelancers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Post a Gig</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>My bids</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Manage Bidders</span>
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
                      <span>Blog</span>
                    </a>
                  </li>
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
                      <span>Create account</span>
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
              © {new Date().getFullYear()} <strong>showcase</strong>. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

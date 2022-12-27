import Layout from "../components/Layout";
import Sidebar from "../components/freelancers/Sidebar";

const FindFreelancers = () => {
  return (
    <Layout>
      <div className="full-page-container" style={{ height: "707px" }}>
        <Sidebar />
        <div className="full-page-content-container" data-simplebar="init">
          <div
            className="simplebar-track vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ visibility: "visible", top: "0px", height: "107px" }}
            ></div>
          </div>
          <div
            className="simplebar-scroll-content"
            style={{ paddingBottom: "17px", marginRight: "-17px" }}
          >
            <div className="full-page-content-inner">
              <h3 className="page-title">Search Results</h3>
              <div className="notify-box margin-top-15">
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch-button"></span>
                    <span className="switch-text">
                      Turn on email alerts for this search
                    </span>
                  </label>
                </div>

                <div className="sort-by">
                  <span>Sort by:</span>
                  <div className="btn-group bootstrap-select hide-tick dropup">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      role="button"
                      title="Relevance"
                      aria-expanded="false"
                    >
                      <span className="filter-option pull-left">Relevance</span>
                      &nbsp;
                      <span className="bs-caret">
                        <span className="caret"></span>
                      </span>
                    </button>
                    <div
                      className="dropdown-menu open"
                      role="combobox"
                      style={{
                        maxHeight: "166px",
                        overflow: "hidden",
                        minHeight: "121px",
                      }}
                    >
                      <ul
                        className="dropdown-menu inner"
                        role="listbox"
                        aria-expanded="false"
                        style={{
                          maxHeight: "146px",
                          overflowY: "auto",
                          minHeight: "101px",
                        }}
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
                            <span className="text">Relevance</span>
                            <span className="glyphicon glyphicon-ok check-mark"></span>
                          </a>
                        </li>
                        <li data-original-index="1" className="">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">Newest</span>
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
                            <span className="text">Oldest</span>
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
                            <span className="text">Random</span>
                            <span className="glyphicon glyphicon-ok check-mark"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select className="selectpicker hide-tick" tabIndex="-98">
                      <option>Relevance</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>Random</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="freelancers-container freelancers-grid-layout margin-top-35">
                {[...Array(12)].map((e, i) => (
                  <div className="freelancer">
                    <div className="freelancer-overview">
                      <div className="freelancer-overview-inner">
                        <span className="bookmark-icon"></span>

                        <div className="freelancer-avatar">
                          <div className="verified-badge"></div>
                          <a href="single-freelancer-profile.html">
                            <img
                              src="https://via.placeholder.com/100x100"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="freelancer-name">
                          <h4>
                            <a href="single-freelancer-profile.html">
                              Tom Smith{" "}
                              <img
                                className="flag"
                                src="images/flags/gb.svg"
                                alt=""
                                data-tippy-placement="top"
                                data-tippy=""
                                data-original-title="United Kingdom"
                              />
                            </a>
                          </h4>
                          <span>UI/UX Designer</span>
                        </div>

                        <div className="freelancer-rating">
                          <div className="star-rating" data-rating="4.9">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="freelancer-details">
                      <div className="freelancer-details-list">
                        <ul>
                          <li>
                            Location{" "}
                            <strong>
                              <i className="icon-material-outline-location-on"></i>{" "}
                              London
                            </strong>
                          </li>
                          <li>
                            Rate <strong>$60 / hr</strong>
                          </li>
                          <li>
                            Job Success <strong>95%</strong>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="single-freelancer-profile.html"
                        className="button button-sliding-icon ripple-effect"
                        style={{ width: "333.328px" }}
                      >
                        View Profile{" "}
                        <i className="icon-material-outline-arrow-right-alt"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="clearfix"></div>
              <div className="pagination-container margin-top-20 margin-bottom-20">
                <nav className="pagination">
                  <ul>
                    <li className="pagination-arrow">
                      <a href="#" className="ripple-effect">
                        <i className="icon-material-outline-keyboard-arrow-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ripple-effect">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ripple-effect current-page">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ripple-effect">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ripple-effect">
                        4
                      </a>
                    </li>
                    <li className="pagination-arrow">
                      <a href="#" className="ripple-effect">
                        <i className="icon-material-outline-keyboard-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="clearfix"></div>
              <div className="small-footer margin-top-15">
                <div className="small-footer-copyrights">
                  © {new Date().getFullYear()} <strong>Show Case</strong>. All
                  Rights Reserved.
                </div>
                <ul className="footer-social-links">
                  <li>
                    <a
                      href="#"
                      data-tippy-placement="top"
                      data-tippy=""
                      data-original-title="Facebook"
                    >
                      <i className="icon-brand-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-tippy-placement="top"
                      data-tippy=""
                      data-original-title="Twitter"
                    >
                      <i className="icon-brand-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-tippy-placement="top"
                      data-tippy=""
                      data-original-title="Google Plus"
                    >
                      <i className="icon-brand-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-tippy-placement="top"
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
    </Layout>
  );
};
export default FindFreelancers;

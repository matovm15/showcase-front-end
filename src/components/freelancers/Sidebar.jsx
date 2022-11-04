import React from "react";

const Sidebar = () => {
  return (
    <div className="full-page-sidebar">
      <div
        className="full-page-sidebar-inner"
        data-simplebar="init"
        style={{ height: "707px" }}
      >
        <div
          className="simplebar-track vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ visibility: "visible", top: "0px", height: "25px" }}
          ></div>
        </div>
        <div
          className="simplebar-track horizontal"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ visibility: "visible", left: "0px", width: "25px" }}
          ></div>
        </div>
        <div
          className="simplebar-scroll-content"
          style={{ paddingRight: "17px", marginBottom: "-34px" }}
        >
          <div
            className="simplebar-content"
            style={{ paddingBottom: "17px", marginRight: "-17px" }}
          >
            <div className="sidebar-container">
              <div className="sidebar-widget">
                <h3>Location</h3>
                <div className="input-with-icon">
                  <div id="autocomplete-container">
                    <input
                      id="autocomplete-input"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <i className="icon-material-outline-location-on"></i>
                </div>
              </div>
              <div className="sidebar-widget">
                <h3>Category</h3>
                <div className="btn-group bootstrap-select show-tick default">
                  <button
                    type="button"
                    className="btn dropdown-toggle bs-placeholder btn-default"
                    data-toggle="dropdown"
                    role="button"
                    title="All Categories"
                  >
                    <span className="filter-option pull-left">
                      All Categories
                    </span>
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
                      <li data-original-index="0">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Admin Support</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="1">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Customer Service</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="2">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Data Analytics</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="3">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Design &amp; Creative</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="4">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Legal</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="5">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Software Developing</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="6">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">IT &amp; Networking</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="7">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Writing</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="8">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Translation</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                      <li data-original-index="9">
                        <a
                          tabindex="0"
                          className=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        >
                          <span className="text">Sales &amp; Marketing</span>
                          <span className="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <select
                    className="selectpicker default"
                    multiple=""
                    data-selected-text-format="count"
                    data-size="7"
                    title="All Categories"
                    tabindex="-98"
                  >
                    <option>Admin Support</option>
                    <option>Customer Service</option>
                    <option>Data Analytics</option>
                    <option>Design &amp; Creative</option>
                    <option>Legal</option>
                    <option>Software Developing</option>
                    <option>IT &amp; Networking</option>
                    <option>Writing</option>
                    <option>Translation</option>
                    <option>Sales &amp; Marketing</option>
                  </select>
                </div>
              </div>
              <div className="sidebar-widget">
                <h3>Keywords</h3>
                <div className="keywords-container">
                  <div className="keyword-input-container">
                    <input
                      type="text"
                      className="keyword-input"
                      placeholder="e.g. task title"
                    />
                    <button className="keyword-input-button ripple-effect">
                      <i className="icon-material-outline-add"></i>
                    </button>
                  </div>
                  <div
                    className="keywords-list"
                    style={{ height: "auto" }}
                  ></div>
                  <div className="clearfix"></div>
                </div>
              </div>

              <div className="sidebar-widget">
                <h3>Hourly Rate</h3>
                <div className="margin-top-55"></div>
              </div>

              <div className="sidebar-widget">
                <h3>Skills</h3>

                <div className="tags-container">
                  <div className="tag">
                    <input type="checkbox" id="tag1" />
                    <label htmlFor="tag1">front-end dev</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag2" />
                    <label htmlFor="tag2">angular</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag3" />
                    <label htmlFor="tag3">react</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag4" />
                    <label htmlFor="tag4">vue js</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag5" />
                    <label htmlFor="tag5">web apps</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag6" />
                    <label htmlFor="tag6">design</label>
                  </div>
                  <div className="tag">
                    <input type="checkbox" id="tag7" />
                    <label htmlFor="tag7">wordpress</label>
                  </div>
                </div>
                <div className="clearfix"></div>

                <div className="keywords-container margin-top-20">
                  <div className="keyword-input-container">
                    <input
                      type="text"
                      className="keyword-input"
                      placeholder="add more skills"
                    />
                    <button className="keyword-input-button ripple-effect">
                      <i className="icon-material-outline-add"></i>
                    </button>
                  </div>
                  <div
                    className="keywords-list"
                    style={{ height: "auto" }}
                  ></div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="clearfix"></div>

              <div className="margin-bottom-40"></div>
            </div>

            <div className="sidebar-search-button-container">
              <button className="button ripple-effect">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

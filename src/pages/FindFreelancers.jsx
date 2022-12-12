import Layout from "../components/Layout";

const FindFreelancers = () => {
  return (
    <Layout>
      <div class="clearfix"></div>
      <div className="full-page-container">
        <div className="full-page-sidebar">
          <div className="full-page-sidebar">
            <div className="full-page-sidebar-inner" data-simplebar>
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
                  <select
                    className="selectpicker default"
                    multiple
                    data-selected-text-format="count"
                    data-size="7"
                    title="All Categories"
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
                    <div className="keywords-list"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h3>Fixed Price</h3>
                  <div className="margin-top-55"></div>

                  <input
                    className="range-slider"
                    type="text"
                    value=""
                    data-slider-currency="$"
                    data-slider-min="10"
                    data-slider-max="2500"
                    data-slider-step="25"
                    data-slider-value="[50,2500]"
                  />
                </div>

                <div className="sidebar-widget">
                  <h3>Hourly Rate</h3>
                  <div className="margin-top-55"></div>

                  <input
                    className="range-slider"
                    type="text"
                    value=""
                    data-slider-currency="$"
                    data-slider-min="10"
                    data-slider-max="150"
                    data-slider-step="5"
                    data-slider-value="[10,200]"
                  />
                </div>

                <div className="sidebar-widget">
                  <h3>Skills</h3>

                  <div className="tags-container">
                    <div className="tag">
                      <input type="checkbox" id="tag1" />
                      <label for="tag1">front-end dev</label>
                    </div>
                    <div className="tag">
                      <input type="checkbox" id="tag2" />
                      <label for="tag2">angular</label>
                    </div>
                    <div className="tag">
                      <input type="checkbox" id="tag3" />
                      <label for="tag3">react</label>
                    </div>
                    <div className="tag">
                      <input type="checkbox" id="tag4" />
                      <label for="tag4">vue js</label>
                    </div>
                    <div className="tag">
                      <input type="checkbox" id="tag5" />
                      <label for="tag5">web apps</label>
                    </div>
                    <div className="tag">
                      <input type="checkbox" id="tag6" />
                      <label for="tag6">design</label>
                    </div>
                    <div className="tag">
                      <input type="checkbox" id="tag7" />
                      <label for="tag7">wordpress</label>
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
                    <div className="keywords-list"></div>
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
    </Layout>
  );
};
export default FindFreelancers;

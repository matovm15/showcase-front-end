import React from "react";

const IntroSection = () => {
  return (
    <>
      <div
        className="intro-banner"
        data-background-image="images/home-background.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-headline">
                <h3>
                  <strong>
                    Hire experts or be hired htmlFor any job, any time.
                  </strong>
                  <br />
                  <span>
                    Thousands of small businesses use{" "}
                    <strong className="color">Hireo</strong> to turn their ideas
                    into reality.
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="intro-banner-search-form margin-top-95">
                <div className="intro-search-field with-autoComplete with-label">
                  <label
                    htmlFor="autoComplete-input"
                    className="field-title ripple-effect"
                  >
                    Where?
                  </label>
                  <div className="input-with-icon">
                    <input
                      id="autoComplete-input"
                      type="text"
                      placeholder="Online Job"
                      className="pac-target-input"
                      autoComplete="off"
                    />
                    <i className="icon-material-outline-location-on"></i>
                  </div>
                </div>

                <div className="intro-search-field with-label">
                  <label
                    htmlFor="intro-keywords"
                    className="field-title ripple-effect"
                  >
                    What job you want?
                  </label>
                  <input
                    id="intro-keywords"
                    type="text"
                    placeholder="Job Title or Keywords"
                  />
                </div>

                <div className="intro-search-button">
                  <button className="button ripple-effect">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="intro-stats margin-top-45 hide-under-992px">
                <li>
                  <strong className="counter">1,586</strong>
                  <span>Jobs Posted</span>
                </li>
                <li>
                  <strong className="counter">3,543</strong>
                  <span>Tasks Posted</span>
                </li>
                <li>
                  <strong className="counter">1,232</strong>
                  <span>Freelancers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="background-image-container"
          style={{ backgroundImage: "url('https://www.vasterad.com/themes/hireo_21/images/home-background.jpg')" }}
        ></div>
      </div>
    </>
  );
};

export default IntroSection;

import React from "react";
import coder from "../../../images/cd.png"

const IntroSection = () => {
  return (
    <>
      <div
        className="intro-banner"
        data-background-image="images/home-background.jpg"
        style={{ boxShadow: "0rem 0rem 0.3rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-headline">
                <h3>
                  <strong>
                    Hire university and tertiary students or be hired for any gig, any time.
                  </strong>
                  <br />
                  <span>
                    Many students are interested in{" "}
                    <strong className="color">Showcase</strong> as their number 1 gig platform
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="intro-banner-search-form margin-top-95" style={{ boxShadow: '0rem 0rem 0.3rem' }}>
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
                      placeholder="Location"
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
                    What gig do you want?
                  </label>
                  <input
                    id="intro-keywords"
                    type="text"
                    placeholder="Gig Title or Keywords"
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
                  <span>Gigs</span>
                </li>
                <li>
                  <strong className="counter">3,543</strong>
                  <span>Gigs Posted</span>
                </li>
                <li>
                  <strong className="counter">1,232</strong>
                  <span>Freelancers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* https://www.vasterad.com/themes/hireo_21/images/home-background.jpg */}
        <div
          className="background-image-container"
          style={{ backgroundImage: "url('../../../images/cd.png')", backgroundPosition:'60%', width:'50%', left:"50%" }}
        ></div>
      </div>
    </>
  );
};

export default IntroSection;

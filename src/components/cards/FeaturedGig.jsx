import React from "react";

const FeaturedGig = ({ data }) => {
  return (
    <a href="/jobs" className="job-listing with-apply-button">
      <div className="job-listing-details">
        <div className="job-listing-company-logo">
          <img src="images/company-logo-01.png" alt="" />
        </div>

        <div className="job-listing-description">
          <h3 className="job-listing-title">{data.title}</h3>

          <div className="job-listing-footer">
            <ul>
              <li>
                <i className="icon-material-outline-business"></i>{" "}
                {data.businessName}
                <div
                  className="verified-badge"
                  data-tippy-placement="top"
                  data-tippy=""
                  data-original-title="Verified Employer"
                ></div>
              </li>
              <li>
                <i className="icon-material-outline-location-on"></i>{" "}
                {data.location}
              </li>
              <li>
                <i className="icon-material-outline-business-center"></i>{" "}
                {data.jobType}
              </li>
              <li>
                <i className="icon-material-outline-access-time"></i>{" "}
                {data.postedAt}
              </li>
            </ul>
          </div>
        </div>

        <span className="list-apply-button ripple-effect">Apply Now</span>
      </div>
    </a>
  );
};

export default FeaturedGig;

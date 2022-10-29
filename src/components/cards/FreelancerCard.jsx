import React from "react";

const FreelancerCard = ({ name, profession, ratings, image, profileUrl, details }) => {
  return (
    <>
      <div className="freelancer-overview">
        <div className="freelancer-overview-inner">
          <span className="bookmark-icon"></span>
          <div className="freelancer-avatar">
            <div className="verified-badge"></div>
            <a href={profileUrl} tabIndex="0">
              <img src={image} alt="" />
            </a>
          </div>
          <div className="freelancer-name">
            <h4>
              <a href={profileUrl} tabIndex="0">
                {name}
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
            <span>{profession}</span>
          </div>
          <div className="freelancer-rating">
            <div className="star-rating" data-rating={ratings}>
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
              Location
              <strong>
                <i className="icon-material-outline-location-on"></i>{" "}
                {details.location}
              </strong>
            </li>
            <li>
              Rate <strong>UGX {details.rate} / hr</strong>
            </li>
            <li>
              Gig Success <strong>{details.successRate}%</strong>
            </li>
          </ul>
        </div>
        <a
          href={profileUrl}
          className="button button-sliding-icon ripple-effect"
          tabIndex="0"
          style={{ width: "334px" }}
        >
          View Profile <i className="icon-material-outline-arrow-right-alt"></i>
        </a>
      </div>
    </>
  );
};

export default FreelancerCard;

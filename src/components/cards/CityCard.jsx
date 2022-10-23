import React from "react";

const CityCard = ({ city, link, image, count }) => {
  return (
    <a
      href={link}
      className="photo-box"
      data-background-image={image}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="photo-box-content">
        <h3>{city}</h3>
        <span>{count} Jobs</span>
      </div>
    </a>
  );
};

export default CityCard;

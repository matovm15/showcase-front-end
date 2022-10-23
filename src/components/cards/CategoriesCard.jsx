import React from "react";

const CategoriesCard = ({ icon, count, title, details, link }) => {
  return (
    <a href={link} className="category-box">
      <div className="category-box-icon">
        <i className={`icon-line-awesome-${icon}`}></i>
      </div>
      <div className="category-box-counter">{count}</div>
      <div className="category-box-content">
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </a>
  );
};

export default CategoriesCard;

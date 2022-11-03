import React from "react";

const Notifications = ({ title, details, icon }) => {
  return (
    <li>
      <span className="notification-icon">
        <i className={icon}></i>
      </span>
      <span className="notification-text">
        <strong>{details.name} </strong>  {details.message} &nbsp;
        <a href="#">{title}</a>
      </span>
      <div className="buttons-to-right">
        <a
          href="#"
          className="button ripple-effect ico"
          title="Mark as read"
          data-tippy-placement="left"
        >
          <i className="icon-feather-check-square"></i>
        </a>
      </div>
    </li>
  );
};

export default Notifications;

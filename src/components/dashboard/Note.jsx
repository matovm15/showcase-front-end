import React from "react";

const Note = ({ priority, details }) => {
  // check if priority is high or low by checking if it has high or low or medium
  const priorityClass = priority.toLowerCase().includes("high")
    ? "high"
    : priority.toLowerCase().includes("medium")
    ? "medium"
    : "low";
  return (
    <div className="dashboard-note">
      <p>{details}</p>
      <div className="note-footer">
        <span className={`note-priority ${priorityClass}`}>{priority}</span>
        <div className="note-buttons">
          <a
            href="#"
            data-tippy-placement="top"
            data-tippy=""
            data-original-title="Edit"
          >
            <i className="icon-feather-edit"></i>
          </a>
          <a
            href="#"
            data-tippy-placement="top"
            data-tippy=""
            data-original-title="Remove"
          >
            <i className="icon-feather-trash-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Note;

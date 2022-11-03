import React from "react";
import Select from "react-select";

const AddNote = (props) => {
  const { handleOpenNoteForm } = props;
  const options = [
    { value: "high priority", label: "High Priority" },
    { value: "medium priority", label: "Medium Priority" },
    { value: "low priority", label: "Low Priority" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpenNoteForm();
  };
  return (
    <>
      <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready"
        tabIndex="-1"
        style={{ top: "0px", position: "absolute", height: "344px" }}
      >
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <div
              id="small-dialog"
              className="zoom-anim-dialog dialog-with-tabs"
            >
              <div className="sign-in-form">
                <ul
                  className="popup-tabs-nav"
                  style={{ pointerEvents: "none" }}
                >
                  <li className="active">
                    <a href="#tab">Add Note</a>
                  </li>
                </ul>

                <div className="popup-tabs-container">
                  <div className="popup-tab-content" id="tab">
                    <div className="welcome-text">
                      <h3>Do Not Forget 😎</h3>
                    </div>

                    <form onSubmit={handleSubmit} id="add-note">
                      <div className="btn-group bootstrap-select with-border default margin-bottom-20">
                        <Select
                          options={options}
                          className="btn-group bootstrap-select with-border default margin-bottom-20"
                          styles={{
                            control: (base) => ({
                              ...base,
                              width: "100%",
                            }),
                          }}
                          placeholder="Select Priority"
                        />
                      </div>

                      <textarea
                        name="textarea"
                        cols="10"
                        placeholder="Note"
                        className="with-border"
                      ></textarea>
                    </form>

                    <button
                      className="button full-width button-sliding-icon ripple-effect"
                      type="submit"
                      form="add-note"
                      style={{ width: "30px" }}
                    >
                      Add Note
                      <i className="icon-material-outline-arrow-right-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={handleOpenNoteForm}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;

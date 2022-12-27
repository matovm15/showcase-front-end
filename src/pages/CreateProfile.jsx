import React from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import Layout from "../components/dashboard/Layout";
// import { countries } from "../data/countries";
import { useGetUserViaTokenQuery } from "../features/profile/profileSlice";
import { useCreateProfileMutation } from "../features/profile/profileApiSlice";
import useTitle from "../hooks/useTitle";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../utils/validations";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  useTitle("Create Profile")

  const navigate = useNavigate()

  const [error, setError] = React.useState(null);
  const [minHourlyRate, setMinHourlyRate] = React.useState(10);
  const [skills, setSkills] = React.useState([]);
  const [skillsInput, setSkillsInput] = React.useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    "images/user-avatar-placeholder.png"
  );
  const [file, setFile] = React.useState(null);
  const [documentFile, setDocumentFile] = React.useState([]);
  const addSkill = () => {
    if (skillsInput) {
      setSkills([...skills, skillsInput]);
      setSkillsInput("");
    }
  };
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const getFile = (e) => {
    e.target.parentNode.children[2].click();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024 * 2) {
      alert("File size is too large");
      return;
    }
    if (!file.type.match("image.*")) {
      alert("File type is not supported");
      return;
    }

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDocumentChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024 * 2) {
      alert("File size is too large");
      return;
    }
    // allowed file types for documents are pdf, doc, docx
    if (
      !file.type.match(
        "application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    ) {
      alert("File type is not supported");
      return;
    }

    reader.onloadend = () => {
      setDocumentFile([...documentFile, file]);
    };
    reader.readAsDataURL(file);
  };

  const removeDocumentFile = (index) => {
    setDocumentFile(documentFile.filter((d, i) => i !== index));
  };

  const getFileNameAndExtension = (fileName) => {
    const fileExtension = fileName.split(".").pop();
    let fileNameWithoutExtension = fileName
      .replace("." + fileExtension, "")
      .replace(/_/g, " ");
    fileNameWithoutExtension =
      fileNameWithoutExtension.length > 20
        ? fileNameWithoutExtension.substring(0, 20) + "..."
        : fileNameWithoutExtension;

    return { fileNameWithoutExtension, fileExtension };
  };

  const token = JSON.parse(localStorage.getItem('refresh_token'))['token']

  const result = useGetUserViaTokenQuery(token)

  console.log(result?.data?.entities?.undefined)

const {register, handleSubmit, formState} = useForm({
  resolver: yupResolver(profileSchema)
})

const {errors} = formState


const [createProfile, {isLoading, isSuccess}] = useCreateProfileMutation()


const handleProfileCreate = async (data) => {
  setError(null);
  try {
    console.log({...data, fee: minHourlyRate, skills: skills, id: result?.data?.entities?.undefined, avatar: imagePreviewUrl})
    
    if(result?.data?.entities?.undefined !== undefined){
    await createProfile({...data, fee: minHourlyRate, skills: skills, id: result?.data?.entities?.undefined, avatar: imagePreviewUrl})
    }
  navigate('/dashboard')
  } catch (error) {
    console.log(error)
      if (parseInt(error.status) != error.status) {
        setError("Something went wrong. Please try again later.");
      } else {
        setError(error?.data?.message);
      }
  }
}
  return (
    <Layout>
      <div className="dashboard-container">
        <DashboardSidebar />
        <div className="dashboard-content-container" data-simplebar>
          <div className="dashboard-content-inner">
            <div className="dashboard-headline">
              <h3>Welcome aboard, Tom!</h3>
              <span>Let's set up your profile!</span>
              {error && (
                  <div className="notification error closeable">
                    <p>{error}</p>
                    <a
                      onClick={() => setError(null)}
                      className="close"
                      href="#"
                    ></a>
                  </div>
                )}
              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li>Create Profile</li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit(handleProfileCreate)}>
                <div className="col-xl-12">
                  <div className="dashboard-box margin-top-0">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-outline-account-circle"></i>
                        Set Up Your Profile
                      </h3>
                    </div>
                    <div className="content with-padding padding-bottom-10">
                      <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-auto">
                          <div
                            className="avatar-wrapper"
                            data-tippy-placement="bottom"
                            data-tippy=""
                            data-original-title="Change Avatar"
                          >
                            <img
                              className="profile-pic"
                              name='avatar'
                              src={imagePreviewUrl}
                              alt="profile avatar"
                            />
                            <div
                              onClick={getFile}
                              className="upload-button"
                            ></div>
                            <input
                              className="file-upload"
                              type="file"
                              accept="image/*"
                              placeholder="Upload Photo"
                              multiple={false}
                              onChange={handleImageChange}
                            />
                          </div>
                        </div>
                        {/* <div className="col">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="submit-field">
                                <h5>First Name</h5>
                                <input
                                  type="text"
                                  className="with-border"
                                  placeholder="David"
                                />
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="submit-field">
                                <h5>Last Name</h5>
                                <input
                                  type="text"
                                  className="with-border"
                                  placeholder="John"
                                />
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="submit-field">
                                <h5>Account Type</h5>
                                <div className="account-type">
                                  <div>
                                    <input
                                      type="radio"
                                      name="account-type-radio"
                                      id="freelancer-radio"
                                      className="account-type-radio"
                                      defaultChecked="false"
                                    />
                                    <label
                                      htmlFor="freelancer-radio"
                                      className="ripple-effect-dark"
                                    >
                                      <i className="icon-material-outline-account-circle"></i>{" "}
                                      Freelancer
                                    </label>
                                  </div>

                                  <div>
                                    <input
                                      type="radio"
                                      name="account-type-radio"
                                      id="employer-radio"
                                      className="account-type-radio"
                                    />
                                    <label
                                      htmlFor="employer-radio"
                                      className="ripple-effect-dark"
                                    >
                                      <i className="icon-material-outline-business-center"></i>{" "}
                                      Employer
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6">
                              <div className="submit-field">
                                <h5>Email</h5>
                                <input
                                  type="text"
                                  className="with-border"
                                  placeholder="john@example.com"
                                />
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard-box">
                      <div className="headline">
                        <h3>
                          <i className="icon-material-outline-face"></i> My
                          Profile
                        </h3>
                      </div>

                      <div className="content">
                        <ul className="fields-ul">
                          <li>
                            <div className="row">
                              <div className="col-xl-4">
                                <div className="submit-field">
                                  <h5>Set your minimal hourly rate</h5>
                                  <div className="submit-field">
                                    <input
                                      type="text"
                                      className='with-border'
                                      name="fee"
                                      value={minHourlyRate}
                                      onChange={(e) =>
                                        setMinHourlyRate(e.target.value)
                                      }
                                    />
                                    
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-4">
                                <div className="submit-field">
                                  <h5>
                                    Skills{" "}
                                    <i
                                      className="help-icon"
                                      data-tippy-placement="right"
                                      data-tippy=""
                                      data-original-title="Add up to 10 skills"
                                    ></i>
                                  </h5>

                                  <div className="keywords-container">
                                    <div className="keyword-input-container">
                                      <input
                                        type="text"
                                        value={skillsInput}
                                        onChange={(e) =>
                                          setSkillsInput(e.target.value)
                                        }
                                        onKeyPress={(e) => {
                                          if (e.key === "Enter") {
                                            addSkill();
                                          }
                                        }}
                                        className='keyword-input with-border'
                                        placeholder="e.g. Angular, Laravel"
                                        disabled={skills.length >= 10}
                                      />

                                      <button
                                        type="button"
                                        onClick={addSkill}
                                        className="keyword-input-button ripple-effect"
                                      >
                                        <i className="icon-material-outline-add"></i>
                                      </button>
                                    </div>
                                    <div
                                      className="keywords-list"
                                      style={{ height: "auto" }}
                                      name='skills'
                                    >
                                      {skills.map((skill, index) => (
                                        <span className="keyword" key={index}>
                                          <span
                                            onClick={() => removeSkill(skill)}
                                            className="keyword-remove"
                                          ></span>
                                          <span className="keyword-text">
                                            {skill}
                                          </span>
                                        </span>
                                      ))}
                                    </div>
                                    <div className="clearfix"></div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-4">
                                <div className="submit-field">
                                  <h5>Attachments</h5>

                                  <div className="attachments-container margin-top-0 margin-bottom-0">
                                    {documentFile.map((file, index) => (
                                      <div
                                        className="attachment-box ripple-effect"
                                        key={index}
                                      >
                                        <span>
                                          {
                                            getFileNameAndExtension(file.name)
                                              .fileNameWithoutExtension
                                          }
                                        </span>
                                        <i>
                                          {getFileNameAndExtension(
                                            file.name
                                          ).fileExtension.toUpperCase()}
                                        </i>
                                        <button
                                          className="remove-attachment"
                                          data-tippy-placement="top"
                                          data-tippy=""
                                          data-original-title="Remove"
                                          onClick={() =>
                                            removeDocumentFile(index)
                                          }
                                        ></button>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="clearfix"></div>

                                  <div className="uploadButton margin-top-0">
                                    <input
                                      className="uploadButton-input"
                                      type="file"
                                      accept=".pdf, .doc, .docx"
                                      id="upload"
                                      multiple={true}
                                      onChange={handleDocumentChange}
                                    />
                                    <label
                                      className="uploadButton-button ripple-effect"
                                      htmlFor="upload"
                                    >
                                      Upload Files
                                    </label>
                                    <span className="uploadButton-file-name">
                                      Maximum file size: 10 MB
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-xl-6">
                                <div className="submit-field">
                                  <h5>Tagline</h5>
                                  <input
                                    type="text"
                                    name='title'
                                    className={`with-border ${
                                      errors.title ? "is-invalid" : ""
                                    }`}
                                    placeholder="e.g. 'Front-end Developer'"
                                    {...register("title")}
                                  />
                                  {errors.title && (
                      <div className="invalid-feedback">
                        {errors.title.message}
                      </div>
                    )}
                                </div>
                              </div>

                              {/* <div className="col-xl-6">
                                <div className="submit-field">
                                  <h5>Nationality</h5>
                                  <select
                                    style={{ padding: "10px" }}
                                    className="with-border"
                                    title="Select Nationality"
                                  >
                                    {countries.map((country, index) => (
                                      <option value={country.code} key={index}>
                                        {country.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div> */}

                              <div className="col-xl-12">
                                <div className="submit-field">
                                  <h5>Introduce Yourself</h5>
                                  <textarea
                                    cols="30"
                                    rows="5"
                                    name="bio"
                                    className={`with-border ${
                                      errors.bio ? "is-invalid" : ""
                                    }`}
                                    placeholder="Hi there, I’m David! I’m a full-stack developer looking for new opportunities in the greater Kampala area..."
                                    {...register("bio")}
                                  ></textarea>
                                  {errors.bio && (
                                    <div className="invalid-feedback">
                                      {errors.bio.message}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <button
                      type='submit'
                      className="button ripple-effect big margin-top-30"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProfile;

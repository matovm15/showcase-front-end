import { useState } from "react"
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";
import { createprofile } from "../actions/users";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { selectUser } from "../features/auth/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form'
import { profileSchema } from "../utils/validations";

const CreateAccount = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(selectUser)

    console.log(user)

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(profileSchema) 
    })

    const [formData, setFormData] = useState({
        avatar: '',
        fee: '',
        skills: [],
        title: 'iOS Expert + Node Dev',
        bio: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    })

    const {avatar, fee, skills, title, bio} = formData

    const [skill, setSkill] = useState('')

    // Get file
    const getFile = (e) => {
        e.target.parentNode.children[2].click()
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // Add skill
    const addSkill = () => {

        setFormData({...formData, skills: [...formData.skills, skill]})
        setSkill('')
    }

    // Remove skill
    const removeSkill = (binItem) => {

        setFormData({...formData, skills: [...formData.skills.filter(item => item !== binItem)]})
    }

    // On form submit
    const handleSave = () => {
        dispatch(createprofile(formData, id, navigate))
        
    }

  return (
    <>
        <Navbar />
        <div className="dashboard-content-container" data-simplebar="true">
            <div className="dashboard-content-inner">
                <div className="dashboard-headline">
                    {/* <h3>Fill profile</h3> */}
                </div>
            </div>
            <h3 style={{textAlign: 'center'}}>Please feel your profile</h3>

            <div className="row">
                <div className="col-xl-12">
                    <div className="dashboard-box margin-top-0">
                        <div className="headline">
                            <h3><i className="icon-material-outline-account-circle"></i> Set your profile avatar</h3>
                        </div>
                        <div className="content with-padding padding-bottom-0">
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <div className="col-auto">

                                <div className="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
                                    <img className="profile-pic" src={avatar !== "" && avatar} alt="avatar field" />
                                    <div className="upload-button" onClick={getFile}>
                                        
                                    </div>
                                    <FileBase64
                                        type='file'
                                        className="file-upload" 
                                        accept="image/*"
                                        multiple={false}
                                        onDone={({ base64 }) =>
                                        setFormData({ ...formData, avatar: base64 })
                                        }
                                    />
                                    {/* <input type="file"  /> */}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="col-xl-12">
        <div className="dashboard-box">
            <div className="headline"><h3><i className="icon-material-outline-face"></i> My Profile</h3></div>
            <div className="content">
                <ul className="fields-ul">
                    <li>
                        <div className="row">
                    <div className="col-xl-4">
                        <div className="submit-field">
                            <div className="bidding-widget">
                                <span className="bidding-detail">Set your <strong>fixed price</strong></span>
                                <div className="bidding-value margin-bottom-10">UGX<span id="biddingVal"></span>
                            </div>
                            <input className="bidding-slider" name='fee' type="number" data-slider-handle="custom" data-slider-currency="$" data-slider-min="5" data-slider-max="150" data-slider-value="35" data-slider-step="1" data-slider-tooltip="hide" value={fee} onChange={handleChange} />
                        </div>
                        <div className="submit-field">
                            <div className="bidding-widget">
                                <span className="bidding-detail">Set your <strong>minimal hourly rate</strong></span>
                                <div className="bidding-value margin-bottom-10">UGX<span id="biddingVal"></span>
                            </div>
                            <input className="bidding-slider" value={'Feature pending'} readOnly type="text" data-slider-handle="custom" data-slider-currency="$" data-slider-min="5" data-slider-max="150" data-slider-value="35" data-slider-step="1" data-slider-tooltip="hide"  />
                        </div>
                    </div>
                    </div>
                </div>
            <div className="col-xl-4">
                <div className="submit-field">
                    <h5>Skills <i className="help-icon" data-tippy-placement="right" title="Add up to 10 skills"></i></h5>
                    <div className="keywords-container">
                        <div className="keyword-input-container">
                            <input type="text" name='skills' value={skill} onChange={(e) => setSkill(e.target.value)} className="keyword-input with-border" placeholder="e.g. Angular, Laravel" />
                            <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" onClick={addSkill}></i></button>
                        </div>
                        
                        <div className="keywords-list">
                            {!skills.length > 0 ? (
                                <p>No skills listed yet</p>
                            ):(skills.map((item, index) => (
                                <span key={index} className="keyword">
                                    <span className="keyword-remove" onClick={() => removeSkill(item)}
                                    title='Remove skill'
                                    ></span>
                                    <span className="keyword-text">{item}</span>
                                    </span>
                                   
                            )))
                            }
                           
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="submit-field">
                    <h5>Add resume</h5>
                    <div className="attachments-container margin-top-0 margin-bottom-0">
                        <div className="attachment-box ripple-effect">
                            <span>Resume</span><i>PDF</i>
                            <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
                        </div>
                        {/* <div className="attachment-box ripple-effect">
                            <span>Contract</span><i>DOCX</i>
                            <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
                        </div> */}
                    </div>
                    <div className="clearfix"></div>
                    <div className="uploadButton margin-top-0">
                        <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple="" />
                        <label className="uploadButton-button ripple-effect" for="upload">Upload Resume</label>
                        <span className="uploadButton-file-name">Maximum file size: 10 MB</span>
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
                <input type="text" name='title' className="with-border" value={title} onChange={handleChange} />
            </div>
        </div>
        
                <div className="col-xl-12">
                    <div className="submit-field">
                        <h5>Introduce Yourself</h5>
                        <textarea cols="30" rows="5" className="with-border" name='bio' value={bio} onChange={handleChange} ></textarea>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
</div>
</div>

<div className="col-xl-12">
    <button className="button ripple-effect big margin-top-30" onClick={handleSave}>Save Profile</button>
</div>
<div className="dashboard-footer-spacer"></div>
<div className="small-footer margin-top-15">
    <div className="small-footer-copyrights">© {new Date().getFullYear()} <strong>showcase</strong>. All Rights Reserved.
</div>
<ul className="footer-social-links">
    <li><a href="#" title="Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
    <li><a href="#" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
    <li><a href="#" title="Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
    <li><a href="#" title="LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
</ul>
    <div className="clearfix"></div>
</div>
</div>
    </>
  )
}
export default CreateAccount
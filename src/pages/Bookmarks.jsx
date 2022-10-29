import Layout from "../components/Layout"
import DashboardSidebar from "../components/DashboardSidebar"

const Bookmarks = () => {
    return (
        <Layout>
                <div className="dashboard-container">
                    <DashboardSidebar />
                            {/* <!-- Dashboard Content
                    ================================================== --> */}
                   {/* <!-- Dashboard Content
	================================================== --> */}
                    <div className="dashboard-content-container" data-simplebar>
                        <div className="dashboard-content-inner" >
                            
                            {/* <!-- Dashboard Headline --> */}
                            <div className="dashboard-headline">
                                <h3>Bookmarks</h3>

                                {/* <!-- Breadcrumbs --> */}
                                <nav id="breadcrumbs" className="dark">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Bookmarks</li>
                                    </ul>
                                </nav>
                            </div>
                    
                            {/* <!-- Row --> */}
                            <div className="row">

                                {/* <!-- Dashboard Box --> */}
                                <div className="col-xl-12">
                                    <div className="dashboard-box margin-top-0">

                                        {/* <!-- Headline --> */}
                                        <div className="headline">
                                            <h3><i className="icon-material-outline-business-center"></i> Bookmarked Jobs</h3>
                                        </div>

                                        <div className="content">
                                            <ul className="dashboard-box-list">
                                                <li>
                                                    {/* // Job Listing --> */}
                                                    <div className="job-listing">

                                                        {/* <!-- Job Listing Details --> */}
                                                        <div className="job-listing-details">

                                                            {/* <!-- Logo --> */}
                                                            <a href="#" className="job-listing-company-logo">
                                                                <img src="images/company-logo-02.png" alt="" />
                                                            </a>

                                                            {/* <!-- Details --> */}
                                                            <div className="job-listing-description">
                                                                <h3 className="job-listing-title"><a href="#">Barista and Cashier</a></h3>

                                                                {/* <!-- Job Listing Footer --> */}
                                                                <div className="job-listing-footer">
                                                                    <ul>
                                                                        <li><i className="icon-material-outline-business"></i> Coffee</li>
                                                                        <li><i className="icon-material-outline-location-on"></i> San Francisco</li>
                                                                        <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                                                                        <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Buttons --> */}
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
                                                    </div>
                                                </li>

                                                <li>
                                                    {/* <!-- Job Listing --> */}
                                                    <div className="job-listing">

                                                        {/* <!-- Job Listing Details --> */}
                                                        <div className="job-listing-details">

                                                            {/* <!-- Logo --> */}
                                                            <a href="#" className="job-listing-company-logo">
                                                                <img src="images/company-logo-04.png" alt="" />
                                                            </a>


                                                            {/* <!-- Details --> */}
                                                            <div className="job-listing-description">
                                                                <h3 className="job-listing-title"><a href="#">Administrative Assistant</a></h3>

                                                                {/* <!-- Job Listing Footer --> */}
                                                                <div className="job-listing-footer">
                                                                    <ul>
                                                                        <li><i className="icon-material-outline-business"></i> Mates</li>
                                                                        <li><i className="icon-material-outline-location-on"></i> San Francisco</li>
                                                                        <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                                                                        <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    {/* <!-- Buttons --> */}
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
                                                    </div>
                                                </li>

                                                <li>
                                                    {/* <!-- Job Listing --> */}
                                                    <div className="job-listing">

                                                        {/* <!-- Job Listing Details --> */}
                                                        <div className="job-listing-details">

                                                            {/* <!-- Logo --> */}
                                                            <a href="#" className="job-listing-company-logo">
                                                                <img src="images/company-logo-05.png" alt="" />
                                                            </a>

                                                            {/* <!-- Details --> */}
                                                            <div className="job-listing-description">
                                                                <h3 className="job-listing-title"><a href="#">Construction Labourers</a></h3>

                                                                {/* <!-- Job Listing Footer --> */}
                                                                <div className="job-listing-footer">
                                                                    <ul>
                                                                        <li><i className="icon-material-outline-business"></i> Podous</li>
                                                                        <li><i className="icon-material-outline-location-on"></i> San Francisco</li>
                                                                        <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                                                                        <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Buttons --> */}
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Dashboard Box --> */}
                                <div className="col-xl-12">
                                    <div className="dashboard-box">

                                        {/* <!-- Headline --> */}
                                        <div className="headline">
                                            <h3><i className="icon-material-outline-face"></i> Bookmarked Freelancers</h3>
                                        </div>

                                        <div className="content">
                                            <ul className="dashboard-box-list">
                                                <li>
                                                    {/* <!-- Overview --> */}
                                                    <div className="freelancer-overview">
                                                        <div className="freelancer-overview-inner">

                                                            {/* <!-- Avatar --> */}
                                                            <div className="freelancer-avatar">
                                                                <div className="verified-badge"></div>
                                                                <a href="#"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
                                                            </div>

                                                            {/* <!-- Name --> */}
                                                            <div className="freelancer-name">
                                                                <h4><a href="#">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
                                                                <span>iOS Expert + Node Dev</span>
                                                                {/* <!-- Rating --> */}
                                                                <div className="freelancer-rating">
                                                                    <div className="star-rating" data-rating="4.2"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Buttons --> */}
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    {/* <!-- Overview --> */}
                                                    <div className="freelancer-overview">
                                                        <div className="freelancer-overview-inner">
                                                            
                                                            {/* <!-- Avatar --> */}
                                                            <div className="freelancer-avatar">
                                                                <a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                                                            </div>

                                                            {/* <!-- Name --> */}
                                                            <div className="freelancer-name">
                                                                <h4><a href="#">Marcin Kowalski <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>
                                                                <span>Front-End Developer</span>
                                                                {/* <!-- Rating --> */}
                                                                <div className="freelancer-rating">
                                                                    <div className="star-rating" data-rating="4.7"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Buttons --> */}
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Row / End -->

                            <!-- Footer --> */}
                            <div className="dashboard-footer-spacer"></div>
                            <div className="small-footer margin-top-15">
                                <div className="small-footer-copyrights">
                                    © 2019 <strong>Hireo</strong>. All Rights Reserved.
                                </div>
                                <ul className="footer-social-links">
                                    <li>
                                        <a href="#" title="Facebook" data-tippy-placement="top">
                                            <i className="icon-brand-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Twitter" data-tippy-placement="top">
                                            <i className="icon-brand-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Google Plus" data-tippy-placement="top">
                                            <i className="icon-brand-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="LinkedIn" data-tippy-placement="top">
                                            <i className="icon-brand-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            {/* <!-- Footer / End --> */}

                        </div>
                    </div>
                    {/* <!-- Dashboard Content / End --> */}

                </div>
        </Layout>
      )
}
export default Bookmarks
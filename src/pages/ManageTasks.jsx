import Layout from "../components/dashboard/Layout"
import DashboardSidebar from "../components/dashboard/DashboardSidebar"

const ManageTasks = () => {
  return (
    <Layout>
            <div class="dashboard-container">
            <DashboardSidebar />



{/* <!-- Dashboard Content
================================================== --> */}
<div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner" >
        
        {/* <!-- Dashboard Headline --> */}
        <div class="dashboard-headline">
            <h3>Manage Tasks</h3>

            {/* <!-- Breadcrumbs --> */}
            <nav id="breadcrumbs" class="dark">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li>Manage Tasks</li>
                </ul>
            </nav>
        </div>

        {/* <!-- Row --> */}
        <div class="row">

            {/* <!-- Dashboard Box --> */}
            <div class="col-xl-12">
                <div class="dashboard-box margin-top-0">

                    {/* <!-- Headline --> */}
                    <div class="headline">
                        <h3><i class="icon-material-outline-assignment"></i> My Tasks</h3>
                    </div>

                    <div class="content">
                        <ul class="dashboard-box-list">
                            <li>
                                {/* <!-- Job Listing --> */}
                                <div class="job-listing width-adjustment">

                                    {/* <!-- Job Listing Details --> */}
                                    <div class="job-listing-details">

                                        {/* <!-- Details --> */}
                                        <div class="job-listing-description">
                                            <h3 class="job-listing-title"><a href="#">Design a Landing Page</a> <span class="dashboard-status-button yellow">Expiring</span></h3>

                                            {/* <!-- Job Listing Footer --> */}
                                            <div class="job-listing-footer">
                                                <ul>
                                                    <li><i class="icon-material-outline-access-time"></i> 23 hours left</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Task Details --> */}
                                <ul class="dashboard-task-info">
                                    <li><strong>3</strong><span>Bids</span></li>
                                    <li><strong>$22</strong><span>Avg. Bid</span></li>
                                    <li><strong>$15 - $30</strong><span>Hourly Rate</span></li>
                                </ul>

                                {/* <!-- Buttons --> */}
                                <div class="buttons-to-right always-visible">
                                    <a href="dashboard-manage-bidders.html" class="button ripple-effect"><i class="icon-material-outline-supervisor-account"></i> Manage Bidders <span class="button-info">3</span></a>
                                    <a href="#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
                                    <a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                                </div>
                            </li>

                            <li>
                                {/* <!-- Job Listing --> */}
                                <div class="job-listing width-adjustment">

                                    {/* <!-- Job Listing Details --> */}
                                    <div class="job-listing-details">

                                        {/* <!-- Details --> */}
                                        <div class="job-listing-description">
                                            <h3 class="job-listing-title"><a href="#">Food Delivery Mobile Application</a></h3>

                                            {/* <!-- Job Listing Footer --> */}
                                            <div class="job-listing-footer">
                                                <ul>
                                                    <li><i class="icon-material-outline-access-time"></i> 6 days, 23 hours left</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Task Details --> */}
                                <ul class="dashboard-task-info">
                                    <li><strong>3</strong><span>Bids</span></li>
                                    <li><strong>$3,200</strong><span>Avg. Bid</span></li>
                                    <li><strong>$2,500 - $4,500</strong><span>Fixed Price</span></li>
                                </ul>

                                {/* <!-- Buttons --> */}
                                <div class="buttons-to-right always-visible">
                                    <a href="dashboard-manage-bidders.html" class="button ripple-effect"><i class="icon-material-outline-supervisor-account"></i> Manage Bidders <span class="button-info">3</span></a>
                                    <a href="#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
                                    <a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
        {/* <!-- Row / End -->

        <!-- Footer --> */}
        <div class="dashboard-footer-spacer"></div>
        <div class="small-footer margin-top-15">
            <div class="small-footer-copyrights">
                © 2019 <strong>Hireo</strong>. All Rights Reserved.
            </div>
            <ul class="footer-social-links">
                <li>
                    <a href="#" title="Facebook" data-tippy-placement="top">
                        <i class="icon-brand-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="#" title="Twitter" data-tippy-placement="top">
                        <i class="icon-brand-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" title="Google Plus" data-tippy-placement="top">
                        <i class="icon-brand-google-plus-g"></i>
                    </a>
                </li>
                <li>
                    <a href="#" title="LinkedIn" data-tippy-placement="top">
                        <i class="icon-brand-linkedin-in"></i>
                    </a>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>
        {/* <!-- Footer / End --> */}

    </div>
</div>
{/* <!-- Dashboard Content / End --> */}

</div>
    </Layout>
  )
}
export default ManageTasks
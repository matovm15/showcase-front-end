import Layout from "../components/dashboard/Layout"
import DashboardSidebar from "../components/dashboard/DashboardSidebar"

const ManageBidders = () => {
  return (
    <Layout>
        <div class="dashboard-container">
            <DashboardSidebar />
        <div class="dashboard-content-container" data-simplebar>
               
                <div class="dashboard-content-inner" >
                    
                    {/* <!-- Dashboard Headline --> */}
                    <div class="dashboard-headline">
                        <h3>Manage Bidders</h3>
                        <span class="margin-top-7">Bids for <a href="#">Food Delivery Mobile Application</a></span>

                        {/* <!-- Breadcrumbs --> */}
                        <nav id="breadcrumbs" class="dark">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>Manage Bidders</li>
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
                                    <h3><i class="icon-material-outline-supervisor-account"></i> 3 Bidders</h3>
                                    <div class="sort-by">
                                        <select class="selectpicker hide-tick">
                                            <option>Highest First</option>
                                            <option>Lowest First</option>
                                            <option>Fastest First</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="content">
                                    <ul class="dashboard-box-list">
                                        <li>
                                            {/* <!-- Overview --> */}
                                            <div class="freelancer-overview manage-candidates">
                                                <div class="freelancer-overview-inner">

                                                    {/* <!-- Avatar --> */}
                                                    <div class="freelancer-avatar">
                                                        <div class="verified-badge"></div>
                                                        <a href="#"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
                                                    </div>

                                                    {/* <!-- Name --> */}
                                                    <div class="freelancer-name">
                                                        <h4><a href="#">David Peterson <img class="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>

                                                        {/* <!-- Details --> */}
                                                        <span class="freelancer-detail-item"><a href="#"><i class="icon-feather-mail"></i> david@example.com</a></span>

                                                        {/* <!-- Rating --> */}
                                                        <div class="freelancer-rating">
                                                            <div class="star-rating" data-rating="5.0"></div>
                                                        </div>

                                                        {/* <!-- Bid Details --> */}
                                                        <ul class="dashboard-task-info bid-info">
                                                            <li><strong>$3,200</strong><span>Fixed Price</span></li>
                                                            <li><strong>14 Days</strong><span>Delivery Time</span></li>
                                                        </ul>

                                                        {/* <!-- Buttons --> */}
                                                        <div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                                            <a href="#small-dialog-1"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Accept Offer</a>
                                                            <a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
                                                            <a href="#" class="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            {/* <!-- Overview --> */}
                                            <div class="freelancer-overview manage-candidates">
                                                <div class="freelancer-overview-inner">

                                                    {/* <!-- Avatar --> */}
                                                    <div class="freelancer-avatar">
                                                        <a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                                                    </div>

                                                    {/* <!-- Name --> */}
                                                    <div class="freelancer-name">
                                                        <h4><a href="#">Oldrich Ćuk <img class="flag" src="images/flags/sk.svg" alt="" title="Slovakia" data-tippy-placement="top" /></a></h4>

                                                        {/* <!-- Details --> */}
                                                        <span class="freelancer-detail-item"><a href="#"><i class="icon-feather-mail"></i> oldrich@example.com</a></span>
                                                        <span class="freelancer-detail-item"><i class="icon-feather-phone"></i> (+421) 123-456-789</span>


                                                        {/* <!-- Rating --> */}
                                                        <br />
                                                        <span class="company-not-rated">Minimum of 3 votes required</span>

                                                        {/* <!-- Bid Details --> */}
                                                        <ul class="dashboard-task-info bid-info">
                                                            <li><strong>$3,000</strong><span>Fixed Price</span></li>
                                                            <li><strong>14 Days</strong><span>Delivery Time</span></li>
                                                        </ul>

                                                        {/* <!-- Buttons --> */}
                                                        <div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                                            <a href="#small-dialog-1"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Accept Offer</a>
                                                            <a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
                                                            <a href="#" class="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            {/* <!-- Overview --> */}
                                            <div class="freelancer-overview manage-candidates">
                                                <div class="freelancer-overview-inner">

                                                    {/* <!-- Avatar --> */}
                                                    <div class="freelancer-avatar">
                                                        <div class="verified-badge"></div>
                                                        <a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                                                    </div>

                                                    {/* <!-- Name --> */}
                                                    <div class="freelancer-name">
                                                        <h4><a href="#">Kuba Adamczyk <img class="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>

                                                        {/* <!-- Details --> */}
                                                        <span class="freelancer-detail-item"><a href="#"><i class="icon-feather-mail"></i> kuba@example.com</a></span>
                                                        <span class="freelancer-detail-item"><i class="icon-feather-phone"></i> (+48) 123-456-789</span>

                                                        {/* <!-- Rating --> */}
                                                        <div class="freelancer-rating">
                                                            <div class="star-rating" data-rating="5.0"></div>
                                                        </div>

                                                        {/* <!-- Bid Details --> */}
                                                        <ul class="dashboard-task-info bid-info">
                                                            <li><strong>$2,700</strong><span>Fixed Price</span></li>
                                                            <li><strong>30 Days</strong><span>Delivery Time</span></li>
                                                        </ul>

                                                        {/* <!-- Buttons --> */}
                                                        <div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                                            <a href="#small-dialog-1"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Accept Offer</a>
                                                            <a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
                                                            <a href="#" class="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
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
                
                
            {/* {/* <!-- Bid Acceptance Popup / End --> */}


            
	</div>
    <div id="small-dialog-1" class="zoom-anim-dialog mfp-hide dialog-with-tabs">
    <div class="sign-in-form">

<ul class="popup-tabs-nav">
    <li><a href="#tab1">Accept Offer</a></li>
</ul>

<div class="popup-tabs-container">

    {/* <!-- Tab --> */}
    <div class="popup-tab-content" id="tab">
        
        {/* <!-- Welcome Text --> */}
        <div class="welcome-text">
            <h3>Accept Offer From David</h3>
            <div class="bid-acceptance margin-top-15">
                $3200
            </div>

        </div>

        <form id="terms">
            <div class="radio">
                <input id="radio-1" name="radio" type="radio" required />
                <label for="radio-1"><span class="radio-label"></span>  I have read and agree to the Terms and Conditions</label>
            </div>
        </form>

        {/* <!-- Button --> */}
        <button class="margin-top-15 button full-width button-sliding-icon ripple-effect" type="submit" form="terms">Accept <i class="icon-material-outline-arrow-right-alt"></i></button>

    </div>

</div>
</div>
	{/* <!--Tabs --> */}
                </div>
                {/* <!-- Send Direct Message Popup
            ================================================== --> */} 
            <div id="small-dialog-2" class="zoom-anim-dialog mfp-hide dialog-with-tabs">

                {/* <!--Tabs --> */}
                <div class="sign-in-form">

                    <ul class="popup-tabs-nav">
                        <li><a href="#tab2">Send Message</a></li>
                    </ul>

                    <div class="popup-tabs-container">

                        {/* <!-- Tab --> */}
                        <div class="popup-tab-content" id="tab2">
                            
                            {/* <!-- Welcome Text --> */}
                            <div class="welcome-text">
                                <h3>Direct Message To David</h3>
                            </div>
                                
                            {/* <!-- Form --> */}
                            <form method="post" id="send-pm">
                                <textarea name="textarea" cols="10" placeholder="Message" class="with-border" required></textarea>
                            </form>
                            
                            {/* <!-- Button --> */}
                            <button class="button full-width button-sliding-icon ripple-effect" type="submit" form="send-pm">Send <i class="icon-material-outline-arrow-right-alt"></i></button>

                        </div>

                    </div>
                </div>
            </div>
            </div>
    </Layout>
  )
}
export default ManageBidders
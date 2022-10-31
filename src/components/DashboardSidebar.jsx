const DashboardSidebar = () => {
  return (
    //   Dashboard Sidebar
        // ================================================== 
        <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-inner" data-simplebar>
                <div className="dashboard-nav-container">

                    {/* <!-- Responsive Navigation Trigger --> */}
                    <a href="#" className="dashboard-responsive-nav-trigger">
                        <span className="hamburger hamburger--collapse" >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </span>
                        <span className="trigger-title">Dashboard Navigation</span>
                    </a>
                    
                    {/* <!-- Navigation --> */}
                    <div className="dashboard-nav">
                        <div className="dashboard-nav-inner">

                            <ul data-submenu-title="Start">
                                <li><a href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                <li className="active"><a href="/messages"><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></a></li>
                                <li><a href="/bookmarks"><i className="icon-material-outline-star-border"></i> Bookmarks</a></li>
                                <li><a href="/reviews"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
                            </ul>
                            
                            <ul data-submenu-title="Organize and Manage">
                                <li><a href="#"><i className="icon-material-outline-business-center"></i> Gigs</a>
                                    <ul>
                                        <li><a href="/manage-gigs">Manage Gigs <span className="nav-tag">3</span></a></li>
                                        <li><a href="/manage-candidates">Manage Candidates</a></li>
                                        <li><a href="/post-gig">Post a Gig</a></li>
                                    </ul>	
                                </li>
                                <li><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
                                    <ul>
                                        <li><a href="/manage-tasks">Manage Tasks <span className="nav-tag">2</span></a></li>
                                        <li><a href="/manage-bidders">Manage Bidders</a></li>
                                        <li><a href="dashboard-my-active-bids.html">My Active Bids <span className="nav-tag">4</span></a></li>
                                        <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                    </ul>	
                                </li>
                            </ul>

                            <ul data-submenu-title="Account">
                                <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
                                <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                            </ul>
                            
                        </div>
                    </div>
                    {/* <!-- Navigation / End --> */}

                </div>
            </div>
        </div>
        // Dashboard Sidebar / End 
  )
}
export default DashboardSidebar
import React from "react";

const MobileMenu = (props) => {
  const { openMobileMenu } = props;
  return (
    <nav
      className={`mmenu-init mm-menu mm-offcanvas ${
        openMobileMenu ? "mm-opened" : ""
      }`}
      id="mm-0"
      aria-hidden={openMobileMenu ? "false" : "true"}
    >
      <div className="mm-panels">
        <div className="mm-panel mm-hasnavbar mm-opened" id="mm-1">
          <div className="mm-navbar">
            <a className="mm-title">Menu</a>
          </div>
          <ul className="mm-listview">
            <li>
              <em className="mm-counter">3</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-2"
                aria-owns="mm-2"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Home)</span>
              </a>
              <a href="#" className="current">
                Home
              </a>
            </li>

            <li>
              <em className="mm-counter">6</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-3"
                aria-owns="mm-3"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Find Work)</span>
              </a>
              <a href="#">Find Work</a>
            </li>

            <li>
              <em className="mm-counter">4</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-6"
                aria-owns="mm-6"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (For Employers)</span>
              </a>
              <a href="#">For Employers</a>
            </li>

            <li>
              <em className="mm-counter">7</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-8"
                aria-owns="mm-8"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Dashboard)</span>
              </a>
              <a href="#">Dashboard</a>
            </li>

            <li>
              <em className="mm-counter">10</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-11"
                aria-owns="mm-11"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Pages)</span>
              </a>
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-2"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-1"
              aria-owns="mm-1"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Home)</span>
            </a>
            <a className="mm-title" href="#mm-1" aria-hidden="true">
              Home
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="index.html">Home 1</a>
            </li>
            <li>
              <a href="index-2.html">Home 2</a>
            </li>
            <li>
              <a href="index-3.html">Home 3</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-3"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-1"
              aria-owns="mm-1"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Find Work)</span>
            </a>
            <a className="mm-title" href="#mm-1" aria-hidden="true">
              Find Work
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <em className="mm-counter">6</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-4"
                aria-owns="mm-4"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Browse Jobs)</span>
              </a>
              <a href="#">Browse Jobs</a>
            </li>
            <li>
              <em className="mm-counter">4</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-5"
                aria-owns="mm-5"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Browse Tasks)</span>
              </a>
              <a href="#">Browse Tasks</a>
            </li>
            <li>
              <a href="browse-companies.html">Browse Companies</a>
            </li>
            <li>
              <a href="single-job-page.html">Job Page</a>
            </li>
            <li>
              <a href="single-task-page.html">Task Page</a>
            </li>
            <li>
              <a href="single-company-profile.html">Company Profile</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-4"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-3"
              aria-owns="mm-3"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Browse Jobs)</span>
            </a>
            <a className="mm-title" href="#mm-3" aria-hidden="true">
              Browse Jobs
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="jobs-list-layout-full-page-map.html">
                Full Page List + Map
              </a>
            </li>
            <li>
              <a href="jobs-grid-layout-full-page-map.html">
                Full Page Grid + Map
              </a>
            </li>
            <li>
              <a href="jobs-grid-layout-full-page.html">Full Page Grid</a>
            </li>
            <li>
              <a href="jobs-list-layout-1.html">List Layout 1</a>
            </li>
            <li>
              <a href="jobs-list-layout-2.html">List Layout 2</a>
            </li>
            <li>
              <a href="jobs-grid-layout.html">Grid Layout</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-5"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-3"
              aria-owns="mm-3"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Browse Tasks)</span>
            </a>
            <a className="mm-title" href="#mm-3" aria-hidden="true">
              Browse Tasks
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="tasks-list-layout-1.html">List Layout 1</a>
            </li>
            <li>
              <a href="tasks-list-layout-2.html">List Layout 2</a>
            </li>
            <li>
              <a href="tasks-grid-layout.html">Grid Layout</a>
            </li>
            <li>
              <a href="tasks-grid-layout-full-page.html">Full Page Grid</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-6"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-1"
              aria-owns="mm-1"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (For Employers)</span>
            </a>
            <a className="mm-title" href="#mm-1" aria-hidden="true">
              For Employers
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <em className="mm-counter">4</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-7"
                aria-owns="mm-7"
                aria-haspopup="true"
              >
                <span className="mm-sronly">
                  Open submenu (Find a Freelancer)
                </span>
              </a>
              <a href="#">Find a Freelancer</a>
            </li>
            <li>
              <a href="single-freelancer-profile.html">Freelancer Profile</a>
            </li>
            <li>
              <a href="dashboard-post-a-job.html">Post a Job</a>
            </li>
            <li>
              <a href="dashboard-post-a-task.html">Post a Task</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-7"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-6"
              aria-owns="mm-6"
              aria-haspopup="true"
            >
              <span className="mm-sronly">
                Close submenu (Find a Freelancer)
              </span>
            </a>
            <a className="mm-title" href="#mm-6" aria-hidden="true">
              Find a Freelancer
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="freelancers-grid-layout-full-page.html">
                Full Page Grid
              </a>
            </li>
            <li>
              <a href="freelancers-grid-layout.html">Grid Layout</a>
            </li>
            <li>
              <a href="freelancers-list-layout-1.html">List Layout 1</a>
            </li>
            <li>
              <a href="freelancers-list-layout-2.html">List Layout 2</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-8"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-1"
              aria-owns="mm-1"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Dashboard)</span>
            </a>
            <a className="mm-title" href="#mm-1" aria-hidden="true">
              Dashboard
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="dashboard.html">Dashboard</a>
            </li>
            <li>
              <a href="dashboard-messages.html">Messages</a>
            </li>
            <li>
              <a href="dashboard-bookmarks.html">Bookmarks</a>
            </li>
            <li>
              <a href="dashboard-reviews.html">Reviews</a>
            </li>
            <li>
              <em className="mm-counter">3</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-9"
                aria-owns="mm-9"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Jobs)</span>
              </a>
              <a href="dashboard-manage-jobs.html">Jobs</a>
            </li>
            <li>
              <em className="mm-counter">4</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-10"
                aria-owns="mm-10"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Open submenu (Tasks)</span>
              </a>
              <a href="dashboard-manage-tasks.html">Tasks</a>
            </li>
            <li>
              <a href="dashboard-settings.html">Settings</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-9"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-8"
              aria-owns="mm-8"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Jobs)</span>
            </a>
            <a className="mm-title" href="#mm-8" aria-hidden="true">
              Jobs
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="dashboard-manage-jobs.html">Manage Jobs</a>
            </li>
            <li>
              <a href="dashboard-manage-candidates.html">Manage Candidates</a>
            </li>
            <li>
              <a href="dashboard-post-a-job.html">Post a Job</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-10"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-8"
              aria-owns="mm-8"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Tasks)</span>
            </a>
            <a className="mm-title" href="#mm-8" aria-hidden="true">
              Tasks
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="dashboard-manage-tasks.html">Manage Tasks</a>
            </li>
            <li>
              <a href="dashboard-manage-bidders.html">Manage Bidders</a>
            </li>
            <li>
              <a href="dashboard-my-active-bids.html">My Active Bids</a>
            </li>
            <li>
              <a href="dashboard-post-a-task.html">Post a Task</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-11"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-1"
              aria-owns="mm-1"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Pages)</span>
            </a>
            <a className="mm-title" href="#mm-1" aria-hidden="true">
              Pages
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <em className="mm-counter">6</em>
              <a
                className="mm-next mm-fullsubopen"
                href="#mm-12"
                aria-owns="mm-12"
                aria-haspopup="true"
              >
                <span className="mm-sronly">
                  Open submenu (Open Street Map)
                </span>
              </a>
              <a href="#">Open Street Map</a>
            </li>
            <li>
              <a href="pages-blog.html">Blog</a>
            </li>
            <li>
              <a href="pages-pricing-plans.html">Pricing Plans</a>
            </li>
            <li>
              <a href="pages-checkout-page.html">Checkout Page</a>
            </li>
            <li>
              <a href="pages-invoice-template.html">Invoice Template</a>
            </li>
            <li>
              <a href="pages-user-interface-elements.html">
                User Interface Elements
              </a>
            </li>
            <li>
              <a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a>
            </li>
            <li>
              <a href="pages-login.html">Login &amp; Register</a>
            </li>
            <li>
              <a href="pages-404.html">404 Page</a>
            </li>
            <li>
              <a href="pages-contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className="mm-panel mm-hidden mm-hasnavbar"
          id="mm-12"
          aria-hidden="true"
        >
          <div className="mm-navbar">
            <a
              className="mm-btn mm-prev"
              href="#mm-11"
              aria-owns="mm-11"
              aria-haspopup="true"
            >
              <span className="mm-sronly">Close submenu (Open Street Map)</span>
            </a>
            <a className="mm-title" href="#mm-11" aria-hidden="true">
              Open Street Map
            </a>
          </div>
          <ul className="dropdown-nav mm-listview">
            <li>
              <a href="jobs-list-layout-full-page-map-OpenStreetMap.html">
                Full Page List + Map
              </a>
            </li>
            <li>
              <a href="jobs-grid-layout-full-page-map-OpenStreetMap.html">
                Full Page Grid + Map
              </a>
            </li>
            <li>
              <a href="single-job-page-OpenStreetMap.html">Job Page</a>
            </li>
            <li>
              <a href="single-company-profile-OpenStreetMap.html">
                Company Profile
              </a>
            </li>
            <li>
              <a href="pages-contact-OpenStreetMap.html">Contact</a>
            </li>
            <li>
              <a href="jobs-list-layout-1-OpenStreetMap.html">
                Location Autocomplete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;

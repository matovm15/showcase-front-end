import React from "react";
import showcase from "../images/showcase.png";
import avatar from "../images/matovu.jpg";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/auth/authSlice";

const Navbar = (props) => {
  const {
    openUserMenu,
    openMobileMenu,
    setOpenMobileMenu,
    handleClickMobileMenu,
    mobileMenuRef,
    setOpenUserMenu,
    openMessageMenu,
    setOpenMessageMenu,
    openNotificationMenu,
    setOpenNotificationMenu,
  } = props;

  const isLoggedIn = useSelector(selectAccessToken);

  // useref to handle open/close of user menu
  // so that we avoid too many re-renders
  const userMenuRef = React.useRef(null);
  const messageMenuRef = React.useRef(null);
  const notificationMenuRef = React.useRef(null);

  // handle click user menu
  const handleClickUserMenu = () => {
    // check if other menus are open and close them
    if (openMessageMenu) {
      setOpenMessageMenu(false);
    }
    if (openNotificationMenu) {
      setOpenNotificationMenu(false);
    }
    setOpenUserMenu(!openUserMenu);
  };

  // handle click message menu
  const handleClickMessageMenu = () => {
    // check if other menus are open and close them
    if (openNotificationMenu) {
      setOpenNotificationMenu(false);
    }
    if (openUserMenu) {
      setOpenUserMenu(false);
    }
    setOpenMessageMenu(!openMessageMenu);
  };

  // handle click notification menu
  const handleClickNotificationMenu = () => {
    // check if other menus are open and close them
    if (openUserMenu) {
      setOpenUserMenu(false);
    }
    if (openMessageMenu) {
      setOpenMessageMenu(false);
    }
    setOpenNotificationMenu(!openNotificationMenu);
  };

  // handle click outside of user menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setOpenUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef, setOpenUserMenu]);

  // handle click outside of message menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        messageMenuRef.current &&
        !messageMenuRef.current.contains(event.target)
      ) {
        setOpenMessageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [messageMenuRef, setOpenMessageMenu]);

  // handle click outside of notification menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationMenuRef.current &&
        !notificationMenuRef.current.contains(event.target)
      ) {
        setOpenNotificationMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationMenuRef, setOpenNotificationMenu]);

  return (
    <header
      id="header-container"
      style={{ position: "fixed" }}
      className="fullwidth dashboard-header not-sticky"
    >
      <div id="header">
        <div className="container">
          <div className="left-side">
            <div id="logo">
              <a href="/">
                <img style={{ height: "2rem" }} src={showcase} alt="" />
              </a>
            </div>
            <nav id="navigation">
              <ul id="responsive">
                <li>
                  <a href="/gigs/browse">For freelancers</a>
                  <ul className="dropdown-nav">
                    <li>
                      <a href="/find-freelancers">Browse gigs</a>
                    </li>
                    <li>
                      <a href="/freelancer-profile">Freelancer Profile</a>
                    </li>

                    <li>
                      <a href="/dashboard/post-task">Post a Task</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">For Employers</a>
                  <ul className="dropdown-nav">
                    <li>
                      <a href="/find-freelancers">For Freelancer</a>
                    </li>
                    <li>
                      <a href="/freelancer-profile">Freelancer Profile</a>
                    </li>

                    <li>
                      <a href="/dashboard/post-task">Post a Task</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Dashboard</a>
                  <ul className="dropdown-nav">
                    <li>
                      <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                      <a href="/dashboard/messages">Messages</a>
                    </li>
                    <li>
                      <a href="/dashboard/bookmarks">Bookmarks</a>
                    </li>
                    <li>
                      <a href="/dashboard/reviews">Reviews</a>
                    </li>
                    <li>
                      <a href="dashboard-manage-jobs.html">Gigs</a>
                      <ul className="dropdown-nav">
                        <li>
                          <a href="/dashboard/manage-gigs">Manage Gigs</a>
                        </li>
                        <li>
                          <a href="/dashboard/manage-candidates">
                            Manage Candidates
                          </a>
                        </li>
                        <li>
                          <a href="/dashboard/post-gig">Post a Gig</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="dashboard-manage-tasks.html">Tasks</a>
                      <ul className="dropdown-nav">
                        <li>
                          <a href="/dashboard/manage-tasks">Manage Tasks</a>
                        </li>
                        <li>
                          <a href="/dashboard/manage-bidders">Manage Bidders</a>
                        </li>
                        <li>
                          <a href="/dashboard/active-bids">My Active Bids</a>
                        </li>
                        <li>
                          <a href="/dashboard/post-task">Post a Task</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/dashboard/settings">Settings</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Pages</a>
                  <ul className="dropdown-nav">
                    <li>
                      <a href="#">Open Street Map</a>
                      <ul className="dropdown-nav">
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
                          <a href="single-job-page-OpenStreetMap.html">
                            Job Page
                          </a>
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
                </li>
              </ul>
            </nav>
          </div>
          {isLoggedIn ? (
            <div className="right-side">
              <div className="header-widget hide-on-mobile">
                <div
                  className={`header-notifications ${
                    openNotificationMenu ? "active" : ""
                  }`}
                >
                  <div className="header-notifications-trigger">
                    <a
                      href="#"
                      ref={notificationMenuRef}
                      onClick={handleClickNotificationMenu}
                    >
                      <i className="icon-feather-bell"></i>
                      <span>4</span>
                    </a>
                  </div>

                  <div className="header-notifications-dropdown">
                    <div className="header-notifications-headline">
                      <h4>Notifications</h4>
                      <button
                        className="mark-as-read ripple-effect-dark"
                        data-tippy-placement="left"
                        data-tippy=""
                        data-original-title="Mark all as read"
                      >
                        <i className="icon-feather-check-square"></i>
                      </button>
                    </div>

                    <div className="header-notifications-content">
                      <div
                        className="header-notifications-scroll"
                        data-simplebar="init"
                        style={{ height: "270px" }}
                      >
                        <div
                          className="simplebar-track vertical"
                          style={{ visibility: "visible" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              visibility: "visible",
                              top: "0px",
                              height: "192px",
                            }}
                          ></div>
                        </div>
                        <div
                          className="simplebar-track horizontal"
                          style={{ visibility: "visible" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              visibility: "visible",
                              left: "0px",
                              width: "25px",
                            }}
                          ></div>
                        </div>
                        <div
                          className="simplebar-scroll-content"
                          style={{
                            paddingRight: "17px",
                            marginBottom: "-34px",
                          }}
                        >
                          <div
                            className="simplebar-content"
                            style={{
                              paddingBottom: "17px",
                              marginRight: "-17px",
                            }}
                          >
                            <ul>
                              <li className="notifications-not-read">
                                <a href="dashboard-manage-candidates.html">
                                  <span className="notification-icon">
                                    <i className="icon-material-outline-group"></i>
                                  </span>
                                  <span className="notification-text">
                                    <strong>Michael Shannah</strong> applied for
                                    a job{" "}
                                    <span className="color">
                                      Full Stack Software Engineer
                                    </span>
                                  </span>
                                </a>
                              </li>

                              <li>
                                <a href="dashboard-manage-bidders.html">
                                  <span className="notification-icon">
                                    <i className=" icon-material-outline-gavel"></i>
                                  </span>
                                  <span className="notification-text">
                                    <strong>Gilbert Allanis</strong> placed a
                                    bid on your{" "}
                                    <span className="color">
                                      iOS App Development
                                    </span>{" "}
                                    project
                                  </span>
                                </a>
                              </li>

                              <li>
                                <a href="dashboard-manage-jobs.html">
                                  <span className="notification-icon">
                                    <i className="icon-material-outline-autorenew"></i>
                                  </span>
                                  <span className="notification-text">
                                    Your job listing{" "}
                                    <span className="color">
                                      Full Stack PHP Developer
                                    </span>{" "}
                                    is expiring.
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-manage-candidates.html">
                                  <span className="notification-icon">
                                    <i className="icon-material-outline-group"></i>
                                  </span>
                                  <span className="notification-text">
                                    <strong>Sindy Forrest</strong> applied for a
                                    job{" "}
                                    <span className="color">
                                      Full Stack Software Engineer
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`header-notifications ${
                    openMessageMenu ? "active" : ""
                  }`}
                >
                  <div className="header-notifications-trigger">
                    <a
                      href="#"
                      ref={messageMenuRef}
                      onClick={handleClickMessageMenu}
                    >
                      <i className="icon-feather-mail"></i>
                      <span>3</span>
                    </a>
                  </div>

                  <div className="header-notifications-dropdown">
                    <div className="header-notifications-headline">
                      <h4>Messages</h4>
                      <button
                        className="mark-as-read ripple-effect-dark"
                        data-tippy-placement="left"
                        data-tippy=""
                        data-original-title="Mark all as read"
                      >
                        <i className="icon-feather-check-square"></i>
                      </button>
                    </div>

                    <div className="header-notifications-content">
                      <div
                        className="header-notifications-scroll"
                        data-simplebar="init"
                        style={{ height: "288px" }}
                      >
                        <div
                          className="simplebar-track vertical"
                          style={{ visibility: "visible" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              visibility: "visible",
                              top: "0px",
                              height: "183px",
                            }}
                          ></div>
                        </div>
                        <div
                          className="simplebar-track horizontal"
                          style={{ visibility: "visible" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              visibility: "visible",
                              left: "0px",
                              width: "25px",
                            }}
                          ></div>
                        </div>
                        <div
                          className="simplebar-scroll-content"
                          style={{
                            paddingRight: "17px",
                            marginBottom: "-34px",
                          }}
                        >
                          <div
                            className="simplebar-content"
                            style={{
                              paddingBottom: "17px",
                              marginRight: "-17px",
                            }}
                          >
                            <ul>
                              <li className="notifications-not-read">
                                <a href="dashboard-messages.html">
                                  <span className="notification-avatar status-online">
                                    <img src={avatar} alt="" />
                                  </span>
                                  <div className="notification-text">
                                    <strong>David Peterson</strong>
                                    <p className="notification-msg-text">
                                      Thanks for reaching out. I'm quite busy
                                      right now on many...
                                    </p>
                                    <span className="color">4 hours ago</span>
                                  </div>
                                </a>
                              </li>

                              <li className="notifications-not-read">
                                <a href="dashboard-messages.html">
                                  <span className="notification-avatar status-offline">
                                    <img src={avatar} alt="" />
                                  </span>
                                  <div className="notification-text">
                                    <strong>Sindy Forest</strong>
                                    <p className="notification-msg-text">
                                      Hi Tom! Hate to break it to you, but I'm
                                      actually on vacation until...
                                    </p>
                                    <span className="color">Yesterday</span>
                                  </div>
                                </a>
                              </li>
                              <li className="notifications-not-read">
                                <a href="dashboard-messages.html">
                                  <span className="notification-avatar status-online">
                                    <img
                                      src="images/user-avatar-placeholder.png"
                                      alt=""
                                    />
                                  </span>
                                  <div className="notification-text">
                                    <strong>Marcin Kowalski</strong>
                                    <p className="notification-msg-text">
                                      I received payment. Thanks for
                                      cooperation!
                                    </p>
                                    <span className="color">Yesterday</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="dashboard-messages.html"
                      className="header-notifications-button ripple-effect button-sliding-icon"
                    >
                      View All Messages
                      <i className="icon-material-outline-arrow-right-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-widget">
                <div
                  className={`header-notifications user-menu ${
                    openUserMenu ? "active" : ""
                  }`}
                >
                  <div className="header-notifications-trigger">
                    <a href="#" ref={userMenuRef} onClick={handleClickUserMenu}>
                      <div className="user-avatar status-online">
                        <img src={avatar} alt="" />
                      </div>
                    </a>
                  </div>

                  <div className="header-notifications-dropdown">
                    <div className="user-status">
                      <div className="user-details">
                        <div className="user-avatar status-online">
                          <img src={avatar} alt="" />
                        </div>
                        <div className="user-name">
                          Tom Smith <span>Freelancer</span>
                        </div>
                      </div>

                      <div className="status-switch" id="snackbar-user-status">
                        <label className="user-online current-status">
                          Online
                        </label>
                        <label className="user-invisible">Invisible</label>

                        <span
                          className="status-indicator"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>

                    <ul className="user-menu-small-nav">
                      <li>
                        <a href="dashboard.html">
                          <i className="icon-material-outline-dashboard"></i>{" "}
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="dashboard-settings.html">
                          <i className="icon-material-outline-settings"></i>{" "}
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="index-logged-out.html">
                          <i className="icon-material-outline-power-settings-new"></i>{" "}
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span
                className="mmenu-trigger"
                ref={mobileMenuRef}
                onClick={handleClickMobileMenu}
              >
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          ) : (
            <div className="right-side">
              <div className="header-widget">
                <a
                  href="/login"
                  className="popup-with-zoom-anim log-in-button"
                >
                  <i className="icon-feather-log-in"></i>{" "}
                  <span>Log In / Register</span>
                </a>
              </div>

              <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { sidebarLinks } from "./sidebarLinks";

const DashboardSidebar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-sidebar-inner" data-simplebar>
        <div className="dashboard-nav-container">
          <a
            href="#"
            onClick={handleOpenNav}
            className={`dashboard-responsive-nav-trigger ${
              openNav ? "active" : ""
            }`}
          >
            <span
              className={`hamburger hamburger--collapse ${
                openNav ? "is-active" : ""
              }`}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </span>
            <span className="trigger-title">Dashboard Navigation</span>
          </a>
          <div className={`dashboard-nav ${openNav ? "active" : ""}`}>
            <div className="dashboard-nav-inner">
              <ul data-submenu-title="Start">
                {sidebarLinks.start.map((link, index) => (
                  <li key={index}>
                    <a href={link.link}>
                      <i className={link.icon}></i>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <ul data-submenu-title="Organize and Manage">
                {sidebarLinks.organizeAndManage.map((link, index) => (
                  <li key={index}>
                    <a href={link.link}>
                      <i className={link.icon}></i>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <ul data-submenu-title="Account">
                {sidebarLinks.account.map((link, index) => (
                  <li key={index}>
                    <a href={link.link}>
                      <i className={link.icon}></i>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardSidebar;

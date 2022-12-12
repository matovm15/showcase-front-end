import React from "react";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  const [openMessageMenu, setOpenMessageMenu] = React.useState(false);
  const [openNotificationMenu, setOpenNotificationMenu] = React.useState(false);

  const mobileMenuRef = React.useRef(null);

  // handle click mobile menu
  const handleClickMobileMenu = () => {
    console.log("handleClickMobileMenu");
    // check if other menus are open and close them
    if (openUserMenu) {
      setOpenUserMenu(false);
    }
    if (openMessageMenu) {
      setOpenMessageMenu(false);
    }
    setOpenMobileMenu(!openMobileMenu);
    // add a class to html element to prevent scrolling
    addOrRemoveClass();
  };

  const addOrRemoveClass = () => {
    if (!openMobileMenu) {
      document.documentElement.classList.add(
        "mm-opened",
        "mm-blocking",
        "mm-background",
        "mm-opening"
      );
    } else {
      document.documentElement.classList.remove(
        "mm-opened",
        "mm-blocking",
        "mm-background",
        "mm-opening"
      );
    }
  };

  // define mobile dimensions
  const mobile = 768;

  // check if is mobile
  const isMobile = () => {
    return window.innerWidth <= mobile;
  };

  // handle click outside of mobile menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setOpenMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef, setOpenMobileMenu]);
  return (
    <>
      <MobileMenu openMobileMenu={openMobileMenu} />
      <div
        id="wrapper"
        className={`${isMobile ? "mm-page mm-slideout" : ""}`}
        style={{ paddingTop: "82px", minHeight: openMobileMenu ? "667px" : "" }}
      >
        <Navbar
          openUserMenu={openUserMenu}
          setOpenUserMenu={setOpenUserMenu}
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
          handleClickMobileMenu={handleClickMobileMenu}
          mobileMenuRef={mobileMenuRef}
          openMessageMenu={openMessageMenu}
          setOpenMessageMenu={setOpenMessageMenu}
          openNotificationMenu={openNotificationMenu}
          setOpenNotificationMenu={setOpenNotificationMenu}
        />
        <div className="clearfix" />
        {children}
        <Footer />
      </div>
      <div id="backtotop" className="">
        <a href="#"></a>
      </div>
    </>
  );
};

export default Layout;

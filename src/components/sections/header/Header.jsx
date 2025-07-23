import { useState } from "react";
import { Link } from "react-router-dom";
import useHeaderFixed from "../../../hooks/use-header-fixed";
import HeaderTop from "../../ui/bar/HeaderTop";
import SidebarNavigation from "../../ui/sidebar/SidebarNavigation";
import Navigation from "./ui/Navigation";

export default function Header() {
  // sticky header
  const isSticky = useHeaderFixed(245);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="main-header main-header-one">
        <div
          id="sticky-header"
          className={`menu-area ${isSticky ? "sticky-menu" : ""}`}
        >
          <div className="main-header-one__outer">
            <div className="main-header-one__right">
              <div className="container">
                <div className="menu-area__inner">
                  <div className="mobile-nav-toggler align-items-center">
                    <div className="site-ligo">
                      <Link to="/">
                        <img
                          src="/images/logo/logo1.png"
                          alt="site-logo"
                          height={30}
                          width={150}
                        />
                      </Link>
                    </div>
                    <i
                      className="fas fa-bars"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample"
                      onClick={toggleSidebar}
                    />
                  </div>
                  <div className="menu-wrap">
                    <nav className="menu-nav">
                      <div className="main-header-one__inner">
                        {/* header top part start */}
                        <HeaderTop />
                        {/* header top part end */}
                        <div className="main-header-one__bottom">
                          <div className="main-header-one__bottom-left d-flex">
                            <div className="site-ligo d-flex align-items-center">
                              <Link to="/">
                                <img
                                  src="/images/logo/site-logo.png"
                                  alt="site-logo"
                                  height={30}
                                  width={150}
                                />
                              </Link>
                            </div>
                            {/* navigation part start */}
                            <Navigation />
                            {/* navigation part end */}
                          </div>
                          <div className="main-header-one__bottom-right">
                            <div className="search-box">
                              <a
                                to="#"
                                className="main-menu__search search-toggler icon-magnifying-glass"
                              />
                            </div>
                            <div className="btn-box">
                              <Link className="thm-btn" to="/contact">
                                <span className="txt">Get a free Demo</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SidebarNavigation toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </>
  );
}

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
      <style>{`
        /* Mobile responsive fixes */
        .main-header-one__outer {
          padding: 0;
        }
        
        .menu-area__inner {
          padding: 0.5rem 0;
        }
        
        .mobile-nav-toggler {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.5rem 1rem;
          background: white;
        }
        
        .mobile-nav-toggler .site-ligo img {
          max-height: 40px;
          width: auto;
        }
        
        .mobile-nav-toggler .fas.fa-bars {
          font-size: 1.5rem;
          color: #000;
          cursor: pointer;
          padding: 0.5rem;
          border: none;
          background: none;
        }
        
        /* Desktop Navigation */
        .menu-wrap {
          display: none;
        }
        
        .main-header-one__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }
        
        .main-header-one__bottom-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .main-header-one__bottom-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        /* Mobile breakpoints */
        @media (max-width: 991px) {
          .mobile-nav-toggler {
            display: flex !important;
            background: white;
          }
          
          .menu-wrap {
            display: none !important;
          }
          
          .menu-area {
            background: white;
          }
          
          .main-header-one__bottom-right .btn-box .thm-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
          
          .main-header-one__bottom-right .btn-box .thm-btn .txt {
            white-space: nowrap;
          }
        }
        
        @media (max-width: 768px) {
          .mobile-nav-toggler {
            padding: 0.5rem;
            background: white;
          }
          
          .mobile-nav-toggler .site-ligo img {
            max-height: 35px;
          }
          
          .mobile-nav-toggler .fas.fa-bars {
            font-size: 1.3rem;
            color: #000;
          }
          
          .menu-area {
            background: white;
          }
          
          .main-header-one__bottom-right .search-box {
            display: none;
          }
          
          .main-header-one__bottom-right .btn-box .thm-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .mobile-nav-toggler {
            padding: 0.3rem;
            background: white;
          }
          
          .mobile-nav-toggler .site-ligo img {
            max-height: 30px;
          }
          
          .mobile-nav-toggler .fas.fa-bars {
            color: #000;
          }
          
          .menu-area {
            background: white;
          }
          
          .main-header-one__bottom-right .btn-box .thm-btn .txt {
            font-size: 0.75rem;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 992px) {
          .mobile-nav-toggler {
            display: none !important;
          }
          
          .menu-wrap {
            display: block !important;
          }
          
          .main-header-one__bottom-left .site-ligo img {
            max-height: 50px;
            width: auto;
          }
        }
        
        /* Sticky header adjustments */
        .sticky-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sticky-menu .mobile-nav-toggler {
          background: white;
        }
        
        /* Container responsive */
        .container {
          max-width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        @media (min-width: 576px) {
          .container {
            max-width: 540px;
            margin: 0 auto;
          }
        }
        
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }
        
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }
        
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
        
        @media (min-width: 1400px) {
          .container {
            max-width: 1320px;
          }
        }
      `}</style>

      <header className="main-header main-header-one">
        <div
          id="sticky-header"
          className={`menu-area ${isSticky ? "sticky-menu" : ""}`}
        >
          <div className="main-header-one__outer">
            <div className="main-header-one__right">
              <div className="container">
                <div className="menu-area__inner">
                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler d-lg-none">
                    <div className="site-ligo">
                      <Link to="/">
                        <img
                          src="/images/logo/logo1.png"
                          alt="site-logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <i
                      className="fas fa-bars"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample"
                      onClick={toggleSidebar}
                      role="button"
                      tabIndex={0}
                    />
                  </div>

                  {/* Desktop Navigation */}
                  <div className="menu-wrap d-none d-lg-block">
                    <nav className="menu-nav">
                      <div className="main-header-one__inner">
                        {/* header top part start */}
                        <HeaderTop />
                        {/* header top part end */}
                        <div className="main-header-one__bottom">
                          <div className="main-header-one__bottom-left">
                            <div className="site-ligo d-flex align-items-center">
                              <Link to="/">
                                <img
                                  src="/images/logo/site-logo.png"
                                  alt="site-logo"
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                            {/* navigation part start */}
                            <Navigation />
                            {/* navigation part end */}
                          </div>
                          <div className="main-header-one__bottom-right">
                            <div className="search-box d-none d-md-block">
                              <a
                                href="#"
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
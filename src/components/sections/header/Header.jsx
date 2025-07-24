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
          flex-shrink: 0; /* Prevent shrinking */
        }
        
        /* Fix button sizing issues - FIXED SIZE APPROACH */
        .btn-box {
          flex-shrink: 0;
          width: auto;
          min-width: 140px; /* Fixed minimum width */
        }
        
        .btn-box .thm-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          width: 140px; /* Fixed width */
          height: 40px; /* Fixed height */
          padding: 0;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
          overflow: hidden;
          line-height: 1;
        }
        
        .btn-box .thm-btn .txt {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 130px;
          line-height: 1;
        }
        
        /* Mobile breakpoints - CONSISTENT BUTTON SIZES */
        @media (max-width: 1199px) {
          .main-header-one__bottom {
            padding: 1rem 1.5rem;
          }
          
          .main-header-one__bottom-left {
            gap: 1.5rem;
          }
          
          .main-header-one__bottom-right {
            gap: 1.5rem;
          }
          
          .btn-box {
            min-width: 130px;
          }
          
          .btn-box .thm-btn {
            width: 130px;
            height: 38px;
            font-size: 0.8rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 120px;
          }
        }
        
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
          
          .main-header-one__bottom {
            padding: 1rem;
          }
          
          .main-header-one__bottom-right {
            gap: 1rem;
          }
          
          .btn-box {
            min-width: 120px;
          }
          
          .btn-box .thm-btn {
            width: 120px;
            height: 36px;
            font-size: 0.75rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 110px;
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
          
          .main-header-one__bottom {
            padding: 0.75rem;
          }
          
          .main-header-one__bottom-right .search-box {
            display: none;
          }
          
          .main-header-one__bottom-right {
            gap: 0.75rem;
          }
          
          .btn-box {
            min-width: 110px;
          }
          
          .btn-box .thm-btn {
            width: 110px;
            height: 34px;
            font-size: 0.7rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 100px;
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
          
          .main-header-one__bottom {
            padding: 0.5rem;
          }
          
          .main-header-one__bottom-right {
            gap: 0.5rem;
          }
          
          .btn-box {
            min-width: 100px;
          }
          
          .btn-box .thm-btn {
            width: 100px;
            height: 32px;
            font-size: 0.65rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 90px;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 480px) {
          .btn-box {
            min-width: 90px;
          }
          
          .btn-box .thm-btn {
            width: 90px;
            height: 30px;
            font-size: 0.6rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 80px;
          }
        }
        
        /* Desktop styles - FIXED SIZES */
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
          
          .main-header-one__bottom {
            padding: 1rem 2rem;
          }
          
          .btn-box {
            min-width: 140px;
          }
          
          .btn-box .thm-btn {
            width: 140px;
            height: 40px;
            font-size: 0.85rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 130px;
          }
        }
        
        /* Large desktop styles */
        @media (min-width: 1200px) {
          .main-header-one__bottom {
            padding: 1rem 2.5rem;
          }
          
          .main-header-one__bottom-left {
            gap: 2.5rem;
          }
          
          .main-header-one__bottom-right {
            gap: 2rem;
          }
          
          .btn-box {
            min-width: 150px;
          }
          
          .btn-box .thm-btn {
            width: 150px;
            height: 42px;
            font-size: 0.9rem;
          }
          
          .btn-box .thm-btn .txt {
            max-width: 140px;
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
        
        .sticky-menu .main-header-one__bottom {
          padding: 0.75rem 2rem;
        }
        
        .sticky-menu .btn-box {
          min-width: 130px;
        }
        
        .sticky-menu .btn-box .thm-btn {
          width: 130px;
          height: 36px;
          font-size: 0.8rem;
        }
        
        .sticky-menu .btn-box .thm-btn .txt {
          max-width: 120px;
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
        
        /* Prevent text wrapping issues - ABSOLUTE FIXED BEHAVIOR */
        .main-header-one__bottom-right .btn-box .thm-btn {
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing: border-box;
        }
        
        /* Ensure consistent button behavior across pages - LOCKED DIMENSIONS */
        .main-header-one__bottom-right .btn-box .thm-btn:hover {
          transform: translateY(-1px);
        }
        
        /* Fix for navigation overlap - PREVENT FLEX ISSUES */
        .main-header-one__bottom-left {
          flex: 1;
          min-width: 0;
        }
        
        .main-header-one__bottom-right {
          flex-shrink: 0;
          margin-left: auto;
          width: auto;
        }
        
        /* Additional safety measures */
        .btn-box .thm-btn {
          border: none !important;
          outline: none !important;
          text-align: center !important;
        }
        
        .btn-box .thm-btn .txt {
          text-align: center;
          vertical-align: middle;
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
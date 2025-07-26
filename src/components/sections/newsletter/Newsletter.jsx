import { useState } from "react";

export default function NewslatterStyle2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Enhanced CSS for mobile responsiveness */}
      <style>{`
        .nl2-hover-btn {
          transition: all 0.3s ease !important;
        }
        .nl2-hover-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
          background-color: #f8f9fa !important;
        }
        .nl2-hover-btn:active {
          transform: translateY(0px);
        }
        
        /* Container fixes - MAIN FIX FOR LEFT GAP */
        .nl2-newslatter-sec2 {
          overflow: hidden;
          width: 100vw !important;
          max-width: 100vw !important;
          margin-left: calc(-50vw + 50%) !important;
          margin-right: calc(-50vw + 50%) !important;
          position: relative;
        }
        
        .nl2-container-fluid-fix {
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        
        .nl2-row-fix {
          margin-left: 0 !important;
          margin-right: 0 !important;
          width: 100% !important;
        }
        
        .nl2-col-fix {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        
        /* Video section responsiveness */
        .nl2-video-sec {
          min-height: 400px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        
        .video-sec-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 2;
          width: 100%;
          height: 100%;
        }
        
        .nl2-play-btn {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          z-index: 3;
          border: none;
          cursor: pointer;
        }
        
        .nl2-play-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }
        
        .nl2-play-btn i {
          font-size: 24px;
          color: #00AC4E;
          margin-left: 4px;
        }
        
        /* Content section */
        .nl2-sec-content {
          padding: 3rem 2rem;
        }
        
        .nl2-sec-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        
        .nl2-newsletter-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          text-align: center !important;
        }
        
        .nl2-sec-text {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Button styling */
        .nl2-button-group {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .nl2-btn-primary-custom {
          min-width: 180px;
          max-width: 200px;
          background-color: #ffffff;
          color: #333333;
          border: 2px solid transparent;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .nl2-btn-secondary-custom {
          max-width: 400px;
          width: 100%;
          background-color: #ffffff;
          color: #00AC4E;
          border: 2px solid transparent;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        /* Tablet styles */
        @media (max-width: 991.98px) {
          .nl2-video-sec {
            min-height: 300px !important;
          }
          
          .nl2-sec-content {
            padding: 2.5rem 1.5rem !important;
          }
          
          .nl2-newsletter-title {
            font-size: 2.2rem !important;
          }
          
          .nl2-sec-text {
            font-size: 1.05rem !important;
          }
          
          .nl2-button-group .d-flex {
            gap: 0.75rem !important;
          }
          
          .nl2-btn-primary-custom {
            min-width: 160px !important;
            max-width: 180px !important;
          }
        }
        
        /* Mobile landscape */
        @media (max-width: 768px) {
          .nl2-newslatter-sec2 .nl2-row-fix {
            flex-direction: column-reverse !important;
          }
          
          .nl2-video-sec {
            min-height: 250px !important;
          }
          
          .video-sec-overlay {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .nl2-sec-content {
            padding: 2rem 1.5rem !important;
          }
          
          .nl2-newsletter-title {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
          }
          
          .nl2-sec-text {
            font-size: 1rem !important;
            margin-bottom: 2rem !important;
          }
          
          .nl2-button-group .d-flex {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: stretch !important;
          }
          
          .nl2-btn-primary-custom {
            min-width: auto !important;
            max-width: none !important;
            width: 100% !important;
          }
          
          .nl2-play-btn {
            width: 60px !important;
            height: 60px !important;
          }
          
          .nl2-play-btn i {
            font-size: 20px !important;
          }
        }
        
        /* Mobile portrait */
        @media (max-width: 576px) {
          .nl2-sec-content {
            padding: 1.5rem 1rem !important;
          }
          
          .nl2-newsletter-title {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
          }
          
          .nl2-sec-text {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .nl2-video-sec {
            min-height: 200px !important;
          }
          
          .video-sec-overlay {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .nl2-play-btn {
            width: 50px !important;
            height: 50px !important;
            position: relative !important;
            z-index: 10 !important;
          }
          
          .nl2-play-btn i {
            font-size: 18px !important;
          }
          
          .nl2-btn {
            padding: 0.75rem 1rem !important;
            font-size: 0.95rem !important;
          }
        }
        
        /* Very small screens */
        @media (max-width: 360px) {
          .nl2-sec-content {
            padding: 1rem 0.75rem !important;
          }
          
          .nl2-newsletter-title {
            font-size: 1.6rem !important;
          }
          
          .nl2-sec-text {
            font-size: 0.9rem !important;
          }
          
          .nl2-video-sec {
            min-height: 180px !important;
          }
          
          .video-sec-overlay {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .nl2-play-btn {
            width: 45px !important;
            height: 45px !important;
          }
          
          .nl2-play-btn i {
            font-size: 16px !important;
          }
        }
        
        /* Landscape orientation on mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .nl2-video-sec {
            min-height: 150px !important;
          }
          
          .video-sec-overlay {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .nl2-sec-content {
            padding: 1rem !important;
          }
          
          .nl2-newsletter-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .nl2-sec-text {
            font-size: 0.9rem !important;
            margin-bottom: 1rem !important;
          }
          
          .nl2-button-group {
            gap: 0.5rem !important;
          }
          
          .nl2-play-btn {
            width: 40px !important;
            height: 40px !important;
          }
          
          .nl2-play-btn i {
            font-size: 14px !important;
          }
        }
      `}</style>

      <section
        className="newslatter-sec nl2-newslatter-sec2"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)",
          backgroundColor: "#00AC4E",
          background: "linear-gradient(rgba(0, 172, 78, 0.95), rgba(0, 172, 78, 0.95)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden"
        }}
      >
        <div className="nl2-container-fluid-fix">
          <div className="nl2-row-fix" style={{ display: 'flex', minHeight: '400px' }}>
            {/* Left: Video */}
            <div className="nl2-col-fix" style={{ flex: '1', minWidth: '50%' }}>
              <div
                className="nl2-video-sec"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
                  height: "100%",
                  minHeight: "400px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%"
                }}
              >
                <div className="video-sec-overlay">
                  <button onClick={videoOpenHandler} className="nl2-play-btn">
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: '16px solid #00AC4E',
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      marginLeft: '4px'
                    }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="nl2-col-fix" style={{ flex: '1', minWidth: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="nl2-sec-content w-100 text-center">
                <h2 className="nl2-newsletter-title text-white fw-bold" style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  AI Based SaaS Platform Hygiene
                </h2>
                <p className="nl2-sec-text text-white" style={{
                  opacity: "1",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  color: 'white'
                }}>
                  Watch our content for intelligent cleaning
                  management, real-time compliance tracking, and automated
                  audits—all from one dashboard.
                </p>

                {/* Buttons */}
                <div className="nl2-button-group d-flex flex-column align-items-center gap-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  {/* Row: Download + Watch */}
                  <div className="d-flex flex-row justify-content-center gap-3 w-100 flex-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a
                      href="#"
                      className="btn nl2-hover-btn nl2-btn-primary-custom"
                      style={{
                        textDecoration: "none",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.375rem',
                        backgroundColor: '#ffffff',
                        color: '#333333',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        fontWeight: '600',
                        minWidth: '180px'
                      }}
                    >
                      <span className="txt">Download Brochure</span>
                    </a>

                    <button
                      onClick={videoOpenHandler}
                      className="btn nl2-hover-btn nl2-btn-primary-custom"
                      style={{
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.375rem',
                        backgroundColor: '#ffffff',
                        color: '#333333',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        fontWeight: '600',
                        minWidth: '180px',
                        cursor: 'pointer'
                      }}
                    >
                      <span className="txt">Watch Demo</span>
                    </button>
                  </div>

                  {/* Full-width Sign Up */}
                  <a
                    href="#"
                    className="btn nl2-hover-btn nl2-btn-secondary-custom"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      whiteSpace: "normal",
                      lineHeight: "1.4",
                      transition: "all 0.3s ease",
                      padding: '0.75rem 2rem',
                      borderRadius: '0.375rem',
                      backgroundColor: '#ffffff',
                      color: '#00AC4E',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      fontWeight: 'bold',
                      width: '100%',
                      maxWidth: '400px'
                    }}
                  >
                    <span className="txt">Sign Up For A 14-Day Free Trial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Placeholder */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              maxWidth: '500px',
              margin: '1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Demo Video</h3>
            <p>Video would play here in a real implementation</p>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#00AC4E',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

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
        
        /* Container fixes */
        .nl2-newslatter-sec2 {
          overflow: hidden;
          width: 100%;
          max-width: 100vw;
        }
        
        .nl2-aximo-screenfix-left {
          margin-left: 0 !important;
          margin-right: 0 !important;
          max-width: 100%;
        }
        
        /* Video section responsiveness */
        .nl2-video-sec {
          min-height: 400px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
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
          .nl2-newslatter-sec2 .row {
            flex-direction: column-reverse;
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
          backgroundImage: "url(/images/footer/footer.png)",
          backgroundColor: "#00AC4E",
          background: "linear-gradient(rgba(0, 172, 78, 0.95), rgba(0, 172, 78, 0.95)), url(/images/footer/footer.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden"
        }}
      >
        <div className="container-fluid px-0">
          <div className="row nl2-aximo-screenfix-left g-0">
            {/* Left: Video */}
            <div className="col-lg-6">
              <div
                className="nl2-video-sec bg-cover"
                style={{
                  backgroundImage: "url(/images/newsletter/newsletter01.jpg)",
                  height: "100%",
                  minHeight: "400px",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="video-sec-overlay">
                  <a href="#" onClick={videoOpenHandler} className="nl2-play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="nl2-sec-content w-100 text-center">
                <h2 className="nl2-newsletter-title text-white fw-bold" style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                }}>
                  AI Based SaaS Platform Hygiene
                </h2>
                <p className="nl2-sec-text text-white" style={{
                  opacity: "1",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)"
                }}>
                  Watch our content for intelligent cleaning
                  management, real-time compliance tracking, and automated
                  audits—all from one dashboard.
                </p>

                {/* Buttons */}
                <div className="nl2-button-group d-flex flex-column align-items-center gap-4">
                  {/* Row: Download + Watch */}
                  <div className="d-flex flex-row justify-content-center gap-3 w-100 flex-wrap">
                    <Link
                      to="/brochure.pdf"
                      target="_blank"
                      className="btn nl2-hover-btn nl2-btn-primary-custom px-4 py-3 text-center fw-semibold rounded-3 border-0 shadow-lg"
                      style={{
                        textDecoration: "none",
                        fontSize: "1rem",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <span className="txt">Download Brochure</span>
                    </Link>

                    <button
                      onClick={videoOpenHandler}
                      className="btn nl2-hover-btn nl2-btn-primary-custom px-4 py-3 text-center fw-semibold rounded-3 border-0 shadow-lg"
                      style={{
                        fontSize: "1rem",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <span className="txt">Watch Demo</span>
                    </button>
                  </div>

                  {/* Full-width Sign Up */}
                  <Link
                    to="/signup"
                    className="btn nl2-hover-btn nl2-btn-secondary-custom px-5 py-3 text-center fw-bold rounded-3 border-0 shadow-lg"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      whiteSpace: "normal",
                      lineHeight: "1.4",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <span className="txt">Sign Up For A 14-Day Free Trial</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <ModalVideo
        channel="youtube"
        isOpen={isModalOpen}
        videoId="GGf1JjSAKP4"
        onClose={() => setIsModalOpen(false)}
        youtube={{
          autoplay: 1,
          mute: 1,
        }}
      />
    </>
  );
}
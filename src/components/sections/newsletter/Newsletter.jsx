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
      {/* Add CSS for hover animations */}
      <style jsx>{`
        .hover-btn {
          transition: all 0.3s ease !important;
        }
        .hover-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
          background-color: #f8f9fa !important;
        }
        .hover-btn:active {
          transform: translateY(0px);
        }
        
        /* Fix for container overflow */
        .newslatter-sec2 {
          overflow: hidden;
          width: 100%;
          max-width: 100vw;
        }
        
        .aximo_screenfix_left {
          margin-left: 0 !important;
          margin-right: 0 !important;
          max-width: 100%;
        }
        
        /* Responsive fixes */
        @media (max-width: 991px) {
          .video-sec {
            min-height: 250px !important;
            margin-bottom: 0;
          }
          
          .sec-content {
            padding: 2rem 1rem !important;
          }
          
          .sec-title {
            font-size: 2rem !important;
          }
          
          .button-group .d-flex {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          .btn {
            width: 100% !important;
            max-width: 280px !important;
          }
        }
        
        @media (max-width: 576px) {
          .sec-title {
            font-size: 1.75rem !important;
          }
          
          .sec-text {
            font-size: 1rem !important;
          }
          
          .sec-content {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>

      <section
        className="newslatter-sec newslatter-sec2"
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
          <div className="row aximo_screenfix_left g-0">
            {/* Left: Video */}
            <div className="col-lg-6">
              <div
                className="video-sec bg-cover"
                style={{
                  backgroundImage: "url(/images/newsletter/newsletter01.jpg)",
                  height: "100%",
                  minHeight: "400px",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="video-sec-overlay d-flex align-items-center justify-content-center h-100">
                  <a href="#" onClick={videoOpenHandler} className="play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="sec-content w-100 text-center px-4 px-lg-5 py-5">
                <h2 className="sec-title text-white fw-bold mb-4" style={{ 
                  fontSize: "2.5rem", 
                  lineHeight: "1.2",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  marginBottom: "1.5rem"
                }}>
                  AI Based SaaS Platform Hygiene
                </h2>
                <p className="sec-text text-white mb-5" style={{ 
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  opacity: "1",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  maxWidth: "500px",
                  margin: "0 auto 2.5rem auto"
                }}>
                  Watch our content for intelligent cleaning
                  management, real-time compliance tracking, and automated
                  audits—all from one dashboard.
                </p>

                {/* Buttons */}
                <div className="button-group d-flex flex-column align-items-center gap-4">
                  {/* Row: Download + Watch */}
                  <div className="d-flex flex-row justify-content-center gap-3 w-100 flex-wrap">
                    <Link
                      to="/brochure.pdf"
                      target="_blank"
                      className="btn hover-btn px-4 py-3 text-center fw-semibold rounded-3 border-0 shadow-lg"
                      style={{ 
                        minWidth: "180px",
                        maxWidth: "200px",
                        backgroundColor: "#ffffff",
                        color: "#333333",
                        textDecoration: "none",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                      }}
                    >
                      <span className="txt">Download Brochure</span>
                    </Link>

                    <button
                      onClick={videoOpenHandler}
                      className="btn hover-btn px-4 py-3 text-center fw-semibold rounded-3 border-0 shadow-lg"
                      style={{ 
                        minWidth: "180px",
                        maxWidth: "200px",
                        backgroundColor: "#ffffff",
                        color: "#333333",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                      }}
                    >
                      <span className="txt">Watch Demo</span>
                    </button>
                  </div>

                  {/* Full-width Sign Up */}
                  <Link
                    to="/signup"
                    className="btn hover-btn px-5 py-3 text-center fw-bold rounded-3 border-0 shadow-lg"
                    style={{
                      maxWidth: "400px",
                      width: "100%",
                      backgroundColor: "#ffffff",
                      color: "#00AC4E",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      whiteSpace: "normal",
                      lineHeight: "1.4",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      border: "2px solid transparent"
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
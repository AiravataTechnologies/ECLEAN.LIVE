import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const peoples = [
  "/images/team/team-info1.png",
  "/images/team/team-info2.png",
  "/images/team/team-info3.png",
  "/images/team/team-info4.png",
  "/images/team/team-info5.png",
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Video Modal Handler
  const videoOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero-sec bg-green hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="hero-tagline text-white">
                  Streamline, Automate, and Elevate Your Facility Management Services
                </span>
                <h1 className="hero-title text-white">
                  AI-Based Cleaning Industry Platform
                </h1>
                <p className="text-white">
                  eClean.live by Nityam Software Solution Pvt. Ltd. is a next-generation, AI-driven SaaS platform tailored for facility management companies, corporate offices, hospitals, government bodies, and large industrial plants.
                </p>
                <div className="hero-btn-area d-flex align-items-center">
                  <Link to="/about" className="thm-btn">
                    <span className="txt">Read More</span>
                  </Link>
                  <a href="#" onClick={videoOpenHandler} className="play-btn">
                    <i className="fas fa-play" />
                  </a>
                  <span className="play-intro">Play Intro</span>
                </div>
                <div className="hero-team-info d-flex align-items-center">
                  <div className="team-members d-flex">
                    {peoples?.map((item, i) => (
                      <div
                        key={i}
                        className="team-members-img"
                        style={{
                          zIndex: peoples.length - i
                        }}
                      >
                        <img
                          src={item}
                          alt="profile"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="total-team-count">
                    <span>36k+</span>
                    <p>Team Members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-images hero-style1">
                <div className="hero-feature-img feature-one br-style1">
                  <img
                    className="br-style1 h-100"
                    src="/images/hero/hero-img1.png"
                    alt="hero-img"
                  />
                </div>
                {/* Updated: White background behind transparent image, and smaller image */}
                <div
                  className="hero-info-img feature-two"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    borderRadius: "12px",
                    display: "inline-block",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="/images/hero/hero-info-img1.png"
                    alt="hero-img"
                    style={{
                      width: "180px", // Only this image is resized
                      height: "auto",
                      display: "block",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Three Action Buttons Section */}
          <div className="row mt-5 pt-4">
            <div className="col-12">
              <style jsx>{`
                .hero-action-buttons {
                  gap: 2rem;
                }
                
                .action-btn {
                  background: rgba(255, 255, 255, 0.95);
                  backdrop-filter: blur(10px);
                  border: 2px solid rgba(255, 255, 255, 0.2);
                  color: #1e7e34;
                  font-weight: 600;
                  font-size: 1rem;
                  padding: 1rem 2rem;
                  border-radius: 50px;
                  text-decoration: none;
                  display: inline-block;
                  position: relative;
                  overflow: hidden;
                  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  transform: translateY(0);
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                  min-width: 220px;
                  text-align: center;
                  cursor: pointer;
                }
                
                /* Simple hover effect - just zoom in */
                .action-btn:hover {
                  transform: scale(1.05);
                  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
                  background: rgba(255, 255, 255, 1);
                  border-color: #28a745;
                  color: #1e7e34;
                }
                
                /* Active state */
                .action-btn:active {
                  transform: scale(1.02);
                  transition: all 0.1s ease;
                }
                
                /* Same entrance animation for all buttons */
                .action-btn {
                  animation: fadeInUp 0.8s ease-out;
                }
                
                /* Simple entrance animation */
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                

                
                /* Glow effect on focus */
                .action-btn:focus {
                  outline: none;
                  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3), 0 8px 32px rgba(0, 0, 0, 0.1);
                }
                
                /* Text animation */
                .action-btn span, .action-btn {
                  position: relative;
                  z-index: 2;
                }
                
                /* Mobile responsive animations */
                @media (max-width: 768px) {
                  .hero-action-buttons {
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                  }
                  
                  .action-btn {
                    min-width: 280px;
                    padding: 1.2rem 2rem;
                  }
                  
                  .action-btn:hover {
                    transform: scale(1.05);
                  }
                }
                
                /* Prefers reduced motion accessibility */
                @media (prefers-reduced-motion: reduce) {
                  .action-btn {
                    animation: none;
                  }
                  
                  .action-btn {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                  }
                  
                  .action-btn:hover {
                    transform: scale(1.05);
                  }
                }
              `}</style>
              
              <div className="hero-action-buttons d-flex justify-content-center align-items-center flex-wrap">
                {/* Sign up for 14-day free trial */}
                <Link 
                  to="/signup" 
                  className="action-btn action-btn-1"
                >
                  Sign up for a 14-day free trial
                </Link>

                {/* Download Brochure */}
                <Link 
                  to="/brochure" 
                  className="action-btn action-btn-2"
                >
                  Download Brochure
                </Link>

                {/* Watch Demo */}
                <button 
                  onClick={videoOpenHandler}
                  className="action-btn action-btn-3"
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* youtube modal part start */}
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
      {/* youtube modal part end */}
    </>
  );
}
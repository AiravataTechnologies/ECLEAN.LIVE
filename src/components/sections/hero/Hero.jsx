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
                  AI based SaaS platform for hygeine and cleaning
                </h1>
                <p className="text-white hero-description">
                  eClean.live by <a href="https://nityam.sg" target="_blank">Nityam Singapore Pte. Ltd</a> is a next-generation, AI-driven SaaS platform tailored for facility management companies, corporate offices, hospitals, government bodies, and large industrial plants.
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
                {/* Team info card - hidden on mobile, visible on desktop */}
                {/* <div className="hero-team-info d-flex align-items-center d-none d-md-flex mt-4">
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
                </div> */}
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
              <style>{`
                /* Hero Typography Fixes */
                .hero-tagline {
                  font-size: 1.1rem;
                  font-weight: 500;
                  line-height: 1.4;
                  margin-bottom: 1rem;
                  display: block;
                  letter-spacing: 0.5px;
                  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                }
                
                .hero-title {
                  font-size: 2.8rem;
                  font-weight: 700;
                  line-height: 1.2;
                  margin-bottom: 1.5rem;
                  letter-spacing: -0.02em;
                  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }
                
                .hero-description {
                  font-size: 1.1rem;
                  font-weight: 400;
                  line-height: 1.6;
                  margin-bottom: 2rem;
                  opacity: 0.95;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }
                
                .hero-description a {
                  color: #fff;
                  text-decoration: underline;
                  font-weight: 500;
                }
                
                .hero-description a:hover {
                  color: #f8f9fa;
                  text-decoration: none;
                }
                
                /* Mobile Typography Responsive */
                @media (max-width: 576px) {
                  .hero-tagline {
                    font-size: 0.95rem;
                    line-height: 1.3;
                    margin-bottom: 0.8rem;
                    letter-spacing: 0.3px;
                  }
                  
                  .hero-title {
                    font-size: 2rem;
                    line-height: 1.15;
                    margin-bottom: 1.2rem;
                    letter-spacing: -0.01em;
                  }
                  
                  .hero-description {
                    font-size: 1rem;
                    line-height: 1.5;
                    margin-bottom: 1.8rem;
                  }
                }
                
                /* Tablet Typography Responsive */
                @media (min-width: 577px) and (max-width: 768px) {
                  .hero-tagline {
                    font-size: 1rem;
                    line-height: 1.35;
                    margin-bottom: 0.9rem;
                  }
                  
                  .hero-title {
                    font-size: 2.3rem;
                    line-height: 1.18;
                    margin-bottom: 1.3rem;
                  }
                  
                  .hero-description {
                    font-size: 1.05rem;
                    line-height: 1.55;
                    margin-bottom: 1.9rem;
                  }
                }
                
                /* Small Desktop Typography */
                @media (min-width: 769px) and (max-width: 992px) {
                  .hero-tagline {
                    font-size: 1.05rem;
                    line-height: 1.38;
                    margin-bottom: 1rem;
                  }
                  
                  .hero-title {
                    font-size: 2.5rem;
                    line-height: 1.2;
                    margin-bottom: 1.4rem;
                  }
                  
                  .hero-description {
                    font-size: 1.08rem;
                    line-height: 1.58;
                    margin-bottom: 2rem;
                  }
                }
                
                /* Large Desktop Typography */
                @media (min-width: 1200px) {
                  .hero-tagline {
                    font-size: 1.2rem;
                    line-height: 1.42;
                    margin-bottom: 1.2rem;
                    letter-spacing: 0.6px;
                  }
                  
                  .hero-title {
                    font-size: 3.2rem;
                    line-height: 1.22;
                    margin-bottom: 1.6rem;
                    letter-spacing: -0.03em;
                  }
                  
                  .hero-description {
                    font-size: 1.15rem;
                    line-height: 1.65;
                    margin-bottom: 2.2rem;
                  }
                }
                
                /* Extra Large Desktop Typography */
                @media (min-width: 1400px) {
                  .hero-tagline {
                    font-size: 1.25rem;
                    line-height: 1.45;
                    margin-bottom: 1.3rem;
                  }
                  
                  .hero-title {
                    font-size: 3.5rem;
                    line-height: 1.25;
                    margin-bottom: 1.7rem;
                  }
                  
                  .hero-description {
                    font-size: 1.2rem;
                    line-height: 1.7;
                    margin-bottom: 2.3rem;
                  }
                }
                
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
                
                /* Desktop and tablet styles for team info - FIXED */
                .hero-team-info {
                  background: rgba(255, 255, 255, 0.15);
                  backdrop-filter: blur(10px);
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  padding: 12px 20px;
                  border-radius: 50px;
                  gap: 15px;
                  display: inline-flex;
                  align-items: center;
                  width: auto;
                  max-width: 280px;
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                
                .total-team-count {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  white-space: nowrap;
                  margin-left: 8px;
                }
                
                .total-team-count span {
                  font-size: 1.1rem;
                  font-weight: 700;
                  color: white;
                  margin: 0;
                  line-height: 1.2;
                }
                
                .total-team-count p {
                  margin: 0;
                  font-size: 0.85rem;
                  color: rgba(255, 255, 255, 0.9);
                  line-height: 1.2;
                }
                
                .team-members {
                  display: flex;
                  flex-shrink: 0;
                }
                
                .team-members-img {
                  width: 40px;
                  height: 40px;
                  margin-right: -10px;
                  border: 3px solid white;
                  border-radius: 50%;
                  overflow: hidden;
                  position: relative;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
                
                .team-members-img:first-child {
                  margin-right: -10px;
                }
                
                /* Mobile responsive styles */
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
                  
                  /* Fix for hero-info-img (eClean.live logo card) */
                  .hero-info-img.feature-two {
                    padding: 8px !important;
                    border-radius: 8px !important;
                  }
                  
                  .hero-info-img.feature-two img {
                    width: 120px !important;
                    height: auto !important;
                  }
                }
                
                /* Tablet responsive styles */
                @media (min-width: 769px) and (max-width: 992px) {
                  .hero-info-img.feature-two {
                    padding: 10px !important;
                  }
                  
                  .hero-info-img.feature-two img {
                    width: 150px !important;
                  }
                  
                  .hero-team-info {
                    padding: 10px 16px !important;
                    gap: 12px !important;
                    max-width: 250px !important;
                  }
                  
                  .team-members-img {
                    width: 35px !important;
                    height: 35px !important;
                  }
                  
                  .total-team-count span {
                    font-size: 1rem !important;
                  }
                  
                  .total-team-count p {
                    font-size: 0.8rem !important;
                  }
                }
                
                /* Large desktop styles */
                @media (min-width: 1200px) {
                  .hero-team-info {
                    padding: 14px 24px;
                    gap: 18px;
                    max-width: 320px;
                  }
                  
                  .team-members-img {
                    width: 45px;
                    height: 45px;
                    margin-right: -12px;
                  }
                  
                  .total-team-count span {
                    font-size: 1.2rem;
                  }
                  
                  .total-team-count p {
                    font-size: 0.9rem;
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
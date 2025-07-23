import { Link } from "react-router-dom";
import { services_2 } from "../../../data/site";
import Media3Video from "../../../assets/videos/Media3.mp4";

export default function Service() {
  return (
    <section className="service-sec bg-light-greem sec-ptb">
      <style>{`
        .service-card {
          background: rgba(255, 255, 255, 0.95) !important;
          border-radius: 16px !important;
          padding: 20px !important;
          margin-bottom: 20px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
          border: 1px solid rgba(76, 175, 80, 0.1) !important;
          height: 320px !important;
          display: flex !important;
          flex-direction: column !important;
        }
        
        .service-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
          border-color: rgba(76, 175, 80, 0.3) !important;
        }
        
        .service-image-container {
          width: 100% !important;
          height: 120px !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin-bottom: 15px !important;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: relative !important;
        }
        
        .service-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 12px !important;
        }
        
        .service-card-content {
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
        }
        
        .service-card h4 {
          font-size: 18px !important;
          font-weight: 600 !important;
          color: #333 !important;
          margin-bottom: 8px !important;
          line-height: 1.3 !important;
        }
        
        .service-card p {
          color: #666 !important;
          line-height: 1.5 !important;
          margin-bottom: 15px !important;
          flex: 1 !important;
          font-size: 13px !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 3 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
        }
        
        .service-card-link {
          display: inline-flex !important;
          align-items: center !important;
          color: #4CAF50 !important;
          font-weight: 500 !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          margin-top: auto !important;
        }
        
        .service-card-link:hover {
          color: #45a049 !important;
          transform: translateX(4px) !important;
        }
        
        .service-card-link i {
          margin-left: 8px !important;
          font-size: 14px !important;
        }

        .video-container {
          margin-top: 40px !important;
          position: relative !important;
          width: 100% !important;
          max-width: 600px !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2) !important;
        }

        .video-player {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          border-radius: 16px !important;
        }

        .video-overlay {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05)) !important;
          pointer-events: none !important;
          border-radius: 16px !important;
        }

        .services-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 25px !important;
          margin-top: 20px !important;
        }

        @media (max-width: 768px) {
          .video-container {
            max-width: 100% !important;
            margin-top: 30px !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .service-card {
            padding: 15px !important;
            height: 280px !important;
          }
          
          .service-image-container {
            height: 100px !important;
          }
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">Platform capabilities</h6>
              <h2 className="sec-title">
                Advanced Features That Drive Results
              </h2>
              <p className="sec-text">
                Our comprehensive platform combines cutting-edge technology with
                industry expertise to deliver powerful features that transform how
                you manage hygiene and cleaning operations. From intelligent automation
                to real-time insights, every feature is designed to maximize efficiency
                and ensure superior service quality.
              </p>
              <div className="sec-btn">
                <Link to="/services" className="thm-btn">
                  <span className="txt">Explore Features</span>
                </Link>
              </div>
              
              {/* Video Section */}
              <div className="video-container">
                <video 
                  className="video-player"
                  controls
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                >
                  <source src={Media3Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div className="services-grid">
              {services_2?.map((item, i) => (
                <div
                  key={i}
                  className="service-card wow fadeInUp"
                  data-wow-delay={`${i * 100}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="service-image-container">
                    <img src={item.imgUrl} alt={item.title} className="service-image" />
                  </div>
                  <div className="service-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.brief}</p>
                    <Link to="/service-details" className="service-card-link">
                      Learn More
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
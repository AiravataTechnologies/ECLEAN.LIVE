// Service.js - Fixed with Proper Card Layout and Alignment
import { Link } from "react-router-dom";
import { services_2 } from "../../../data/site";
import Media3Video from "../../../assets/videos/Media3.mp4";

export default function Service() {
  return (
    <section className="service-sec bg-light-greem sec-ptb">
      <style>{`
        /* Service Card Base Styles */
        .service-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(228, 230, 235, 0.8);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #4CAF50, #2E7D32);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          border-color: rgba(76, 175, 80, 0.2);
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-image-container {
          width: 100%;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }
        
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-image {
          transform: scale(1.05);
        }
        
        .service-card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-card h4 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          line-height: 1.4;
          min-height: 56px;
          display: flex;
          align-items: center;
        }
        
        .service-card p {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
          font-size: 15px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Services Grid - CSS Grid approach for better control */
        .services-grid {
          display: grid;
          gap: 24px;
          margin-top: 24px;
        }

        .service-card-wrapper {
          display: flex;
        }

        /* Video Container */
        .video-container {
          margin-top: 32px;
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
          background: transparent;
        }

        .video-player {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
          background: transparent;
        }

        /* Text Content Styles */
        .sec-content {
          padding: 0;
          padding-right: 40px;
          text-align: left;
        }

        .sec-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 24px;
          text-align: left;
          color: #1a1a1a;
          font-weight: 800;
        }

        .sec-text {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 32px;
          text-align: left;
          color: #4a5568;
          max-width: 100%;
        }

        .sec-sub-title {
          text-align: left;
          color: #4CAF50;
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .sec-btn {
          margin-bottom: 20px;
          text-align: left;
        }

        .thm-btn {
          padding: 14px 28px;
          font-size: 1rem;
          border-radius: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #4CAF50, #2E7D32);
          border: none;
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .thm-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
          color: white;
          text-decoration: none;
        }

        /* Mobile Styles - 576px and below */
        @media (max-width: 576px) {
          .service-sec {
            padding: 60px 0;
          }

          .sec-content {
            padding: 0 15px;
            text-align: left;
          }

          .sec-title {
            font-size: 1.8rem;
            margin-bottom: 16px;
            text-align: left;
            color: #1a1a1a;
          }

          .sec-sub-title {
            font-size: 0.9rem;
            margin-bottom: 10px;
            text-align: left;
            color: #4CAF50;
          }

          .sec-text {
            font-size: 0.95rem;
            margin-bottom: 20px;
            line-height: 1.5;
            text-align: left;
            color: #4a5568;
          }

          .sec-btn {
            margin-bottom: 16px;
            text-align: left;
          }

          .thm-btn {
            padding: 12px 20px;
            font-size: 0.9rem;
          }

          .video-container {
            margin-top: 24px;
            border-radius: 16px;
          }

          .video-player {
            border-radius: 16px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 20px;
          }

          .service-card-wrapper {
            width: 100%;
          }
          
          .service-card {
            padding: 20px;
            margin-bottom: 0;
            border-radius: 16px;
          }

          .service-card h4 {
            font-size: 18px;
            margin-bottom: 12px;
            min-height: 48px;
            color: #1a1a1a;
          }

          .service-card p {
            font-size: 14px;
            -webkit-line-clamp: 3;
            color: #4a5568;
          }
          
          .service-image-container {
            height: 140px;
            margin-bottom: 16px;
            border-radius: 12px;
          }

          /* Remove hover effects on mobile */
          .service-card:hover {
            transform: none;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          }
          
          .service-card:hover .service-image {
            transform: none;
          }
        }

        /* Small Tablet - 577px to 768px */
        @media (min-width: 577px) and (max-width: 768px) {
          .sec-title {
            font-size: 2.2rem;
            text-align: left;
            color: #1a1a1a;
          }

          .sec-text {
            font-size: 1rem;
            text-align: left;
            color: #4a5568;
          }

          .sec-content {
            text-align: left;
            padding-right: 30px;
          }

          .video-container {
            margin-top: 28px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .service-card-wrapper {
            width: 100%;
          }
          
          .service-card {
            padding: 22px;
          }

          .service-card h4 {
            color: #1a1a1a;
            font-size: 19px;
          }

          .service-card p {
            color: #4a5568;
          }
          
          .service-image-container {
            height: 160px;
          }
        }

        /* Medium Tablet - 769px to 992px */
        @media (min-width: 769px) and (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .service-card h4 {
            color: #1a1a1a;
          }

          .service-card p {
            color: #4a5568;
          }

          .sec-text {
            font-size: 1rem;
            color: #4a5568;
          }
        }

        /* Large Tablet/Small Desktop - 993px to 1200px */
        @media (min-width: 993px) and (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .service-card h4 {
            color: #1a1a1a;
            font-size: 18px;
          }

          .service-card p {
            color: #4a5568;
            font-size: 14px;
          }

          .service-card {
            padding: 20px;
          }

          .service-image-container {
            height: 160px;
          }
        }

        /* Desktop - 1201px and up */
        @media (min-width: 1201px) {
          .sec-content {
            padding-right: 50px;
          }
          
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .service-card h4 {
            color: #1a1a1a;
          }

          .service-card p {
            color: #4a5568;
          }
        }

        /* Extra Large Desktop - 1400px and up */
        @media (min-width: 1400px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }

        /* Remove hover effects on touch devices */
        @media (hover: none) {
          .service-card:hover {
            transform: none;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          }
          
          .service-card:hover .service-image {
            transform: none;
          }

          .thm-btn:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* Container and Layout */
        .container {
          max-width: 1400px;
        }

        .row {
          margin-left: -15px;
          margin-right: -15px;
        }

        .col-lg-6 {
          padding-left: 15px;
          padding-right: 15px;
        }

        /* Ensure consistent spacing */
        .tab-col-gap {
          padding-top: 0;
        }

        @media (max-width: 991px) {
          .tab-col-gap {
            margin-top: 40px;
          }
        }

        /* Equal height cards fix */
        .services-grid .service-card-wrapper {
          display: flex;
          align-items: stretch;
        }

        .service-card-wrapper .service-card {
          width: 100%;
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
                you manage hygiene and cleaning operations.
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
              </div>
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div className="services-grid">
              {services_2?.map((item, i) => (
                <div
                  key={i}
                  className="service-card-wrapper wow fadeInUp"
                  data-wow-delay={`${i * 100}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="service-card">
                    <div className="service-image-container">
                      <img src={item.imgUrl} alt={item.title} className="service-image" />
                    </div>
                    <div className="service-card-content">
                      <h4>{item.title}</h4>
                      <p>{item.brief}</p>
                    </div>
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
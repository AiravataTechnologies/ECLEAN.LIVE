// ServiceStyle2.js - Fixed FeatureCard Component
import ServiceCard from "../../ui/cards/ServiceCard";
import AutomationFeatures from "../automationFeatures/AutomationFeatures";
import { useEffect } from "react";

const FeatureCard = ({ text }) => (
  <div className="col-sm-6 col-12">
    <div className="feature-card">
      {text}
    </div>
  </div>
);

export default function ServiceStyle2({ data }) {
  const workerFeatures = [
    "Easy Navigation – Know It, Do It, Ask It",
    "Skill Tagging – Worker skill profiling",
    "GPS Attendance – Location check-in/out",
    "Leave Management – Quick leave application",
  ];

  const supervisorFeatures = [
    "Manage team & review attendance",
    "Assign tasks via drag-and-drop",
    "Review consumer feedback & act",
    "Material stock assignment via scan",
  ];

  const clientFeatures = [
    "QR-based feedback & reporting",
    "View service history & analytics",
    "Raise tickets & track resolution",
    "Request maintenance easily",
  ];

  const adminFeatures = [
    "Real-time dashboard",
    "Track leads, payments, and feedback",
    "Monitor staff attendance",
    "Manage reports & key metrics",
  ];

  const endUserFeatures = [
    "Easy Feedback Submission via QR Code",
    "Service History Access with Photo Logs",
    "Access Service Ratings and Staff Info",
    "Transparent, Clean & Simple UI",
    "Track Request, Maintenance, or Complaint Status",
    "Raise Support Tickets Instantly",
  ];

  // Remove the blue AI-POWERED SOLUTION box after component mounts
  useEffect(() => {
    const removeBlueBox = () => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        if (element.textContent && element.textContent.includes('AI-POWERED SOLUTION')) {
          element.style.display = 'none !important';
          element.style.visibility = 'hidden !important';
          element.style.opacity = '0 !important';
          element.style.height = '0 !important';
          element.style.overflow = 'hidden !important';
        }
      });
    };

    removeBlueBox();
    setTimeout(removeBlueBox, 100);
    setTimeout(removeBlueBox, 500);
    setTimeout(removeBlueBox, 1000);

    const observer = new MutationObserver(removeBlueBox);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="service-sec2 sec-ptb">
      <style>{`
        /* Feature Card Base Styles */
        .feature-card {
          background: linear-gradient(135deg, #00c853, #43a047);
          color: white;
          padding: 20px;
          border-radius: 16px;
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          min-height: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          word-wrap: break-word;
          hyphens: auto;
          line-height: 1.4;
          border: 2px solid transparent;
          position: relative;
        }

        .feature-card:hover {
          box-shadow: 0 8px 25px rgba(0, 200, 83, 0.3);
          filter: brightness(1.05);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Feature Card Container */
        .feature-card-container {
          margin-bottom: 2.5rem;
        }

        .feature-card-container .row {
          margin-left: -8px;
          margin-right: -8px;
        }

        .feature-card-container .col-sm-6,
        .feature-card-container .col-12 {
          padding-left: 8px;
          padding-right: 8px;
          margin-bottom: 16px;
          display: flex;
        }

        /* App Section Styles */
        .app-sections {
          margin-top: 3rem;
        }

        .app-section-title {
          font-size: 2.2rem;
          margin-bottom: 1.2rem;
          color: #1a1a1a;
          font-weight: 700;
        }

        .app-section-title .text-primary { color: #007bff !important; }
        .app-section-title .text-success { color: #28a745 !important; }
        .app-section-title .text-warning { color: #ffc107 !important; }
        .app-section-title .text-dark { color: #343a40 !important; }

        .app-section-description {
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.6;
        }

        /* Video Styles */
        .video-responsive {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          background: transparent;
        }

        /* Section Spacing */
        .row.align-items-center {
          margin-bottom: 4rem;
        }

        .row.align-items-center:last-child {
          margin-bottom: 2rem;
        }

        /* Automation Section */
        .automation-section {
          margin-top: 4rem;
          text-align: center;
        }

        .automation-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .automation-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #6c757d;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Mobile Styles - 576px and below */
        @media (max-width: 576px) {
          .service-sec2 {
            padding: 40px 0;
          }

          .app-sections {
            margin-top: 2rem;
          }

          .app-section-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }

          .app-section-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
            padding: 0 10px;
          }

          .feature-card-container {
            margin-bottom: 2rem;
          }

          .feature-card-container .col-sm-6,
          .feature-card-container .col-12 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 12px;
            padding-left: 5px;
            padding-right: 5px;
          }

          .feature-card {
            min-height: 100px;
            height: auto;
            padding: 16px;
            font-size: 14px;
            line-height: 1.3;
            border-radius: 12px;
          }

          .row.align-items-center {
            margin-bottom: 2.5rem;
          }

          .video-responsive {
            margin-top: 15px;
            border-radius: 8px;
          }

          /* Stack video above content on mobile */
          .flex-md-row-reverse {
            flex-direction: column;
          }

          .flex-md-row-reverse .col-md-6:first-child {
            order: 2;
          }

          .flex-md-row-reverse .col-md-6:last-child {
            order: 1;
            margin-bottom: 20px;
          }

          /* Remove hover effects on mobile */
          .feature-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            filter: brightness(1);
            transform: none;
          }

          .automation-title {
            font-size: 1.8rem;
          }

          .automation-subtitle {
            font-size: 1rem;
            padding: 0 15px;
          }
        }

        /* Tablet Styles - 577px to 768px */
        @media (min-width: 577px) and (max-width: 768px) {
          .app-section-title {
            font-size: 1.9rem;
          }

          .app-section-description {
            font-size: 1.05rem;
          }

          .feature-card-container .col-sm-6 {
            margin-bottom: 15px;
          }

          .feature-card {
            min-height: 110px;
            height: 110px;
            font-size: 15px;
            padding: 18px;
          }

          .row.align-items-center {
            margin-bottom: 3.5rem;
          }

          .automation-title {
            font-size: 2.2rem;
          }

          .automation-subtitle {
            font-size: 1.1rem;
          }
        }

        /* Medium Tablet - 769px to 992px */
        @media (min-width: 769px) and (max-width: 992px) {
          .app-section-title {
            font-size: 2rem;
          }

          .feature-card {
            min-height: 115px;
            height: 115px;
            font-size: 16px;
          }
        }

        /* Desktop - 993px and up */
        @media (min-width: 993px) {
          .feature-card {
            min-height: 120px;
            height: 120px;
            font-size: 16px;
          }
        }

        /* Touch devices - remove hover effects */
        @media (hover: none) {
          .feature-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            filter: brightness(1);
            transform: none;
            border-color: transparent;
          }
        }

        /* Ensure equal height cards in each row */
        .feature-card-container .row {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
        }

        .feature-card-container .col-sm-6 {
          display: flex;
          align-items: stretch;
        }
      `}</style>

      <div className="container">
        {/* Main Service Cards */}
        <div className="row">
          {data?.map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4 mb-4">
              <ServiceCard data={item} index={i} />
            </div>
          ))}
        </div>

        {/* App Sections */}
        <div className="app-sections">
          {/* Worker App */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold text-center app-section-title">
                <span className="text-primary">Worker</span> App
              </h3>
              <p className="text-center app-section-description">
                Bridges the gap between field and office with seamless communication.
              </p>
              <div className="feature-card-container">
                <div className="row">
                  {workerFeatures.map((text, i) => (
                    <FeatureCard key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <video
                src="/images/workerApp.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-responsive"
              />
            </div>
          </div>

          {/* Supervisor App */}
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <h3 className="fw-bold text-center app-section-title">
                <span className="text-success">Supervisor</span> App
              </h3>
              <p className="text-center app-section-description">
                A time-saver, problem-solver, and performance-booster app.
              </p>
              <div className="feature-card-container">
                <div className="row">
                  {supervisorFeatures.map((text, i) => (
                    <FeatureCard key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <video
                src="/images/supervisor.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-responsive"
              />
            </div>
          </div>

          {/* Client Dashboard */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold text-center app-section-title">
                <span className="text-warning">Client</span> Dashboard
              </h3>
              <p className="text-center app-section-description">
                Empowers clients with transparency, service ratings, and tracking.
              </p>
              <div className="feature-card-container">
                <div className="row">
                  {clientFeatures.map((text, i) => (
                    <FeatureCard key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <video
                src="/images/client.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-responsive"
              />
            </div>
          </div>

          {/* Admin Overview */}
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <h3 className="fw-bold text-center app-section-title">
                <span className="text-dark">Admin</span> Overview
              </h3>
              <p className="text-center app-section-description">
                A centralized control center for your organization's performance.
              </p>
              <div className="feature-card-container">
                <div className="row">
                  {adminFeatures.map((text, i) => (
                    <FeatureCard key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <video
                src="/images/dashboard.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-responsive"
              />
            </div>
          </div>

          {/* End User Feedback */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold text-center app-section-title">
                <span className="text-dark">End User</span>{" "}
                <span className="text-success">Feedback</span>
              </h3>
              <p className="text-center app-section-description">
                Simplifies feedback, support requests, and service transparency for users.
              </p>
              <div className="feature-card-container">
                <div className="row">
                  {endUserFeatures.map((text, i) => (
                    <FeatureCard key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <video
                src="/images/client1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-responsive"
              />
            </div>
          </div>

          {/* Automation Section */}
          <div className="automation-section">
            <div className="container">
              <h2 className="automation-title">
                <strong>AI-Powered</strong> <strong>Automation</strong> <strong>Platform</strong>
              </h2>
              <p className="automation-subtitle">
                Experience the future of cleaning and hygiene management with our intelligent automation system that streamlines operations and enhances productivity.
              </p>
              <AutomationFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
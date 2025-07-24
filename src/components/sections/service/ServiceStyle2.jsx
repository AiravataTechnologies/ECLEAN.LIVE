import ServiceCard from "../../ui/cards/ServiceCard";
import AutomationFeatures from "../automationFeatures/AutomationFeatures";

const FeatureCard = ({ text }) => (
  <div className="col-sm-6 col-12">
    <div
      style={{
        background: "linear-gradient(135deg, #00c853, #43a047)",
        color: "white",
        padding: "15px 20px",
        borderRadius: "16px",
        fontWeight: 500,
        fontSize: "16px",
        textAlign: "center",
        transition: "box-shadow 0.3s ease, filter 0.3s ease",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 100, 0.6)";
        e.currentTarget.style.filter = "brightness(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
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

  return (
    <section className="service-sec2 sec-ptb">
      <style>{`
        .app-sections {
          margin-top: 3rem !important;
        }

        .app-section-title {
          font-size: 2rem !important;
          margin-bottom: 1rem !important;
        }

        .app-section-description {
          margin-bottom: 1.5rem !important;
          font-size: 1.1rem !important;
        }

        .feature-card-container {
          margin-bottom: 2rem !important;
        }

        .video-responsive {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 12px !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }

        .automation-section {
          margin-top: 5rem !important;
          padding: 4rem 0 !important;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
          border-radius: 20px !important;
          position: relative !important;
          overflow: hidden !important;
        }

        .automation-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .automation-title {
          position: relative;
          z-index: 2;
          font-size: 2.5rem !important;
          font-weight: 800 !important;
          text-align: center !important;
          margin-bottom: 3rem !important;
          color: #333 !important;
        }

        .automation-subtitle {
          position: relative;
          z-index: 2;
          font-size: 1.2rem !important;
          text-align: center !important;
          color: #666 !important;
          margin-bottom: 3rem !important;
          max-width: 600px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        /* Mobile Styles */
        @media (max-width: 576px) {
          .service-sec2 {
            padding: 40px 0 !important;
          }

          .sec-title {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
          }

          .sec-sub-title {
            font-size: 0.9rem !important;
          }

          .app-sections {
            margin-top: 2rem !important;
          }

          .app-section-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.8rem !important;
          }

          .app-section-description {
            font-size: 0.95rem !important;
            margin-bottom: 1.2rem !important;
            padding: 0 10px !important;
          }

          .feature-card-container .col-sm-6 {
            margin-bottom: 10px !important;
          }

          .feature-card-container > div > div {
            height: 80px !important;
            padding: 10px 15px !important;
            font-size: 14px !important;
            border-radius: 12px !important;
          }

          .row.align-items-center {
            margin-bottom: 3rem !important;
          }

          .video-responsive {
            margin-top: 15px !important;
            border-radius: 8px !important;
          }

          /* Stack video above content on mobile */
          .flex-md-row-reverse {
            flex-direction: column !important;
          }

          .flex-md-row-reverse .col-md-6:first-child {
            order: 2 !important;
          }

          .flex-md-row-reverse .col-md-6:last-child {
            order: 1 !important;
            margin-bottom: 20px !important;
          }

          .automation-section {
            margin-top: 3rem !important;
            padding: 2rem 0 !important;
            border-radius: 15px !important;
          }

          .automation-title {
            font-size: 1.8rem !important;
            margin-bottom: 2rem !important;
          }

          .automation-subtitle {
            font-size: 1rem !important;
            margin-bottom: 2rem !important;
            padding: 0 15px !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 577px) and (max-width: 768px) {
          .app-section-title {
            font-size: 1.8rem !important;
          }

          .feature-card-container > div > div {
            height: 90px !important;
            font-size: 15px !important;
          }

          .row.align-items-center {
            margin-bottom: 3.5rem !important;
          }

          .automation-title {
            font-size: 2.2rem !important;
          }

          .automation-subtitle {
            font-size: 1.1rem !important;
          }
        }

        /* Medium Tablet */
        @media (min-width: 769px) and (max-width: 992px) {
          .app-section-title {
            font-size: 1.9rem !important;
          }

          .feature-card-container > div > div {
            height: 95px !important;
          }

          .automation-title {
            font-size: 2.3rem !important;
          }
        }

        /* Touch devices - remove hover effects */
        @media (hover: none) {
          .feature-card-container > div > div:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
            filter: brightness(1) !important;
          }
        }

        /* Ensure proper spacing for all sections */
        .row.align-items-center {
          margin-bottom: 4rem;
        }

        .row.align-items-center:last-child {
          margin-bottom: 2rem;
        }
      `}</style>
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">What We Do</h6>
              <h2 className="sec-title">Services That Help You Grow</h2>
            </div>
          </div>
        </div>

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
              <div className="row g-3 feature-card-container">
                {workerFeatures.map((text, i) => (
                  <FeatureCard key={i} text={text} />
                ))}
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
              <div className="row g-3 feature-card-container">
                {supervisorFeatures.map((text, i) => (
                  <FeatureCard key={i} text={text} />
                ))}
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
              <div className="row g-3 feature-card-container">
                {clientFeatures.map((text, i) => (
                  <FeatureCard key={i} text={text} />
                ))}
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
              <div className="row g-3 feature-card-container">
                {adminFeatures.map((text, i) => (
                  <FeatureCard key={i} text={text} />
                ))}
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
              <div className="row g-3 feature-card-container">
                {endUserFeatures.map((text, i) => (
                  <FeatureCard key={i} text={text} />
                ))}
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
                AI-Powered <span style={{
                  background: 'linear-gradient(45deg, #3b82f6, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Automation</span> Platform
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
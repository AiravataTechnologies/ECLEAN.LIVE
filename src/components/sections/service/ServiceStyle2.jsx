import ServiceCard from "../../ui/cards/ServiceCard";

const FeatureCard = ({ text }) => (
  <div className="col-sm-6">
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
            <div key={i} className="col-md-6 col-lg-4">
              <ServiceCard data={item} index={i} />
            </div>
          ))}
        </div>

        {/* App Sections */}
        <div className="app-sections mt-5">

          {/* Worker App */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="fw-bold text-center mb-3" style={{ fontSize: "2rem" }}>
                <span className="text-primary">Worker</span> App
              </h3>
              <p className="text-center mb-4">
                Bridges the gap between field and office with seamless communication.
              </p>
              <div className="row g-3">
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
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Supervisor App */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6">
              <h3 className="fw-bold text-center mb-3" style={{ fontSize: "2rem" }}>
                <span className="text-success">Supervisor</span> App
              </h3>
              <p className="text-center mb-4">
                A time-saver, problem-solver, and performance-booster app.
              </p>
              <div className="row g-3">
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
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Client Dashboard */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="fw-bold text-center mb-3" style={{ fontSize: "2rem" }}>
                <span className="text-warning">Client</span> Dashboard
              </h3>
              <p className="text-center mb-4">
                Empowers clients with transparency, service ratings, and tracking.
              </p>
              <div className="row g-3">
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
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Admin Overview */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6">
              <h3 className="fw-bold text-center mb-3" style={{ fontSize: "2rem" }}>
                <span className="text-dark">Admin</span> Overview
              </h3>
              <p className="text-center mb-4">
                A centralized control center for your organization’s performance.
              </p>
              <div className="row g-3">
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
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* End User Feedback */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="fw-bold text-center mb-3" style={{ fontSize: "2rem" }}>
                <span className="text-dark">End User</span>{" "}
                <span className="text-success">Feedback</span>
              </h3>
              <p className="text-center mb-4">
                Simplifies feedback, support requests, and service transparency for users.
              </p>
              <div className="row g-3">
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
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
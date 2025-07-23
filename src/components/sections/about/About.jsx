import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-images">
              <div
                className="sec-img-one wow fadeInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
                style={{ borderRadius: "0", overflow: "visible" }}
              >
                <video
                  src="/images/about/Media1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "0",
                  }}
                />
              </div>
              {/* Removed sec-img-two */}
            </div>
          </div>
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <div className="company-logo-wrapper mb-3">
                <img
                  src="/images/about/logo1.png"
                  alt="company-logo"
                  className="company-logo"
                  style={{
                    maxHeight: "60px",
                    maxWidth: "200px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
              </div>
              <h6 className="sec-sub-title">About our Company</h6>
              <h2 className="sec-title">
                We Transform Hygiene & Cleaning Operations
              </h2>
              <p className="sec-text">
                Solve operational challenges and streamline workflows with
                smart, AI-driven solutions built specifically for the hygiene,
                cleaning, and facility management sectors. Unlock actionable
                insights, boost productivity, and ensure compliance with
                real-time data that empowers every level of your service chain.
              </p>
              <ul className="sec-list-item">
                <li>
                  <i className="fa-solid fa-square-check" />
                  Smart Facility & Workforce Management
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  AI-Powered Hygiene Monitoring & Reporting
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Trusted by Public & Private Sector Organizations
                </li>
              </ul>
              <div className="sec-btn">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

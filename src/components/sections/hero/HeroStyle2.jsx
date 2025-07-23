import { Link } from "react-router-dom";

export default function HeroStyle2() {
  return (
    <section className="hero-sec2 bg-light-greem hero-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content hero-content-style1 h-100 d-flex justify-content-center flex-column">
              <span className="hero-tagline">
                Top IT Solution Services Team
              </span>
              <h1 className="hero-title tx-white">
                IT consulting service for your business.
              </h1>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews terative approaches bring table survival.
              </p>
              <div className="hero-btn-area">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
                <Link to="/contact" className="thm-btn thm-btn-style2 btm-rm">
                  <span className="txt">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-images hero-style2">
              <div className="hero-feature-img feature-one br-style1 br-style2">
                <img
                  className="br-style1 br-style2 h-100"
                  src="/images/hero/hero-img2.png"
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function AboutStyle2() {
  return (
    <section className="about-sec about-sec2 sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-images sec-img-style">
              <div
                className="sec-img-one wow fadeInLeft"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <img src="/images/about/about04.png" alt="about-img" />
              </div>
              <div
                className="sec-img-info d-flex flex-column justify-content-center align-items-center wow fadeInRight"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <span className="year-experience">25+</span>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">About Us</h6>
              <h2 className="sec-title">
                We Execute Our ideas From The Start to Finish
              </h2>
              <p className="sec-text">
                Solve Business Problems And Automate Workflows With Artificial
                Work Intelligence-Based Solutions. Unlock The Hidden Power Of
                The Data You Already Have And Hand Hampers The Creativity.
              </p>
              <ul className="sec-list-item">
                <li>
                  <i className="fa-solid fa-square-check" />
                  Development of Financial Models
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Nifty team is a diverse network of consultants
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                  Industry professionals with a global mindset
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

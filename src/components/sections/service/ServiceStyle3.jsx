import { Link } from "react-router-dom";
import { services_3 } from "../../../data/site";

export default function ServiceStyle3() {
  return (
    <section className="service-cat-sec">
      <div className="container">
        <div className="row">
          {/* service part start */}
          {services_3?.map((item, i) => (
            <div
              key={i}
              className="col-xl-2 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay={`${500 + i * 200}ms`}
              data-wow-duration="1500ms"
            >
              <div className="single-service">
                <div className="service-num">
                  <h3>{`0${++i}`}</h3>
                </div>
                <div className="service-content">
                  <i className={item.icon} />
                  <Link to="/" className="service-title">
                    {item.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* service part end */}
        </div>
      </div>
    </section>
  );
}

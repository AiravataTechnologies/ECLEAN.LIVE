import { Link } from "react-router-dom";

export default function ServiceCard({ data, index }) {
  return (
    <div
      className="single-service-style2 wow fadeInUp"
      data-wow-delay={`${index * 300}ms`}
      data-wow-duration="1500ms"
    >
      <div className="img-box">
        <img src={data.imgUrl} alt="service" style={{ width: '416px', height: '250px', objectFit: 'cover' }} />
      </div>
      <div className="content-box d-flex">
        <div className="single-service-content">
          <h5>
            <Link to="/service-details">{data.title}</Link>
          </h5>
          <p>{data.brief}</p>
        </div>
        <div className="single-service-icon">
          <i className={data.icon} />
        </div>
      </div>
    </div>
  );
}

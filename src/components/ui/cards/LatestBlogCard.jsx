import { Link } from "react-router-dom";

export default function LatestBlogCard({ data, index }) {
  return (
    <div
      className="blog-item blog-box-shadow wow fadeInUp"
      data-wow-delay={`${index * 300}ms`}
      data-wow-duration="1500ms"
    >
      {/* blog item 1 */}
      <div className="img-box">
        <img src={data.imgUrl} alt="blog" className="h-100" />
        <div className="blog-date">
          <span className="data">01</span>
          <span className="month">Jan</span>
        </div>
      </div>
      <div className="content-box">
        <div className="meta-box">
          <ul className="meta-info d-flex">
            <li>
              <div className="icon">
                <i className="flaticon-user" />
              </div>
              <span>
                <Link to="/">Admin</Link>
              </span>
            </li>
            <li>
              <div className="icon">
                <i className="flaticon-calendar" />
              </div>
              <span>
                <Link to="/">January 1, 2024</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="title-box">
          <h3>
            <Link to="/blog-details">{data.title}</Link>
          </h3>
        </div>
        <div className="btn-box">
          <Link to="/blog-details" className="read-more">
            <span className="txt">Read More</span>
            <i className="flaticon-right-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

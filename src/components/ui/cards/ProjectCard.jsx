import { Link } from "react-router-dom";

export default function ProjectCard({ data, index }) {
  return (
    <div
      className="single-project single-project-style2 wow fadeInUp"
      data-wow-delay={`${index * 300}ms`}
      data-wow-duration="1500ms"
    >
      <div className="project-img">
        <img src={data.imgUrl} alt="project" className="h-100" />
      </div>
      <div className="project-title">
        <h5>
          <Link to="/project-details">{data.title}</Link>
        </h5>
        <span className="project-cat">{data.category}</span>
      </div>
      <Link to="/project-details" className="project-btn">
        <i className="flaticon-right-arrow" />
      </Link>
    </div>
  );
}

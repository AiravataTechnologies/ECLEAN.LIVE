import { Link } from "react-router-dom";
import { footer_blogs } from "../../../data/footer";

export default function BlogRecentPost() {
  return (
    <div className="sidebar-item">
      <h4 className="stitle">Recent Posts</h4>
      <div className="blog-recent-post footer-recent-post">
        <ul>
          {/* recent blog part start */}
          {footer_blogs?.map((item, i) => (
            <li key={i} className="blog-sidebar-box-item blog-item d-flex">
              <div className="img-box">
                <Link to="/blog-details">
                  <img src={item.imgUrl} alt="blog" className="h-100" />
                </Link>
              </div>
              <div className="content-box">
                <div className="meta-box">
                  <ul className="meta-info">
                    <li>
                      <div className="icon">
                        <i className="flaticon-calendar" />
                      </div>
                      <span>
                        <Link to="#" className="c-black">
                          Oct 2, 2023
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="title-box">
                  <h3 className="c-black">
                    <Link to="/blog-details">{item.title}</Link>
                  </h3>
                </div>
              </div>
            </li>
          ))}
          {/* recent blog part end */}
        </ul>
      </div>
    </div>
  );
}

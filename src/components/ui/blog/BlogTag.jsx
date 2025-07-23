import { Link } from "react-router-dom";

const tags = ["#Technology", "#IT Business"];

const socials = [
  {
    icon: "fa-brands fa-facebook-f",
    url: "/",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    url: "/",
  },
  {
    icon: "fa-brands fa-twitter",
    url: "/",
  },
  {
    icon: "fa-brands fa-instagram",
    url: "/",
  },
];

export default function BlogTag() {
  return (
    <div
      className="blog-tags-share wow fadeInUp"
      data-wow-delay="0ms"
      data-wow-duration="1500ms"
    >
      <div className="blog-tags">
        <div className="tag-title">
          <h6>Tag:</h6>
        </div>
        <ul>
          {tags?.map((item, i) => (
            <li key={i}>
              <Link to="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-tags blog-share">
        <div className="tag-title">
          <h6>Share:</h6>
        </div>
        <ul>
          {socials?.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>
                <i className={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

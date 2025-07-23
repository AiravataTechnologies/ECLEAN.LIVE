import { Link } from "react-router-dom";

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

export default function BlogAuthor() {
  return (
    <div
      className="blog-autor-bio wow fadeInUp"
      data-wow-delay="1000ms"
      data-wow-duration="1500ms"
    >
      <div className="avater">
        <img src="/images/blog/author_1.png" alt="avater" className="h-100" />
      </div>
      <div className="avater-content">
        <h4>Ronald Richards</h4>
        <span>Founder &amp; CEO</span>
        <ul className="autor-social d-flex">
          {socials?.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>
                <i className={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
        <p>
          Delicate and specialty items are handled with the utmost care. We have
          specialized processes for such items to ensure they are cleaned gently
          and returned to you in pristine condition.
        </p>
      </div>
    </div>
  );
}

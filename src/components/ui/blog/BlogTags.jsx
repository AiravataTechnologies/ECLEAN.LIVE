import { Link } from "react-router-dom";

export const tags = [
  "Interiour",
  "Software",
  "Design",
  "Web Planting",
  "Daily Inspiration",
];

export default function BlogTags() {
  return (
    <div className="sidebar-item mb-0">
      <h4 className="stitle">Tags</h4>
      <div className="blog-tags">
        <ul>
          {tags?.map((item, i) => (
            <li key={i}>
              <Link to="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

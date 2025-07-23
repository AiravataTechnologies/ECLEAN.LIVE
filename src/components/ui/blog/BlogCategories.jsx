import { Link } from "react-router-dom";
import { service_list } from "../../../data/site";

export default function BlogCategories() {
  return (
    <div className="sidebar-item service-list">
      <h4 className="stitle">Categories</h4>
      <ul className="cat-list">
        {service_list?.map((item, i) => (
          <li key={i}>
            <Link to={item.url}>
              {item.name}
              <i className="flaticon-right-arrow child" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

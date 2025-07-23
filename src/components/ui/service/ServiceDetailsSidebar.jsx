import { Link } from "react-router-dom";
import { service_list } from "../../../data/site";
import SidebarForm from "../form/SidebarForm";

export default function ServiceDetailsSidebar() {
  return (
    <div className="sidebar ms-xl-4">
      <div className="sidebar-item service-list">
        <h4 className="stitle">Services List</h4>
        <ul className="cat-list">
          {/* service list part start */}
          {service_list?.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>
                {item.name}
                <i className="flaticon-right-arrow child" />
              </Link>
            </li>
          ))}
          {/* service list part end */}
        </ul>
      </div>
      <div className="sidebar-item sidebar-cform">
        {/* Need help? */}
        <h4 className="stitle">Need help?</h4>
        {/* get in touch part start */}
        <SidebarForm />
        {/* get in touch part end */}
      </div>
      <div className="sidebar-item mb-0">
        {/* Need help? */}
        <h4 className="stitle">Download Brochures</h4>
        <div className="download-brochures">
          <div className="brochur-icon">
            <i className="flaticon-download" />
          </div>
          <div className="brochur-text">
            <p>
              Business is a marketing discipline focused on growing visibility
              in organic (non-paid) technic required.
            </p>
            <Link to="/service-details">Click here to download</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

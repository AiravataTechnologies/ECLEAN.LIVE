import { Link } from "react-router-dom";
import { service_list } from "../../../data/site";
import SidebarForm from "../form/SidebarForm";

export default function ProjectDetailsSidebar() {
  return (
    <div className="sidebar me-xl-4">
      <div className="sidebar-item service-list">
        {/* Services List */}
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
        <h4 className="stitle">Get in touch</h4>
        {/* get in touch part start */}
        <SidebarForm />
        {/* get in touch part end */}
      </div>
      <div className="sidebar-item mb-0 project-qinfo">
        {/* project-qinfo */}
        <div className="qinfo-item">
          {/* qinfo-item-1 */}
          <div className="qinfo-icon">
            <i className="flaticon-maps-and-flags" />
          </div>
          <div className="qinfo-box">
            <h5>Location</h5>
            <Link to="/">7 Green Lake Street Crawfordsville, IN 47933</Link>
          </div>
        </div>
        <div className="qinfo-item">
          {/* qinfo-item-2 */}
          <div className="qinfo-icon">
            <i className="flaticon-call" />
          </div>
          <div className="qinfo-box">
            <h5>Call Now</h5>
            <Link to="tel:+1801.234.5678">+1801.234.5678</Link>
            <Link to="tel:+1784.386.8687">+1784.386.8687</Link>
          </div>
        </div>
        <div className="qinfo-item mb-0">
          {/* qinfo-item-3 */}
          <div className="qinfo-icon">
            <i className="flaticon-gmail-logo" />
          </div>
          <div className="qinfo-box">
            <h5>Email Us</h5>
            <Link to="mailto:mehedi@company.com">mehedi@company.com</Link>
            <Link to="mailto:info@company.com">info@company.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

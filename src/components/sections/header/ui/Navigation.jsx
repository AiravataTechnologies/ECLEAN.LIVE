import { Link, useLocation } from "react-router-dom";
import navigation from "../../../../data/navigation";

export default function Navigation() {
  const path = useLocation().pathname;

  return (
    <div className="navbar-wrap main-menu">
      <ul className="navigation">
        {navigation?.map((item, i) => (
          <li
            key={i}
            className={item.dropdown ? "menu-item-has-children " : ""}
          >
            {item.dropdown ? (
              <Link
                className={
                  item.dropdown.some((dd) => dd.url === path)
                    ? "ui-active-parent-1"
                    : ""
                }
                to="#"
                onClick={(e) => e.preventDefault()}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                className={path === item.url ? "ui-active-parent-1" : ""}
                to={item.url}
              >
                {item.name}
              </Link>
            )}

            {item.dropdown && (
              <>
                <ul className="sub-menu">
                  {item.dropdown.map((item2, i2) => (
                    <li key={i2}>
                      <Link
                        to={item2.url}
                        className={path === item2.url ? "ui-active-1" : ""}
                      >
                        {item2.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="dropdown-btn">
                  <span className="fas fa-angle-down" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

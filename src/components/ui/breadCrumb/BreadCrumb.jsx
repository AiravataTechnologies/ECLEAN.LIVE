import { Link } from "react-router-dom";

export default function BreadCrumb({ data }) {
  return (
    <section
      id="site-breadcumb"
      style={{
        backgroundImage: "url(/images/breadcumb/breadcumb-bd.svg)",
      }}
    >
      <div className="site-breadcumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">{data.title}</h1>
                <ul className="page-navigator">
                  {/* path part start */}
                  {data?.list.map((item, i) => (
                    <li key={i}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  ))}
                  {/* path part end */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

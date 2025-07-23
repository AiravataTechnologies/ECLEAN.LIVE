import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <div className="blog-pagination">
      <ul>
        <li className="pagination-item">
          <Link to="/" className="active">
            1
          </Link>
        </li>
        <li className="pagination-item">
          <Link to="/">2</Link>
        </li>
        <li className="pagination-item">
          <Link to="/">3</Link>
        </li>
        <li className="pagination-item">
          <Link to="/">
            <i className="fa-solid fa-angles-right" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

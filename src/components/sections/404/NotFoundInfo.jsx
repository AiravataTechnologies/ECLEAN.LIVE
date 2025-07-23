import { Link } from "react-router-dom";

export default function NotFoundInfo() {
  return (
    <section className="error-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <div className="error-content text-center">
              <img src="/images/error/404.png" alt="error" className="h-100" />
              <Link to={"/"} className="thm-btn">
                <span className="txt">Back To Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

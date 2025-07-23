import { Link } from "react-router-dom";

export default function BlogComment() {
  return (
    <div className="blog-comments">
      <h3>Comments (03)</h3>
      <ul className="comment-list">
        <li className="comment-item">
          <div className="post-comment">
            <div className="comment-avater">
              <img
                src="/images/blog/comment-author-1.jpg"
                alt="Comment Author"
                className="object-fit-cover"
              />
            </div>
            <div className="comment-content">
              <h4 className="name">Brooklyn Simmons</h4>
              <span className="commented-on">
                <i className="flaticon-calendar" />
                28 April, 2023
              </span>
              <p className="text">
                There are many different types of roofing materials to choose
                from, including asphalt shingles, Metal roofing, wood shakes,
                clay tiles, and slate. Each material has its
              </p>
              <div className="reply_and_edit">
                <Link to="/blog-details" className="reply-btn">
                  Reply
                  <i className="fas fa-reply" />
                </Link>
              </div>
            </div>
          </div>
          <ul className="children">
            <li className="comment-item">
              <div className="post-comment">
                <div className="comment-avater">
                  <img
                    src="/images/blog/comment-author-3.jpg"
                    alt="Comment Author"
                    className="object-fit-cover"
                  />
                </div>
                <div className="comment-content">
                  <h4 className="name">Marvin McKinney</h4>
                  <span className="commented-on">
                    <i className="flaticon-calendar" />
                    20 October, 2023
                  </span>
                  <p className="text">
                    Is a statement that highlights the importance of providing
                    high-quality auto repair services. It suggests that the
                    company or individual
                  </p>
                  <div className="reply_and_edit">
                    <Link to="/blog-details" className="reply-btn">
                      Reply
                      <i className="fas fa-reply" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="comment-item">
          <div className="post-comment">
            <div className="comment-avater">
              <img
                src="/images/blog/comment-author-3.jpg"
                alt="Comment Author"
                height={80}
                width={80}
                className="object-fit-cover"
              />
            </div>
            <div className="comment-content">
              <h4 className="name">Ronald Richards</h4>
              <span className="commented-on">
                <i className="flaticon-calendar" />
                06 June, 2023
              </span>
              <p className="text">
                There are many different types of roofing materials to choose
                from, including asphalt shingles, Metal roofing, wood shakes,
                clay tiles, and slate. Each material has its
              </p>
              <div className="reply_and_edit">
                <Link to="/blog-details" className="reply-btn">
                  Reply
                  <i className="fas fa-reply" />
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

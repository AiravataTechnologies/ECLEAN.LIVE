import { blogs } from "../../../data/site";
import LatestBlogCard from "../../ui/cards/LatestBlogCard";

export default function LatestBlogStyle2() {
  return (
    <section className="blog-sec3 sec-ptb">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center">
              <h6 className="sec-sub-title">Latest Blog</h6>
              <h2 className="sec-title">News &amp; Updates</h2>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          {/* blog part start */}
          {blogs?.slice(0, 3).map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <LatestBlogCard data={item} index={i} />
            </div>
          ))}
          {/* blog part end */}
        </div>
      </div>
    </section>
  );
}

import BlogAuthor from "../../ui/blog/BlogAuthor";
import BlogComment from "../../ui/blog/BlogComments";
import BlogTag from "../../ui/blog/BlogTag";
import BlogCommentForm from "../../ui/form/BlogCommentForm";
import BlogSidebar from "../../ui/sidebar/BlogSidebar";

export default function BlogDetailsInfo() {
  return (
    <section className="blog-page-sec blog-detail-page sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="blog-item-wrapper">
              <div className="blog-left-box blog-item blog-item-details">
                {/* blog item 1 */}
                <div className="img-box">
                  <img
                    src="/images/blog/blogg1.png"
                    alt="blog"
                    className="h-100"
                  />
                </div>
                <div className="content-box">
                  <div className="meta-box">
                    <ul className="meta-info d-flex">
                      <li>
                        <div className="icon">
                          <i className="flaticon-user" />
                        </div>
                        <span>
                          <a href="#">Admin</a>
                        </span>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-calendar" />
                        </div>
                        <span>
                          <a href="#">October 2, 2023</a>
                        </span>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-chat" />
                        </div>
                        <span>
                          <a href="#">Comment (03)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="title-box blog-title wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1500ms"
                  >
                    <h3>
                      <a href="#">
                        Everything you need to learn about IT Solution for your
                        Company.
                      </a>
                    </h3>
                  </div>
                  <div className="blog-body">
                    <p className="mb-4">
                      With over a decade of experience, we’ve established
                      ourselves as one of the pioneering agencies in the . Our
                      small, flexible, agile and design-led structures and
                      processes allow us to be highly responsive and innovative.
                      We’re made of passionate leaders, strategists, managers,
                      developers, animators designer who work gether under one
                      umbrella. We are a digitally-led, full-service creative
                      agency.
                    </p>
                    <p>
                      The European languag are member of the same family. Their
                      separate existence is a myth. Europe same science, music,
                      sport, etc, Europe uses the same vocabulary. The languages
                      only differ in their grammar, their samepronunciation and
                      their most common words.
                    </p>
                    <blockquote
                      className="wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <i className="flaticon-ux" />
                      <p>
                        Majority have suffered alteration in some form, by
                        injected humour, or randomised words which don’t look
                        even slightly believable ”
                      </p>
                    </blockquote>
                    <p className="mb-4">
                      Everyone realizes why a new common language would be
                      desirable: one could refuse to necessary have uniform
                      translators. To achieve this, it would be necessary to
                      have uniform grammar, pronunciation and more words. If
                      several languages coalesce, the grammar of the resulting
                      language is simple and regular than that of the individual
                      languages. The new common language will be more simple and
                      regular than the existin languages samepronunciation and
                      their most common words.
                    </p>
                    <h4>Perfect From Beginning to End</h4>
                    <p className="mb-4">
                      Transfer details Choose the amount you want to send
                      abroad, select how your receiver wants to get the money,
                      and lastly, how you want to pay. You will always see our
                      fees upfront, the final amount you will pay, and the exact
                      amount your receiver will get.
                    </p>
                    <ul className="info-list">
                      <li>Aliquam Eros Justo, Posuere Loborti Robart That</li>
                      <li>Fermentum Ullamcorper Viverra Laoreet</li>
                      <li>Lobortis, Viverra Laoreet Augue Attis Hrculies</li>
                      <li>Fermentum Ullamcorper Viverra Laoreet</li>
                    </ul>
                  </div>
                  {/* tag part start */}
                  <BlogTag />
                  {/* tag part end */}

                  {/* blog author part start */}
                  <BlogAuthor />
                  {/* blog author part end */}

                  {/* blog comments part start */}
                  <BlogComment />
                  {/* blog comments part end */}

                  {/* blog comment form part start */}
                  <BlogCommentForm />
                  {/* blog comment form part end */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            {/* blog details sidebar part start */}
            <BlogSidebar />
            {/* blog details sidebar part end */}
          </div>
        </div>
      </div>
    </section>
  );
}

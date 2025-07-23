import { useState } from "react";
import { faq } from "../../../data/site";
import FaqCollapse from "../../ui/faq/FaqCollapse";

export default function Faq() {
  const [collapsed, setCollapsed] = useState(0);
  const [collapsed2, setCollapsed2] = useState(null);

  // Handler for collapsed
  const collapsedHandler = (id) => {
    if (id === collapsed) {
      return setCollapsed(null);
    }
    setCollapsed(id);
  };

  // Handler for collapsed2
  const collapsedHandler2 = (id) => {
    if (id === collapsed2) {
      return setCollapsed2(null);
    }
    setCollapsed2(id);
  };

  return (
    <section className="faq-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center flex-column">
            <div className="sec-content mb-5">
              <h6 className="sec-sub-title">FAQs</h6>
              <h2 className="sec-title">Looking For Answers?</h2>
            </div>
            {/* faq part start */}
            <div
              id="accordion"
              className="accordion-container wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              {faq?.map((item, i) => (
                <FaqCollapse
                  key={i}
                  handler={collapsedHandler}
                  collapsed={collapsed}
                  index={i}
                  data={item}
                />
              ))}
            </div>
            {/* faq part end */}
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div
              className="sec-images wow fadeInRight"
              data-wow-delay="0.5s"
              data-wow-duration="1500ms"
            >
              <div className="sec-img-one">
                <img src="/images/about/faq.png" alt="faq" className="h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

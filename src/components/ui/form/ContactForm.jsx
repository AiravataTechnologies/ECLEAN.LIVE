import GetAQuote from "../GetAQuote";
import GetTouch from "../GetTouch";

export default function ContactForm() {
  return (
    <section className="about-sec contact-page-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* get a quote part start */}
            <GetAQuote />
            {/* get a quote part end */}
          </div>
          <div className="col-lg-6 tab-col-gap">
            {/* get touch part start */}
            <GetTouch />
            {/* get touch part end */}
          </div>
        </div>
      </div>
    </section>
  );
}

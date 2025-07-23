import { testimonials } from "../../../data/site";
import TestimonialCard from "../../ui/cards/TestimonialCard";

export default function TestimonialsList() {
  return (
    <section className="testimonial-sec testimonial-page-sec sec-pt">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">Clients Testimonials</h6>
              <h2 className="sec-title">What Our Customers Say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* testimonial part start */}
          {testimonials?.slice(0, 6).map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <TestimonialCard data={item} />
            </div>
          ))}
          {/* testimonial part end */}
        </div>
      </div>
    </section>
  );
}

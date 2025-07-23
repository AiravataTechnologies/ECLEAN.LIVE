import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../../data/site";
import TestimonialCard from "../../ui/cards/TestimonialCard";

export default function Testimonial() {
  return (
    <section className="testimonial-sec sec-ptb">
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
          <div className="testimonial-slider">
            {/* tesntimonial part start */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                el: ".ui-testimonial-pagination",
                clickable: true,
              }}
              modules={[Pagination]}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                },
                1100: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials?.slice(0, 6).map((item, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="ui-testimonial-pagination ui-pagination"></div>
            {/* tesntimonial part end */}
          </div>
        </div>
      </div>
    </section>
  );
}

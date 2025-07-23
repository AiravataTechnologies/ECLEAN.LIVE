import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials_2 } from "../../../data/site";

export default function TestimonialStyle2() {
  return (
    <section className="testimonial-sec2 sec-ptb bg-green">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">Testimonials</h6>
              <h2 className="sec-title">What Our Clients Say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-lg-10">
            <div className="testimonial-slider2">
              {/* testimonial part start */}
              <Swiper
                navigation={{
                  nextEl: ".owl-next",
                  prevEl: ".owl-prev",
                }}
                modules={[Navigation]}
                loop={true}
              >
                {testimonials_2?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item single-testimonial-style2">
                      <div className="feedback text-center">
                        <p className="comment">{item.description}</p>
                      </div>
                      <div className="customar-info d-flex justify-content-center align-items-center">
                        <div className="customar-img">
                          <img src={item.imgUrl} alt="testimonial" />
                        </div>
                        <div className="customar-title">
                          <h5>{item.name}</h5>
                          <span className="title">{item.title}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* testimonial part end */}
              <div className="owl-nav" style={{ zIndex: 9 }}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="owl-prev"
                >
                  <i className="flaticon-left-arrow" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="owl-next"
                >
                  <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

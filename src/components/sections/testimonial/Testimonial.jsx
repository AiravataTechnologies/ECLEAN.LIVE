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
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
            <div className="sec-content text-center mb-4 mb-md-5">
              <h6 className="testimonial-sub-title">Clients Testimonials</h6>
              <h2 className="testimonial-main-title">What Our Customers Say</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider">
              {/* testimonial part start */}
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
                    spaceBetween: 15,
                  },
                  576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1000: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
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
              {/* testimonial part end */}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-sec {
          padding: 60px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .testimonial-sub-title {
          color: #ff9500;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
          font-family: 'Arial', 'Helvetica', sans-serif;
          text-align: center;
          display: block;
        }

        .testimonial-main-title {
          color: #333;
          font-size: 42px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0;
          font-family: 'Arial', 'Helvetica', sans-serif;
          text-align: center;
          word-wrap: break-word;
          hyphens: auto;
        }

        .sec-content {
          padding: 0 15px;
        }

        .testimonial-slider {
          position: relative;
          padding-bottom: 50px;
        }

        .ui-testimonial-pagination {
          text-align: center;
          margin-top: 30px;
        }

        /* Tablet styles */
        @media (max-width: 991px) {
          .testimonial-sec {
            padding: 50px 0;
          }
          
          .testimonial-main-title {
            font-size: 36px;
          }
        }

        /* Small tablet styles */
        @media (max-width: 768px) {
          .testimonial-sec {
            padding: 40px 0;
          }

          .testimonial-sub-title {
            font-size: 14px;
            margin-bottom: 12px;
          }

          .testimonial-main-title {
            font-size: 28px;
            line-height: 1.3;
            padding: 0 10px;
          }

          .sec-content {
            margin-bottom: 2rem !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 576px) {
          .testimonial-sec {
            padding: 30px 0;
          }

          .container {
            padding: 0 10px;
          }

          .testimonial-sub-title {
            font-size: 13px;
            margin-bottom: 10px;
          }

          .testimonial-main-title {
            font-size: 24px;
            line-height: 1.4;
            padding: 0 5px;
          }

          .sec-content {
            padding: 0 10px;
            margin-bottom: 1.5rem !important;
          }

          .testimonial-slider {
            padding-bottom: 40px;
          }

          .ui-testimonial-pagination {
            margin-top: 20px;
          }
        }

        /* Extra small mobile styles */
        @media (max-width: 480px) {
          .testimonial-main-title {
            font-size: 22px;
            line-height: 1.4;
          }

          .testimonial-sub-title {
            font-size: 12px;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .testimonial-main-title {
            font-size: 20px;
          }

          .container {
            padding: 0 8px;
          }

          .sec-content {
            padding: 0 8px;
          }
        }
      `}</style>
    </section>
  );
}
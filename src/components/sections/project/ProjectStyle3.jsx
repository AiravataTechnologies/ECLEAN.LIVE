import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects_3 } from "../../../data/site";

export default function ProjectStyle3() {
  return (
    <section className="project-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content">
              <h6 className="sec-sub-title">Latest Project</h6>
              <h2 className="sec-title">Let’s Looks Our Global Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="project-slider2 position-relative pt-5">
              <Swiper
                spaceBetween={30}
                navigation={{
                  nextEl: ".owl-next",
                  prevEl: ".owl-prev",
                }}
                modules={[Navigation]}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                {projects_3?.slice(0, 6).map((item, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="item single-project-style2 single-project-style3 wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="project-img">
                        <img
                          src={item.imgUrl}
                          alt="project"
                          className="h-100"
                        />
                      </div>
                      <div className="project-title">
                        <h5>
                          <Link to="/project-details">{item.title}</Link>
                        </h5>
                        <span className="project-cat">{item.category}</span>
                      </div>
                      <Link to="/project-details" className="project-btn">
                        <i className="flaticon-right-arrow" />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="owl-nav">
                <a
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  className="owl-prev"
                >
                  <i className="flaticon-left-arrow" />
                </a>
                <a
                  to="#"
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

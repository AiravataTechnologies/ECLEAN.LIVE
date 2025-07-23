import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroStyle3() {
  return (
    <section className="hero-sec3">
      <div className="hero-slider owl-carousel owl-theme position-relative">
        <Swiper
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          rewind={true}
          navigation={{
            nextEl: ".owl-next",
            prevEl: ".owl-prev",
          }}
          modules={[Navigation, EffectCreative]}
        >
          <SwiperSlide>
            <div
              className="item hero-slider-item"
              style={{
                backgroundImage: "url(/images/hero/hero-slider1.png)",
              }}
            >
              {/* hero-slider-item1 */}
              <div className="slider-img-overlay">
                <div className="container">
                  <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                      <div className="hero-content text-center">
                        <span className="hero-tagline">
                          Top IT Solution Services Team
                        </span>
                        <h1 className="hero-title tx-white">
                          IT consulting service for your business.
                        </h1>
                        <p>
                          We provide best technology and It services around the
                          world with more than 30+ years of experience Incommode
                          delighted.
                        </p>
                        <div className="hero-btn-area">
                          <Link to="/about" className="thm-btn">
                            <span className="txt">Read More</span>
                          </Link>
                          <Link
                            to="/contact"
                            className="thm-btn thm-btn-style2 btm-rm"
                          >
                            <span className="txt">Contact Us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="item hero-slider-item"
              style={{
                backgroundImage: "url(/images/hero/hero-slider2.png)",
              }}
            >
              {/* hero-slider-item2 */}
              <div className="slider-img-overlay">
                <div className="container">
                  <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                      <div className="hero-content text-center">
                        <span className="hero-tagline">
                          Top IT Solution Services Team
                        </span>
                        <h1 className="hero-title tx-white">
                          Expect great things digital marketing
                        </h1>
                        <p>
                          We provide best technology and It services around the
                          world with more than 30+ years of experience Incommode
                          delighted.
                        </p>
                        <div className="hero-btn-area">
                          <Link to="/about" className="thm-btn">
                            <span className="txt">Read More</span>
                          </Link>
                          <Link
                            to="/contact"
                            className="thm-btn thm-btn-style2 btm-rm"
                          >
                            <span className="txt">Contact Us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="item hero-slider-item"
              style={{
                backgroundImage: "url(/images/hero/hero-slider3.png)",
              }}
            >
              {/* hero-slider-item3 */}
              <div className="slider-img-overlay">
                <div className="container">
                  <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                      <div className="hero-content text-center">
                        <span className="hero-tagline">
                          Top IT Solution Services Team
                        </span>
                        <h1 className="hero-title tx-white">
                          IT consulting service for your business.
                        </h1>
                        <p>
                          We provide best technology and It services around the
                          world with more than 30+ years of experience Incommode
                          delighted.
                        </p>
                        <div className="hero-btn-area">
                          <Link href="/about" className="thm-btn">
                            <span className="txt">Read More</span>
                          </Link>
                          <Link
                            href="/contact"
                            className="thm-btn thm-btn-style2 btm-rm"
                          >
                            <span className="txt">Contact Us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="owl-nav d-none d-md-block" style={{ zIndex: 9 }}>
          <a href="#" onClick={(e) => e.preventDefault()} className="owl-prev">
            <i className="flaticon-left-arrow" />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="owl-next">
            <i className="flaticon-right-arrow" />
          </a>
        </div>
      </div>
      <div className="container-fulid">
        <div className="row"></div>
      </div>
    </section>
  );
}

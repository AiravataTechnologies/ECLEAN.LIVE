import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  "/images/brand/brand1.png",
  "/images/brand/brand2.png",
  "/images/brand/brand3.png",
  "/images/brand/brand4.png",
  "/images/brand/brand5.png",
  "/images/brand/brand1.png",
  "/images/brand/brand2.png",
  "/images/brand/brand3.png",
  "/images/brand/brand4.png",
  "/images/brand/brand5.png",
];

export default function Brand() {
  return (
    <section className="brand-sec sec-ptb bg-green">
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 offset-lg-4 col-lg-4">
            <div className="sec-content text-center mb-5">
              <h5 className="brand-text">
                We have more than <span>270+</span> Happy Customers with
                satisfaction
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="brand-slider owl-carousel owl-theme">
              <Swiper
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                {brands?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item d-flex justify-content-center">
                      <div className="brand-image-wrapper">
                        <img src={item} alt="brand" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-image-wrapper {
          position: relative;
          display: inline-block;
          padding: 15px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .brand-image-wrapper:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .brand-image-wrapper img {
          filter: brightness(1.1) contrast(0.9);
          transition: filter 0.3s ease;
        }

        .brand-image-wrapper:hover img {
          filter: brightness(1.2) contrast(1);
        }

        /* Alternative: White border/shadow approach */
        .brand-image-wrapper-alt {
          position: relative;
          display: inline-block;
          padding: 10px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .brand-image-wrapper-alt:hover {
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
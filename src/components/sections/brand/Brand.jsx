import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ import autoplay

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
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
            <div className="sec-content text-center mb-4 mb-md-5">
              <h5 className="brand-text">
                We have more than <span>270+</span> Happy Customers with
                satisfaction
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="brand-slider">
              <Swiper
                modules={[Autoplay]} // ✅ Autoplay enabled
                spaceBetween={15}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={3000}
                breakpoints={{
                  0: { slidesPerView: 1.5, spaceBetween: 15 },
                  480: { slidesPerView: 2, spaceBetween: 20 },
                  576: { slidesPerView: 2.5, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 25 },
                  992: { slidesPerView: 4, spaceBetween: 30 },
                  1200: { slidesPerView: 5, spaceBetween: 30 },
                }}
              >
                {brands.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item d-flex justify-content-center">
                      <div className="brand-image-wrapper">
                        <img src={item} alt={`Brand ${i + 1}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brand-sec {
          padding: 40px 0;
        }

        @media (min-width: 768px) {
          .brand-sec {
            padding: 60px 0;
          }
        }

        .brand-text {
          font-size: 16px;
          line-height: 1.5;
          margin: 0;
          padding: 0 15px;
        }

        @media (min-width: 576px) {
          .brand-text {
            font-size: 18px;
            padding: 0;
          }
        }

        @media (min-width: 768px) {
          .brand-text {
            font-size: 20px;
          }
        }

        .brand-slider {
          overflow: hidden;
        }

        .brand-image-wrapper {
          position: relative;
          display: inline-block;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 120px;
        }

        @media (min-width: 576px) {
          .brand-image-wrapper {
            padding: 15px;
            max-width: 140px;
          }
        }

        @media (min-width: 768px) {
          .brand-image-wrapper {
            max-width: 160px;
          }
        }

        .brand-image-wrapper:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .brand-image-wrapper img {
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          filter: brightness(1.1) contrast(0.9);
          transition: filter 0.3s ease;
        }

        .brand-image-wrapper:hover img {
          filter: brightness(1.2) contrast(1);
        }

        @media (hover: none) and (pointer: coarse) {
          .brand-image-wrapper:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: none;
          }

          .brand-image-wrapper:hover img {
            filter: brightness(1.1) contrast(0.9);
          }
        }

        @media (max-width: 575px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        .swiper {
          padding: 10px 0;
        }

        .swiper-slide {
          height: auto;
          display: flex;
          align-items: center;
        }

        @media (max-width: 320px) {
          .brand-image-wrapper {
            max-width: 100px;
            padding: 10px;
          }

          .brand-text {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}

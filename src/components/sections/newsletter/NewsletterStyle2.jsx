import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function NewslatterStyle2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Video Modal Handler
  const videoOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  return (
    <>
      <section
        className="newslatter-sec newslatter-sec2 bg-green"
        style={{
          backgroundImage: "url(/images/footer/footer.png)",
        }}
      >
        <div className="container">
          <div className="row aximo_screenfix_right">
            <div className="col-lg-5 d-flex align-items-center">
              <div className="sec-content">
                <h2 className="sec-title">Subscribe to Our Newsletter</h2>
                <p className="sec-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="Subscribe-form d-sm-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    name="cta-eail"
                    required
                  />
                  <div className="submit-btn">
                    <button type="submit" className="thm-btn">
                      <span className="txt">Subscribe Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 p-0">
              <div
                className="video-sec bg-cover"
                style={{
                  backgroundImage: "url(/images/newsletter/newsletter01.png)",
                }}
              >
                <div className="video-sec-overlay d-flex align-items-center justify-content-center">
                  <a href="#" onClick={videoOpenHandler} className="play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isModalOpen}
        videoId="GGf1JjSAKP4"
        onClose={() => setIsModalOpen(false)}
        youtube={{
          autoplay: 1,
          mute: 1,
        }}
      />
    </>
  );
}

import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Video() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Video Modal Handler
  const videoOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className="video-sec video-sec2 bg-cover"
        style={{
          backgroundImage: "url(/images/newsletter/newsletter02.png)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <div className="video-sec-style2">
                <div className="video-sec-overlay d-flex justify-content-center">
                  <a onClick={videoOpenHandler} href="#" className="play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* youtube modal part start */}
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
      {/* youtube modal part end */}
    </>
  );
}

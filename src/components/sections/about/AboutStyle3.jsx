import ProgressBar from "@ramonak/react-progress-bar";

const progress_data = [
  {
    title: "Productivity",
    completed: 80,
  },
  {
    title: "Digital Marketing",
    completed: 75,
  },
  {
    title: "Technology",
    completed: 90,
  },
];

export default function AboutStyle3() {
  return (
    <section className="about-sec3 sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content h-100 d-flex justify-content-center flex-column">
              <h6 className="sec-sub-title">About Company</h6>
              <h2 className="sec-title">
                We Provide the best IT Solutions services
              </h2>
              <p className="sec-text">
                Team is a diverse network of consultants and industry
                professionals with a global mindset and a collaborative culture.
                We work to mindset understand your issues and are to ask better
                questions.
              </p>
              {/* progressbar part start */}{" "}
              {progress_data?.map((item, i) => (
                <div key={i} className="ab-progress">
                  <h2 className="progress-title">{item.title}</h2>
                  <ProgressBar
                    className="ui-progressbar"
                    completed={item.completed}
                    animateOnRender={true}
                    height="8px"
                    baseBgColor="#a1cebe"
                    bgColor="var(--thm-teal)"
                    labelClassName="ui-progressbar-label"
                  />
                </div>
              ))}
              {/* progressbar part end */}
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div className="sec-images">
              <div
                className="sec-img-one wow fadeInRight"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <img
                  src="/images/about/about04.png"
                  alt="about-img"
                  className="h-100"
                />
              </div>
              <div
                className="sec-img-two wow fadeInLeft"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <img
                  src="/images/about/abouts02.png"
                  alt="about-img"
                  className="h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

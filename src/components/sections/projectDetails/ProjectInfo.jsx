import ProjectDetailsSidebar from "../../ui/sidebar/ProjectDetailsSidebar";

const images = [
  "/images/service/sfeature1.png",
  "/images/service/sfeature2.png",
  "/images/project/pfeature1.png",
  "/images/project/pfeature2.png",
];

export default function ProjectInfo() {
  return (
    <section className="service-details sec-ptb">
      <div className="container">
        <div className="row flex-column-reverse flex-xl-row">
          {/* project details sidebar part start */}
          <div className="col-xl-4">
            <ProjectDetailsSidebar />
          </div>
          {/* project details sidebar part end */}
          <div className="col-xl-8">
            <div className="service-details-wrapper">
              <div className="feature-img">
                <img
                  src="/images/project/project-feature.png"
                  alt="feature"
                  className="h-100"
                />
              </div>
              <div className="service-details-content">
                <div className="info-part">
                  <h2
                    className="sec-title wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1500ms"
                  >
                    Solutions That Work For You
                  </h2>
                  <p className="mb-4">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia var quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit amet finibus eros. Lorem
                    Ipsum is simply dummy text of the been printing and
                    typesetting industry. Lorem Ipsum has been the ndustry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make.
                  </p>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It leap survive not only
                    five centurie, but also the leap into electronic
                    typesetting, remaining essentiall unchange Lorem ipsum dolor
                    sit amet consec tetur adipis icing elit.
                  </p>
                </div>
                <div className="info-part">
                  <h4>Service Center</h4>
                  <p className="mb-4">
                    With over a decade of experience, we’ve established
                    ourselves as one of the pioneering agencies in the region.
                    Our small, flexible, agile and design-led structures and
                    processes allow us to highly responsive and innovative.
                    We’re made of passionate leaders, strategists, managers,
                    developers, animators and designers who work together under
                    one umbrella. We are a digitally-led, service creative
                    agency. We combine strategy, marketing, design.
                  </p>
                  <div className="row">
                    {images?.map((item, i) => (
                      <div key={i} className="col-lg-6 mb-4">
                        <div
                          className="info-part-img wow fadeInUp"
                          data-wow-delay={`0.${i * 2}s`}
                          data-wow-duration="1500ms"
                        >
                          <img src={item} alt="feature" className="h-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has leap survive not
                    only five centurie, but also the leap into electronic
                    typesetting, remaining essentiall dolor unchange Lorem ipsum
                    dolor sit amet consec tetur adipis icing elit.
                  </p>
                </div>
                <div className="info-part mb-0">
                  <h4>Work startup with us</h4>
                  <p className="mb-4">
                    Cast obscure badger jeep quail congenialy when changed as
                    cat jeepers affectionate thus facilisi goodness this far
                    like ipsum dolor sit amet, consectetur adipisicing elits sed
                    do eiusmod tempo et incididunt et laboret dolore magna
                    aliqua enim ad minim. Eveniet in vulputate velit esse
                    molestie consequat, illum dolore eu feugiat nulla facilisis
                    at seds eros sed accumsan.
                  </p>
                  <ul className="info-list">
                    <li>Aliquam Eros Justo, Posuere Loborti Robart That</li>
                    <li>Fermentum Ullamcorper Viverra Laoreet</li>
                    <li>Lobortis, Viverra Laoreet Augue Attis Hrculies</li>
                    <li>Fermentum Ullamcorper Viverra Laoreet</li>
                  </ul>
                  <p className="mt-4">
                    These solutions adapt innovative ideas to match your
                    requirements, making cutting-edge concepts touch practical
                    and beneficial for your specific situation. Get in touch
                    Your Name Your Mail Write you Comment Submit Contact us Get
                    in touch Your Name Your Mail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

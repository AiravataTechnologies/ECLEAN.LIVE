import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

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

const social = [
  {
    url: "https://www.facebook.com/",
    icon: "fa-brands fa-facebook-f",
  },
  {
    url: "https://www.linkedin.com/",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    url: "https://twitter.com/",
    icon: "fa-brands fa-twitter",
  },
  {
    url: "https://www.instagram.com/",
    icon: "fa-brands fa-instagram",
  },
];

export default function TeamDetailsBio() {
  return (
    <section className="team-fbio-sec sec-pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="member-fbio-img wow fadeInLeft"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <img
                src="/images/team/member-fbio-img.png"
                alt="member"
                className="h-100"
              />
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div
              className="member-fbio wow fadeInRight"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <h2 className="sec-title">Edoardo Romussi</h2>
              <h4 className="member-title">Marketing Coordinator</h4>
              <p className="mb-3">
                My name is Edoardo Romussi. In my 6 years of work experience in
                SEO, I have gain designed digital experiences.
              </p>
              <p>
                My motivation has always been to understand and We from people,
                which is why in my professional development, I havefocused for
                my attention on working experience design.
              </p>
              <div className="member-social">
                <h6>Follow me:</h6>
                <div className="member-social-icon d-flex">
                  {/* social link part start */}
                  {social?.map((item, i) => (
                    <Link key={i} to={item.url} target="_blank">
                      <i className={item.icon} />
                    </Link>
                  ))}
                  {/* social link part end */}
                </div>
              </div>
              <div className="sec-btn">
                <Link to="/contact" className="thm-btn">
                  <span className="txt">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="team-fbio-hr" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="member-experience">
              <h2 className="sec-title">Personal Experience</h2>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries architecto dolorem ipsum When an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
                It has survived not only five.
              </p>
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div className="progressbar-tooltip">
              {" "}
              {/* progressbar part start */}
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
        </div>
      </div>
    </section>
  );
}

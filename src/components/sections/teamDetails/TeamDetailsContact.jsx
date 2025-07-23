export default function TeamDetailsContact() {
  return (
    <section className="contact-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">Contact With Us Now</h6>
              <h2 className="sec-title">
                Feel Free to Write Our Tecnology Experts
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="offset-md-1 col-md-10 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <form className="itco-cform">
              <div className="row">
                <div className="col-sm-6">
                  <div className="contact-field">
                    <input
                      type="text"
                      id="firstn"
                      name="firstn"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="contact-field">
                    <input
                      type="text"
                      id="lastn"
                      name="lastn"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="contact-field">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="contact-field">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="contact-field">
                    <textarea
                      name="message"
                      id="message"
                      cols={40}
                      rows={4}
                      placeholder="Enter Message..."
                    />
                  </div>
                  <div className="itco-form-btn text-center">
                    <button className="thm-btn mt-3">
                      <span className="txt">Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

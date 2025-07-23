export default function NewslatterStyle3({ bg_color }) {
  return (
    <section className={`newslatter ${bg_color}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="newslatter-style2">
              <div className="row">
                <div className="col-lg-6 col-xl-5">
                  <h4 className="newslatter-text">
                    Subscribe to Our Newsletter for the daily Updates
                  </h4>
                </div>
                <div className="col-lg-6 offset-xl-1 col-xl-6 d-flex flex-column justify-content-center">
                  <div className="Subscribe-form d-flex">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      id="cta-email"
                      name="cta-eail"
                      required
                    />
                    <button type="submit" className="thm-btn">
                      <span className="txt">Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

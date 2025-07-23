export default function GetAQuote() {
  return (
    <div className="sec-content">
      <h2 className="sec-title">Get A Quote</h2>
      <form method="post" className="itco-cform">
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
            <div className="itco-form-btn">
              <button className="thm-btn mt-3">
                <span className="txt">Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

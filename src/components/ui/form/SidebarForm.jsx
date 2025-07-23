export default function SidebarForm() {
  return (
    <form className="itco-cform itco-sform">
      <div className="row">
        <div className="col-sm-6 col-xl-12">
          <div className="contact-field">
            <input
              type="text"
              id="firstn"
              name="firstn"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-12">
          <div className="contact-field">
            <input
              type="text"
              id="lastn"
              name="lastn"
              placeholder="Enter Email"
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
  );
}

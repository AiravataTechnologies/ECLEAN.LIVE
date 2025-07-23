export default function BlogCommentForm() {
  return (
    <div className="blog-contact-form">
      <h3>Add Your Comment</h3>
      <p>Get in touch with us to see how we can help you with your project</p>
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
                <span className="txt">Submit Now</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

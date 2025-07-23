export default function TestimonialCardStyle2({ data }) {
  return (
    <div className="single-testimonial-style3 d-flex">
      <div className="feedback">
        <div className="customar-img">
          <img src={data.imgUrl} alt="testimonial" className="h-100" />
        </div>
        <div className="rating">
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
        </div>
      </div>
      <div className="customar-info">
        <div className="customar-title">
          <h5>{data.name}</h5>
          <span className="title">{data.title}</span>
        </div>
        <p className="comment">{data.description}</p>
        <div className="com-logo">
          <i className="flaticon-ux" />
        </div>
      </div>
    </div>
  );
}

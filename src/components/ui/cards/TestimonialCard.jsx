export default function TestimonialCard({ data }) {
  return (
    <div className="single-testimonial">
      <div className="feedback">
        <div className="rating">
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
        </div>
        <p className="comment">
          "We implemented CleanTech AI for our facility management and the results 
          were outstanding! Their smart scheduling and predictive maintenance features 
          reduced our cleaning costs by 30% while improving hygiene standards!"
        </p>
      </div>
      <div className="customar-info">
        <div className="customar-img">
          <img src={data.imgUrl} alt="testimonial" />
        </div>
        <div className="customar-title">
          <h5>{data.name}</h5>
          <span className="title">{data.title}</span>
        </div>
      </div>
      <div className="com-logo">
        <i className="flaticon-cleaning" />
      </div>
    </div>
  );
}
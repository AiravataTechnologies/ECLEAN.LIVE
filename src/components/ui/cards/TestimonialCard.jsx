// TestimonialCard.jsx
export default function TestimonialCard({ data }) {
  return (
    <div className="testimonial-card-wrapper">
      <div className="testimonial-feedback-section">
        <div className="testimonial-star-rating">
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
        </div>
        <p className="testimonial-comment-text">
          {data.comment || `"We implemented CleanTech AI for our facility management and the results 
          were outstanding! Their smart scheduling and predictive maintenance features 
          reduced our cleaning costs by 30% while improving hygiene standards!"`}
        </p>
      </div>
      <div className="testimonial-customer-details">
        <div className="testimonial-customer-avatar">
          <img src={data.imgUrl} alt="testimonial" />
        </div>
        <div className="testimonial-customer-info">
          <h5>{data.name}</h5>
          <span className="customer-job-title">{data.title}</span>
        </div>
      </div>
      <div className="testimonial-company-logo">
        <i className="flaticon-cleaning" />
      </div>

      <style jsx>{`
        .testimonial-card-wrapper {
          background: rgba(173, 216, 230, 0.3);
          border-radius: 10px;
          padding: 30px 25px;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 350px;
          position: relative;
          text-align: left;
        }

        .testimonial-feedback-section {
          flex: 1;
          margin-bottom: 20px;
          text-align: left;
        }

        .testimonial-star-rating {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 15px;
        }

        .testimonial-star-rating i {
          color: #ff9500;
          font-size: 16px;
          margin-right: 3px;
        }

        .testimonial-comment-text {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          margin: 0;
          font-style: italic;
          // text-align: left;
          padding-right: 15px;
        }

        .testimonial-customer-details {
          background: #ff9500;
          display: flex;
          align-items: center;
          padding: 15px 20px;
          border-radius: 8px;
          margin-top: auto;
        }

        .testimonial-customer-avatar img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-customer-info {
          margin-left: 15px;
          color: white;
          text-align: left;
        }

        .testimonial-customer-info h5 {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-weight: 600;
          color: white;
        }

        .customer-job-title {
          font-size: 14px;
          opacity: 0.9;
          color: white;
        }

        .testimonial-company-logo {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }

        .testimonial-company-logo i {
          font-size: 24px;
          color: #ff9500;
          opacity: 0.3;
        }

        @media (max-width: 768px) {
          .testimonial-card-wrapper {
            padding: 20px;
            min-height: 300px;
          }
          
          .testimonial-comment-text {
            font-size: 14px;
          }
          
          .testimonial-customer-details {
            padding: 12px 15px;
          }
          
          .testimonial-customer-avatar img {
            width: 40px;
            height: 40px;
          }
          
          .testimonial-customer-info h5 {
            font-size: 16px;
          }
          
          .customer-job-title {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
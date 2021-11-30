import React from "react";

const TestimonialSlide = () => {
  return (
    <div className="item m-3">
      <div className="icon">
        <i className="flaticon-quotation" />
      </div>
      <div className="content">
        <p>Great courses to learn finance. Recommended.</p>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      <div className="provider">
        <div className="thumb">
          <img src="/assets/img/testimonial_thum_one.png" alt="Thumb" />
        </div>
        <div className="info">
          <h5>Busel park</h5>
          <span>Student</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;

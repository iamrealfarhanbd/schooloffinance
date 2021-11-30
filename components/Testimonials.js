import Slider from "react-slick";
import TestimonialSlide from "./TestimonialSlide";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="testimonials-area carousel-shadow default-padding-top">
      {/* Fixed Shape */}
      <div className="fixed-shape">
        <img src="/assets/img/shape/5.png" alt="Shape" />
      </div>
      {/* End Fixed Shape */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h5>Testimonials</h5>
              <h2>
                What People say about <br /> Our quality.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="testimonial-items text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials-carousel owl-theme">
                <Slider {...settings}>
                  <TestimonialSlide />
                  <TestimonialSlide />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

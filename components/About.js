const About = () => {
  return (
    <div className="about-area default-padding-top">
      {/* Fixed Shape */}
      <div className="fixed-shape-bottom">
        <img src="assets/img/shape/12.png" alt="Shape" />
      </div>
      {/* End Fixed Shape */}
      <div className="container">
        <div className="about-items">
          <div className="row align-center">
            <div className="col-lg-6 info">
              <h2>About School of Finance</h2>
              <p>
                School of Finance offers high-quality finance courses teaming
                with professional finance and accounting experts. We are here to
                ensure that you get the best quality course materials and
                experience the smoothest e-Learning journey ever.
              </p>
              <ul className="d-none">
                <li>
                  <div className="fun-fact">
                    <span className="timer" data-to={168} data-speed={5000} />
                    <span className="medium">Online Courses</span>
                  </div>
                </li>
                <li>
                  <div className="fun-fact">
                    <span className="timer" data-to={454} data-speed={5000} />
                    <span className="medium">Students</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 thumb">
              <img src="assets/img/illustration/5.png" alt="Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

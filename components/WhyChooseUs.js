const WhyChooseUs = () => {
  return (
    <div className="why-choseus-area bg-gray default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h5>Why Chose us</h5>
              <h2>
                Everything you Need for your <br />
                Institute or University
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* End Fixed BG */}
      <div className="container-full">
        <div className="info">
          <div className="row">
            <div className="single-item thumb col-lg-5">
              <div className="thumb-box">
                <img src="assets/img/thumb-box-why-choose-us.png" alt="Thumb" />
                <a
                  href="https://www.youtube.com/watch?v=0U3WN3f52x8"
                  className="popup-youtube light video-play-button item-center"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="item-box col-lg-7">
              <div className="row">
                <div className="single-item col-lg-6 col-md-6">
                  <div className="item">
                    <span>01</span>
                    <i className="flaticon-library" />
                    <h4>Books &amp; Library</h4>
                    <p>
                      Absolute required of reserved in offering no. How sense
                      found our those gay again taken the preserved ikewise law.
                    </p>
                    <ul>
                      <li>Carrel Booking</li>
                      <li>Student Reading Room</li>
                      <li>Science library</li>
                    </ul>
                  </div>
                </div>
                <div className="single-item col-lg-6 col-md-6">
                  <div className="item">
                    <span>02</span>
                    <i className="flaticon-teacher-2" />
                    <h4>Certified Teachers</h4>
                    <p>
                      Absolute required of reserved in offering no. How sense
                      found our those gay again taken the preserved ikewise law.
                    </p>
                    <ul>
                      <li>Professional training</li>
                      <li>Present content to students</li>
                      <li>Students responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import Link from "next/link";

const Slider = () => {
  return (
    <div className="banner-area banner-box bg-gray auto-height double-items">
      <div
        id="bootcarousel"
        className="carousel slide carousel-fade animate_text"
        data-ride="carousel"
      >
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <div className="content">
                        <h2 data-animation="animated fadeInRight">
                          Finance made <strong>easy</strong>
                        </h2>
                        <p data-animation="animated slideInLeft">
                          Master finance fundamentals swiftly from our leading
                          online school of finance
                        </p>
                        <Link href="/courses">
                          <a
                            data-animation="animated fadeInUp"
                            className="btn btn-md btn-gradient"
                          >
                            Get Started Now
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div
                        className="thumb"
                        data-animation="animated fadeInLeft"
                      >
                        <img src="/assets/img/800x800.png" alt="Thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <div className="content">
                        <h2 data-animation="animated fadeInRight">
                          Become skillful in <strong>finance</strong>
                        </h2>
                        <p data-animation="animated slideInLeft">
                          Gain in-demand finance management skills for ultimate
                          business success
                        </p>
                        <Link href="/courses">
                          <a
                            data-animation="animated fadeInUp"
                            className="btn btn-md btn-gradient"
                          >
                            Get Started Now
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div
                        className="thumb"
                        data-animation="animated fadeInRight"
                      >
                        <img src="/assets/img/800x800.png" alt="Thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Wrapper for slides */}
        {/* Left and right controls */}
        <a
          className="left carousel-control light"
          href="#bootcarousel"
          data-slide="prev"
        >
          <i className="ti-angle-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control light"
          href="#bootcarousel"
          data-slide="next"
        >
          <i className="ti-angle-right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;

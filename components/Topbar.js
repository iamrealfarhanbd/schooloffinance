const Topbar = () => {
  return (
    <div className="top-bar-area bg-dark text-light inline inc-border">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-7 col-md-12 left-info">
            <div className="item-flex">
              <ul className="list">
                <li>
                  <i className="fas fa-phone"></i> Have any question? +44 020
                  8126 1069
                </li>
                <li>
                  <i className="fas fa-bullhorn"></i>{" "}
                  <a href="#">Become an Instructor</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 right-info">
            <div className="item-flex">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="button">
                <a href="#">Register</a>
                <a href="#">
                  <i className="fa fa-sign-in-alt"></i>Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

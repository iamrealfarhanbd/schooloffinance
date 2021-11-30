import React from "react";

const register = () => {
  return (
    <div className="login-area my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="login-box">
              <div className="login">
                <div className="content">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <i className="fas fa-user" />{" "}
                          <input
                            className="form-control"
                            placeholder="Name*"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <i className="fas fa-envelope-open" />{" "}
                          <input
                            className="form-control"
                            placeholder="Email*"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <i className="fas fa-lock" />{" "}
                          <input
                            className="form-control"
                            placeholder="Password*"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <i className="fas fa-lock" />{" "}
                          <input
                            className="form-control"
                            placeholder="Confirm Password*"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="row">
                        <button type="submit">Login</button>
                      </div>
                    </div>
                  </form>
                  <div className="sign-up">
                    <p>
                      Already have an account??{" "}
                      <a href="login.html">Login Now</a>
                    </p>
                  </div>
                  <div className="social-login">
                    <h5>Or Register With</h5>
                    <ul>
                      <li className="facebook">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="g-plus">
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
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

export default register;

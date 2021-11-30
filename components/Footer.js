import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <div className="f-item about">
                <img src="/assets/img/logo-light.png" alt="Logo" />
                <p>
                  School of finance offers high-quality finance courses teaming
                  with professional finance and accounting experts.
                </p>
                <p className="text-italic">
                  Please write your email and get our amazing updates, news and
                  support*
                </p>
                <div className="subscribe">
                  <form action="#">
                    <input
                      type="email"
                      placeholder="Enter your e-mail here"
                      className="form-control"
                      name="email"
                    />
                    <button type="submit">
                      <i className="fa fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 item">
              <div className="f-item link">
                <h4 className="widget-title">Usefull Links</h4>
                <ul>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Event</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Teachers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 item">
              <div className="f-item link">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                  <li>
                    <a href="#">Language Packs</a>
                  </li>
                  <li>
                    <a href="#">Release Status</a>
                  </li>
                  <li>
                    <a href="#">LearnPress</a>
                  </li>
                  <li>
                    <a href="#">Feedback</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item">
              <div className="f-item contact">
                <h4 className="widget-title">Contact Info</h4>
                <div className="address">
                  <ul>
                    <li>
                      <strong>Email:</strong> contact@schooloffinance.org
                    </li>
                    <li>
                      <strong>Contact:</strong> +44 020 8126 1069
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                © Copyright 2021. All Rights Reserved by{" "}
                <Link href="/">
                  <a>School of Finance</a>
                </Link>
              </p>
            </div>
            <div className="col-lg-6 text-right link">
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Bottom */}
    </footer>
  );
};

export default Footer;

import React from "react";

const FunFactor = () => {
  return (
    <div className="fun-factor-area overflow-hidden bg-gradient text-light default-padding">
      <div className="container">
        <div className="fun-fact-items text-center">
          {/* Fixed BG */}
          <div
            className="fixed-bg contain"
            style={{ backgroundImage: "url(assets/img/map.svg)" }}
          />
          {/* Fixed BG */}
          <div className="row">
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer" data-to={35} data-speed={5000}>
                    10
                  </div>
                  <div className="operator">K+</div>
                </div>
                <span className="medium">Learners &amp; counting</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer" data-to={128} data-speed={5000}>
                    6
                  </div>
                  <div className="operator">K+</div>
                </div>
                <span className="medium">Certificates bought</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer" data-to={12} data-speed={5000}>
                    5
                  </div>
                  <div className="operator">K+</div>
                </div>
                <span className="medium">Ratings</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer" data-to={90} data-speed={5000}>
                    99
                  </div>
                  <div className="operator">%</div>
                </div>
                <span className="medium">Successful students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactor;

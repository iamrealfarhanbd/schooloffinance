const Breadcrumb = ({ page }) => {
  return (
    <div
      className="breadcrumb-area bg-gray text-center shadow dark text-light bg-cover"
      style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1>{page}</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fas fa-home" /> Home
                </a>
              </li>
              <li className="active">{page}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

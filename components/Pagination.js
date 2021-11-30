const Pagination = () => {
  return (
    <div className="row">
      <div className="col-md-12 pagi-area text-center">
        <nav aria-label="navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fas fa-angle-double-left" />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fas fa-angle-double-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Pagination;

import "./Pagination.css";

const Pagination = () => {
  return (
    <div className="pagination-ctn">
      <div className="pagination-blc">
        <nav className="justify-content-center" aria-label="Page navigation">
          <ul className="pagination pagination-sm d-flex justify-content-md-center align-self-center">
            <li className="page-item">
              <a className="page-link" href="/">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <h6 className="text-center"> {"< 1 2 3 ... 10 > "}</h6> */}
    </div>
  );
};

export default Pagination;

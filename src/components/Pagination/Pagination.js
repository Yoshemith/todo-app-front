import "./Pagination.css";

const Pagination = () => {
  return (
    <div className="pagination-ctn">
      <div className="row align-items-center">
        <div className="col text-center">
          {"< 1 2 3 ... 10 > "}
          {/* <h6 className="text-center"> {"< 1 2 3 ... 10 > "}</h6> */}
        </div>
      </div>
    </div>
  );
};

export default Pagination;

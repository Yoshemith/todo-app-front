import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="inputName" className="form-label labels">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          aria-describedby="nameHelp"
          placeholder="Search by name..."
        />
        <div
          id="nameHelp"
          className="form-text text-light text-sm-left name-help"
        >
          Ex. "Buy Groceries", "Finish React Course", etcetera.
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <label htmlFor="autoSizingSelect" className="col-form-label labels">
            Priority
          </label>
          <select
            className="form-select col-md"
            id="autoSizingSelect"
            defaultValue="ALL"
          >
            <option value="ALL">All</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>
        <div className="col-sm-4">
          <label htmlFor="selectState" className="col-form-label labels">
            State
          </label>
          <select
            className="form-select col-md"
            id="selectState"
            defaultValue="ALL"
          >
            <option value="ALL">All</option>
            <option value="DONE">Done</option>
            <option value="UNDONE">Undone</option>
          </select>
        </div>
        <div className="col-sm-4 search-btn-container">
          <button type="submit" className="btn btn-primary search-btn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./SearchForm.css";

const SearchForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("ALL");
  const [selectedState, setSelectedState] = useState("ALL");
  const [error, setError] = useState();

  const searchTodoHandler = (e) => {
    e.preventDefault();
    if (enteredName.length === 0) {
      console.log("empty");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name!",
      });
      return;
    }
    if (enteredName.length > 120) {
      console.log("too much text");
      setError({
        title: "Invalid input",
        message:
          "Only values accepted are less than 120 characters long. Please Try again!",
      });
      return;
    }
    console.log(enteredName, selectedPriority, selectedState);
    setEnteredName("");
    setSelectedPriority("ALL");
    setSelectedState("ALL");
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const priorityChangeHandler = (e) => {
    setSelectedPriority(e.target.value);
  };

  const stateChangeHandler = (e) => {
    setSelectedState(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={searchTodoHandler}>
        <div className="mb-2">
          <label htmlFor="name" className="form-label labels">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Search by name..."
            value={enteredName}
            onChange={nameChangeHandler}
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
            <label htmlFor="priority" className="col-form-label labels">
              Priority
            </label>
            <select
              className="form-select col-md"
              id="priority"
              value={selectedPriority}
              onChange={priorityChangeHandler}
            >
              <option value="ALL">All</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="state" className="col-form-label labels">
              State
            </label>
            <select
              className="form-select col-md"
              id="state"
              value={selectedState}
              onChange={stateChangeHandler}
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
    </div>
  );
};

export default SearchForm;

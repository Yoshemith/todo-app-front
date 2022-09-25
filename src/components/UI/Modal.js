import { useState } from "react";
import classes from "./Modal.module.css";
import { createTodo } from "../../services/apiServices";

const Modal = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("HIGH");
  const [isInputValid, setIsInputValid] = useState(true);
  const [messageTip, setMessageTip] = useState(""); //'Ex. "Buy Groceries", "Finish React Course", etcetera.'

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const priorityChangeHandler = (e) => {
    setSelectedPriority(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (enteredName.length === 0) {
      setIsInputValid(false);
      setMessageTip("Please enter a valid name!");
      return;
    }
    if (enteredName.length > 120) {
      setIsInputValid(false);
      setMessageTip(
        "Only values accepted are less than 120 characters long. Please Try again!"
      );
      return;
    }

    let saveNewTodo = createTodo({
      name: enteredName,
      priority: selectedPriority,
    });

    saveNewTodo.then((data) => {
      console.log(data);
      props.quit();
    });
  };

  //TODO: ADD DATE PICKER IN THE FORM

  return (
    <div>
      <div className={classes.backdrop} onClick={props.quit} />
      <div className={`${classes.modal} ${classes.containerCard} `}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          {/* <p>"random message"</p> */}
          <form onSubmit={onSubmitForm}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label labels">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  !isInputValid ? "border-danger" : ""
                }`}
                id="name"
                aria-describedby="nameHelp"
                placeholder="Add the name..."
                value={enteredName}
                onChange={nameChangeHandler}
              />
              <div
                id="nameHelp"
                className={`form-text text-sm-left name-help ${
                  !isInputValid ? "text-danger" : "text-dark"
                }`}
              >
                {isInputValid
                  ? 'Ex. "Buy Groceries", "Finish React Course", etcetera.'
                  : messageTip}
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
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </select>
              </div>
              <div className="col-sm-4 search-btn-container">
                <button type="submit" className="btn btn-primary search-btn">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
        <footer className={classes.actions}>
          <button
            className="btn btn-secondary btn-sm"
            type="button"
            onClick={props.quit}
          >
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;

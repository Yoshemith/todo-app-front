import { useState } from "react";
import classes from "./Modal.module.css";
import { createTodo } from "../../services/apiServices";

const Modal = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("HIGH");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const priorityChangeHandler = (e) => {
    setSelectedPriority(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    let saveNewTodo = createTodo({
      name: enteredName,
      priority: selectedPriority,
    });

    saveNewTodo.then((data) => {
      console.log(data);
      props.quit();
    });
  };

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
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="Add the name..."
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

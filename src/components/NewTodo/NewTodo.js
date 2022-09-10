import { useState } from "react";
import "./NewTodo.css";
import Modal from "../UI/Modal";

const NewTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalHandler = () => {
    console.log("toggle", isOpen);
    setIsOpen(!isOpen);
  };

  const addNewTodoHandler = (e) => {
    e.preventDefault();

    //HERE GOES THE LOGIC TO CREATE A NEW TODO

    setIsOpen(!isOpen);
    console.log("Creando todo aqui!");
  };

  return (
    <div>
      {isOpen && (
        <Modal
          title={"Create a New To-Do"}
          action={addNewTodoHandler}
          quit={toggleModalHandler}
        />
      )}
      <div className="btn-container">
        <button
          type="button"
          className="btn btn-primary todo-btn"
          onClick={toggleModalHandler}
        >
          + New To Do
        </button>
      </div>
    </div>
  );
};

export default NewTodo;

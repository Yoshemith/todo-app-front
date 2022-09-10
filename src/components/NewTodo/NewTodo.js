import { useState } from "react";
import "./NewTodo.css";
import Modal from "../UI/Modal";

const NewTodo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addNewTodoHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
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

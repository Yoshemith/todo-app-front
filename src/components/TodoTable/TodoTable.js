import TodoItem from "./TodoItem";
import "./TodoTable.css";

const TodoTable = () => {
  return (
    <table className="table">
      <thead className="table-dark bg-table-head">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">{"Priority <>"}</th>
          <th scope="col">{"Due Date <>"}</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </tbody>
    </table>
  );
};

export default TodoTable;

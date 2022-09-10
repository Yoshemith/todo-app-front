import Card from "../UI/Card";
import TodoTable from "./TodoTable";
import classes from "./TodoTableContainer.module.css";

const TodoTableContainer = () => {
  return (
    <Card className={classes.tableContainer}>
      <TodoTable />
    </Card>
  );
};

export default TodoTableContainer;

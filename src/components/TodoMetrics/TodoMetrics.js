import "./TodoMetrics.css";

const TodoMetrics = () => {
  return (
    <div className="container todo-metrics">
      <div className="row align-items-center">
        <div className="col text-center">
          <h6>Average time to finish tasks:</h6>
          <h6>22 minutes</h6>
        </div>
        <div className="col text-center">
          <h6>Average time to finish tasks by priority:</h6>
          <h6>Low: 10:25 mins</h6>
          <h6>Medium: 10:25 mins</h6>
          <h6>High: 10:25 mins</h6>
        </div>
      </div>
    </div>
  );
};

export default TodoMetrics;

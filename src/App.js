import Title from "./components/TodoTitle";
import "./App.css";
import SearchControls from "./components/SearchControls/SearchControls";
import NewTodoButton from "./components/NewTodo/NewTodo";
import TodoTableContainer from "./components/TodoTable/TodoTableContainer";
import Pagination from "./components/Pagination/Pagination";
import TodoMetrics from "./components/TodoMetrics/TodoMetrics";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <SearchControls />
        <NewTodoButton />
        <TodoTableContainer />
        <Pagination />
        <TodoMetrics />
      </div>
    </div>
  );
};

export default App;

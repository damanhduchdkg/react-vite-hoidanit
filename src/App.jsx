import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "Hà nội",
    country: "Việt Nam",
  };

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  };

  // {key: value}
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData name={hoidanit} age={age} data={data} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem01 from "./components/TodoItem01";
import TodoItem02 from "./components/TodoItem02";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem01 />
        <TodoItem02 />
      </div>
    </center>
  );
}

export default App;

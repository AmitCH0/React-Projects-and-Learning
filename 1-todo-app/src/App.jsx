import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";

import TodoItems from "./components/todoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "04/10/2023",
    },
    {
      name: "Buy Bread",
      date: "05/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

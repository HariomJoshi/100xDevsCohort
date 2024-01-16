import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
function App() {
  const [todos, setTodos] = useState([]);
  // note that todos is an array
  // now we have to hit the backed, we can use fetch
  // another (better) way of doing this is using axios

  // method 1
  fetch("http://localhost:3000/user/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;

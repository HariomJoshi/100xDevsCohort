import "./App.css";
import { useState } from "react";

// todo app
// state
//{
//  todos:[{title:"first", description:"complete by 10 jan", completed:false,}]
//}
function App() {
  const [todos, setTodos] = useState([
    {
      Title: "Go to gym",
      Description: "Daily exercise",
      completed: "false",
    },
    {
      Title: "study DSA",
      Description: "dynamic programming tabulation",
      completed: "false",
    },
  ]);
  // this is our initial state
  const addTodo = ()=>{
    
  }
  return (
    <div>
      <input placeholder="Title" id="title"></input>
      <br></br>
      <input placeholder="description" id="description"></input>
      <button onClick={addTodo}></button>
      {todos.map((oneEntry) => {
        return (
          <Todo
            Title={oneEntry.Title}
            Description={oneEntry.Description}
            completed={oneEntry.completed}
          ></Todo>
        );
      })}

      {/* <Todo
        Title={todos[0].Title}
        Description={todos[0].Description}
        completed={todos[0].completed}
      ></Todo> */}
    </div>
  );
}

// all the hectic game of DOM manipulation that we did earlier was reduced in this code

function Todo(props) {
  return (
    <div>
      <h1>{props.Title}</h1>
      <h2>{props.Description}</h2>
      <h3>{props.completed}</h3>
    </div>
  );
}

export default App;

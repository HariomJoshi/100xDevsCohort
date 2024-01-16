import React, { useEffect, useState } from "react";

// so the below app fetches data from an API and displays it in the page
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is a title",
      description: "something",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      updateTodo();
    }, 2000);
  }, [todos]);

  function updateTodo() {
    fetch("https://sum-server.100xDevs.com/todos")
      .then(async (res) => {
        const todo = await res.json();
        console.log(todo.todos);
        setTodos(todo.todos);
      })
      .catch((e) => {
        console.log("some error occured while fetching! ");
      });
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            id={todo.id}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo({ title, description, id }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Id: {id}</p>
    </div>
  );
}
export default App;

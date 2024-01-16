import React, { useState } from "react";
function Note2() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to Gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "go to Gym",
      description: "go to gym today",
    },
    {
      id: 3,
      title: "go to Gym",
      description: "go to gym today",
    },
  ]);
  const [id, setId] = useState(4);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: id,
        title: "Todo added",
        description: "Something random",
      },
    ]);
    setId(id + 1);
  }

  return (
    <div>
      <button onClick={addTodo}>Click here to add todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            // the below key is useful for efficient re-rendering of the file

            key={todo.id}
            title={todo.title}
            description={todo.description}
            id={todo.id}
          />
        );
      })}
    </div>
  );
}

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }
// now what we can do is memoise todo

const Todo = React.memo(function Todo({ title, description, id }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>id: {id}</p>
    </div>
  );
});

export default Note2;

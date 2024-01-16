// now you have to take todos as an input
//1. pass as props
// 2. object destructuring
// we will use 2 here

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed ? "Done" : "Mark as done"}</button>
          </div>
        );
      })}
    </div>
  );
}

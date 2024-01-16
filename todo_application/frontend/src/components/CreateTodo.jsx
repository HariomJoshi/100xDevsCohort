export function CreateTodo() {
  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="Title"
      />
      <br />
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="Description"
      />
      <br />
      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/user/todos", {
            method: "POST",
            body: JSON.stringify({
              title: "something random",
              description: "random ass",
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(() => {
            alert("Todo added successfully");
          });
        }}
      >
        Create todo
      </button>
    </div>
  );
}

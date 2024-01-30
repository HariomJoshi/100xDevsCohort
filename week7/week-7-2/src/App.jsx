import { useState } from "react";
import "./App.css";
import { CountContext } from "./context";
import { useContext } from "react";
function App() {
  const [count, setCount] = useState(0);
  // int following code setCount is passed with component drilling
  // and count is passed with context API
  // now in order to pass both count and setCount via context api,
  // 1. you can create a new context
  // 2. you can add another field in the same context
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        {/* wrapping means we can use the context inside the wrapped component and its children component only */}
        {/* <CountRenderer count={count} setCount={setCount} /> */}
        <CountRenderer />
      </CountContext.Provider>
    </div>
  );
}

function CountRenderer() {
  return (
    <div>
      {/* count is drilled down from App to CountRenderer to Count */}
      {/* count renderer has no use of count */}
      <Count />
    </div>
  );
}

function Count() {
  // the value which is passed above as value is returned here
  // here we have to pass the context which is used to pass the count prop
  const { count } = useContext(CountContext);
  // this is directly taking the value without prop drilling
  return (
    <div>
      {count}
      <Buttons></Buttons>
    </div>
  );
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default App;

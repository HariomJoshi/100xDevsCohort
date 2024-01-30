import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function CountRenderer({ count }) {
  return (
    <div>
      {/* count is drilled down from App to CountRenderer to Count */}
      {/* count renderer has no use of count */}
      <Count count={count} />
    </div>
  );
}

function Count({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
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

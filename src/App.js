import React, { useState } from "react";
import "./App.css";

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount((c) => c + step);
  };
  return [count, increment];
}

function Counter() {
  const [count, increment] = useIncrement(0, 5);

  return <button onClick={increment}>Incrémenter {count}</button>;
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

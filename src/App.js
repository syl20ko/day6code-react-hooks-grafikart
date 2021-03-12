import React, { useState } from "react";
import "./App.css";

function useIncrement() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  return [count, increment];
}

function Counter() {
  const [count, increment] = useIncrement();

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

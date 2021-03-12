import React, { useState } from "react";
import "./App.css";

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount((c) => c + step);
  };
  return [count, increment];
}

function CounterBtn() {
  const [count, increment] = useIncrement(0, 5);

  return <button onClick={increment}>Incrémenter {count}</button>;
}

function CounterLink() {
  const [count, increment] = useIncrement(0, 9);

  return <a onClick={increment}>Incrémenter {count}</a>;
}

function App() {
  return (
    <div>
      <CounterBtn />
      <CounterLink />
    </div>
  );
}

export default App;

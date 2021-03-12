import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = function (e) {
    e.preventDefault();
    setCount(count => count + 1);
  };

  const handleClick2 = function (e) {
    e.preventDefault();
    setCount2(count => count + 2);
  };

  return (
    <>
      <button onClick={handleClick}>Incrémenter {count}</button>
      <button onClick={handleClick2}>Incrémenter {count2}</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

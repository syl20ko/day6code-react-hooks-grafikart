import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = function (e) {
    e.preventDefault();
    setCount(10);
  };

  return <button onClick={handleClick}>Nombre : {count}</button>;
}

function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;

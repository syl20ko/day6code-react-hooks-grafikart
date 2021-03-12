import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [state, setState] = useState({
    a: 1,
  });

  const handleClick = function (e) {
    e.preventDefault();
    setState((state) => {
      return { ...state, count: 10 };
    });
  };

  return <div onClick={handleClick}>{JSON.stringify(state)}</div>;
}

function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}

export default App;

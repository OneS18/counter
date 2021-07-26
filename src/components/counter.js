import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCount] = useState(0);

  return (
    <div className="container">
      <button className="btn" onClick={() => setCount(counter - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCount(counter + 1)}>
        +
      </button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default Counter;

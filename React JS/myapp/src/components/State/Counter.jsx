import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function ChangeValue() {
    setCount(++count);
  }

  return (
    <div>
      <h1>Counter value is {count}</h1>
      <button onClick={ChangeValue}>Add a Number</button>
    </div>
  );
}

export default Counter;

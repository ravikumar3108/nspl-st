import React, { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  //   setInterval(() => {
  //     setTimer(timer + 1);
  //     if (timer === 5) {
  //       setTimer(0);
  //     }
  //   }, 2000);

  //   const addNumber = () => {
  //     setTimer(timer + 1);
  //   };

  let dd = new Date();
  let hr = dd.getHours();
  let min = dd.getMinutes();
  let sec = dd.getSeconds();

  let date = dd.toLocaleDateString();

  return (
    <>
      <h1>{timer}</h1>
      {/* <button onClick={addNumber}>Click Timer</button> */}
      <h2>{hr}</h2>
      <h2>{min}</h2>
      <h2>{sec}</h2>
      <h2>{date}</h2>
    </>
  );
}

export default Timer;

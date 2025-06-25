import React, { useState } from "react";

function Signup() {
  // Hooks:- Hooks allow function components to have access to state and other React features. UseState,useEffect,useParamas,useNavigate,useContext

  // UseState:- The useState hook in React is a fundamental Hook that allows functional components to manage and track state.

  let [initialValue, setValue] = useState(1);

    function getValue(){
        setValue(++initialValue)
    }

  return (
    <div>
      <h1> {initialValue}</h1>
      {/* Event Handler  */}
      <button onClick={getValue}>Increment</button>

      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="text" name="" id="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;

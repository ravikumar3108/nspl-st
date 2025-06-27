import React, { useState } from "react";

function Signup() {
  // Hooks:- Hooks allow function components to have access to state and other React features. UseState,useEffect,useParamas,useNavigate,useContext

  // UseState:- The useState hook in React is a fundamental Hook that allows functional components to manage and track state.

  let [initialValue, setValue] = useState(1);

  function getValue() {
    setValue(++initialValue);
  }

  // Data store by difffernt states
  let [userName, setUserName] = useState();
  // console.log(userName)
  function getInput(e) {
    setUserName(e.target.value);
    console.log(e);
  }

  // Multiple data store in one state
  let [data, setData] = useState();
  console.log("data", data);
  function getAllData(e) {
    setData({
      // spread operator 
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    const formData = localStorage.setItem("ved",JSON.stringify(data))
    
  }


  return (
    <div>
      <h1> {userName}</h1>
      {/* Event Handler  */}
      <button onClick={getValue}>Increment</button>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id="usernmae"
          onChange={getAllData}
        />
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="email" onChange={getAllData} />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={getAllData}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;

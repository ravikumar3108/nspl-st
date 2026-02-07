import React from "react";
import GetData from "./GetData";

function Datasend() {
  let name = "Priyanka";

  let rollno = 21;

  let name2 = "neeraj";
  let rollno2 = 23;

  return (
    <>
      {/* Props :- (Properties) 
                Props are used to send data one component to another component. Parent to child.
            */}
      <h1>This is Parent Component</h1>
      {/* Send props */}
      <GetData name={name} rollno={rollno} />
      <GetData name={name2} rollno={rollno2} />
      <GetData name={name} rollno={rollno} />
      <GetData name={name} rollno={rollno} />
      <GetData name={name} rollno={rollno} />
      <GetData name={name} rollno={rollno} />
    </>
  );
}

export default Datasend;

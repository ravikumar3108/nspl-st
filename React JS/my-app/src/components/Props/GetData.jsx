import React from "react";

function GetData(props) {
  console.log(props);
  return (
    <>
      {/* Get Props :- */}
      <h2>Child Component</h2>
      <h3>
        My name is {props.name}. My roll no is {props.rollno}.
      </h3>
    </>
  );
}
export default GetData;

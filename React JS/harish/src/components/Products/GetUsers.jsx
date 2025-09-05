import React, { useEffect, useState } from "react";
import axios from "axios";

function GetUsers() {
  let [data, setData] = useState([]);
  console.log(data);

  async function handleSubmit(e) {
    const sendata = await axios
      .get("http://localhost:8000/getUser")
      .then((res) => {
        setData(res.data.message);
      });
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  async function getId(id) {
    const data = axios
      .post(`http://localhost:8000/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data &&
        data.map((item) => {
          return (
            <>
              <div
                style={{
                  border: "1px solid",
                  width: "20%",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div className="it">
                  <h1>{item.name}</h1>
                  <button onClick={() => getId(item._id)}>Get ID / User</button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default GetUsers;

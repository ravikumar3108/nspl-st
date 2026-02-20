import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState();

  const nav = useNavigate();

  function getData(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let saveUser = JSON.parse(localStorage.getItem("amazon"));
    console.log(saveUser);
    if (
      saveUser &&
      saveUser.email == loginData.email &&
      saveUser.password == loginData.password
    ) {
      // nav("/");
      toast.success("Login Success");
      setTimeout(() => {
        nav("/");
      }, 2000);
    } else {
      alert("invalid");
    }
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 mb-4 rounded"
              name="email"
              onChange={getData}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-4 rounded"
              name="password"
              onChange={getData}
            />

            <button
              className="w-full bg-orange-400 py-2 rounded font-semibold"
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            New user?
            <Link to="/signup" className="text-orange-500 ml-1">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

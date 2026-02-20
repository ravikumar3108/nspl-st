import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [signupData, setSignupData] = useState();
  const nav = useNavigate();

  function getData(e) {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("amazon", JSON.stringify(signupData));
    toast.success("Create Account Successfull");
    setTimeout(() => {
      nav("/login");
    }, 2000);
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 mb-4 rounded"
              name="fullname"
              onChange={getData}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full border p-2 mb-4 rounded"
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
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have account?
            <Link to="/login" className="text-orange-500 ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

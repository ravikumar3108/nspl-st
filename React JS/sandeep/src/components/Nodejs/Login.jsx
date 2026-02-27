import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../Auth/AuthUser";

function Login() {

    //   const {authUser, setAuthUser}= useAuthContext()
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    function getValue(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = await axios
            .post("http://localhost:8000/user/LoginUser", login)
            .then((res) => {
                console.log(res)
                if (res.data.status === false) {
                    toast.error("Wrong details please check it once");
                } else if (res.data.status === true) {
                    toast.success(`Welcome ${res.data.user.name}`);
                    localStorage.setItem("token", res.data.token);
                    //   setAuthUser(res.data.user)
                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                } else {
                    toast.error("Something went wrong!....");
                }
            })
            .catch((err) => {
                console.log("error in fetching data for login", err);
                // toast.error("something went wrong");
            });
    }

    return (
        <>
            <Toaster />
            <div className="h-screen flex justify-center items-center login p-3">
                <div className="w-full p-6 border-red-200 flex flex-col max-w-[590px]">
                    <header className="text-center">
                        <h1 className="logo text-[35px] font-bold">QuickBuy</h1>
                        <h3 className="text-white text-[20px] my-3">Login into quickbuy</h3>
                        <p>
                            <Link to="" className="text-blue-500">
                                Forget Password ?
                            </Link>
                        </p>
                    </header>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="my-5">
                            <input
                                type="text"
                                name="email"
                                onChange={getValue}
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="password"
                                onChange={getValue}
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-3 px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center m-auto"
                        >
                            Login Now
                        </button>

                        <p className="flex justify-center m-auto mt-3">
                            <Link to="/signup" className="text-white">
                                Create an Account?
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

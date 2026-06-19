import { useState } from "react";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Success");
    } catch (err) {
      alert(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 items-center justify-center p-10">
        <div className="text-white max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag size={40} />
            <h1 className="text-4xl font-bold">ShopSphere</h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Discover The Future Of Shopping
          </h2>

          <p className="mt-6 text-lg text-slate-200">
            Browse thousands of products with secure checkout,
            fast delivery and personalized recommendations.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center items-center p-5">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-center">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-500 mt-2">
            Login to continue shopping
          </p>

          

          <div className="flex items-center my-6">
            <div className="h-[1px] bg-gray-200 flex-1"></div>
           
            <div className="h-[1px] bg-gray-200 flex-1"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl p-3 pr-12 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="/forgot-password"
                className="text-indigo-600"
              >
                Forgot Password?
              </a>
            </div>

            <button
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700
              text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            Don't have an account?
            <span className="text-indigo-600 font-semibold cursor-pointer ml-1">
             <Link to={"/signup"}>Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
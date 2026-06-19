import { useState } from "react";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return alert("Passwords do not match");
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                formData
            );

            alert("Account Created Successfully");

            console.log(res.data);

            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            });

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-100">

            {/* Left Side */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 items-center justify-center p-10">
                <div className="text-white max-w-md">

                    <div className="flex items-center gap-3 mb-6">
                        <ShoppingBag size={40} />
                        <h1 className="text-4xl font-bold">
                            ShopSphere
                        </h1>
                    </div>

                    <h2 className="text-5xl font-bold leading-tight">
                        Create Your Shopping Account
                    </h2>

                    <p className="mt-6 text-lg text-slate-200">
                        Join thousands of customers and enjoy
                        exclusive deals, fast checkout, secure
                        payments and order tracking.
                    </p>

                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex justify-center items-center p-5">

                <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

                    <h2 className="text-3xl font-bold text-center">
                        Create Account 🚀
                    </h2>

                    <p className="text-center text-gray-500 mt-2">
                        Start your shopping journey today
                    </p>

                    {/* Google Button */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 mt-10"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={
                                    showPassword ? "text" : "password"
                                }
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
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

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl p-3 pr-12 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className="absolute right-4 top-4"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>

                        <label className="flex items-start gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                required
                                className="mt-1"
                            />
                            I agree to the Terms & Conditions
                            and Privacy Policy.
                        </label>

                        <button
                            disabled={loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-700
              text-white py-3 rounded-xl font-semibold transition"
                        >
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
                        </button>
                    </form>

                    <p className="text-center mt-6 text-gray-500">
                        Already have an account?
                        <span
                            className="text-indigo-600 font-semibold ml-1 cursor-pointer"
                        >
                            <Link to={"/"}>Sign In</Link>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
}
import { useState } from "react";
import {
    Trash2,
    Minus,
    Plus,
    ShoppingBag,
    ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            _id: 1,
            name: "Apple Watch Series 9",
            price: 399,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
        },
        {
            _id: 2,
            name: "Nike Air Max",
            price: 149,
            quantity: 2,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },
    ]);

    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item._id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item._id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) =>
            prev.filter((item) => item._id !== id)
        );
    };

    const subtotal = cartItems.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );

    const shipping = subtotal > 500 ? 0 : 20;
    const tax = subtotal * 0.18;

    const total =
        subtotal + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">

                    <ShoppingBag
                        size={80}
                        className="mx-auto text-gray-300"
                    />

                    <h2 className="text-3xl font-bold mt-6">
                        Your Cart Is Empty
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Looks like you haven't added anything yet.
                    </p>

                    <Link
                        to="/"
                        className="
              inline-block
              mt-6
              bg-indigo-600
              text-white
              px-8
              py-3
              rounded-xl
            "
                    >
                        Continue Shopping
                    </Link>

                </div>
            </div>
        );
    }

    return (
        <>
           <Layout>
             <div className="bg-slate-50 min-h-screen py-10">

                <div className="max-w-7xl mx-auto px-4">

                    {/* Header */}
                    <div className="mb-8">
                        <Link
                            to="/"
                            className="
              flex
              items-center
              gap-2
              text-indigo-600
              font-medium
            "
                        >
                            <ArrowLeft size={18} />
                            Continue Shopping
                        </Link>

                        <h1 className="text-4xl font-bold mt-4">
                            Shopping Cart
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-5">

                            {cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="
                  bg-white
                  rounded-3xl
                  p-4
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
                                >
                                    <div className="flex flex-col sm:flex-row gap-5">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="
                      w-full
                      sm:w-40
                      h-40
                      object-cover
                      rounded-2xl
                    "
                                        />

                                        <div className="flex-1">

                                            <div className="flex justify-between">

                                                <div>
                                                    <h3 className="text-xl font-bold">
                                                        {item.name}
                                                    </h3>

                                                    <p className="text-indigo-600 font-semibold mt-2">
                                                        ${item.price}
                                                    </p>
                                                </div>

                                                <button
                                                    onClick={() =>
                                                        removeItem(item._id)
                                                    }
                                                    className="
                          text-red-500
                          hover:text-red-700
                        "
                                                >
                                                    <Trash2 />
                                                </button>

                                            </div>

                                            {/* Quantity */}
                                            <div className="mt-6">

                                                <div
                                                    className="
                          flex
                          items-center
                          gap-4
                          w-fit
                          border
                          rounded-xl
                          px-3
                          py-2
                        "
                                                >
                                                    <button
                                                        onClick={() =>
                                                            decreaseQty(item._id)
                                                        }
                                                    >
                                                        <Minus size={18} />
                                                    </button>

                                                    <span className="font-semibold">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQty(item._id)
                                                        }
                                                    >
                                                        <Plus size={18} />
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Summary */}
                        <div>

                            <div
                                className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                sticky
                top-24
              "
                            >
                                <h2 className="text-2xl font-bold mb-6">
                                    Order Summary
                                </h2>

                                {/* Coupon */}
                                <div className="mb-6">

                                    <label className="font-medium">
                                        Coupon Code
                                    </label>

                                    <div className="flex mt-3">
                                        <input
                                            type="text"
                                            placeholder="SAVE20"
                                            className="
                      flex-1
                      border
                      rounded-l-xl
                      px-4
                      py-3
                      outline-none
                    "
                                        />

                                        <button
                                            className="
                      bg-indigo-600
                      text-white
                      px-5
                      rounded-r-xl
                    "
                                        >
                                            Apply
                                        </button>

                                    </div>

                                </div>

                                <div className="space-y-4">

                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>
                                            ${shipping.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>GST (18%)</span>
                                        <span>
                                            ${tax.toFixed(2)}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span>
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>

                                </div>

                                <button
                                    className="
                  w-full
                  mt-8
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                "
                                >
                                    Proceed To Checkout
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
           </Layout>
        </>
    );
}
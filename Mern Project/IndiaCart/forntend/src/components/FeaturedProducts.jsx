import axios from "axios";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
    const [products, setProduct] = useState([]);

    const fetchProduct = async () => {
        const res = await axios.get("http://localhost:5000/api/products");
        setProduct(res.data.data);
        console.log(res);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const addTocart = async (id) => {
        console.log("funnnncc")
        const res = await axios.post(`http://localhost:5000/carts/addtocart/${id}`);
        console.log(res);
    };

    return (
        <section className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Featured Products</h2>

                    <p className="text-gray-500 mt-3">Handpicked products just for you</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (

                        <div
                            key={product.id}
                            className="
              group
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-md
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
            "
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="
                    h-72
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                                />

                                {/* Discount Badge */}
                                <span
                                    className="
                  absolute
                  top-4
                  left-4
                  bg-red-500
                  text-white
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  font-semibold
                "
                                >
                                    {product.discount}
                                </span>

                                {/* Hover Icons */}
                                <div
                                    className="
                  absolute
                  right-4
                  top-4
                  flex
                  flex-col
                  gap-3
                  opacity-0
                  translate-x-5
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-500
                "
                                >
                                    <button className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition">
                                        <Heart size={18} />
                                    </button>

                                    <button className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition">
                                        <Eye size={18} />
                                    </button>
                                </div>

                                {/* Quick Add */}
                                <div
                                    className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
                                >
                                    <button
                                        className="
                    w-full
                    bg-black/90
                    text-white
                    py-3
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                                        onClick={() => {
                                            addTocart(product._id);
                                        }}
                                    >
                                        <ShoppingCart size={18} />
                                        Quick Add
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <Link to={`/product/${product._id}`}><h3 className="font-semibold text-lg">{product.name}</h3> </Link>

                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-indigo-600 font-bold text-xl">
                                        {product.price}
                                    </span>

                                    <span className="text-gray-400 line-through">
                                        {product.oldPrice}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex mt-3 text-yellow-400">⭐⭐⭐⭐⭐</div>

                                {/* <button
                                        className="
                  w-full
                  mt-5
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  py-3
                  rounded-xl
                  transition
                  font-medium
                "
                                    >
                                        Add To Cart
                                    </button> */}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

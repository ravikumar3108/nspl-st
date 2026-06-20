import { useState } from "react";
import {
    Heart,
    Star,
    ShoppingCart,
    Truck,
    ShieldCheck,
    RotateCcw,
} from "lucide-react";
import Layout from "../layout/Layout";

export default function ProductDetails() {
    const product = {
        name: "Apple Watch Series 9",
        price: 399,
        oldPrice: 499,
        rating: 4.8,
        reviews: 1245,
        stock: true,
        description:
            "Advanced smartwatch with fitness tracking, ECG, blood oxygen monitoring, and premium design.",
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
            "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
        ],
    };

    const [selectedImage, setSelectedImage] = useState(
        product.images[0]
    );

    const [quantity, setQuantity] = useState(1);

    return (
        <Layout>
            <div className="bg-slate-50 min-h-screen">

                {/* Container */}
                <div className="max-w-7xl mx-auto px-4 py-10">

                    {/* Product Section */}
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Images */}
                        <div>

                            {/* Main Image */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                                <img
                                    src={selectedImage}
                                    alt={product.name}
                                    className="
                  w-full
                  h-[500px]
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-500
                "
                                />
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 gap-4 mt-4">

                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setSelectedImage(img)
                                        }
                                        className={`
                    rounded-2xl
                    overflow-hidden
                    border-2
                    ${selectedImage === img
                                                ? "border-indigo-600"
                                                : "border-transparent"
                                            }
                  `}
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="h-24 w-full object-cover"
                                        />
                                    </button>
                                ))}

                            </div>

                        </div>

                        {/* Product Info */}
                        <div>

                            <span className="
              bg-green-100
              text-green-700
              px-4
              py-2
              rounded-full
              text-sm
            ">
                                In Stock
                            </span>

                            <h1 className="
              text-4xl
              font-bold
              mt-5
            ">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mt-4">

                                <div className="flex text-yellow-400">
                                    <Star className="fill-yellow-400" />
                                    <Star className="fill-yellow-400" />
                                    <Star className="fill-yellow-400" />
                                    <Star className="fill-yellow-400" />
                                    <Star className="fill-yellow-400" />
                                </div>

                                <span>
                                    {product.rating}
                                </span>

                                <span className="text-gray-500">
                                    ({product.reviews} Reviews)
                                </span>

                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4 mt-6">

                                <span className="
                text-4xl
                font-bold
                text-indigo-600
              ">
                                    ${product.price}
                                </span>

                                <span className="
                text-xl
                line-through
                text-gray-400
              ">
                                    ${product.oldPrice}
                                </span>

                                <span className="
                bg-red-100
                text-red-600
                px-3
                py-1
                rounded-full
              ">
                                    20% OFF
                                </span>

                            </div>

                            {/* Description */}
                            <p className="
              mt-6
              text-gray-600
              leading-relaxed
            ">
                                {product.description}
                            </p>

                            {/* Quantity */}
                            <div className="mt-8">

                                <h3 className="font-semibold mb-3">
                                    Quantity
                                </h3>

                                <div className="
                flex
                items-center
                gap-4
              ">
                                    <button
                                        onClick={() =>
                                            quantity > 1 &&
                                            setQuantity(quantity - 1)
                                        }
                                        className="
                    w-10
                    h-10
                    bg-white
                    rounded-lg
                    shadow
                  "
                                    >
                                        -
                                    </button>

                                    <span className="text-xl">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                        className="
                    w-10
                    h-10
                    bg-white
                    rounded-lg
                    shadow
                  "
                                    >
                                        +
                                    </button>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
            ">

                                <button
                                    className="
                  flex-1
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  py-4
                  rounded-2xl
                  flex
                  justify-center
                  items-center
                  gap-2
                  font-semibold
                "
                                >
                                    <ShoppingCart />
                                    Add To Cart
                                </button>

                                <button
                                    className="
                  flex-1
                  bg-black
                  hover:bg-gray-900
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                "
                                >
                                    Buy Now
                                </button>

                                <button
                                    className="
                  w-full
                  sm:w-auto
                  px-5
                  bg-white
                  rounded-2xl
                  shadow
                "
                                >
                                    <Heart />
                                </button>

                            </div>

                            {/* Features */}
                            <div className="
              grid
              sm:grid-cols-3
              gap-5
              mt-12
            ">

                                <div className="
                bg-white
                p-5
                rounded-2xl
                text-center
                shadow
              ">
                                    <Truck className="mx-auto mb-2" />
                                    Free Shipping
                                </div>

                                <div className="
                bg-white
                p-5
                rounded-2xl
                text-center
                shadow
              ">
                                    <ShieldCheck className="mx-auto mb-2" />
                                    Secure Payment
                                </div>

                                <div className="
                bg-white
                p-5
                rounded-2xl
                text-center
                shadow
              ">
                                    <RotateCcw className="mx-auto mb-2" />
                                    Easy Return
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Description Tabs */}
                    <div className="
          mt-20
          bg-white
          rounded-3xl
          p-8
          shadow
        ">
                        <h2 className="
            text-2xl
            font-bold
            mb-5
          ">
                            Product Details
                        </h2>

                        <p className="text-gray-600">
                            The Apple Watch Series 9 features a
                            brighter display, advanced health
                            monitoring, workout tracking, GPS,
                            and seamless connectivity with your
                            iPhone.
                        </p>
                    </div>

                    {/* Related Products */}
                    <section className="mt-20">

                        <h2 className="
            text-3xl
            font-bold
            mb-8
          ">
                            Related Products
                        </h2>

                        <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow
                  hover:shadow-xl
                  transition
                "
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
                                        alt=""
                                        className="
                    h-60
                    w-full
                    object-cover
                  "
                                    />

                                    <div className="p-4">
                                        <h3 className="font-semibold">
                                            Smart Watch
                                        </h3>

                                        <p className="
                    text-indigo-600
                    font-bold
                    mt-2
                  ">
                                            $299
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </section>

                </div>
            </div>
        </Layout>
    );
}
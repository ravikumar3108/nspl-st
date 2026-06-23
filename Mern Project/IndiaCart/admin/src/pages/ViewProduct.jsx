import React from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  Package,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();

  const product = {
    _id: id,
    name: "Apple Watch Series 9",
    price: 399,
    oldPrice: 499,
    rating: 4.8,
    reviews: 1245,
    stock: true,
    description:
      "Advanced smartwatch with fitness tracking and premium design.",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
    ],
  };

  return (
    <div className="space-y-6">

      <Link
        to="/admin/products"
        className="
          inline-flex
          items-center
          gap-2
          text-purple-600
          font-medium
        "
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div
        className="
          bg-white
          rounded-3xl
          shadow-lg
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2 gap-8 p-6">

          {/* Images */}
          <div>

            <img
              src={product.images[0]}
              alt=""
              className="
                w-full
                h-[450px]
                object-cover
                rounded-2xl
              "
            />

            <div className="grid grid-cols-3 gap-3 mt-4">

              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="
                    h-28
                    w-full
                    object-cover
                    rounded-xl
                  "
                />
              ))}

            </div>

          </div>

          {/* Info */}

          <div>

            <div className="flex justify-between">

              <h1 className="text-4xl font-bold">
                {product.name}
              </h1>

              <span
                className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${
                  product.stock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
              >
                {product.stock
                  ? "In Stock"
                  : "Out Of Stock"}
              </span>

            </div>

            <div className="flex items-center gap-2 mt-4">

              <Star
                size={18}
                className="
                  fill-yellow-400
                  text-yellow-400
                "
              />

              <span>{product.rating}</span>

              <span className="text-gray-500">
                ({product.reviews} Reviews)
              </span>

            </div>

            <div className="mt-6 flex gap-3 items-center">

              <span className="text-4xl font-bold text-purple-600">
                ${product.price}
              </span>

              <span className="line-through text-gray-400">
                ${product.oldPrice}
              </span>

            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg">
                Description
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {product.description}
              </p>
            </div>

            <div
              className="
                mt-8
                bg-slate-50
                rounded-2xl
                p-5
              "
            >
              <div className="flex gap-3 items-center">
                <Package />
                Product ID : {product._id}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ViewProduct;
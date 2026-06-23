import React, { useState } from "react";
import { Search, Plus, Eye, Pencil, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      _id: 1,
      name: "Apple Watch Series 9",
      price: 399,
      rating: 4.8,
      stock: true,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    },
    {
      _id: 2,
      name: "Nike Air Max",
      price: 149,
      rating: 4.5,
      stock: true,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      _id: 3,
      name: "Wireless Headphones",
      price: 99,
      rating: 4.7,
      stock: false,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>

          <p className="text-gray-500 mt-1">Manage your products</p>
        </div>

        <Link
          to="/admin/products/add"
          className="
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            px-5
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            shadow-lg
            hover:scale-105
            transition
          "
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <div className="relative">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              border
              rounded-xl
              pl-11
              pr-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left p-5">Product</th>

              <th className="text-left">Price</th>

              <th className="text-left">Rating</th>

              <th className="text-left">Stock</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product._id}
                className="
                  border-b
                  hover:bg-slate-50
                  transition
                "
              >
                <td className="p-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt=""
                      className="
                        w-16
                        h-16
                        object-cover
                        rounded-xl
                      "
                    />

                    <h3 className="font-semibold">{product.name}</h3>
                  </div>
                </td>

                <td className="font-semibold">${product.price}</td>

                <td>
                  <div className="flex items-center gap-1">
                    <Star
                      size={16}
                      className="
                        fill-yellow-400
                        text-yellow-400
                      "
                    />
                    {product.rating}
                  </div>
                </td>

                <td>
                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      ${
                        product.stock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {product.stock ? "In Stock" : "Out Of Stock"}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/products/view/${product._id}`}
                      className="
      p-2
      rounded-lg
      bg-blue-100
      text-blue-600
    "
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/products/edit/${product._id}`}
                      className="
      p-2
      rounded-lg
      bg-yellow-100
      text-yellow-600
    "
                    >
                      <Pencil size={18} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile + Tablet Cards */}

      <div className="lg:hidden space-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="
              bg-white
              rounded-3xl
              p-4
              shadow
            "
          >
            <div className="flex gap-4">
              <img
                src={product.image}
                alt=""
                className="
                  w-24
                  h-24
                  object-cover
                  rounded-xl
                "
              />

              <div className="flex-1">
                <h3 className="font-bold">{product.name}</h3>

                <p className="text-purple-600 font-semibold mt-2">
                  ${product.price}
                </p>

                <div className="flex items-center gap-1 mt-2">
                  <Star
                    size={15}
                    className="
                      fill-yellow-400
                      text-yellow-400
                    "
                  />
                  {product.rating}
                </div>

                <span
                  className={`
                    inline-block
                    mt-2
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    ${
                      product.stock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {product.stock ? "In Stock" : "Out Of Stock"}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                className="
                  flex-1
                  bg-blue-100
                  text-blue-600
                  py-2
                  rounded-xl
                "
              >
                View
              </button>

              <button
                className="
                  flex-1
                  bg-yellow-100
                  text-yellow-600
                  py-2
                  rounded-xl
                "
              >
                Edit
              </button>

              <button
                className="
                  flex-1
                  bg-red-100
                  text-red-600
                  py-2
                  rounded-xl
                "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

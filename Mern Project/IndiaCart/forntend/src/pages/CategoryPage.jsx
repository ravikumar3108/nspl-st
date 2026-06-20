import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Filter,
  Heart,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import Layout from "../layout/Layout";

export default function CategoryPage() {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    // Backend API Call
    // axios.get(`/api/products/category/${slug}`)

    setProducts([
      {
        _id: 1,
        name: "Nike Air Max",
        price: 149,
        oldPrice: 199,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        rating: 4.8,
      },
      {
        _id: 2,
        name: "Adidas Sneakers",
        price: 129,
        oldPrice: 169,
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        rating: 4.7,
      },
      {
        _id: 3,
        name: "Puma Runner",
        price: 99,
        oldPrice: 129,
        image:
          "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
        rating: 4.5,
      },
      {
        _id: 4,
        name: "Sports Shoes",
        price: 119,
        oldPrice: 149,
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        rating: 4.6,
      },
    ]);
  }, [slug]);

  return (
   <Layout>
     <div className="bg-slate-50 min-h-screen">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <h1 className="text-white text-4xl md:text-6xl font-bold capitalize">
            {slug}
          </h1>

          <p className="text-gray-200 mt-4">
            Discover the best {slug} collection
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-gray-500">
          Home / Category /{" "}
          <span className="capitalize text-black">
            {slug}
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

          <button
            onClick={() => setShowFilter(true)}
            className="md:hidden flex items-center justify-center gap-2 border rounded-xl py-3"
          >
            <Filter size={18} />
            Filters
          </button>

          <select className="border rounded-xl px-4 py-3 bg-white">
            <option>Newest</option>
            <option>Price Low To High</option>
            <option>Price High To Low</option>
            <option>Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">

          {/* Desktop Filter */}
         

          {/* Products */}
          <div className="flex-1">

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
            >
              {products.map((product) => (
                <div
                  key={product._id}
                  className="
                    group
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >
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

                    <button
                      className="
                        absolute
                        top-4
                        right-4
                        bg-white
                        p-2
                        rounded-full
                        shadow
                      "
                    >
                      <Heart size={18} />
                    </button>
                  </div>

                  <div className="p-5">

                    <h3 className="font-semibold text-lg">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {product.rating}
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-indigo-600 font-bold text-xl">
                        ${product.price}
                      </span>

                      <span className="line-through text-gray-400">
                        ${product.oldPrice}
                      </span>
                    </div>

                    {/* <button
                      className="
                        mt-5
                        w-full
                        bg-indigo-600
                        hover:bg-indigo-700
                        text-white
                        py-3
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button> */}

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">

          <div className="absolute left-0 top-0 h-full w-80 bg-white p-6">

            <div className="flex justify-between mb-6">
              <h2 className="font-bold text-xl">
                Filters
              </h2>

              <button
                onClick={() => setShowFilter(false)}
              >
                <X />
              </button>
            </div>

            <h4 className="font-semibold mb-3">
              Price Range
            </h4>

            <input
              type="range"
              min="0"
              max="500"
              className="w-full"
            />

            <div className="mt-6">
              <h4 className="font-semibold mb-3">
                Rating
              </h4>

              <label className="block mb-2">
                <input type="checkbox" /> 4★ & Above
              </label>

              <label className="block">
                <input type="checkbox" /> 3★ & Above
              </label>
            </div>

          </div>
        </div>
      )}
    </div>
   </Layout>
  );
}
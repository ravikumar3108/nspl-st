export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Shop Smarter
              <span className="block text-yellow-300">
                Live Better
              </span>
            </h1>

            <p className="mt-6 text-lg">
              Discover thousands of products with
              fast delivery and secure payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl">
                Shop Now
              </button>

              <button className="border border-white px-8 py-4 rounded-xl">
                Explore
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt=""
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>
      </div>
    </section>
  );
}
export default function Newsletter() {
  return (
    <section className="bg-indigo-600 py-16 text-white">

      <div className="max-w-4xl mx-auto text-center px-4">

        <h2 className="text-4xl font-bold">
          Subscribe For Offers
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-4 rounded-xl text-black"
          />

          <button className="bg-black px-8 py-4 rounded-xl">
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
}
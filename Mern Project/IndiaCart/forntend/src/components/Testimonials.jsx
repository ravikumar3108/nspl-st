export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-16">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-10">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p>
                Amazing shopping experience and
                fast delivery.
              </p>

              <h4 className="font-bold mt-4">
                Ravi Kumar
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
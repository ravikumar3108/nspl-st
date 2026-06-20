import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-3">
            Explore our top categories
          </p>
        </div>

        <div className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
        ">

          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              <img
                src={category.image}
                alt={category.name}
                className="
                  h-48
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/30
                  group-hover:bg-black/50
                  transition
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-0
                  right-0
                  text-center
                "
              >
                <h3
                  className="
                  text-white
                  text-lg
                  font-bold
                  tracking-wide
                "
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
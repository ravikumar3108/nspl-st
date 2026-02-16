export default function RecipeDetail() {
  const product = {
    id: 2,
    name: "Vegetarian Stir-Fry",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    caloriesPerServing: 250,
    cookTimeMinutes: 20,
    prepTimeMinutes: 15,
    difficulty: "Medium",
    cuisine: "Asian",
    rating: 4.7,
    reviewCount: 26,
    servings: 3,
    ingredients: [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving",
    ],
    instructions: [
      "Heat sesame oil in wok.",
      "Add ginger & garlic.",
      "Add tofu and fry till golden.",
      "Add vegetables.",
      "Pour soy sauce.",
      "Serve with rice.",
    ],
    tags: ["Vegetarian", "Stir-fry", "Asian"],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-8">

        <img
          src={product.image}
          className="rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating} ({product.reviewCount} reviews)
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">

            <p>🍳 Prep: {product.prepTimeMinutes} min</p>
            <p>🔥 Cook: {product.cookTimeMinutes} min</p>
            <p>🥗 Calories: {product.caloriesPerServing}</p>
            <p>⚡ Difficulty: {product.difficulty}</p>

          </div>

          <div className="mt-4">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs mr-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* INGREDIENTS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Ingredients</h2>

        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {product.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* INSTRUCTIONS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Instructions</h2>

        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          {product.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

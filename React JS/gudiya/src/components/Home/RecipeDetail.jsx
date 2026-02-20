import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function RecipeDetail() {
  const [product, setProduct] = useState(null);
  // console.log(product.tags[1]);
  // Get id into the recipe details:-
  // useParams
  let { id } = useParams();
  console.log(id);

  // data fetch
  const ApiData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsondata = await data.json();
    const singleData = jsondata.recipes.find((item) => item.id == id);
    setProduct(singleData);
  };

  useEffect(() => {
    ApiData();
  }, [id]);

  if (!product)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>Loading...</h1>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product?.image} className="rounded-xl shadow-lg" />

        <div>
          <h1 className="text-3xl font-bold">{product?.name}</h1>

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
            {product?.tags?.map((tag, i) => (
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
          {product?.ingredients?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* INSTRUCTIONS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Instructions</h2>

        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          {product?.instructions?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

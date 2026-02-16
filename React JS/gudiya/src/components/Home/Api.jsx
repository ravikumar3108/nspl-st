import React, { useEffect, useState } from "react";

function Api() {
  const [apiData, setApiData] = useState([]);
  const [filterItem, setFilerItems] = useState([]);
  console.log(filterItem);

  //   Asynchronus function
  const ApiData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsondata = await data.json();
    setApiData(jsondata.recipes);
    setFilerItems(jsondata.recipes);
  };

  //   Side effect of our component

  useEffect(() => {
    ApiData();
  }, []);

  function filterRecipe(recipeName) {
    // console.log(recipeName);
    const filterData = apiData.filter((item) => item.cuisine == recipeName);
    setFilerItems(filterData);
  }

  return (
    <>
      <section className="my-8 p-10">
        <h1 className="text-center text-4xl mb-10">Products</h1>
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2 bg-black text-white rounded">All</button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => filterRecipe("Italian")}
          >
            Italian
          </button>

          <button
            className="px-4 py-2 bg-pink-600 text-white rounded"
            onClick={() => filterRecipe("Asian")}
          >
            Asian
          </button>
          <button
            className="px-4 py-2 bg-pink-600 text-white rounded"
            onClick={() => filterRecipe("Indian")}
          >
            Indian
          </button>
          <button
            className="px-4 py-2 bg-pink-600 text-white rounded"
            onClick={() => filterRecipe("Mexican")}
          >
            Mexican
          </button>
          <button
            className="px-4 py-2 bg-pink-600 text-white rounded"
            onClick={() => filterRecipe("Mediterranean")}
          >
            Mediterranean
          </button>
          <button
            className="px-4 py-2 bg-pink-600 text-white rounded"
            onClick={() => filterRecipe("Pakistani")}
          >
            Pakistani
          </button>
        </div>
        <div className="flex flex-wrap justify-between">
          {filterItem.map((item) => {
            return (
              <>
                <div className="w-[23%] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mb-3">
                  <img src={item.image} className="w-full h-56 object-cover" />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <div className="flex justify-between">
                      <p className="text-gray-500 text-sm mt-1">
                        Dish : {item.cuisine}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Dish : {item.rating}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold text-green-600">
                        ${item.caloriesPerServing}
                      </span>

                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Api;

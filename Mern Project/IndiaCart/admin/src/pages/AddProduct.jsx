import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    oldPrice: "",
    rating: "",
    reviews: "",
    stock: true,
    description: "",
    images: ["", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleImageChange = (
    index,
    value
  ) => {
    const updatedImages = [
      ...formData.images,
    ];

    updatedImages[index] = value;

    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      await axios.post(
        "http://localhost:5000/api/products",
        formData
      );

      alert("Product Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">

        <h1 className="text-3xl font-bold mb-8">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Product Name */}
          <div>
            <label className="block mb-2 font-medium">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Apple Watch Series 9"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Prices */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Old Price
              </label>

              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

          </div>

          {/* Rating & Reviews */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Rating
              </label>

              <input
                type="number"
                step="0.1"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Reviews
              </label>

              <input
                type="number"
                name="reviews"
                value={formData.reviews}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

          </div>

          {/* Stock */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="stock"
              checked={formData.stock}
              onChange={handleChange}
            />

            <label className="font-medium">
              Product In Stock
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description..."
              className="w-full border rounded-xl px-4 py-3 resize-none"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block mb-4 font-medium">
              Product Images
            </label>

            <div className="grid md:grid-cols-2 gap-4">

              {formData.images.map(
                (image, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Image URL ${
                      index + 1
                    }`}
                    value={image}
                    onChange={(e) =>
                      handleImageChange(
                        index,
                        e.target.value
                      )
                    }
                    className="border rounded-xl px-4 py-3"
                  />
                )
              )}

            </div>
          </div>

          {/* Preview */}
          <div>
            <h2 className="font-semibold mb-4">
              Image Preview
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {formData.images.map(
                (img, index) =>
                  img && (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="h-32 w-full object-cover rounded-xl"
                    />
                  )
              )}

            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Add Product
          </button>

        </form>

      </div>
    </div>
  );
}
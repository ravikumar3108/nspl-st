import { useState } from "react";
import axios from "axios";
import { Upload, ImagePlus } from "lucide-react";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    oldPrice: "",
    rating: "",
    reviews: "",
    stock: true,
    description: "",
    images: [],
  });

  console.log(formData);

  const [previewImages, setPreviewImages] = useState([]);

  // Handle Inputs
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,
      images: files,
    }));

    const previews = files.map((file) => URL.createObjectURL(file));

    setPreviewImages(previews);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const productData = new FormData();

      productData.append("name", formData.name);
      productData.append("price", formData.price);
      productData.append("oldPrice", formData.oldPrice);
      productData.append("rating", formData.rating);
      productData.append("reviews", formData.reviews);
      productData.append("stock", formData.stock);
      productData.append("description", formData.description);

      formData.images.forEach((file) => {
        productData.append("images", file);
      });

      await axios.post(
        "http://localhost:5000/api/products",
        productData,
        // {
        //   headers: {
        //     "Content-Type":
        //       "multipart/form-data",
        //   },
        // }
      );
      alert("Product Added Successfully");

      setFormData({
        name: "",
        price: "",
        oldPrice: "",
        rating: "",
        reviews: "",
        stock: true,
        description: "",
        images: [],
      });

      setPreviewImages([]);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add Product</h1>

          <p className="text-gray-500 mt-2">Create and upload a new product</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}

          <div>
            <label className="block font-medium mb-2">Product Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Apple Watch Series 9"
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:ring-2
                focus:ring-indigo-500
                outline-none
              "
              required
            />
          </div>

          {/* Prices */}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Price</label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Old Price</label>

              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
              />
            </div>
          </div>

          {/* Rating & Reviews */}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Rating</label>

              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Reviews</label>

              <input
                type="number"
                name="reviews"
                value={formData.reviews}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
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
              className="h-5 w-5"
            />

            <label className="font-medium">Product In Stock</label>
          </div>

          {/* Description */}

          <div>
            <label className="block font-medium mb-2">Description</label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write product description..."
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                resize-none
              "
              required
            />
          </div>

          {/* Upload Images */}

          <div>
            <label className="block font-medium mb-3">Product Images</label>

            <label
              className="
                border-2
                border-dashed
                rounded-2xl
                p-10
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:border-indigo-500
                transition
              "
            >
              <ImagePlus size={40} className="text-indigo-600" />

              <p className="mt-3 font-medium">Click to Upload Images</p>

              <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG</p>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Preview Images */}

          {previewImages.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Preview Images</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {previewImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="
                        h-36
                        w-full
                        object-cover
                        rounded-2xl
                        shadow
                      "
                  />
                ))}
              </div>
            </div>
          )}

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              text-white
              font-semibold
              hover:scale-[1.01]
              transition
              flex
              justify-center
              items-center
              gap-2
            "
          >
            <Upload size={18} />

            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

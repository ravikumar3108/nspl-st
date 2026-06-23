import React, {
    useState,
    useEffect,
} from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

function EditProduct() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] =
        useState({
            name: "",
            price: "",
            oldPrice: "",
            rating: "",
            reviews: "",
            stock: true,
            description: "",
            images: ["", "", "", ""],
        });

    useEffect(() => {
        // API Call

        const product = {
            name: "Apple Watch Series 9",
            price: 399,
            oldPrice: 499,
            rating: 4.8,
            reviews: 1245,
            stock: true,
            description:
                "Advanced smartwatch...",
            images: [
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
                "",
                "",
                "",
            ],
        };

        setFormData(product);
    }, [id]);

    const handleChange = (e) => {
        const { name, value, checked, type } =
            e.target;

        setFormData({
            ...formData,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        });
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

        console.log(formData);

        // await axios.put(`/api/products/${id}`, formData)

        navigate("/admin/products");
    };

    return (
        <div
            className="
      bg-white
      rounded-3xl
      shadow-lg
      p-6
    "
        >
            <h1 className="text-3xl font-bold mb-8">
                Edit Product
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    className="
            w-full
            border
            rounded-xl
            px-4
            py-3
          "
                />

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="
              border
              rounded-xl
              px-4
              py-3
            "
                    />

                    <input
                        type="number"
                        name="oldPrice"
                        value={formData.oldPrice}
                        onChange={handleChange}
                        placeholder="Old Price"
                        className="
              border
              rounded-xl
              px-4
              py-3
            "
                    />

                </div>

                <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="
            w-full
            border
            rounded-xl
            px-4
            py-3
          "
                />

                <div className="grid md:grid-cols-2 gap-4">

                    {formData.images.map(
                        (img, index) => (
                            <input
                                key={index}
                                value={img}
                                onChange={(e) =>
                                    handleImageChange(
                                        index,
                                        e.target.value
                                    )
                                }
                                placeholder={`Image ${index + 1
                                    }`}
                                className="
                  border
                  rounded-xl
                  px-4
                  py-3
                "
                            />
                        )
                    )}

                </div>

                <button
                    type="submit"
                    className="
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            px-8
            py-3
            rounded-xl
          "
                >
                    Update Product
                </button>

            </form>
        </div>
    );
}

export default EditProduct;
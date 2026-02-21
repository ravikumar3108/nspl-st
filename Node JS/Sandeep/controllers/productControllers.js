const Product = require("../models/ProductModel");
const Cart = require("../models/CartModel");
const fs = require("fs");

const CreateProduct = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  try {
    const { title, description, Price } = req.body;

    const createProduct = new Product({
      title: title,
      description: description,
      price: Price,
      image: {
        data: fs.readFileSync("images/" + req.file.filename),
        contentType: "images/",
      },
    });

    const saveProduct = await createProduct.save();

    if (saveProduct) {
      res.json({
        message: "Succesfull Create",
        // user: saveUser,
        status: true,
      });
    } else {
      res.json({
        message: "Something Wrong",
        // user: saveUser,
        status: false,
      });
    }
  } catch (error) {
    res.json({ error: `Error in Product ${error}` });
  }
};
const AllProduct = async (req, res) => {
  const getProduct = await Product.find({});
  res.json({
    data: getProduct,
  });
};

const AddToCart = async (req, res) => {
  const id = req.params.id;

  const saveCartData = new Cart({
    item: id,
  });

  const savedata = await saveCartData.save();
  res.json({
    data: savedata,
  });
};

const GetAllCartData = async (req, res) => {
  const getData = await Cart.find({}).populate();
  res.json({
    data: getData,
  });
};
const deleteCartItem = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const getData = await Cart.findOneAndDelete({ _id: id }); /// Cart.deleteOne()
  res.json({
    success: true,
  });
};
const AddQuantity = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await Cart.findByIdAndUpdate(id);
  data.quantity = parseInt(data.quantity + 1);
  await data.save();
  res.status(200).json(data);
};

module.exports = {
  CreateProduct,
  AllProduct,
  AddToCart,
  GetAllCartData,
  deleteCartItem,
  AddQuantity,
};

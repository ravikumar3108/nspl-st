const Product = require("../models/ProductModel");
const Cart = require("../models/ProductModel");

const CreateProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description, Price } = req.body;

    const createProduct = new Product({
      title: title,
      description: description,
      price: Price,
    });

    const saveProduct = await createProduct.save();

    if (saveUser) {
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
    res.json({ error: `Error in Signup ${error}` });
  }
};
const AllProduct = async (req, res) => {
  const getProduct = await Product.find({});
  res.json({
    data: getProduct,
  });
};

const AddToCart = async (req, res) => {
  const { id } = req.params.id;

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

module.exports = { CreateProduct, AllProduct, AddToCart, GetAllCartData };

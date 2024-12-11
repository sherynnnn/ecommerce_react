// load the models
const Product = require("../models/product");

const getProducts = async (name, price, category) => {
  let filter = {};
  // if genre exists, pass it to the filter container
  if (name) {
    filter.name = name;
  }
  // if rating exist, pass it into the filter container
  if (price) {
    filter.rating = { $gt: price };
  }
  // if director exist, pass into the filter container
  if (category) {
    filter.category = category;
  }

  // apply filter in .find()
  const products = await Product.find(filter);
  return products;
};

// get one shows
const getProduct = async (id) => {
  const tvshow = await Tvshow.findById(id);
  return tvshow;
};

// add new product
const addNewProduct = async (name, description, price, category) => {
  // create new product
  const newProduct = new Product({
    name,
    description,
    price,
    category,
  });
  // save the new product into mongodb
  await newProduct.save();
  return newProduct;
};

// update product
const updateProduct = async (
  id,
  name,
  description,
  price,
  category
) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      name,
      description,
      price,
      category
    },
    {
      new: true, // return back the updated data
    }
  );
  return updatedProduct;
};

// delete product
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};

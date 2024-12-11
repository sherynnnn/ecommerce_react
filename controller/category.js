// load the models
const Product = require("../models/product");

// CRUD functions
// get all movies
const getCategory = async (category) => {
  // create a container for filter
  let filter = {};
  // if director exist, pass into the filter container
  if (category) {
    filter.category = category;
  }

  // apply filter in .find()
  const categories = await Category.find(filter);
  return categories;
};

// get one shows
const getCategories = async (id) => {
    const category = await Category.findById(id);
    return category;
  };

// add new movie
const addNewCategory = async (name, description, price, category) => {
    const newCategory = new Product({
        name,
        description,
        price,
        category,
    });
    await newCategory.save();
  return newCategory;
};

// update movie
const updateCategory = async (
    id,
    name,
    description,
    price,
    category
  ) => {
    const updatedCategory = await Category.findByIdAndUpdate(
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
    return updatedCategory;
  };

// delete product
const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
  };

// export all the functions
module.exports = {
  getCategories,
  getCategory,
  addNewCategory,
  updateCategory,
  deleteCategory,
};

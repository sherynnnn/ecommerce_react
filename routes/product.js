const express = require("express");
//create a router for movies
const router = express.Router();

const {
  getProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

router.get("/", async (req, res) => {
  try {
    const description = req.query.description;
    const category = req.query.category;
    // use the gettvshows from the controller to laod the movies data
    const products = await getProducts(description, category);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// get one show by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const products = await getProduct.findById(id);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// add product
// POST http://localhost:5555/tvshows
router.post("/", async (req, res) => {
  try {
    // retrieve the data from req.body
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;

    // check for error
    if (!name || !description || !price || !category) {
      return res.status(400).send({
        error: "Required data is missing",
      });
    }
    // pass in all the data to addNewMovie function
    const newProduct = await addNewProduct(name, description, price, category);
    res.status(200).send(newProduct);
  } catch (error) {
    // if there is an error, return the error code
    res.status(400).send({
      error: error._message,
    });
  }
});

// update product
// PUT http://localhost:5555/tvshows/9kdm40ikd93k300dkd3o
router.put("/:id", async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    // pass in the data into the updateMovie function
    const updatedProduct = await updateProduct(
      name,
      description,
      price,
      category
    );
    res.status(200).send(updatedProduct);
  } catch (error) {
    restart.status(400).send({
      error: error_message,
    });
  }
});

// delete product
// DELETE http://localhost:5555/tvshows/9kdm40ikd93k300dkd3o
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // trigger the deleteMovie function
    await deleteProduct(id);
    res.status(200).send({
      message: `Product with the provided id #${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

router.get('/by-category', async (req, res) => {
  const category = req.query.category;
  try {
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching products by category: ' + err.message });
  }
});

module.exports = router;




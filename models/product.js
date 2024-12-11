// schema for movies collection
const { Schema, model } = require("mongoose");

// setup the schema
const productsSchema = new Schema({
  name:{ String,require:true},
  description: {String, optional:true},
  price: {Number, require:true},
  category: {Number, require:true},
});

// convert the schema to a model
const Product  = model("Product" , productsSchema);

module.exports  =Product; 
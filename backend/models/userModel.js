const { Schema, model } = require("../connection");

// How we defining the structure of model

const mySchema = new Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

// here we creating Model
module.exports = model("users", mySchema);

const { Schema, model, Types } = require("../connection");

const mySchema = new Schema({
  name: String,
  email: String,
  owner: {type : Types.ObjectId, ref : 'users' },
  createdAt: Date,
});
module.exports = model("Subscriber", mySchema);

// Shoe Model
import mongoose from "mongoose";

const ShoeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000000000,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  picturePath: {
    type: String,
    default: "",
  },
});

const Shoe = mongoose.model("Shoe", ShoeSchema);
export default Shoe;

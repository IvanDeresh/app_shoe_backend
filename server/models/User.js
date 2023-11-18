// User Model
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  balance: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter a username"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter a username"],
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String, 
    required: true },
},{
    timestamps : true
});
const User = mongoose.model("User", userSchema);

export default User;

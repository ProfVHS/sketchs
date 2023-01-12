import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  email: String,
  username: String,
  firstname: String,
  lastname: String,
  pass: String,
  profileIcon: String,
});

const UserModel = mongoose.model("UserModel", postSchema);
export default UserModel;

import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

import UserModel from "./models/user.js";
import PostMessage from "./models/postMessage.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const { id: _id } = req.params;
  try {
    const user = await UserModel.findById(_id);

    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

app.get("/posts", async (req, res) => {
  const postMessages = await PostMessage.find().sort({ createdAt: "desc" });

  res.json(postMessages);
});

app.post("/posts", async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

//UPDATE POST
app.patch("/posts/:id", async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.send("No post with that id");

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
  } catch (err) {
    res.json({ message: err.message });
  }

  res.json(updatedPost);
});

app.delete("/posts/:id", async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.send("No post with that id");

  await PostMessage.findByIdAndDelete(_id);

  res.json({ message: "Post deleted successfully!" });
});

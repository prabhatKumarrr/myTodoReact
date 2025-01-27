require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/myTodo/user", userRouter);

async function main() {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log("Listening at Port: " + PORT);
  });
}
main();


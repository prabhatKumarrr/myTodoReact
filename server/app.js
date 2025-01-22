require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

//app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Pappu Halwai da Server"
  });
});


async function main() {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log("Listening at Port: " + PORT);
  });
}
main();


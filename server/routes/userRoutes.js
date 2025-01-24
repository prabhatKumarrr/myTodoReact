const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signUp", (req, res) => {
  res.json({
    msg: "Signed Up"
  });
});

module.exports = userRouter;

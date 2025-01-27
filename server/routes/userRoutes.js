const { Router } = require("express");
const userRouter = Router();
const passHash = require("./../middlewares/passwordHashing");
const { userModel } = require("./../db");

userRouter.post("/signUp", passHash, async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  try{
    await userModel.create({
      firstName,
      lastName,
      email,
      username,
      password,
      myTodo: []
    });

    res.json({
      status: true,
      msg: "Signed Up Successfully!"
    });
  }
  catch(error) {
    res.json({
      status: false,
      msg: "Duplicate Value: Email or Username already exists"
    });
  }
});

module.exports = userRouter;

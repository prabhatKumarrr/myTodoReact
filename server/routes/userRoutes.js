const { Router } = require("express");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const userRouter = Router();
const bcrypt = require("bcrypt");
const passHash = require("./../middlewares/passwordHashing");
const { auth } = require("./../middlewares/authentication");
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

userRouter.post("/login", async (req, res) => {
  const { user, pass } = req.body;

  const userMatch = await userModel.findOne({ username: user });
  const emailMatch = await userModel.findOne({ email: user });
  
  if(userMatch || emailMatch) {
    let userDb = userMatch ? userMatch: emailMatch;

    const hash = userDb.password;
    const result = await bcrypt.compare(pass, hash);

    if(!result) {
      res.json({
        status: false,
        msg: "Incorrect Password"
      })
    }
    else {
      const token = await jwt.sign({ userId: userDb._id }, JWT_KEY);

      res.json({
        status: true,
        token: token,
        msg: "Logged In!"
      })
    }
  }
  else {
    res.json({
      status: false,
      msg: "User Does not Exist"
    })
  }
});

userRouter.post("/entry", auth, async (req, res) => {
  const userId = req.body.userId;

  const userData = await userModel.findOne({ _id: userId });
  console.log(JSON.stringify(userData.myTodo));
 
  res.json({
    user: userData.username,
    myTodo: userData.myTodo
  })
});

userRouter.put("/updateTodos", auth, async (req, res) => {
  const userId = req.body.userId;
  const myTodos = req.body.myTodos;

  await userModel.updateOne({ _id: userId }, {
    myTodo: myTodos
  })

  res.json({
    msg: "updated Successfully!"
  })
})

module.exports = userRouter;

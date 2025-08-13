let express = require("express");
let {
  registerUser,
  loginUser,
  userCredit,
  paymentRazorpay,
} = require("../controller/controller.js");
const { authUser } = require("../middlewares/auth.js");

const userRouter = express.Router();

userRouter.post("/registerUser", registerUser);
userRouter.post("/loginUser", loginUser);
userRouter.get("/credit", authUser, userCredit);
userRouter.post("/pay-razor", authUser, paymentRazorpay);

module.exports = userRouter;

//http://localhost:3000/api/user/registerUser
//http://localhost:3000/api/user/loginUser

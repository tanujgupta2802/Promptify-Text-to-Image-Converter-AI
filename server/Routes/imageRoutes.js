let express = require("express");
let generateImage = require("../controller/imageController.js");
const { authUser } = require("../middlewares/auth.js");

const imageRouter = express.Router();
imageRouter.post("/generate-image", authUser, generateImage);

module.exports = imageRouter;

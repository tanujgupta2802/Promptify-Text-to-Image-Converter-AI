let axios = require("axios");
let userModel = require("../models/userModel");
let FormData = require("form-data");

const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId;

    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPCROP_API,
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    const newCreditBalance = user.creditBalance - 1;
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: newCreditBalance,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: newCreditBalance,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = generateImage;

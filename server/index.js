let express = require("express");
let app = express();
const cors = require("cors");
const connectDB = require("./config/mongoDB");

require("dotenv").config();

const userRouter = require("./Routes/userRoutes");
const imageRouter = require("./Routes/imageRoutes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
// app.use("/api/admin", require("./Routes/adminRoutes"));

app.get("/", (req, res) => {
  res.send({
    status: 1,
    msg: "API Calling",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();

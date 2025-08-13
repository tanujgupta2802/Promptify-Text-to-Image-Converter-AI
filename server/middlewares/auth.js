// let jwt = require("jsonwebtoken");

// const authUser = async (req, res, next) => {
//   const { token } = req.headers;

//   if (!token) {
//     return res.json({
//       success: false,
//       message: "Not authorized. login again",
//     });
//   }
//   try {
//     const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

//     if (tokenDecode) {
//       return (req.body.userId = tokenDecode.id);
//     } else {
//       res.json({
//         success: false,
//         message: "Not authorized. login again",
//       });
//     }
//     next();
//   } catch (err) {
//     console.log(err);
//     res.json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// module.exports = { authUser };
let jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not authorized. Login again.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId directly to the request object
    req.userId = tokenDecode.id;

    // Move to the next middleware or route handler
    next();
  } catch (err) {
    console.error(err); // Use console.error for errors
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token. Login again.",
    });
  }
};

module.exports = { authUser };

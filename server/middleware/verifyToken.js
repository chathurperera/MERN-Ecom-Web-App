const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err)
        res.status(403).json({ status: "error", error: "Invalid token!" });
      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ status: "error", error: "You are not authenticated" });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    res
      .status(403)
      .json({ status: "error", error: "Access denied, admin resource!" });
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ status: "error", error: "Not Allowed!" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};

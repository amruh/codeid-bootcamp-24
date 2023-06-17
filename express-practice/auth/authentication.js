const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../controllers/userController");

module.exports.userLogin = async (req, res) => {
  const { username, password } = req.body;
  const result = await user.findByUsername(username);
  if (!result) {
    res.status(404).send('credentials not found')
  } else {
    if (bcrypt.compareSync(password, result.password)) {
      const token = jwt.sign({ user_id: result.id }, process.env.SECRET_KEY, { expiresIn: "2h" });
      const data = {
        userData: result.username,
        accessToken: token,
      }
      return res.status(200).send(data);
    } else {
      res.status(401).send('wrong credentials')
    }
  }
};

module.exports.checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json("you are not authorized");
  } else {
    let bearer = req.headers.authorization;
    bearer = bearer.split(" ");
    const token = bearer[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.userAuth = decoded.user_id;
      return next();
    } catch (error) {
      return res.status(401).json("Invalid Token");
    }
  }
};

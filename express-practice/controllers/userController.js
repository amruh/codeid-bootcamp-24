const { users: Users } = require("../models");
const bcrypt = require("bcrypt");

module.exports.createUser = async (req, res, next) => {
  if (req.body.username == "")
    return res.status(401).send({ message: "Failed! Username is null" });
  if (req.body.password == "")
    return res.status(401).send({ message: "Failed! Password is null" });

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await Users.create({
      username: req.body.username,
      password: hashedPassword,
    });
    const { id, username } = user;
    req.user = { id, username };
    next();
  } catch (error) {
    return res.send(error);
  }
};

module.exports.findByUsername = async (username) => {
  const user = await Users.findOne({
    where: { username: username },
  }).catch((err) => {
    return err;
  });
  return user;
};

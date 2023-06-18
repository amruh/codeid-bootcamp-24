const { users: Users } = require("../models");

module.exports.getAll = async (_, res) => {
  const users = await Users.findAll();
  res.send(users);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findOne({ where: { id: id } });
  res.send(user);
};

module.exports.create = async (req, res) => {
  try {
    const user = await Users.create({
      userName: req.body.username,
    });
    res.send(user);
  } catch (error) {
    return res.send(error);
  }
};

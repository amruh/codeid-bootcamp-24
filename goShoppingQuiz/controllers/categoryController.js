const { categories: Categories } = require("../models");

module.exports.getAll = async (_, res) => {
  const category = await Categories.findAll();
  res.send(category);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const category = await Categories.findOne({ where: { id: id } });
  res.send(category);
};

module.exports.create = async (req, res) => {
  try {
    const category = await Categories.create({
      cateName: req.body.name,
    });
    res.send(category);
  } catch (error) {
    return res.send(error);
  }
};
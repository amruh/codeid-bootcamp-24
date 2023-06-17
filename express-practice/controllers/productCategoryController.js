const { productCategories: ProductCategories, products: Products } = require("../models");

module.exports.getAll = async (_, res) => {
  const productCtg = await ProductCategories.findAll({
    include: Products
  });
  res.send(productCtg);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const productCategory = await ProductCategories.findOne({
    where: { id: id },
    include: Products
  });
  res.send(productCategory);
};

module.exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const productCtg = await ProductCategories.create({
      name: name,
      description: description,
    });
    return res.send(productCtg);
  } catch (error) {
    res.send(error.errors);
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const productCtg = await ProductCategories.update(
      {
        name: name,
        description: description,
      },
      { returning: true, where: { id: id } }
    );
    return res.send(productCtg);
  } catch (error) {
    res.send(error.errors);
  }
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const productCtg = await ProductCategories.destroy({ where: { id: id } });
    return res.send(`deleted ${productCtg} row`);
}

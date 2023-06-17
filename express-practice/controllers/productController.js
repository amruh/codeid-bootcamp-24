const { products: Products } = require("../models");

module.exports.getAll = async (req, res) => {
  const products = await Products.findAll();
  res.send(products);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findOne({
    where: { id: id },
  });
  res.send(product);
};

module.exports.create = async (req, res) => {
  try {
    const { name, description, categoryId, quantity, price } = req.body;
    const product = await Products.create({
      name: name,
      description: description,
      category_id: categoryId,
      quantity: quantity,
      price: price,
      image: req.file.filename,
    });
    return res.send(product);
  } catch (error) {
    res.send(error.errors);
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, categoryId, quantity, price } = req.body;
    const product = await Products.update(
      {
        name: name,
        description: description,
        category_id: categoryId,
        quantity: quantity,
        price: price,
      },
      { returning: true, where: { id: id } }
    );
    return res.send(product);
  } catch (error) {
    res.send(error.errors);
  }
};

module.exports.updateQty = async (req, _, next) => {
  const { productId, quantity } = req.body;
  await Products.increment(
    {
      quantity: -quantity,
    },
    { where: { id: productId } }
  );
  return next();
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const product = await Products.destroy({ where: { id: id } });
  return res.send(`deleted ${product} row`);
};

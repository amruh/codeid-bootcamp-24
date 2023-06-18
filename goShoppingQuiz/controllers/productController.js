const { products: Products } = require("../models");

module.exports.getAll = async (_, res) => {
  const products = await Products.findAll();
  res.send(products);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findOne({ where: { id: id } });
  res.send(product);
};

module.exports.create = async (req, res) => {
  const { name, ctgId, stock, price } = req.body;
  try {
    const product = await Products.create({
      name: name,
      categoryId: ctgId,
      stock: stock,
      price: price,
    });
    res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

module.exports.decrementQty = async (req, res, next) => {
  const { prodId, quantity } = req.body;
  const prod = await Products.findOne({ where: { id: prodId } });

  if(prod.stock === 0 || prod.stock < quantity){
    return res.send(`You order ${quantity} ${prod.name}, but the ${prod.name} is only ${prod.stock} left`);
  } 

  await Products.increment({stock: -quantity}, {where:{id: prodId}})
  next()
};

module.exports.incrementQty = async (req, res, next) => {
  try {
    for (let i = 0; i < req.carts.length; i++) {
      const el = req.carts[i];
      await Products.increment({stock: el.qty}, {where:{id: el.productId}});
    }
    next()
  } catch (error) {
    res.send(error)
  }
};

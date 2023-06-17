const { orders: Orders } = require("../models");

module.exports.getAll = async (_, res) => {
  const orders = await Orders.findAll();
  res.send(orders);
};

module.exports.create = async (req, res, next) => {
  try {
    const { quantity, price } = req.body;
    const order = await Orders.create({
      totalprice: quantity * price,
      totalproduct: quantity,
      user_id: req.userAuth,
    });
    req.order = order;
    return next();
  } catch (error) {
    res.send(error.errors);
  }
};

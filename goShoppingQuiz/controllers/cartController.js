const { carts: Carts, carts } = require("../models");

module.exports.getCart = async (req, res) => {
  const { id } = req.params;
  const cart = await Carts.findAll({ where: { userId: id } });
  res.send(cart);
};

module.exports.addToCart = async (req, res) => {
  const { id } = req.params;
  const { prodId, quantity, price } = req.body;
  try {
    const cart = await Carts.create({
      productId: prodId,
      userId: id,
      qty: quantity,
      subTotal: quantity * price,
    });
    res.send(cart)
  } catch (error) {
    return res.send(error);
  }
};

module.exports.closeCart = async (req, res) => {
    const { id } = req.params;
    await Carts.destroy({where: {userId: id}});
    res.send(`Order ${req.order.orderNo} status is updated to ${req.order.status}`);
}
  
module.exports.cancelCart = async (req, res) => {
    const { id } = req.params;
    await Carts.destroy({where: {userId: id}});
    res.send(`Order ${req.order.orderNo} status is updated to ${req.order.status}`);
}

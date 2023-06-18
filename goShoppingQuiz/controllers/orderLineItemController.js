const { orderLineItems: OrderLineItems, carts: Carts } = require("../models");

module.exports.create = async (req, res) => {
  try {
    for (let i = 0; i < req.carts.length; i++) {
      await OrderLineItems.create({
        orderId: req.order.id,
        productId: req.carts[i].productId,
        qty: req.carts[i].qty,
        subTotal: req.carts[i].subTotal,
      });
    }
    res.send(req.order);
  } catch (error) {
    return res.send(error);
  }
};

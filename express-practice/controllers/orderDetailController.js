const { orderDetails: OrderDetails } = require("../models");

module.exports.create = async (req, res, next) => {
    try {
      const { productId, quantity } = req.body;
      for (let i = 0; i < quantity; i++) {
        await OrderDetails.create({
            order_id: req.order.id,
            product_id: productId,
            quantity: 1,
        });
      }
      return res.send(req.order);
    } catch (error) {
      res.send(error.errors);
    }
};
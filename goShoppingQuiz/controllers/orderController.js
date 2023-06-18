const { orders: Orders, carts: Carts } = require("../models");

const findOrder = async (id, res) => {
  const order = Orders.findOne({limit: 1, order: [['createdAt', 'DESC']]}, {where:{userId:id}});
  if(!order){
    return res.send('please order first');
  } 
  return order;
}

const getCartOrder = async (id) => {
  const carts = await Carts.findAll({ where: { userId: id } });
  return carts;
};

const getOrderNo = async () => {
  const order = await Orders.findAll({limit: 1, order: [['createdAt', 'DESC']]});
  if(order.length != 0) {
    let num = order[0].orderNo.split('-');
    let numPlus = parseInt(num[1]) + 1;
    return `P0-000${numPlus}`;
  }
  return 'PO-0001';
}

module.exports.createOrder = async (req, res, next) => {
  const { id } = req.params;

  const carts = await getCartOrder(id); 
  if(carts.length == 0) return res.send('cart is empty')
  const cart = carts.reduce((acc, cur) => ({total: acc.subTotal + cur.subTotal}));
  const orderNo = await getOrderNo();
  try {
    const order = await Orders.create({
      orderNo: orderNo,
      userId: id,
      totalPrice: cart.total,
      status: 'OPEN'
    });
    req.order = order;
    req.carts = carts;
    next()
  } catch (error) {
    return res.send(error);
  }
};

module.exports.closeOrder = async (req, res, next) => {
  const {id} = req.params
  try {
    const order = await findOrder(id, res);
    const updatedOrder = await Orders.update({status:'CLOSE'}, {returning: true, where:{id:order.id}}); 

    req.order = updatedOrder[1][0];
    next()
  } catch (error) {
    return res.send(error);
  }
}

module.exports.cancelOrder = async (req, res, next) => {
  const { id } = req.params
  try {
    const order = await findOrder(id, res);
    const updatedOrder = await Orders.update({status:'CANCELLED'}, {returning: true, where:{id:order.id}}); 
    const carts = await getCartOrder(id);
    if(carts.length == 0) return res.send('cart is empty');

    req.carts = carts;
    req.order = updatedOrder[1][0];
    next()
  } catch (error) {
    return res.send(error);
  }
}

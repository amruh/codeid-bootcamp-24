const { customers: Customers, users: Users, orders: Orders, orderDetails: OrderDetails} = require("../models");

module.exports.getOne = async (req, res) => {
  const customer = await Customers.findOne({
    where: { user_id: req.userAuth },
    include: Users
  });
  res.send(customer);
};

module.exports.customerOrdet = async (req, res) => {
  const customer = await Customers.findOne({
    where: { user_id: req.userAuth }
  });

  const orders = await Orders.findAll({
    where: { id: req.userAuth },
    include: OrderDetails
  });
  const data = {
    customer,
    orders
  }
  res.send(data);
}

module.exports.create = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const customer = await Customers.create({
      firstname: firstname,
      lastname: lastname,
      user_id: req.user.id,
    });

    const data = {
        message: 'success',
        user: req.user,
        custumer: customer,
    }
    return res.send(data);
  } catch (error) {
    res.send(error.errors);
  }
};

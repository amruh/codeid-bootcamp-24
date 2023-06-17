const config = require("../config/db");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, Sequelize);
db.productCategories = require("./productCategory")(sequelize, Sequelize);
db.products = require("./product")(sequelize, Sequelize);
db.customers = require("./customer")(sequelize, Sequelize);
db.orders = require("./order")(sequelize, Sequelize);
db.orderDetails = require("./orderDetail")(sequelize, Sequelize);

db.customers.belongsTo(db.users, {
  foreignKey: "user_id",
});

db.users.hasMany(db.orders, {
  foreignKey: "user_id",
});

db.orders.belongsTo(db.users, {
  foreignKey: "user_id",
});

db.orders.hasMany(db.orderDetails, {
  foreignKey: "order_id",
});

db.orderDetails.belongsTo(db.orders, {
    foreignKey: 'order_id',
})

db.productCategories.hasMany(db.products, {
    foreignKey: 'category_id',
})
db.products.belongsTo(db.productCategories, {
    foreignKey: 'category_id',
})

module.exports = db;

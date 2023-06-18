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

db.users = require('./user')(sequelize, Sequelize);
db.categories = require('./category')(sequelize, Sequelize);
db.products = require('./product')(sequelize, Sequelize);
db.carts = require('./cart')(sequelize, Sequelize);
db.orders = require('./order')(sequelize, Sequelize);
db.orderLineItems = require('./orderLineItem')(sequelize, Sequelize);


module.exports = db;

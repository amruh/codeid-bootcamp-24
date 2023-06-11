const config = require('../config/db');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.regions = require('../models/region')(sequelize, Sequelize);
db.countries = require('../models/country')(sequelize, Sequelize);
db.employees = require('../models/employee')(sequelize, Sequelize);
db.locations = require('../models/location')(sequelize, Sequelize);
db.jobs = require('../models/job')(sequelize, Sequelize);
db.jobHistory = require('../models/jobHistory')(sequelize, Sequelize);
db.departments = require('../models/department')(sequelize, Sequelize);

module.exports = db;
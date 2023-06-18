const config = {
  host: "localhost",
  user: "postgres",
  password: "password",
  db: "practice",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = config;

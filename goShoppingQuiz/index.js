const dotenv = require("dotenv");
const express = require("express");
const db = require("./models");

const users = require('./routes/users');
const categories = require('./routes/categories');
const products = require('./routes/products');
const carts = require('./routes/carts');
const orders = require('./routes/orders');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const port = process.env.PORT || 8080;

app.get('/', (_, res) => {
  res.send("it work");
});

app.use('/users', users);
app.use('/categories', categories);
app.use('/products', products);
app.use('/carts', carts);
app.use('/orders', orders);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

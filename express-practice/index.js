const dotenv = require("dotenv");
const express = require("express");
const db = require("./models");

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

const users = require('./routes/users');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const orders = require('./routes/orders');
const customers = require('./routes/customers');

const port = process.env.PORT || 8080;

app.get("/", (_, res) => {
  res.send("it work");
});

app.use('/auth', users);
app.use('/product-category', productCategories);
app.use('/products', products);
app.use('/orders', orders);
app.use('/customers', customers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

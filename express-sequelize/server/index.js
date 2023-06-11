const dotenv = require('dotenv')
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../models/model-index');

const regions = require('../routes/regions');
const countries = require('../routes/countries');
const employees = require('../routes/employees');
const locations = require('../routes/locations');
const jobs = require('../routes/jobs');
const jobHistories = require('../routes/jobHistories');
const departments = require('../routes/departments');

const app = express();
dotenv.config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.get('/', async (_, res) => {
    res.json({ message: 'Halo' });
});

// routes
app.use('/regions', regions);
app.use('/countries', countries);
app.use('/employees', employees);
app.use('/locations', locations);
app.use('/jobs', jobs);
app.use('/jobhistories', jobHistories);
app.use('/departments', departments);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
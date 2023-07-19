const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// routes
const regions = require('../routes/regions');
const locations = require('../routes/locations');
const jobs = require('../routes/jobs');
const jobHistory = require('../routes/jobHistory');
const employees = require('../routes/employees');
const departments = require('../routes/departments');
const countries = require('../routes/countries');

dotenv.config()
const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/', (_,res) => {
    res.send('homepages')
});

app.use('/regions', regions);
app.use('/locations', locations);
app.use('/jobs', jobs);
app.use('/jobhistory', jobHistory);
app.use('/employees', employees);
app.use('/departments', departments);
app.use('/countries', countries);

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});

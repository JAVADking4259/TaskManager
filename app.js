const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const serviceNames = fs.readdirSync('./src/services');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

serviceNames.forEach((serviceName) => {
    const service = require(`./src/services/${serviceName}/routes.js`);
    if (typeof service === 'function') {
        app.use('/api', service);
    } else {
        console.warn(`[WARN] Skipped ${serviceName}, not a valid Express router`);
    }
});

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('database connected successfully.');
    })
    .catch((err) => console.error('MongoDB connection error:', err));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});

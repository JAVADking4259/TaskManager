const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const ErrorHandler = require('./src/middlewares/ErrorHandlerMiddleWare');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const serviceNames = fs.readdirSync('./src/services');
serviceNames.forEach((serviceName) => {
    const service = require(`./src/services/${serviceName}/routes.js`);
    if (typeof service === 'function') {
        app.use('/api', service);
    } else {
        console.warn(`[WARN] Skipped ${serviceName}, not a valid Express router`);
    }
});

app.use(ErrorHandler);

module.exports = app;

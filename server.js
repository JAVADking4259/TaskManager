const app = require('./app');
const mongoose = require('mongoose');

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('database connected successfully.');

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`server running on port: ${port}`);
        });
    })
    .catch((err) => console.error('MongoDB connection error:', err));
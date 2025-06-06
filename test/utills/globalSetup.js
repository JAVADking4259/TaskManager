const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

module.exports = async () => {
    const mongod = await MongoMemoryServer.create();
    global.__MONGOURL__ = mongod.getUri();
    global.__MONGOSERVER__ = mongod;
};

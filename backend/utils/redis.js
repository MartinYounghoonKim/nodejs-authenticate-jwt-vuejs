const redis = require('redis');
const client = redis.createClient();
const authenticateUtils = require('./authenticate');

exports.storeRedis = (payload) => {
    const salt = authenticateUtils.generateSalt();
    console.log(salt);
    return client.set("string key", "string val", redis.print);
};

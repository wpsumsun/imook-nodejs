const redis = require('redis');
const { REDIS_CONF } = require('../conf/db');

const redisClient = redis.createClient(REDIS_CONF);
redisClient.on('error', (error) => {
	console.log(error);
})

module.exports = redisClient;
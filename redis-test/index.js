const redis = require('redis');

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.on('error', (error) => {
	console.log(error);
})
// 测试
redisClient.set('myname', 'mj', redis.print);
redisClient.get('myname', (err, val) => {
	if (err) {
		console.log(err);
		return;
	}
	// 退出
	console.log(val);
	redisClient.quit();
})

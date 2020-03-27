const env = process.env.NODE_ENV; //  环境参数
// MYSQL_CONF
let MYSQL_CONF;
if (env === "dev") {
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: '11111111',
		port: '3306',
		database: 'myblog',
	}
}
if (env === "production") {
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: '11111111',
		port: '3306',
		database: 'myblog',
	}
}
module.exports = {
	MYSQL_CONF
}
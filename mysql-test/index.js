const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '11111111',
	port: '3306',
	database: 'myblog',
})
// 开始连接
con.connect()
// 执行sql
const sql = 'select * from users;';
con.query(sql, (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
})
con.end();

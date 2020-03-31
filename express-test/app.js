const express = require('express');
// 本次app请求的实例
const app = express();

app.use((req, res, next) => {
	console.log("请求开始。。。", req.method, req.url);
	next();
})

app.use((req, res, next) => {
	// 假设在处理cookie
	req.cookies = {
		userId: 'abc123'
	}
	next()
})

app.use((req, res, next))



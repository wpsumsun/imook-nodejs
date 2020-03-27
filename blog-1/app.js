const querystring = require('querystring');

const getPostData = (req) => {
	const promise = new Promise((resolve, reject) => {
		if (req.method !== "POST") {
			resolve({});
			return;
		}

		if (req.headers['content-type'] !== 'application/json') {
			resolve({});
			return;
		}
		let postData = '';
		req.on('data', chunk => {
			postData += chunk.toString();
		})
		req.on('end', () => {
			if (!postData) {
				resolve({});
				return;
			}
			resolve(
				JSON.toString(postData)
			)
		})
	})
	return promise;
}

const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src//router/user');
const serverHandle = (req, res) => {
	res.setHeader('Content-type', 'application/json');
	// 获取path
	const path = req.url.split('?')[0];
	// 获取query
	req.query = querystring.parse(req.url.split('?')[1]);
	// 解析postData

	getPostData(req).then((postData) => {
		req.body = postData;
		// 处理blog的路由
		const blogData = handleBlogRouter(req, res);
		if (blogData) {
			res.end(
				JSON.stringify(blogData.data)
			)
		}
		// 处理用户的路由
		const userData = handleUserRouter(req, res);
		if (userData) {
			res.end(
				JSON.stringify(userData)
			)
			return
		}
	})

	res.end()
}
module.exports = serverHandle;
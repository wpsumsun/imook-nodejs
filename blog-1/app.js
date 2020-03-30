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

const SESSION_DATA = {};

const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src//router/user');
const serverHandle = (req, res) => {
	res.setHeader('Content-type', 'application/json');
	// 获取path
	const path = req.url.split('?')[0];
	// 获取query
	req.query = querystring.parse(req.url.split('?')[1]);
	// 解析cookie
	req.cookie = {};
	const cookieStr = req.headers.cookie || '';
	cookieStr.split(';').forEach((item) => {
		if (!item) {
			return;
		}
		const arr = item.split('=');
		const key = arr[0].trim();
		const value = arr[1].trim();
		req.cookie[key] = value;
	});
	console.log("req.cookie", req.cookie);
	// 解析session
	const userId = req.cookie.userid;
	if (userId) {
		if (!SESSION_DATA[userId]) {
			SESSION_DATA[userId] = {}
		}
	} else {
		userId = `${Date.now()}_${Math.random()}`;
		SESSION_DATA[userId] = {}
	}
	req.session = SESSION_DATA[userId]

	// 解析postData
	getPostData(req).then((postData) => {
		req.body = postData;
		// 处理blog的路由
		const blogResult = handleBlogRouter(req, res);
		if (blogResult) {
			blogResult.then(blogData => {
				res.end(
					JSON.stringify(blogData.data)
				)
			})
			return
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
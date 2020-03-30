const login = require('../controller/user');

const getCookieExpires = () => {
	const d = Date.now();
	d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
	console.log(" d.toGMTString is:", d.toGMTString());
	return d.toGMTString();
}

const handleRouterRouter = (req, res) => {
	const method = req.method;
	if (method === "GET" && path === "/api/user/login") {
		const { username, password } = req.body;
		const result = login(username, password)
		return result.then(data => {
			if (data.username) {
				// 操作cookie
				res.setHeader('Set-Cookie', `username=${username} httpOnly`)
				return new SuccessModel()
			}
			return new ErrorModel('登录失败')
		})
	}
	// 登录验证的测试
	// if (method === 'GET' && req.path === '/api/user/login-test') {
	//     if (req.session.username) {
	//         return Promise.resolve(
	//             new SuccessModel({
	//                 session: req.session
	//             })
	//         )
	//     }
	//     return Promise.resolve(
	//         new ErrorModel('尚未登录')
	//     )
	// }
}

module.exports = handleRouterRouter;
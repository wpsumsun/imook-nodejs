const handleRouterRouter = (req, res) => {
	const method = req.method;
	const url = req.url;
	const path = url.split('?')[0];

	if (method === "GET" && path === "/api/user/login") {
		return {
			msg: "这是用户登录的接口"
		}
	}
}

module.exports = handleRouterRouter;
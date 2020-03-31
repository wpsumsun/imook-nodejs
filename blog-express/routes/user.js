var express = require('express');
var router = express.Router();
const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', function (req, res, next) {
	const { username, password } = req.body
	console.log("username:", username);
	const result = login(username, password);
	console.log("result:", result);
	return result.then(data => {
		if (data.username) {
			// 设置 session 自动同步到redis
			req.session.username = data.username
			req.session.realname = data.realname

			res.json(
				new SuccessModel()
			)
			return
		}
		res.json(
			new ErrorModel('登录失败')
		)

	})
});

router.get('/login-test', function (req, res, next) {
	if (req.session.username) {
		res.json(
			new SuccessModel(username)
		)
	}

})

module.exports = router;


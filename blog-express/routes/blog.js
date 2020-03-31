var express = require('express');
var router = express.Router();
const {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginchecks')

router.get('/detail', (req, res, next) => {
	const result = getDetail(req.query.id);
	return result.then(detailData => {
		res.json(
			new SuccessModel(detailData)
		)
	})

})

router.get('/list', (req, res, next) => {
	let auther = req.query.authe || '';
	const keyword = req.query.keyword || '';
	if (req.query.isadmin) {
		if (req.session.username == null) {
			res.json(
				new ErrorModel("未登录")
			)
			return
		}
		auther = req.session.username
	}

	const result = getList(auther, keyword);
	return result.then(listData => {
		res.json(
			new SuccessModel(listData)
		)
	})
})

router.post('/new', loginCheck, (req, res, next) => {
	req.body.auther = req.session.username;

	const result = newBlog(req.body);
	return result.then((data) => {
		console.log("data:", data);
		res.json(
			new SuccessModel("success")
		)
	})
})

router.post('/update', loginCheck, (req, res, next) => {
	const result = updateBlog(req.query.id, req.body)
	return result.then(val => {
		if (val) {
			res.json(
				new SuccessModel()
			)
		} else {
			res.json(
				new ErrorModel('更新博客失败')
			)
		}
	})
})

router.post('/del', loginCheck, (req, res, next) => {
	const author = req.session.username
	const result = delBlog(req.query.id, author)
	return result.then(val => {
		if (val) {
			res.json(
				new SuccessModel()
			)
		} else {
			res.json(
				new ErrorModel('删除博客失败')
			)
		}
	})
})



module.exports = router;

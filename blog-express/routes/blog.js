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
// const loginCheck = require('../middleware/loginCheck')

router.get('/detail', function (req, res, next) {
	const result = getDetail(req.query.id);
	return result.then(detailData => {
		res.json(
			new SuccessModel(detailData)
		)
	})

})

router.get('/list', function (req, res, next) {
	let auther = req.query.authe || '';
	const keyword = req.query.keyword || '';

	const result = getList(auther, keyword);
	return result.then(listData => {
		res.json(
			new SuccessModel(listData)
		)
	})
})

// router.post('/new', function (req, res, next) {


// })

// router.post('/update', function (req, res, next) {


// })



module.exports = router;

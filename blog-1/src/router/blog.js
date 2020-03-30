const { getList, getDetail, newBlog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
	const method = req.method;
	const url = req.url;
	const path = req.url.split('?')[0];

	if (method === "GET" && path === "/api/blog/list") {
		const author = req.query.author || '';
		const keyword = req.query.keyword || '';
		const result = getList(author, keyword);
		return result.then((listdata) => {
			console.log("listdata:", listdata);
			return new SuccessModel(listdata);
		})
	}
	if (method === "GET" && path === "/api/blog/detail") {
		const id = req.query.id || '';
		const result = getDetail(id);
		return result.then((detailData) => {
			console.log("detailData:", detailData);
			return new SuccessModel(detailData);
		})


		return new SuccessModel(detailData);
	}
	if (method === "POST" && path === "/api/blog/new") {
		const newData = newBlog(req.body)
		return new SuccessModel(newData);
	}
	if (method === "POST" && path === "/api/blog/update") {
		const postData = req.body;
		return {
			msg: "这是更新博客的接口"
		}
	}
	if (method === "POST" && path === "/api/blog/del") {
		return {
			msg: "这是删除博客的接口"
		}
	}
}

module.exports = handleBlogRouter;
const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
	const sql = `select * from blogs where 1=1 `;
	console.log("author:", author, "keyword:", keyword);

	if (author) {
		sql += `and author='${author}' `;
		console.log("sql:", sql);
	}
	if (keyword) {
		sql += `and title like '%${keyword}%' `;
	}
	sql += `order by createtime desc`;

	// 返回promise
	console.log("sql:", sql);
	return exec(sql);
}

const getDetail = (id) => {
	return {
		id: 1,
		author: "达达前端detail",
		title: "前端css基础知识",
		content: "前端css基础知识的内容",
		createTime: 1546610491112
	}

}

const newBlog = (blogData = {}) => {
	return {
		id: 3,
		author: "三联周刊",
		title: "直播卖货，罗永浩的抖音野望",
		content: "直播卖货，罗永浩的抖音野望的内容",
		createTime: 1546610491112
	}
}

module.exports = {
	getList,
	getDetail,
	newBlog
};

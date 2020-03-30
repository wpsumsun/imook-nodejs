const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
	let sql = `select * from blogs where 1=1 `;
	if (author) {
		sql = sql + `and author='${author}' `;
	}
	if (keyword) {
		sql += `and title like '%${keyword}%'`;
	}
	// 返回promise
	return exec(sql);
}

const getDetail = (id) => {

	let sql = `select * from blogs where id='${id}'`;
	return exec(sql).then((row) => {
		return row[0];
	});
}

const newBlog = (blogData = {}) => {
	const { title, content, author } = blogData;
	const createtime = Date.now();
	const sql = `insert into blogs(title,content,createtime,author)values("${title}","${content}",${createtime},"${author}")`;
	return exec(sql).then((insertData) => {
		console.log("insertData:", insertData);
		return {
			id: insertData.insertId
		}
	});
}

module.exports = {
	getList,
	getDetail,
	newBlog
};

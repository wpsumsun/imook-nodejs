const getList = (author, keyword) => {
	return [
		{
			id: 1,
			author: "达达前端",
			title: "前端css基础知识",
			content: "前端css基础知识的内容",
			createTime: 1546610491112,
		},
		{
			id: 2,
			author: "虎嗅APP",
			title: "如何评价美国两万亿救市计划",
			content: "如何评价美国两万亿救市计的内容",
			createTime: 1546610491373,
		}
	]
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

module.exports = {
	getList,
	getDetail
};

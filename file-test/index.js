const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, 'data.log');

// 读取文件内容
fs.readFile(fileName, (err, data) => {
	if (err) {
		console.log(err);
		return
	}
	// data 是二进制，需要转换成字符串
	console.log(data.toString());
})

// 写入文件
const content = "市民胡女士还是小仙女\n";
const opt = {
	flag: 'a'
}
fs.writeFile(fileName, content, opt, (err) => {
	if (err) {
		console.log(err);
		return;
	}
})

// 判断文件是不是存在
fs.exists(fileName, (exists) => {
	console.log("exists:", exists);
})


process.stdin.pipe(process.stdout);

// 复制文件
const fs = require('fs');
const path = require('path');
const filename1 = path.resolve(__dirname, 'data.txt');
const filename2 = path.resolve(__dirname, 'databac.txt');


const readStream = fs.createReadStream(filename1);
const writeStream = fs.createWriteStream(filename2);

readStream.pipe(writeStream);
readStream.on('end', () => {
	console.log("copy done!");
})

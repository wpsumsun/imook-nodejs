const fs = require('fs');
const path = require('path');
function getFileContent(fileName) {
	const fullFileName = path.resolve(__dirname, 'file', fileName)
	const promise = new Promise((resolve, reject) => {
		fs.readFile(fullFileName, (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(JSON.parse(data));
		})
	})
	return promise;
}

getFileContent('a.json').then(aDate => {
	console.log(aDate);
	return getFileContent(aDate.next);
}).then((bData) => {
	console.log(bData);
	return getFileContent(bData.next);
}).then((cData) => {
	console.log(cData);
});
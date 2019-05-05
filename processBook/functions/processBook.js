const fs = require('fs');
const path = require('path');
const processSection = require('./processSection');

function processBook(bookName) {
	const bookPath = path.join(__dirname, '..', '..', 'books', 'separated-htmls', bookName);
	let filenames = fs.readdirSync(bookPath);
	let testFiles = [filenames[133]];
	let res = testFiles.map(i => processSection(i, bookPath));
	console.log(res);
}

module.exports = processBook;

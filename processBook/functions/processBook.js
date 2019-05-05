const fs = require('fs');
const processSection = require('./processSection');
const generateJSX = require('./generateJSX');
const { bookPath } = require('./bookInfo');

function processBook() {
	let filenames = fs.readdirSync(bookPath);
	let testFiles = [filenames[1], filenames[133], filenames[155]];
	let sections = testFiles.map(processSection);
	generateJSX(sections);
}

module.exports = processBook;

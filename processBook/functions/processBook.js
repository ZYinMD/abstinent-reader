const fs = require('fs');
const processSection = require('./processSection');
const generateJSX = require('./generateJSX');
const generateTOC = require('./generateTOC');
const { bookPath } = require('./bookInfo');

function processBook() {
	let filenames = fs.readdirSync(bookPath);
	let testFiles = [filenames[1], filenames[133], filenames[155]];
	let sections = testFiles.map(processSection);
	generateTOC(sections);
	sections.forEach(generateJSX);
}

module.exports = processBook;

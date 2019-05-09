const fs = require('fs');
const processSection = require('./processSection');
const writeJSON = require('./writeJSON');
const generateTOC = require('./generateTOC');
const { bookPath } = require('./bookInfo');

/**
 * This is the main function.
 * Each section (节) is one html, which will be converted to one json */
function processBook() {
	let filenames = fs.readdirSync(bookPath);
	let sections = filenames.map(processSection);
	generateTOC(sections);
	sections.forEach(writeJSON);
}

module.exports = processBook;

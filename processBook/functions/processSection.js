const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');
const { bookPath, chapterTag, sectionTag } = require('./bookInfo');

function processSection(filename) {
	const pathToFile = path.join(bookPath, filename);
	const fileContent = fs.readFileSync(pathToFile, { encoding: 'utf8' });

	let fileID = filename.replace('.html', '');

	let root = parse(fileContent);

	let chapterTitle = root.querySelector(chapterTag);
	chapterTitle = chapterTitle && chapterTitle.text;

	let title = root.querySelector(sectionTag);
	title = title && title.text;

	let body = root.querySelector('body').toString();
	let content = prune(body);

	return { fileID, chapterTitle, title, content };
}

function prune(htmlString) {
	return htmlString
		.replace('<body', '<article').replace('</body', '</article') // replace body with article
		.replace(/\s(class|id)="\w*"/g, '') // remove class and id names
		.replace(/(\r\n|\n)/g, ''); // remove line breaks
}

module.exports = processSection;

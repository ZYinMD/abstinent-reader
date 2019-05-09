const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');
const { bookPath, chapterTag, sectionTag } = require('./bookInfo');

/**
 * This function parses an html file, and return the parsed data.
 * An npm package 'node-html-parse is used.
 * Each html file contains some meta data, which we don't need. We just need the <body>. We eventually render the <body> as is, so the reading experiance is exactly the same as epub.
 * Per settings.json we look for tags like <h1> <h2> to use as chapter title or section title to generate our TOC. These tags are inside <body>, which we leave as is.
 */
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
		.replace('<body', '<article').replace('</body', '</article') // replace the <body> tag with <article>
		.replace(/\s(class|id)="\w*"/g, '') // remove class and id names (like class="calibre2")
		.replace(/(\r\n|\n)/g, ''); // remove line breaks (\n or \r\n)
}

module.exports = processSection;

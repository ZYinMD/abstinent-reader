const fs = require('fs');
const path = require('path');
const { outputPath } = require('./bookInfo');

function generateJSX({ fileID, chapterTitle, title, content }) {
	let chapter = {
		chapterTitle,
		title,
		content,
	};
	let chapterPath = path.join(outputPath, fileID + '.json');
	fs.writeFileSync(chapterPath, JSON.stringify(chapter, null, 2));
}

module.exports = generateJSX;

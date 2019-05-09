const fs = require('fs');
const path = require('path');
const { outputPath } = require('./bookInfo');

/**
 * Write already processed data to a json file. */
function writeJSON({ fileID, chapterTitle, title, content }) {
	let chapter = {
		chapterTitle,
		title,
		content,
	};
	let chapterPath = path.join(outputPath, fileID + '.json');
	fs.writeFileSync(chapterPath, JSON.stringify(chapter, null, 2));
}

module.exports = writeJSON;

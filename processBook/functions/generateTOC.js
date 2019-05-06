const fs = require('fs');
const { tocPath } = require('./bookInfo');

function generateTOC(sections) {
	let toc = sections.map(i => {
		let { fileID, chapterTitle, title } = i;
		return { fileID, chapterTitle, title };
	});
	fs.writeFileSync(tocPath, JSON.stringify(toc, null, 2));
}

module.exports = generateTOC;

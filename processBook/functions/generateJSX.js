const fs = require('fs');
const { outputPath } = require('./bookInfo');

function generateJSX(sections) {
	const map = {};
	sections.forEach(i => {
		map[i.fileID] = {
			chapterTitle: i.chapterTitle,
			title: i.title,
			content: i.content,
		};
	});
	console.log('map:\n    ', map);
	fs.writeFileSync(outputPath, JSON.stringify(map, null, 2));
}

module.exports = generateJSX;
// { fileID, chapterTitle, title, content }
// export default {
// 	[fileID]: {
// 		chapterTitle,
// 		title,
// 		content,
// 	},
// 	[fileID]: {
// 		chapterTitle,
// 		title,
// 		content,
// 	},
// };

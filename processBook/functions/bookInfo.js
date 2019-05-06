const path = require('path');
const settings = require('../settings.json');

const bookName = settings.inProcess;
const bookPath = path.join(__dirname, '..', '..', 'books', 'separated-htmls', bookName);
const outputPath = path.join(__dirname, '..', '..', 'src', 'books', bookName);
const tocPath = path.join(outputPath, 'TOC.json');
module.exports = { bookName, bookPath, ...settings[bookName], outputPath, tocPath };

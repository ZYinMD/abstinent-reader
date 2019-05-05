const path = require('path');
const settings = require('../settings.json');

const bookName = settings.inProcess;
const bookPath = path.join(__dirname, '..', '..', 'books', 'separated-htmls', bookName);
const outputPath = path.join(__dirname, '..', '..', 'src', 'books', bookName, bookName + '.json');
module.exports = { bookName, bookPath, ...settings[bookName], outputPath };

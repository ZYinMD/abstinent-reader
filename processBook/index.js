const { bookToProcess } = require('./settings.json');
const processBook = require('./functions/processBook');

processBook(bookToProcess);

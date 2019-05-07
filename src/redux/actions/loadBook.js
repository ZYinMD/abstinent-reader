import settings from '../../settings.json';
import c from '../constants';

const loadBook = () => async dispatch => {
	const { currentBook } = settings;
	dispatch({
		type: c.SET_BOOK_NAME,
		payload: currentBook,
	});
	let toc = await import(/* webpackMode: "eager" */`../../books/${currentBook}/TOC.json`);
	dispatch({
		type: c.UPDATE_TOC,
		payload: toc.default,
	});
};

export default loadBook;

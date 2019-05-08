import settings from '../../settings.json';
import c from '../constants';

const loadBook = () => async dispatch => {
	const { currentBook, abstainTime } = settings;
	dispatch({
		type: c.SET_BOOK_NAME,
		payload: currentBook,
	});
	dispatch({
		type: c.SET_ABSTAIN_TIME,
		payload: abstainTime,
	});
	let toc = await import(/* webpackMode: "eager" */`../../books/${currentBook}/TOC.json`);
	dispatch({
		type: c.UPDATE_TOC,
		payload: toc.default,
	});
};

export default loadBook;

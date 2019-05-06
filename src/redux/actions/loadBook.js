import settings from '../../settings.json';
import c from '../constants';

const loadBook = () => async dispatch => {
	const { currentlyReading } = settings;
	dispatch({
		type: c.UPDATE_CURRENTLY_READING,
		payload: currentlyReading,
	});
	let toc = await import(/* webpackMode: "eager" */`../../books/${currentlyReading}/TOC.json`);
	dispatch({
		type: c.UPDATE_TOC,
		payload: toc.default,
	});
};

export default loadBook;

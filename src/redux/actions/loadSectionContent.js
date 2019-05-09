import c from '../constants';
import { persist } from '../helpers';

const loadSectionContent = () => async (dispatch, getState) => {
	let loadTime = Date.now();
	let { bookName, toc } = getState();
	let { pointer } = toc;
	let { fileID } = toc.toc[pointer];
	let fileName = fileID + '.json';
	let { content } = await import(/* webpackPrefetch: true  */`../../books/${bookName}/${fileName}`);
	dispatch({
		type: c.LOAD_SECTION_CONTENT,
		payload: { content, loadTime },
	});
	persist();
};

export default loadSectionContent;

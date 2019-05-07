import c from '../constants';

const loadSectionContent = () => async (dispatch, getState) => {
	let { bookName, toc } = getState();
	let { pointer } = toc;
	let { fileID } = toc.toc[pointer];
	let fileName = fileID + '.json';
	let { content } = await import(/* webpackPrefetch: true  */`../../books/${bookName}/${fileName}`);
	dispatch({
		type: c.LOAD_SECTION_CONTENT,
		payload: content,
	});
};

export default loadSectionContent;

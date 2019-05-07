import c from '../constants';
import loadSectionContent from './loadSectionContent';

const openSection = index => dispatch => {
	dispatch({
		type: c.OPEN_SECTION,
		payload: index,
	});
	dispatch(loadSectionContent());
};

export default openSection;

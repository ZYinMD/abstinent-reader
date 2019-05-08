import c from '../constants';
import loadSectionContent from './loadSectionContent';
import persist from '../persist';

const openSection = index => dispatch => {
	let action = {
		type: c.OPEN_SECTION,
		payload: index,
	};
	dispatch(action);
	dispatch(loadSectionContent());
	persist();
};

export default openSection;

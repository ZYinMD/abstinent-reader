import c from '../constants';
import loadSectionContent from './loadSectionContent';
import { persist, abstaining } from '../helpers';

const openSection = index => dispatch => {
	if (abstaining()) return;
	dispatch({
		type: c.OPEN_SECTION,
		payload: index,
	});
	dispatch(loadSectionContent());
	persist();
};

export default openSection;

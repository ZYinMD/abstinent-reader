import c from '../constants';
import loadSectionContent from './loadSectionContent';
import { persist, abstaining } from '../helpers';

const openSection = index => dispatch => {
	if (abstaining()) return;
	dispatch({
		type: c.CLICK_SECTION_FROM_TOC,
		payload: index,
	});
	dispatch(loadSectionContent());
	persist();
};

export default openSection;

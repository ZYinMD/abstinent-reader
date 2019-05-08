import c from '../constants';
import loadSectionContent from './loadSectionContent';
import { persist, abstaining } from '../helpers';

const nextSection = () => dispatch => {
	if (abstaining()) return;
	dispatch({ type: c.TO_NEXT_SECTION });
	dispatch(loadSectionContent());
	persist();
};

export default nextSection;

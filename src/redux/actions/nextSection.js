import c from '../constants';
import loadSectionContent from './loadSectionContent';
import { abstaining } from '../helpers';

const nextSection = () => dispatch => {
	if (abstaining()) return;
	dispatch({ type: c.TO_NEXT_SECTION });
	dispatch(loadSectionContent());
};

export default nextSection;

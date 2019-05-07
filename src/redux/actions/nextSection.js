import c from '../constants';
import loadSectionContent from './loadSectionContent';

const nextSection = () => dispatch => {
	dispatch({ type: c.TO_NEXT_SECTION });
	dispatch(loadSectionContent());
};

export default nextSection;

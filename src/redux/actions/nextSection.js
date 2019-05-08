import c from '../constants';
import loadSectionContent from './loadSectionContent';
import persist from '../persist';

const nextSection = () => dispatch => {
	let action = { type: c.TO_NEXT_SECTION };
	dispatch(action);
	dispatch(loadSectionContent());
	persist();
};

export default nextSection;

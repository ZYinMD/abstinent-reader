import c from '../constants';
import persist from '../persist';

const backToTOC = () => dispatch => {
	dispatch({ type: c.BACK_TO_TOC });
	persist();
};

export default backToTOC;

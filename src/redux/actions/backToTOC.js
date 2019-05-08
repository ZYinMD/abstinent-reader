import c from '../constants';
import { persist } from '../helpers';

const backToTOC = () => dispatch => {
	dispatch({ type: c.BACK_TO_TOC });
	persist();
};

export default backToTOC;

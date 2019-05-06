import c from '../constants';

export default function changeView(view) {
	return {
		type: c.CHANGE_VIEW,
		payload: view,
	};
}

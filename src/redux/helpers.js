import store from './store';

export function persist() {
	let state = store.getState();
	localStorage.setItem('state', JSON.stringify(state));
}

export function abstaining() {
	let { lastLoadTime, abstainTime } = store.getState();
	let now = Date.now();
	return (now - lastLoadTime < 1000 * 60 * abstainTime);
}

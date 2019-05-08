import store from './store';

export default function persist() {
	let state = store.getState();
	localStorage.setItem('state', JSON.stringify(state));
}

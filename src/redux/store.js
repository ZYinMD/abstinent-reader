import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducers';

let persistedState = localStorage.getItem('state');
let options;
if (persistedState) {
	options = {
		reducer: rootReducer,
		preloadedState: JSON.parse(persistedState),
	};
} else {
	options = { reducer: rootReducer };
}

const store = configureStore(options);

export default store;

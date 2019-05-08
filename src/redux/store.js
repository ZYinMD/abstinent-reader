import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducers';

let persistedState = localStorage.getItem('state');

const store = configureStore({
	reducer: rootReducer,
	preloadedState: JSON.parse(persistedState),
});

export default store;

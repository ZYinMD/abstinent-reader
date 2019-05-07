import { createReducer } from 'redux-starter-kit';
import c from '../constants';

export const bookName = createReducer(
	'',
	{ [c.SET_BOOK_NAME]: (state, { payload }) => payload },
);

export const currentSectionInnerHTML = createReducer(
	'',
	{ [c.LOAD_SECTION_CONTENT]: (state, { payload }) => payload },
);

export const toc = createReducer({
	toc: [],
	pointer: 0,
}, {
	[c.UPDATE_TOC]: (state, { payload }) => { state.toc = payload; },
	[c.OPEN_SECTION]: (state, { payload }) => { state.pointer = payload; },
	[c.TO_NEXT_SECTION]: state => { state.pointer += 1; },
});

export const currentView = createReducer('toc', {
	[c.CHANGE_VIEW]: (state, { payload }) => payload,
	[c.OPEN_SECTION]: state => 'section',
	[c.BACK_TO_TOC]: state => 'toc',
});

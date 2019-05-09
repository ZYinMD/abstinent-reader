import { createReducer } from 'redux-starter-kit';
import c from '../constants';

export const bookName = createReducer(
	'',
	{ [c.SET_BOOK_NAME]: (state, { payload }) => payload },
);

export const currentSectionInnerHTML = createReducer(
	'',
	{ [c.LOAD_SECTION_CONTENT]: (state, { payload }) => payload.content },
);

export const toc = createReducer({
	toc: [],
	pointer: 0,
}, {
	[c.UPDATE_TOC]: (state, { payload }) => { state.toc = payload; },
	[c.CLICK_SECTION_FROM_TOC]: (state, { payload }) => { state.pointer = payload; },
	[c.TO_NEXT_SECTION]: state => { state.pointer += 1; },
});

export const currentView = createReducer('toc', {
	[c.CLICK_SECTION_FROM_TOC]: state => 'section',
	[c.BACK_TO_TOC]: state => 'toc',
});

export const lastLoadTime = createReducer(
	0,
	{ [c.LOAD_SECTION_CONTENT]: (state, { payload }) => payload.loadTime },
);

export const abstainTime = createReducer(
	0,
	{ [c.SET_ABSTAIN_TIME]: (state, { payload }) => payload },
);

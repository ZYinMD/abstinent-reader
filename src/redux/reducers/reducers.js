import { createReducer } from 'redux-starter-kit';
import c from '../constants';

export const currentlyReading = createReducer('', { [c.UPDATE_CURRENTLY_READING]: (state, { payload }) => payload });

export const toc = createReducer([], { [c.UPDATE_TOC]: (state, { payload }) => payload });

export const currentView = createReducer('toc', { [c.CHANGE_VIEW]: (state, { payload }) => payload });

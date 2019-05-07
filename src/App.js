import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadBook from './redux/actions/loadBook';
import TOC from './components/TOC/TOC';
import Section from './components/Section/Section';

function App({ loadBook, currentView }) {
	useEffect(() => { loadBook(); }, [loadBook]);
	switch (currentView) {
	case 'toc':
	default:
		return <TOC />;
	case 'section':
		return <Section />;
	}
}

export default connect(
	({ currentView }) => ({ currentView }),
	{ loadBook },
)(App);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TOC from './components/TOC/TOC';
import loadBook from './redux/actions/loadBook';

function App({ loadBook, currentView }) {
	useEffect(() => { loadBook(); }, [loadBook]);
	return (
		<TOC />
	);
}

export default connect(
	({ currentView }) => ({ currentView }),
	{ loadBook },
)(App);

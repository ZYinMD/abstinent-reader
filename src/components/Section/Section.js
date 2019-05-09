/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './SectionCSS.js';
import nextSection from '../../redux/actions/nextSection';
import backToTOC from '../../redux/actions/backToTOC';

function Section({ innerHTML, nextSection, backToTOC }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	console.log('innerHTML:\n    ', innerHTML);
	return (
		<section css={styles}>
			<nav onClick={backToTOC}>{'< Back To TOC'}</nav>
			<div dangerouslySetInnerHTML={{ __html: innerHTML }} />
			<nav className="next" onClick={nextSection}>{'Next Section >'}</nav>
		</section>
	);
}

export default connect(
	({ currentSectionInnerHTML }) => ({ innerHTML: currentSectionInnerHTML }),
	{ nextSection, backToTOC },
)(Section);

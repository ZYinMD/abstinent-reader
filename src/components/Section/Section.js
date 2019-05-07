/** @jsx jsx */
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import styles from './SectionCSS.js';
import nextSection from '../../redux/actions/nextSection';
import backToTOC from '../../redux/actions/backToTOC';

function Section({ innerHTML, nextSection, backToTOC }) {
	return (
		<section css={styles}>
			<nav onClick={backToTOC}>Back To TOC</nav>
			<div dangerouslySetInnerHTML={{ __html: innerHTML }} />
			<nav className="next" onClick={nextSection}>Next Section</nav>
		</section>
	);
}

export default connect(
	({ currentSectionInnerHTML }) => ({ innerHTML: currentSectionInnerHTML }),
	{ nextSection, backToTOC },
)(Section);

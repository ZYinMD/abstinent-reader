/** @jsx jsx */
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import styles from './TOCCSS';
import openSection from '../../redux/actions/openSection';

function TOC({ toc, openSection }) {
	return (
		<ol css={styles}>
			{toc.map(toEntry)}
		</ol>
	);

	function toEntry({ fileID, chapterTitle, title }, index) {
		const entry = (
			<li onClick={() => { openSection(index); }} key={index}>
				{title || fileID}
			</li>
		);
		if (chapterTitle) {
			return (
				<div key={index}>
					<li className="chapter">{chapterTitle}</li>
					{entry}
				</div>
			);
		} else return entry;
	}
}

export default connect(
	({ toc }) => ({ toc: toc.toc }),
	{ openSection },
)(TOC);

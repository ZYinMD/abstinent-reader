import { css } from '@emotion/core';

const styles = css`
	list-style: none;
	padding: 0;
	li {
		padding: 10px;
		color: #333;
		font-size: 20px;
		cursor: pointer;
	}
	li:active {
		color: DarkGoldenrod;
	}
	.chapter {
		font-size: 30px;
		font-weight: 500;
	}
`;

export default styles;

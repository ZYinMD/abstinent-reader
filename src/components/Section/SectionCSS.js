import { css } from '@emotion/core';

const styles = css`
display: flex;
flex-direction: column;
font-size: 20px;
font-weight: 100;
line-height: 180%;
nav {
	font-family: sans-serif;
	font-size: 25px;
	cursor: pointer;
	width: max-content;
}

nav:active {
	color: DarkGoldenrod;
}

.next {
	align-self: flex-end;
}
`;

export default styles;

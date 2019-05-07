import { css } from '@emotion/core';

const styles = css`
display: flex;
flex-direction: column;
font-size: 22px;
line-height: 150%;
nav {
	color: pink;
	font-family: sans-serif;
	font-size: 25px;
	cursor: pointer;
	width: max-content;
}

nav:active {
	background-color: silver;
}

.next {
	align-self: flex-end;
}
`;

export default styles;

import styled from 'styled-components';

const HeaderWrapper = styled.nav`

	display:         flex;
	align-items:     center;
	justify-content: flex-end;

	width:      100%;
	padding:    10px 5px;
	box-sizing: border-box;

	${({ noneHeader }) => noneHeader && `
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	`}

`;

export default HeaderWrapper;
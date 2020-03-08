import styled from 'styled-components';

const Menu = styled.div`

	display:         flex;

	justify-content: center;

	width: 50%;
	height: 100%;

	position: fixed;
	top: 0;
	right: 0;
	background-color: rgba(0,0,0,0.6);

	padding: 10px;
	/*margin-right: 10px;*/
	ul {
		width: 100%;
		margin-top: 30px;
		padding: 10px;
		list-style: none;
		box-sizing: border-box;
		color: #fff;
		font-weight: 700;
		img {
			width: 100%;
		}
	}

	h3 {
		margin-bottom: 10px;
	}

	${({ show }) => !show && `
		display: none;
	`}

`;

export default Menu;
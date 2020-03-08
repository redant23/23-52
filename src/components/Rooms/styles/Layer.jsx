import styled from 'styled-components';

const Layer = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	left: 0;
	top: 0;
	border-radius: 4%;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.4);
	z-index: 5;
	font-size: 36px;
	color: #fff;

`;

export default Layer;
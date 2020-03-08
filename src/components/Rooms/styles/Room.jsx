import styled from 'styled-components';

const Room = styled.div`

  display: flex;
  flex-direction: column;

  position: relative;
  width:     100%;
  max-width: 300px;
  height: 320px;
  border-radius: 4%;
  background: url(${({ url }) => url}) center center;
  background-size: 120%;
  color: #C2C2C2;
  font-weight: 700;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;

`;

export default Room;
import styled from 'styled-components';

const Wrapper = styled.div`

  display:         flex;
  flex-direction:  column;
  align-items:     center;
  justify-content: center;

  position: fixed;

  width: 100%;
  height: 100%;
  /*background: url(${({ coverUrl }) => coverUrl}) center no-repeat;*/
  background-color: #979797;
  background-size: 150%;
  color: #B60100;

`;

export default Wrapper;
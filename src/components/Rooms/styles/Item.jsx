import styled from 'styled-components';

const Item = styled.div`

  display: flex;
  width:   100%;
  max-width: 300px;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 100px;
  }

`;

export default Item;
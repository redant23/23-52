import styled from 'styled-components';

const SForm = styled.form`

  display: flex;
  flex-direction: row;

  padding: 0px 20px 0 5px;
  box-sizing: border-box;

  input, button {
    font-size: 16px;
    padding: 4px 6px;
    border-radius: 4px;
  }

  input {
    flex: 0 0 auto;
    height: 40px;
    width: 80%;
    border: 1px solid rgba(200,200,200, 80%);
    background-color: rgba(255,255,255, 80%);
    margin-right: 10px;
  }

  button {
    flex: 1 0 auto;
    width: auto;
    height: 50px;
    min-width: 5%;
    background-color: #979797;
    color: white;
  }

`;

export default SForm;
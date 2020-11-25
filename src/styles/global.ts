import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    --webkit-font-smoothing: antialised;
  }

  body, input, button{
    font: 20px 'Source Sans Pro', sans-serif;
    color: #170C3A;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    width: 100%;
    cursor: pointer;
    padding: 13px 26px;
    font-size: 18px;
    text-align: center;
    background: #365DF0;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    font-weight: 600;

    &:hover {
      background: #2F55CC;
    }

    &:active {
      background: #244AA8;
    }

    &:disabled {
      color: #E1E7FD;
      background: #B9C6FA;
    }
  }

  input[type='checkbox']::before {
    content: ' ';
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: #f5f4f6;
    border: 1px solid #dedce1;
  }
  input[type='checkbox']:checked::before {
    background-color: #365df0;
    border-color: #365df0;
  }
  input[type='checkbox']:checked::after {
    content: ' ';
    width: 0.4rem;
    height: 0.6rem;
    margin-left: 0.25rem;
    border-color: #f2f2f2;
    border-style: solid;
    border-width: 0 2px 2px 0;
    position: absolute;
    transform: rotate(45deg);
  }
`;

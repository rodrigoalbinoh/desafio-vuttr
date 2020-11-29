import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 30px 30px 10px 30px;
  strong {
    font-size: 30px;
    font-family: 'Roboto-slab', sans-serif;
    margin-left: 10px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
  button {
    border: none;
    background: none;
  }
  @media only screen and (max-width: 425px) {
    strong {
      font-size: 25px;
    }
  }
`;

export const Form = styled(Unform)`
  padding: 15px 50px 50px 50px;
  div.column-1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
    div.column-2 {
      input {
        max-width: 137px;
      }
    }
    @media only screen and (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  footer {
    margin-top: 30px;
  }

  div.column-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    div.column-2 {
      input {
        max-width: 137px;
      }
    }
    @media only screen and (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  footer {
    margin-top: 30px;
    text-align: right;

    button {
      width: initial;
    }
  }
`;

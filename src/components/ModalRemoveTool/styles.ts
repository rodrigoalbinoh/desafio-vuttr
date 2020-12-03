import styled from 'styled-components';

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 30px 30px 10px 30px;
  strong {
    font-size: 30px;
    font-family: 'Source Sans Pro', sans-serif;
    margin-left: 10px;
  }
  svg {
    width: 15px;
    height: 15px;

    path {
      stroke: #170c3a;
    }
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

export const Content = styled.div`
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

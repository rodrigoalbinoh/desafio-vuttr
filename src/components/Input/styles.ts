import styled, { css } from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  margin-top: 10px;

  > label {
    color: #170c3a;
    font-size: 20px;
    margin-bottom: 20px;
  }

  span.error {
    float: right;
    color: #f95e5a;
    font-size: 18px;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: #f5f4f6;
  border-radius: 5px;
  padding: 13px 21px;
  width: 100%;
  border: 1px solid #ebeaed;
  color: #b1adb9;
  display: flex;
  align-items: center;
  margin-top: 10px;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      background-color: #feefee;
      color: #f95e5a;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #dedce1;
      background-color: #ebeaed;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #170c3a;
    `}
  input {
    color: #170c3a;
    background: transparent;
    flex: 1;
    border: 0;
    font-size: 20px;
    &::placeholder {
      color: #b1adb9;
      ${(props) =>
        props.isErrored &&
        css`
          color: #f95e5a;
        `}
      ${(props) =>
        props.isFocused &&
        css`
          color: #b1adb9;
        `}
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
`;

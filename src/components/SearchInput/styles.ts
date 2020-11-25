import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f4f6;
  border-radius: 10px;
  padding: 13px 21px;
  width: 100%;
  border: 1px solid #ebeaed;
  color: #b1adb9;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      /* color: #ff9000; */
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
    &::placeholder {
      color: #b1adb9;
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  img {
    width: 15px;
    margin-right: 16px;
  }
`;

export const Error = styled.span`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

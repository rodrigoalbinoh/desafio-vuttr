import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTitleVariations = {
  info: css`
    color: #8f8a9b;
  `,
  success: css`
    color: #ffffff;
  `,
  error: css`
    color: #c53030;
  `,
};

const toastTypeVariations = {
  info: css`
    background: #ffffff;
    color: #8f8a9b;
  `,
  success: css`
    background: #12db89;
    color: #ffffff;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001a;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    strong {
      ${(props) => toastTitleVariations[props.type || 'info']}
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button.toast--close {
    width: initial;
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info' | 'warning' | 'neutral';
  hasDescription: number;
}

const toastTitleVariations = {
  neutral: css`
    color: #8f8a9b;
  `,
  warning: css`
    color: #ffffff;
  `,
  info: css`
    color: #ffffff;
  `,
  success: css`
    color: #ffffff;
  `,
  error: css`
    color: #ffffff;
  `,
};

const toastTypeVariations = {
  neutral: css`
    background: #ffffff;

    div {
      p {
        color: #8f8a9b;
      }
    }
  `,
  warning: css`
    background: #ffbb43;
    div {
      p {
        color: #ffffff;
      }
    }
  `,
  info: css`
    background: #b1adb9;
    div {
      p {
        color: #ffffff;
      }
    }
  `,
  success: css`
    background: #12db89;
    div {
      p {
        color: #ffffff;
      }
    }
  `,
  error: css`
    background: #f95e5a;
    div {
      p {
        color: #ffffff;
      }
    }
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 489px;

  position: relative;
  padding: 31px;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001a;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
    opacity: 1;
    width: 25px;
    height: 25px;

    path {
      fill: #fff;
    }
  }

  div {
    flex: 1;

    strong {
      font-size: 20px;
      letter-spacing: 0.4px;
      ${(props) => toastTitleVariations[props.type || 'info']}
    }

    p {
      margin-top: 4px;
      font-size: 18px;
      opacity: 1;
      letter-spacing: 0.36px;
      line-height: 20px;
    }
  }

  button.toast--close {
    position: absolute;
    right: 31px;
    top: 31px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    width: 12px;
    height: 12px;
    padding: 0;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
        width: 12px;
        height: 12px;
      }
    `}
`;

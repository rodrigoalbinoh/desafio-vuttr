import styled, { css } from 'styled-components';

interface ButtonProps {
  level?: 'primary' | 'secondary' | 'terciary' | 'quartiary';
  variant?: 'neutral' | 'danger' | 'success';
}

const buttonVariations = {
  primary: {
    danger: css`
      background: #f95e5a;
      color: #ffffff;

      &:hover {
        background-color: #cc4c4c;
      }

      &:focus {
        background-color: #a53f3f;
      }

      &:disabled {
        background-color: #fcaeac;
        color: #feefee;
      }
    `,
    success: css`
      background: #0dcb7d;
      color: #ffffff;

      &:hover {
        background-color: #10b26c;
      }

      &:focus {
        background-color: #0e995d;
      }

      &:disabled {
        background-color: #88edc4;
        color: #e7fbf3;
      }
    `,
    neutral: css`
      background: #365df0;
      color: #ffffff;

      &:hover {
        background-color: #2f55cc;
      }

      &:focus {
        background-color: #244aa8;
      }

      &:disabled {
        background-color: #b9c6fa;
        color: #e1e7fd;
      }
    `,
  },
  secondary: {
    danger: css`
      background: #feefee;
      color: #f95e5a;

      &:hover {
        background-color: #fcd7d6;
      }

      &:focus {
        background-color: #fcc6c5;
      }

      &:disabled {
        background-color: #feefee;
        color: #fcaeac;
      }
    `,
    success: css`
      background: #e7fbf3;
      color: #12db89;

      &:hover {
        background-color: #cff9e6;
      }

      &:focus {
        background-color: #b7f7d8;
      }

      &:disabled {
        background-color: #e7fbf3;
        color: #88edc4;
      }
    `,
    neutral: css`
      background: #e1e7fd;
      color: #365df0;

      &:hover {
        background-color: #cad6fc;
      }

      &:focus {
        background-color: #b9c6fa;
      }

      &:disabled {
        background-color: #e1e7fd;
        color: #b9c6fa;
      }
    `,
  },
  terciary: {
    danger: css`
      background: #feefee;
      color: #f95e5a;

      &:hover {
        background-color: #fcd7d6;
      }

      &:focus {
        background-color: #fcc6c5;
      }

      &:disabled {
        background-color: #feefee;
        color: #fcaeac;
      }
    `,
    success: css`
      background: #e7fbf3;
      color: #12db89;

      &:hover {
        background-color: #cff9e6;
      }

      &:focus {
        background-color: #b7f7d8;
      }

      &:disabled {
        background-color: #e7fbf3;
        color: #88edc4;
      }
    `,
    neutral: css`
      background: #e1e7fd;
      color: #365df0;

      &:hover {
        background-color: #cad6fc;
      }

      &:focus {
        background-color: #b9c6fa;
      }

      &:disabled {
        background-color: #e1e7fd;
        color: #b9c6fa;
      }
    `,
  },
  quartiary: {
    danger: css`
      color: #f95e5a;

      &:hover {
        color: #f95e5a;
      }

      &:focus {
        color: #f95e5a;
      }

      &:disabled {
        color: #fcaeac;
      }
    `,
    success: css`
      color: #12db89;

      &:hover {
        color: #12db89;
      }

      &:focus {
        color: #12db89;
      }

      &:disabled {
        color: #88edc4;
      }
    `,
    neutral: css`
      color: #365df0;

      &:hover {
        color: #365df0;
      }

      &:focus {
        color: #365df0;
      }

      &:disabled {
        color: #9aaef7;
      }
    `,
  },
};

export const CustomButton = styled.button<ButtonProps>`
  width: 100%;
  cursor: pointer;
  padding: 13px 26px;
  font-size: 18px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  background: transparent;
  ${(props) =>
    buttonVariations[props.level || 'primary'][props.variant || 'danger']}
`;

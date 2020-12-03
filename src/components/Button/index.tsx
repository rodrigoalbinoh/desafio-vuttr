import React, { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  level: 'primary' | 'secondary' | 'terciary' | 'quartiary';
  variant: 'neutral' | 'danger' | 'success';
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <CustomButton type="button" {...rest}>
      {children}
    </CustomButton>
  );
};

export default Button;

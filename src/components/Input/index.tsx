import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';
import { Container, InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, required, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && (
        <label htmlFor={fieldName}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <InputContainer
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          required={!!required}
          {...rest}
        />
      </InputContainer>

      {error && <span className="error">{error}</span>}
    </Container>
  );
};

export default Input;

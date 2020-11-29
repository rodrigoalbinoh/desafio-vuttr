import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  TextareaHTMLAttributes,
} from 'react';

import { useField } from '@unform/core';
import { Container, InputContainer } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

const TextArea: React.FC<InputProps> = ({ name, label, required, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
        <textarea
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

export default TextArea;
